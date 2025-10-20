import { Card } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const data = [
  { name: "Business Travelers", value: 35, color: "hsl(var(--chart-1))" },
  { name: "Leisure Travelers", value: 45, color: "hsl(var(--chart-2))" },
  { name: "Family Groups", value: 12, color: "hsl(var(--chart-3))" },
  { name: "Corporate Bookers", value: 8, color: "hsl(var(--chart-4))" },
];

export const SegmentChart = () => {
  return (
    <Card className="p-6 shadow-card animate-slide-up">
      <h3 className="text-lg font-semibold mb-4">Customer Segments Distribution</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "8px",
            }}
          />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </Card>
  );
};
