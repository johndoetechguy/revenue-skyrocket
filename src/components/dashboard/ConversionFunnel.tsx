import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from "recharts";

const data = [
  { stage: "Viewed Offer", count: 100000, percentage: 100 },
  { stage: "Clicked Details", count: 65000, percentage: 65 },
  { stage: "Added to Cart", count: 45000, percentage: 45 },
  { stage: "Proceeded to Payment", count: 42000, percentage: 42 },
  { stage: "Completed Purchase", count: 40000, percentage: 40 },
];

const colors = ["hsl(var(--chart-1))", "hsl(var(--chart-2))", "hsl(var(--chart-3))", "hsl(var(--chart-4))", "hsl(var(--chart-5))"];

export const ConversionFunnel = () => {
  return (
    <Card className="p-6 shadow-card animate-slide-up">
      <h3 className="text-lg font-semibold mb-4">Upsell Conversion Funnel</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
          <XAxis type="number" stroke="hsl(var(--muted-foreground))" />
          <YAxis dataKey="stage" type="category" width={150} stroke="hsl(var(--muted-foreground))" />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "8px",
            }}
          />
          <Legend />
          <Bar dataKey="count" name="Customers" radius={[0, 8, 8, 0]}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};
