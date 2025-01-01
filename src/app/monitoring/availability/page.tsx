"use client"

import { AppSidebar } from "@/components/app-sidebar"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import { useState } from "react"

export default function Page() {
    const [hosts, setHosts] = useState([
        { id: 1, network: 1, hostname: "HOSTNAME1", ipv4: "192.168.0.1", reachable: true },
        { id: 2, network: 1, hostname: "HOSTNAME2", ipv4: "192.168.0.2", reachable: true },
        { id: 3, network: 1, hostname: "HOSTNAME3", ipv4: "192.168.0.3", reachable: false },
        { id: 4, network: 1, hostname: "HOSTNAME4", ipv4: "192.168.0.4", reachable: true },
        { id: 5, network: 1, hostname: "HOSTNAME5", ipv4: "192.168.0.5", reachable: true },
        { id: 6, network: 1, hostname: "HOSTNAME6", ipv4: "192.168.0.6", reachable: true },
        { id: 7, network: 1, hostname: "HOSTNAME7", ipv4: "192.168.0.7", reachable: true },
        { id: 8, network: 1, hostname: "HOSTNAME8", ipv4: "192.168.0.8", reachable: true },
        { id: 9, network: 1, hostname: "HOSTNAME9", ipv4: "192.168.0.9", reachable: true },
        { id: 10, network: 1, hostname: "HOSTNAME10", ipv4: "192.168.0.10", reachable: false },
    ])

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
                                    <BreadcrumbPage>Availability</BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>
                </header>
                <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                    <div className="border flex flex-col gap-4 p-4 rounded-xl bg-muted/50">
                        <div>
                            <Select>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Choose Network" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="1">Network 1</SelectItem>
                                    <SelectItem value="2">Network 2</SelectItem>
                                    <SelectItem value="3">Network 3</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <h1>Selected: Network 1</h1>
                        <nav className="grid grid-cols-5 gap-1">
                            {hosts.map((host) => {
                                return (
                                    <button key={host.id} className={`flex items-end p-2 ${host.reachable ? "bg-emerald-600" : "bg-red-600"} text-white h-32 w-full rounded-xl`}>
                                        {`HOSTNAME${host.id}`}
                                    </button>
                                )
                            })}
                        </nav>
                    </div>
                    <div className="border flex flex-col gap-4 p-4 rounded-xl bg-muted/50">
                        <h1>Available Agents</h1>
                        <nav className="grid grid-cols-10 gap-1">
                            {hosts.map((host) => {
                                return (
                                    <button key={host.id} className={`flex items-end p-2 ${host.reachable ? "bg-emerald-600" : "bg-red-600"} text-white h-32 w-full rounded-xl`}>
                                        {`AGENT${host.id}`}
                                    </button>
                                )
                            })}
                        </nav>
                    </div>
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}