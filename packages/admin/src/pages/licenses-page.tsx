import { useCallback, useEffect, useState } from "react"
import { api } from "@/api/trpc-api"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Plus, Trash2, Copy, Check, RefreshCw } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"

type License = {
  id: number
  licenseKey: string
  status: "available" | "active" | "disabled"
  createdAt: string | null
  activatedAt: string | null
}

function statusVariant(status: License["status"]) {
  switch (status) {
    case "available":
      return "outline" as const
    case "active":
      return "default" as const
    case "disabled":
      return "destructive" as const
  }
}

function generateLicenseKey() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"
  const segments = 4
  const segmentLength = 5
  const parts: string[] = []
  for (let i = 0; i < segments; i++) {
    let part = ""
    for (let j = 0; j < segmentLength; j++) {
      part += chars[Math.floor(Math.random() * chars.length)]
    }
    parts.push(part)
  }
  return parts.join("-")
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)

  return (
    <Button
      variant="ghost"
      size="icon-xs"
      onClick={() => {
        navigator.clipboard.writeText(text)
        setCopied(true)
        setTimeout(() => setCopied(false), 1500)
      }}
    >
      {copied ? <Check className="size-3" /> : <Copy className="size-3" />}
    </Button>
  )
}

export function LicensesPage() {
  const [licenses, setLicenses] = useState<License[]>([])
  const [loading, setLoading] = useState(true)
  const [createOpen, setCreateOpen] = useState(false)
  const [newKey, setNewKey] = useState("")
  const [creating, setCreating] = useState(false)
  const [createError, setCreateError] = useState("")
  const [deletingKey, setDeletingKey] = useState<string | null>(null)

  const fetchLicenses = useCallback(async () => {
    try {
      const data = await api.list.query()
      setLicenses(data as License[])
    } catch {
      // silently fail
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchLicenses()
  }, [fetchLicenses])

  async function handleCreate() {
    if (!newKey.trim()) return
    setCreating(true)
    setCreateError("")
    try {
      await api.create.mutate({ licenseKey: newKey.trim() })
      setCreateOpen(false)
      setNewKey("")
      fetchLicenses()
    } catch (e) {
      setCreateError(e instanceof Error ? e.message : "Failed to create")
    } finally {
      setCreating(false)
    }
  }

  async function handleDeactivate(licenseKey: string) {
    setDeletingKey(licenseKey)
    try {
      await api.deactivate.mutate({ licenseKey })
      fetchLicenses()
    } catch {
      // silently fail
    } finally {
      setDeletingKey(null)
    }
  }

  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Licenses</h2>
        <div className="flex gap-2">
          <Button
            size="sm"
            onClick={() => {
              setNewKey(generateLicenseKey())
              setCreateError("")
              setCreateOpen(true)
            }}
          >
            <Plus className="size-3.5" />
            Create License
          </Button>
        </div>
      </div>

      <div className="rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">ID</TableHead>
              <TableHead>License Key</TableHead>
              <TableHead className="w-28">Status</TableHead>
              <TableHead className="w-44">Created</TableHead>
              <TableHead className="w-44">Activated</TableHead>
              <TableHead className="w-20" />
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              Array.from({ length: 3 }).map((_, i) => (
                <TableRow key={i}>
                  <TableCell><Skeleton className="h-4 w-8" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-48" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-16" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-32" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-32" /></TableCell>
                  <TableCell />
                </TableRow>
              ))
            ) : licenses.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center text-muted-foreground py-8">
                  No licenses found
                </TableCell>
              </TableRow>
            ) : (
              licenses.map((license) => (
                <TableRow key={license.id}>
                  <TableCell className="font-mono text-xs text-muted-foreground">
                    {license.id}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <span className="font-mono text-sm">{license.licenseKey}</span>
                      <CopyButton text={license.licenseKey} />
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={statusVariant(license.status)}>
                      {license.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {license.createdAt
                      ? new Date(license.createdAt).toLocaleString()
                      : "-"}
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {license.activatedAt
                      ? new Date(license.activatedAt).toLocaleString()
                      : "-"}
                  </TableCell>
                  <TableCell>
                    {license.status !== "disabled" && (
                      <Button
                        variant="destructive"
                        size="icon-xs"
                        disabled={deletingKey === license.licenseKey}
                        onClick={() => handleDeactivate(license.licenseKey)}
                      >
                        <Trash2 className="size-3" />
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <Dialog open={createOpen} onOpenChange={setCreateOpen}>
        <DialogContent onOpenAutoFocus={(e) => e.preventDefault()}>
          <DialogHeader>
            <DialogTitle>Create License</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-2">
            <div className="space-y-2">
              <Label htmlFor="license-key">License Key</Label>
              <div className="flex gap-2">
                <Input
                  id="license-key"
                  value={newKey}
                  onChange={(e) => setNewKey(e.target.value)}
                  className="font-mono"
                  placeholder="XXXXX-XXXXX-XXXXX-XXXXX"
                />
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setNewKey(generateLicenseKey())}
                >
                  <RefreshCw className="size-4" />
                </Button>
              </div>
            </div>
            {createError && (
              <p className="text-sm text-destructive">{createError}</p>
            )}
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button onClick={handleCreate} disabled={creating || !newKey.trim()}>
              {creating ? "Creating..." : "Create"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
