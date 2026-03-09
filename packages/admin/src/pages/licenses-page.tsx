import { useState } from "react"
import { useQuery, useMutation } from "@tanstack/react-query"
import { api } from "@/api/trpc-api"
import { queryClient } from "@/api/query-client"
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
import { Plus, Trash2, RefreshCw } from "lucide-react"
import { Skeleton } from "@/components/ui/skeleton"
import { LoadingSwap } from "@/components/ui/loading-swap"
import { CopyButton } from "@/components/copy-button"
import type { License } from "api"

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

export function LicensesPage() {
  const [createForm, setCreateForm] = useState<{
    key: string | null
  } | null>(null)

  const { data: licenses = [], isLoading: loading } = useQuery(
    api.list.queryOptions(),
  )

  const generateKeyMutation = useMutation(
    api.generateKey.mutationOptions({
      onSuccess: (data) => {
        setCreateForm({ key: data.licenseKey })
      },
    }),
  )

  const createMutation = useMutation(
    api.create.mutationOptions({
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: api.list.queryKey() })
        setCreateForm(null)
      },
    }),
  )

  const deactivateMutation = useMutation(
    api.deactivate.mutationOptions({
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: api.list.queryKey() })
      },
    }),
  )

  const isGenerating = generateKeyMutation.isPending

  function handleOpenDialog() {
    setCreateForm({ key: null })
    generateKeyMutation.mutate()
  }

  function handleCreate() {
    if (!createForm?.key) return
    createMutation.mutate({ licenseKey: createForm.key })
  }

  function handleDeactivate(licenseKey: string) {
    deactivateMutation.mutate({ licenseKey })
  }

  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Licenses</h2>
        <div className="flex gap-2">
          <Button
            size="sm"
            onClick={() => handleOpenDialog()}
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
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <span className="font-mono text-xs text-muted-foreground">{license.id.slice(-8)}</span>
                      <CopyButton text={license.id} />
                    </div>
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
                        disabled={deactivateMutation.isPending && deactivateMutation.variables?.licenseKey === license.licenseKey}
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

      <Dialog open={createForm !== null} onOpenChange={(open) => !open && setCreateForm(null)}>
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
                  value={createForm?.key ?? ""}
                  disabled
                  className="font-mono"
                  placeholder="XXXXX-XXXXX-XXXXX-XXXXX"
                />
                <Button
                  variant="outline"
                  size="icon"
                  disabled={isGenerating}
                  onClick={() => generateKeyMutation.mutate()}
                >
                  <RefreshCw className={`size-4 ${isGenerating ? "animate-spin" : ""}`} />
                </Button>
              </div>
            </div>
            {createMutation.error && (
              <p className="text-sm text-destructive">
                {createMutation.error instanceof Error ? createMutation.error.message : "Failed to create"}
              </p>
            )}
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button onClick={handleCreate} disabled={createMutation.isPending || isGenerating || !createForm?.key}>
              <LoadingSwap isLoading={createMutation.isPending}>Create</LoadingSwap>
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
