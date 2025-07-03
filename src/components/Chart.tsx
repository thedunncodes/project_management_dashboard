"use client"

import { useState } from "react"
import { Line, LineChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "./ui/chart"
import { Button } from "./ui/button"

const data = {
  weekly: [
    { period: "30/12/2024 - 05/01/2025", cost: 5321, revenue: 7045 },
    { period: "06/01/2025 - 12/01/2025", cost: 5992, revenue: 6123 },
    { period: "13/01/2025 - 19/01/2025", cost: 7567, revenue: 6487 },
    { period: "20/01/2025 - 26/01/2025", cost: 8021, revenue: 5600 },
    { period: "27/01/2025 - 02/02/2025", cost: 8543, revenue: 5800 },
    { period: "03/02/2025 - 09/02/2025", cost: 6087, revenue: 6300 },
    { period: "10/02/2025 - 16/02/2025", cost: 5590, revenue: 6900 },
    { period: "17/02/2025 - 23/02/2025", cost: 5000, revenue: 7700 },
    { period: "24/02/2025 - 02/03/2025", cost: 4800, revenue: 8000 },
    { period: "03/03/2025 - 09/03/2025", cost: 4390, revenue: 8500 },
    { period: "10/03/2025 - 16/03/2025", cost: 4700, revenue: 7900 },
    { period: "17/03/2025 - 23/03/2025", cost: 5000, revenue: 7500 },
    { period: "24/03/2025 - 30/03/2025", cost: 4500, revenue: 8000 },
    { period: "31/03/2025 - 06/04/2025", cost: 4000, revenue: 9670 },
    { period: "07/04/2025 - 13/04/2025", cost: 3900, revenue: 11000 },
    { period: "14/04/2025 - 20/04/2025", cost: 3980, revenue: 13450 },
  ],
  monthly: [
    { period: "Jan", cost: 12000, revenue: 18000 },
    { period: "Feb", cost: 15000, revenue: 22000 },
    { period: "Mar", cost: 18000, revenue: 28000 },
    { period: "Apr", cost: 16000, revenue: 25000 },
    { period: "May", cost: 19000, revenue: 32000 },
    { period: "Jun", cost: 21000, revenue: 35000 },
  ],
  quarterly: [
    { period: "Q1", cost: 45000, revenue: 68000 },
    { period: "Q2", cost: 56000, revenue: 92000 },
    { period: "Q3", cost: 62000, revenue: 105000 },
    { period: "Q4", cost: 58000, revenue: 98000 },
  ],
}

const GREEN = "hsl(173, 58%, 39%)"
const ORANGE = "hsl(12, 76%, 61%)"

export default function InteractiveChart() {
  const [timePeriod, setTimePeriod] = useState<"weekly" | "monthly" | "quarterly">("monthly")

  const currentData = data[timePeriod]

  return (
    <div className="pl-2 pt-5 sm:p-6 w-[95%]  mx-auto">
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <CardTitle>Actual Cost vs Revenue Analysis</CardTitle>
            </div>

            <div className="flex flex-wrap gap-2">
              <div className="flex gap-1 bg-gray-100 rounded-lg p-1">
                <Button
                  variant={timePeriod === "weekly" ? "blue" : "ghost"}
                  size="sm"
                  onClick={() => setTimePeriod("weekly")}
                >
                  Weekly
                </Button>
                <Button
                  variant={timePeriod === "monthly" ? "blue" : "ghost"}
                  size="sm"
                  onClick={() => setTimePeriod("monthly")}
                >
                  Monthly
                </Button>
                <Button
                  variant={timePeriod === "quarterly" ? "blue" : "ghost"}
                  size="sm"
                  onClick={() => setTimePeriod("quarterly")}
                >
                  Quarterly
                </Button>
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <ChartContainer
            config={{
              cost: {
                label: "Cost",
                color: ORANGE,
              },
              revenue: {
                label: "Revenue",
                color: GREEN,
              },
            }}
            className="h-full"
          >
            <ResponsiveContainer width="50%" height="50%">
                <LineChart data={currentData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="period" />
                  <YAxis />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line
                    type="monotone"
                    dataKey="cost"
                    stroke={ORANGE}
                    strokeWidth={3}
                    dot={{ fill: ORANGE, strokeWidth: 2, r: 6 }}
                    name="Cost"
                  />
                  <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke={GREEN}
                    strokeWidth={3}
                    dot={{ fill: GREEN, strokeWidth: 2, r: 6 }}
                    name="Revenue"
                  />
                </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  )
}
