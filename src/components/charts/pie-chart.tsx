"use client"

import { TrendingUp } from "lucide-react"
import { Pie, PieChart } from "recharts"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

type Props = {
    title: string;
    description: string;
    chartConfig: ChartConfig;
    chartData: any;
    height: number;
}

export function PieChartComponent({ title, description, chartConfig, chartData, height }: Props) {
    return (
        <Card className="flex flex-col h-full">
            <CardHeader className="flex justify-start text-left">
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 pb-0 h-full">
                <ChartContainer
                    style={{ height: height }}
                    config={chartConfig}
                    className="mx-auto aspect-square pb-0 [&_.recharts-pie-label-text]:fill-foreground"
                >
                    <PieChart>
                        <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                        <Pie data={chartData} dataKey="visitors" label nameKey="browser" />
                    </PieChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
