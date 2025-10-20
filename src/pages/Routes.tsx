import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { Map, TrendingUp, Plane, Users } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const routes = [
  {
    route: "JFK → LHR",
    demand: 92,
    capacity: 85,
    upgradeRate: 58,
    revenue: 2850000,
    trend: "high",
    season: "Peak",
  },
  {
    route: "LAX → NRT",
    demand: 88,
    capacity: 90,
    upgradeRate: 52,
    revenue: 2620000,
    trend: "high",
    season: "Peak",
  },
  {
    route: "SFO → SYD",
    demand: 78,
    capacity: 82,
    upgradeRate: 48,
    revenue: 2140000,
    trend: "medium",
    season: "Moderate",
  },
  {
    route: "ORD → FRA",
    demand: 85,
    capacity: 88,
    upgradeRate: 55,
    revenue: 2480000,
    trend: "high",
    season: "Peak",
  },
  {
    route: "MIA → MAD",
    demand: 72,
    capacity: 78,
    upgradeRate: 42,
    revenue: 1890000,
    trend: "medium",
    season: "Moderate",
  },
  {
    route: "SEA → ICN",
    demand: 68,
    capacity: 75,
    upgradeRate: 38,
    revenue: 1620000,
    trend: "low",
    season: "Off-Peak",
  },
  {
    route: "DFW → CDG",
    demand: 81,
    capacity: 84,
    upgradeRate: 51,
    revenue: 2280000,
    trend: "high",
    season: "Peak",
  },
  {
    route: "ATL → AMS",
    demand: 76,
    capacity: 80,
    upgradeRate: 46,
    revenue: 2050000,
    trend: "medium",
    season: "Moderate",
  },
];

const Routes = () => {
  return (
    <DashboardLayout>
      <div className="p-8 space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-foreground">Route & Demand Analysis</h1>
          <p className="text-muted-foreground">
            AI-powered predictions for route profitability and upgrade potential
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <MetricCard
            title="Active Routes"
            value="142"
            change={8.5}
            changeLabel="new routes"
            icon={<Map className="w-6 h-6 text-white" />}
            trend="up"
          />
          <MetricCard
            title="Avg Route Demand"
            value="82%"
            change={5.2}
            changeLabel="vs last quarter"
            icon={<TrendingUp className="w-6 h-6 text-white" />}
            trend="up"
          />
          <MetricCard
            title="Fleet Utilization"
            value="87%"
            change={2.8}
            changeLabel="vs last quarter"
            icon={<Plane className="w-6 h-6 text-white" />}
            trend="up"
          />
          <MetricCard
            title="Avg Upgrade Rate"
            value="48%"
            change={12.4}
            changeLabel="vs last quarter"
            icon={<Users className="w-6 h-6 text-white" />}
            trend="up"
          />
        </div>

        {/* Route Performance Cards */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-foreground">Top Performing Routes</h2>
            <div className="flex gap-2">
              <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                High Potential
              </Badge>
              <Badge variant="outline" className="bg-warning/10 text-warning border-warning/20">
                Medium Potential
              </Badge>
              <Badge variant="outline" className="bg-muted text-muted-foreground border-border">
                Low Potential
              </Badge>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {routes.map((route, index) => (
              <Card key={index} className="p-6 shadow-card hover:shadow-glow transition-all animate-slide-up">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
                      <Plane className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{route.route}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="secondary" className="text-xs">
                          {route.season}
                        </Badge>
                        <Badge
                          variant="outline"
                          className={
                            route.trend === "high"
                              ? "bg-success/10 text-success border-success/20 text-xs"
                              : route.trend === "medium"
                              ? "bg-warning/10 text-warning border-warning/20 text-xs"
                              : "bg-muted text-muted-foreground border-border text-xs"
                          }
                        >
                          {route.trend === "high" ? "High" : route.trend === "medium" ? "Medium" : "Low"} Potential
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Total Revenue</p>
                    <p className="text-2xl font-bold text-foreground">${(route.revenue / 1000000).toFixed(2)}M</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Demand</span>
                      <span className="text-sm font-medium text-foreground">{route.demand}%</span>
                    </div>
                    <Progress value={route.demand} className="h-2" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Capacity Utilization</span>
                      <span className="text-sm font-medium text-foreground">{route.capacity}%</span>
                    </div>
                    <Progress value={route.capacity} className="h-2" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Upgrade Conversion</span>
                      <span className="text-sm font-medium text-foreground">{route.upgradeRate}%</span>
                    </div>
                    <Progress value={route.upgradeRate} className="h-2" />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Routes;
