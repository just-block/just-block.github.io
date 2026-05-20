import { authClient } from "@/api/auth-client"
import { LoginPage } from "@/pages/login"
import { LicensesPage } from "@/pages/licenses-page"
import { PurchasesPage } from "@/pages/purchases-page"
import { AppSidebar } from "@/components/app-sidebar"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"
import { useLocation } from "wouter"

export function App() {
  const { data: session, isPending } = authClient.useSession()
  const [location] = useLocation()

  if (isPending) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-sm text-muted-foreground">Loading</div>
      </div>
    )
  }

  if (!session) {
    return <LoginPage />
  }

  const activePage = location === "/purchases" ? "Purchases" : "Licenses"

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 h-4 data-vertical:self-center"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbPage>{activePage}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        {activePage === "Purchases" ? <PurchasesPage /> : <LicensesPage />}
      </SidebarInset>
    </SidebarProvider>
  )
}
