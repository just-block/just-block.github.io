import { useMemo, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { Search } from "lucide-react"

import { api } from "@/api/trpc-api"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { CopyButton } from "@/components/copy-button"
import type { License } from "api"

function statusVariant(status: License["status"]) {
  switch (status) {
    case "available":
      return "outline" as const
    case "active":
      return "default" as const
    default:
      return "destructive" as const
  }
}

function formatDate(value: Date | string | null) {
  return value ? new Date(value).toLocaleString() : "-"
}

export function PurchasesPage() {
  const [search, setSearch] = useState("")
  const { data: licenses, isLoading: loading } = useQuery(
    api.list.queryOptions()
  )

  const purchases = useMemo(() => {
    const query = search.trim().toLowerCase()

    return (licenses ?? [])
      .filter((license) => license.customerEmail)
      .filter((license) => {
        if (!query) return true

        return (
          license.customerEmail?.toLowerCase().includes(query) ||
          license.licenseKey.toLowerCase().includes(query)
        )
      })
  }, [licenses, search])

  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-lg font-semibold">Purchases</h2>
        <div className="relative w-full sm:w-80">
          <Search className="pointer-events-none absolute top-1/2 left-2.5 size-3.5 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className="pl-8"
            placeholder="Search email or license key"
          />
        </div>
      </div>

      <div className="rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer</TableHead>
              <TableHead>License</TableHead>
              <TableHead className="w-28">Status</TableHead>
              <TableHead className="w-44">Created</TableHead>
              <TableHead className="w-44">Activated</TableHead>
              <TableHead className="w-32">License email</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              Array.from({ length: 3 }).map((_, i) => (
                <TableRow key={i}>
                  <TableCell>
                    <Skeleton className="h-4 w-44" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-4 w-48" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-4 w-16" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-4 w-32" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-4 w-32" />
                  </TableCell>
                  <TableCell>
                    <Skeleton className="h-4 w-20" />
                  </TableCell>
                </TableRow>
              ))
            ) : purchases.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={6}
                  className="py-8 text-center text-muted-foreground"
                >
                  No purchases found
                </TableCell>
              </TableRow>
            ) : (
              purchases.map((license) => (
                <TableRow key={license.id}>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <span>{license.customerEmail}</span>
                      {license.customerEmail && (
                        <CopyButton text={license.customerEmail} />
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <span className="font-mono text-sm">
                        {license.licenseKey}
                      </span>
                      <CopyButton text={license.licenseKey} />
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant={statusVariant(license.status)}>
                      {license.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {formatDate(license.createdAt)}
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">
                    {formatDate(license.activatedAt)}
                  </TableCell>
                  <TableCell>
                    {license.emailSentAt ? (
                      <Badge variant="secondary">Sent</Badge>
                    ) : (
                      <Badge variant="outline">Not sent</Badge>
                    )}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
