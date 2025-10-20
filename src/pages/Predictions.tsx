import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { TrendingUp, TrendingDown, Users, DollarSign } from "lucide-react";

const segments = [
  {
    name: "Premium Business Travelers",
    probability: 0.87,
    size: "12.5K",
    revenue: "$2.1M",
    trend: "up",
    features: ["High loyalty tier", "Long-haul routes", "Weekday travel"]
  },
  {
    name: "Leisure Family Groups",
    probability: 0.34,
    size: "45.2K",
    revenue: "$890K",
    trend: "down",
    features: ["Price sensitive", "Weekend travel", "Bundle preference"]
  },
  {
    name: "Last-Minute Bookers",
    probability: 0.62,
    size: "8.9K",
    revenue: "$1.4M",
    trend: "up",
    features: ["Mobile bookings", "Short lead time", "Premium seats"]
  },
  {
    name: "Frequent Economy Flyers",
    probability: 0.45,
    size: "32.1K",
    revenue: "$1.2M",
    trend: "up",
    features: ["Regular travelers", "Ancillary buyers", "Mid loyalty tier"]
  }
];

const features = [
  { name: "Loyalty Tier", importance: 92 },
  { name: "Lead Time", importance: 85 },
  { name: "Trip Type", importance: 78 },
  { name: "Past Upsell Behavior", importance: 74 },
  { name: "Booking Channel", importance: 68 },
  { name: "Route Distance", importance: 61 },
];

const Predictions = () => {
  return (
    <DashboardLayout>
      <div className="p-4 md:p-8 space-y-6 md:space-y-8">
        <div className="space-y-2">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">Predictive Upsell Probability</h1>
          <p className="text-sm md:text-base text-muted-foreground">
            AI-powered predictions to identify high-value upsell opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Predicted Revenue Uplift</CardDescription>
              <CardTitle className="text-2xl md:text-3xl">$4.5M</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-sm text-green-600">
                <TrendingUp className="w-4 h-4" />
                <span>+18.5% potential</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardDescription>High-Potential Customers</CardDescription>
              <CardTitle className="text-2xl md:text-3xl">98.7K</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Users className="w-4 h-4" />
                <span>25% of non-converters</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Avg. Upsell Probability</CardDescription>
              <CardTitle className="text-2xl md:text-3xl">0.62</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-sm text-green-600">
                <TrendingUp className="w-4 h-4" />
                <span>+12% vs baseline</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Missed Opportunity</CardDescription>
              <CardTitle className="text-2xl md:text-3xl">$6.8M</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-sm text-red-600">
                <TrendingDown className="w-4 h-4" />
                <span>From 60% non-converters</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Feature Importance</CardTitle>
              <CardDescription>
                Key factors driving upsell conversion
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {features.map((feature) => (
                <div key={feature.name} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground">{feature.name}</span>
                    <span className="text-muted-foreground">{feature.importance}%</span>
                  </div>
                  <Progress value={feature.importance} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Opportunity Segments</CardTitle>
              <CardDescription>
                Customer groups with highest upsell potential
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {segments.map((segment) => (
                <div key={segment.name} className="p-4 rounded-lg border border-border bg-card/50 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                    <div className="space-y-1">
                      <h4 className="font-semibold text-foreground">{segment.name}</h4>
                      <div className="flex flex-wrap gap-1">
                        {segment.features.map((f) => (
                          <Badge key={f} variant="secondary" className="text-xs">
                            {f}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Badge variant={segment.probability > 0.7 ? "default" : "secondary"}>
                      {(segment.probability * 100).toFixed(0)}% likely
                    </Badge>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{segment.size} customers</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <DollarSign className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{segment.revenue} potential</span>
                    </div>
                  </div>
                  <Progress value={segment.probability * 100} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Predictions;
