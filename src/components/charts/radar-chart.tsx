"use client"

import { TrendingUp } from "lucide-react"
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"

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
    dataKeys: string[];
    color: string;
    height: number;
    polarAngleAxisDataKey: string;
}

export function RadarChartComponent({ polarAngleAxisDataKey, title, description, chartConfig, chartData, dataKeys, color, height }: Props) {
    return (
        <Card className="h-full">
            <CardHeader className="items-start  ">
                <CardTitle>{title}</CardTitle>
                <CardDescription>
                    {description}
                </CardDescription>
            </CardHeader>
            <CardContent className="pb-0">
                <ChartContainer
                    style={{ height: height }}
                    config={chartConfig}
                    className="mx-auto aspect-square h-full"
                >
                    <RadarChart data={chartData}>
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent indicator="line" />}
                        />
                        <PolarAngleAxis dataKey={polarAngleAxisDataKey} />
                        <PolarGrid />
                        <Radar
                            dataKey={dataKeys[0]}
                            fill={color}
                            fillOpacity={0.6}
                        />
                        <Radar dataKey={dataKeys[1]} fill="var(--color-mobile)" />
                    </RadarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
