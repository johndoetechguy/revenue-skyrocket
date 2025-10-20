import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card } from "@/components/ui/card";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from "recharts";
import { TrendingUp, Target, DollarSign, Percent } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const channelData = [
  { channel: "Web", conversion: 45, revenue: 2800 },
  { channel: "Mobile App", conversion: 38, revenue: 2200 },
  { channel: "Call Center", conversion: 62, revenue: 1800 },
  { channel: "OTA", conversion: 28, revenue: 1200 },
];

const productData = [
  { month: "Jan", cabin: 1200, seat: 800, baggage: 600, meals: 400 },
  { month: "Feb", cabin: 1350, seat: 850, baggage: 650, meals: 450 },
  { month: "Mar", cabin: 1500, seat: 900, baggage: 700, meals: 500 },
  { month: "Apr", cabin: 1650, seat: 950, baggage: 750, meals: 550 },
  { month: "May", cabin: 1800, seat: 1000, baggage: 800, meals: 600 },
  { month: "Jun", cabin: 2000, seat: 1100, baggage: 900, meals: 650 },
];

const upsellTypes = [
  {
    type: "Premium Cabin Upgrade",
    conversion: 48,
    avgValue: 285,
    volume: 12400,
    revenue: 3534000,
    trend: "up",
  },
  {
    type: "Extra Baggage",
    conversion: 34,
    avgValue: 45,
    volume: 28900,
    revenue: 1300500,
    trend: "up",
  },
  {
    type: "Seat Selection",
    conversion: 52,
    avgValue: 25,
    volume: 42100,
    revenue: 1052500,
    trend: "down",
  },
  {
    type: "In-flight Meals",
    conversion: 29,
    avgValue: 18,
    volume: 18200,
    revenue: 327600,
    trend: "up",
  },
  {
    type: "Lounge Access",
    conversion: 22,
    avgValue: 65,
    volume: 8900,
    revenue: 578500,
    trend: "up",
  },
];

const Upsell = () => {
  return (
    <DashboardLayout>
      <div className="p-8 space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-foreground">Upsell Performance Analytics</h1>
          <p className="text-muted-foreground">
            Track conversion rates and revenue impact across channels and products
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <MetricCard
            title="Overall Conversion"
            value="42.8%"
            change={6.2}
            changeLabel="vs last month"
            icon={<Target className="w-6 h-6 text-white" />}
            trend="up"
          />
          <MetricCard
            title="Upsell Revenue"
            value="$6.8M"
            change={15.4}
            changeLabel="vs last month"
            icon={<DollarSign className="w-6 h-6 text-white" />}
            trend="up"
          />
          <MetricCard
            title="Avg Upsell Value"
            value="$82"
            change={3.8}
            changeLabel="vs last month"
            icon={<TrendingUp className="w-6 h-6 text-white" />}
            trend="up"
          />
          <MetricCard
            title="Attachment Rate"
            value="68%"
            change={-1.2}
            changeLabel="vs last month"
            icon={<Percent className="w-6 h-6 text-white" />}
            trend="down"
          />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-6 shadow-card animate-slide-up">
            <h3 className="text-lg font-semibold mb-4">Conversion by Channel</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={channelData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="channel" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Legend />
                <Bar dataKey="conversion" name="Conversion Rate (%)" fill="hsl(var(--chart-1))" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          <Card className="p-6 shadow-card animate-slide-up">
            <h3 className="text-lg font-semibold mb-4">Revenue by Product Type</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={productData}>
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
                <Line type="monotone" dataKey="cabin" name="Cabin ($K)" stroke="hsl(var(--chart-1))" strokeWidth={2} />
                <Line type="monotone" dataKey="seat" name="Seat ($K)" stroke="hsl(var(--chart-2))" strokeWidth={2} />
                <Line type="monotone" dataKey="baggage" name="Baggage ($K)" stroke="hsl(var(--chart-3))" strokeWidth={2} />
                <Line type="monotone" dataKey="meals" name="Meals ($K)" stroke="hsl(var(--chart-4))" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {/* Upsell Types Table */}
        <Card className="p-6 shadow-card animate-slide-up">
          <h3 className="text-lg font-semibold mb-4">Upsell Performance by Type</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-sm font-medium text-muted-foreground">Type</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Conversion</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Avg Value</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Volume</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-muted-foreground">Revenue</th>
                  <th className="text-center py-3 px-4 text-sm font-medium text-muted-foreground">Trend</th>
                </tr>
              </thead>
              <tbody>
                {upsellTypes.map((item, index) => (
                  <tr key={index} className="border-b border-border hover:bg-muted/50 transition-colors">
                    <td className="py-3 px-4 text-sm font-medium text-foreground">{item.type}</td>
                    <td className="py-3 px-4 text-sm text-right text-foreground">{item.conversion}%</td>
                    <td className="py-3 px-4 text-sm text-right text-foreground">${item.avgValue}</td>
                    <td className="py-3 px-4 text-sm text-right text-foreground">{item.volume.toLocaleString()}</td>
                    <td className="py-3 px-4 text-sm text-right font-medium text-foreground">
                      ${(item.revenue / 1000000).toFixed(2)}M
                    </td>
                    <td className="py-3 px-4 text-center">
                      <Badge
                        variant="outline"
                        className={
                          item.trend === "up"
                            ? "bg-success/10 text-success border-success/20"
                            : "bg-destructive/10 text-destructive border-destructive/20"
                        }
                      >
                        {item.trend === "up" ? "↑" : "↓"}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Upsell;
