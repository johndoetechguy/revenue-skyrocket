import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { month: "Jan", base: 4200, upsell: 1800, predicted: 6500 },
  { month: "Feb", base: 4500, upsell: 2100, predicted: 7000 },
  { month: "Mar", base: 4800, upsell: 2400, predicted: 7500 },
  { month: "Apr", base: 5100, upsell: 2700, predicted: 8200 },
  { month: "May", base: 5400, upsell: 3000, predicted: 8800 },
  { month: "Jun", base: 5800, upsell: 3400, predicted: 9500 },
];

export const RevenueChart = () => {
  return (
    <Card className="p-6 shadow-card animate-slide-up">
      <h3 className="text-lg font-semibold mb-4">Revenue Trend & Predictions</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
          <YAxis stroke="hsl(var(--muted-foreground))" />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "8px",
            }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="base"
            name="Base Revenue ($K)"
            stroke="hsl(var(--chart-1))"
            strokeWidth={2}
            dot={{ fill: "hsl(var(--chart-1))" }}
          />
          <Line
            type="monotone"
            dataKey="upsell"
            name="Upsell Revenue ($K)"
            stroke="hsl(var(--chart-2))"
            strokeWidth={2}
            dot={{ fill: "hsl(var(--chart-2))" }}
          />
          <Line
            type="monotone"
            dataKey="predicted"
            name="Predicted ($K)"
            stroke="hsl(var(--chart-3))"
            strokeWidth={2}
            strokeDasharray="5 5"
            dot={{ fill: "hsl(var(--chart-3))" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};
