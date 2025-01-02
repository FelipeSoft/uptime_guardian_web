"use client"

import { AppSidebar } from "@/components/app-sidebar"
import { AreaChartComponent } from "@/components/charts/area-chart"
import { PieChartComponent } from "@/components/charts/pie-chart"
import { RadarChartComponent } from "@/components/charts/radar-chart"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import { useState } from "react"

export default function Page() {
    const [networks, setNetworks] = useState([
        { id: 1, name: "Network 1" }
    ]);

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
                            <div className="border flex flex-col gap-4 p-4 rounded-xl bg-muted/50 h-full">
                                <Card className="h-full">
                                    <CardHeader>
                                        <CardTitle>Total Devices</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <h2 className="font-semibold text-3xl">1,200</h2>
                                    </CardContent>
                                </Card>
                            </div>
                            <div className="border flex flex-col gap-4 p-4 rounded-xl bg-muted/50 h-full">
                                <Card className="h-full">
                                    <CardHeader>
                                        <CardTitle>Total Hosts</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <h2 className="font-semibold text-3xl">1,200</h2>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                        <div className="border flex flex-col justify-between gap-4 p-4 rounded-xl bg-muted/50">
                            <PieChartComponent
                                title={"Monitored Units"}
                                description={"The Passive Monitoring uses ICMP method, and Active Monitoring uses installed Agents in devices."}
                                chartConfig={{
                                    unit: {
                                        label: "unit",
                                    },
                                    server: {
                                        label: "Server",
                                        color: "hsl(var(--chart-1))",
                                    },
                                    proxy: {
                                        label: "Proxy",
                                        color: "hsl(var(--chart-2))",
                                    },
                                    router: {
                                        label: "Router",
                                        color: "hsl(var(--chart-3))",
                                    },
                                }} chartData={[
                                    { browser: "Server", visitors: 275, fill: "#045df3" },
                                    { browser: "Proxy", visitors: 200, fill: "#126133" },
                                    { browser: "Router", visitors: 187, fill: "#391398" },
                                ]}
                                height={300}
                            />
                        </div>
                        <div className="border flex flex-col gap-4 p-4 rounded-xl bg-muted/50">
                            <RadarChartComponent
                                color="#ff0000"
                                dataKeys={["desktop", "mobile"]}
                                title={"Passive Monitoring x Active Monitoring"}
                                description={"The Passive Monitoring uses ICMP method, and Active Monitoring uses installed Agents in devices."}
                                chartConfig={{
                                    desktop: {
                                        label: "Desktop",
                                        color: "hsl(var(--chart-1))",
                                    },
                                    mobile: {
                                        label: "Mobile",
                                        color: "hsl(var(--chart-2))",
                                    },
                                }} chartData={[
                                    { month: "January", desktop: 186, mobile: 80 },
                                    { month: "February", desktop: 305, mobile: 200 },
                                    { month: "March", desktop: 237, mobile: 120 },
                                    { month: "April", desktop: 73, mobile: 190 },
                                    { month: "May", desktop: 209, mobile: 130 },
                                    { month: "June", desktop: 214, mobile: 140 },
                                ]}
                                polarAngleAxisDataKey="month"
                                height={300}
                            />
                        </div>
                    </div>
                    <div className="border flex flex-col gap-4 p-4 rounded-xl bg-muted/50">
                        <AreaChartComponent
                            height={250}
                            color="#ff0000"
                            dataKey="latency"
                            chartConfig={
                                {
                                    latency: {
                                        label: "Latency",
                                        color: "#ff0000",
                                    },
                                }
                            }
                            chartData={
                                [
                                    { month: "10 minutes", latency: 186 },
                                    { month: "20 minutes", latency: 305 },
                                    { month: "30 minutes", latency: 237 },
                                    { month: "40 minutes", latency: 73 },
                                    { month: "50 minutes", latency: 209 },
                                    { month: "60 minutes", latency: 214 },
                                ]
                            }
                            description="Filter for overview of hosts and proxies latency."
                            title="Latency Average"
                        />
                    </div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}
