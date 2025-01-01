import { AppSidebar } from "@/components/app-sidebar"
import { BarChartComponent } from "@/components/charts/bar-chart"
import { RadialChartComponent } from "@/components/charts/radial-chart"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"

export default function Page() {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
                    <div className="flex items-center gap-2 px-4">
                        <SidebarTrigger className="-ml-1" />
                        <Separator orientation="vertical" className="mr-2 h-4" />
                        <Breadcrumb>
                            <BreadcrumbList>
                                <BreadcrumbItem className="hidden md:block">
                                    Monitoring
                                </BreadcrumbItem>
                                <BreadcrumbSeparator className="hidden md:block" />
                                <BreadcrumbItem>
                                    <BreadcrumbPage>Overview</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </header>
                <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                    <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                        <div className="flex flex-col gap-4">
                            <div className="h-full border flex flex-col gap-4 p-4 rounded-xl bg-muted/50">
                                <h1>Total Hosts</h1>
                                <h2 className="font-semibold text-3xl">1,200</h2>
                            </div>
                            <div className="h-full border flex flex-col gap-4 p-4 rounded-xl bg-muted/50">
                                <h1>Total Hosts</h1>
                                <h2 className="font-semibold text-3xl">1,200</h2>
                            </div>
                        </div>
                        <div className="border flex flex-col justify-between gap-4 p-4 rounded-xl bg-muted/50">
                            <RadialChartComponent
                                chartData={[{ month: "january", desktop: 1260, mobile: 570 }]}
                                chartConfig={
                                    {
                                        desktop: {
                                            label: "Desktop",
                                            color: "hsl(var(--chart-1))",
                                        },
                                        mobile: {
                                            label: "Mobile",
                                            color: "hsl(var(--chart-2))",
                                        },
                                    }
                                }
                                title="Availability Rate"
                            />
                        </div>
                        <div className="border flex flex-col gap-4 p-4 rounded-xl bg-muted/50">
                        <RadialChartComponent
                                chartData={[{ month: "january", desktop: 1260, mobile: 570 }]}
                                chartConfig={
                                    {
                                        desktop: {
                                            label: "Desktop",
                                            color: "hsl(var(--chart-1))",
                                        },
                                        mobile: {
                                            label: "Mobile",
                                            color: "hsl(var(--chart-2))",
                                        },
                                    }
                                }
                                title="Availability Rate"
                            />
                        </div>
                    </div>
                    <div className="border flex flex-col gap-4 p-4 rounded-xl bg-muted/50">
                        <BarChartComponent />
                    </div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}
