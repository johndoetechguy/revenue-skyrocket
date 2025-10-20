import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Monitor, Smartphone, Globe, Building2, TrendingUp, TrendingDown } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const deviceData = [
  { device: "Desktop", conversion: 48, revenue: 3200000, bookings: 125000 },
  { device: "Mobile", conversion: 32, revenue: 2100000, bookings: 185000 },
  { device: "Tablet", conversion: 41, revenue: 950000, bookings: 42000 },
  { device: "App (iOS)", conversion: 55, revenue: 1800000, bookings: 68000 },
  { device: "App (Android)", conversion: 51, revenue: 1450000, bookings: 62000 },
];

const channelData = [
  { name: "Direct Web", value: 38, color: "hsl(var(--chart-1))" },
  { name: "Mobile App", value: 28, color: "hsl(var(--chart-2))" },
  { name: "OTA", value: 18, color: "hsl(var(--chart-3))" },
  { name: "Corporate", value: 12, color: "hsl(var(--chart-4))" },
  { name: "GDS", value: 4, color: "hsl(var(--chart-5))" },
];

const Channels = () => {
  return (
    <DashboardLayout>
      <div className="p-4 md:p-8 space-y-6 md:space-y-8">
        <div className="space-y-2">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">Device & Channel Performance</h1>
          <p className="text-sm md:text-base text-muted-foreground">
            Optimize upsells across platforms and booking channels
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Highest Converting</CardDescription>
              <CardTitle className="text-xl md:text-2xl">iOS App</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-sm text-green-600">
                <TrendingUp className="w-4 h-4" />
                <span>55% conversion rate</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Most Bookings</CardDescription>
              <CardTitle className="text-xl md:text-2xl">Mobile Web</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Smartphone className="w-4 h-4" />
                <span>185K bookings</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Lowest Converting</CardDescription>
              <CardTitle className="text-xl md:text-2xl">Mobile Web</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-sm text-red-600">
                <TrendingDown className="w-4 h-4" />
                <span>32% conversion rate</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Top Revenue</CardDescription>
              <CardTitle className="text-xl md:text-2xl">Desktop</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Monitor className="w-4 h-4" />
                <span>$3.2M total</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Device Performance</CardTitle>
              <CardDescription>
                Upsell conversion rates by device type
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={deviceData}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                  <XAxis 
                    dataKey="device" 
                    tick={{ fontSize: 12 }}
                    angle={-45}
                    textAnchor="end"
                    height={80}
                  />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                  />
                  <Bar dataKey="conversion" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Channel Distribution</CardTitle>
              <CardDescription>
                Revenue share by booking channel
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={channelData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, value }) => `${name}: ${value}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {channelData.map((entry, index) => (
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
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Platform Insights</CardTitle>
            <CardDescription>
              Detailed performance metrics by platform
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {deviceData.map((item) => (
                <div key={item.device} className="p-4 rounded-lg border border-border bg-card/50">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      {item.device.includes("Desktop") && <Monitor className="w-5 h-5 text-primary" />}
                      {item.device.includes("Mobile") && <Smartphone className="w-5 h-5 text-primary" />}
                      {item.device.includes("Tablet") && <Monitor className="w-5 h-5 text-primary" />}
                      {item.device.includes("App") && <Smartphone className="w-5 h-5 text-primary" />}
                      <div>
                        <h4 className="font-semibold text-foreground">{item.device}</h4>
                        <p className="text-sm text-muted-foreground">{item.bookings.toLocaleString()} bookings</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <div className="text-sm text-muted-foreground">Conversion</div>
                        <div className="text-xl font-semibold text-foreground">{item.conversion}%</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Revenue</div>
                        <div className="text-xl font-semibold text-foreground">
                          ${(item.revenue / 1000000).toFixed(1)}M
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Optimization Recommendations</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
              <div className="flex gap-3">
                <Smartphone className="w-5 h-5 text-yellow-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Mobile Web Conversion Gap</h4>
                  <p className="text-sm text-muted-foreground">
                    Mobile web has highest traffic but lowest conversion (32%). Simplify upsell UI and test one-tap upgrades.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
              <div className="flex gap-3">
                <TrendingUp className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Native App Success</h4>
                  <p className="text-sm text-muted-foreground">
                    iOS and Android apps show 51-55% conversion. Promote app downloads and push notifications for upgrade offers.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
              <div className="flex gap-3">
                <Building2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Corporate Channel Opportunity</h4>
                  <p className="text-sm text-muted-foreground">
                    Corporate bookings represent 12% share. Target with premium cabin upgrades and lounge access bundles.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Channels;
