import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Package, TrendingUp, Users, DollarSign, Play } from "lucide-react";

const bundles = [
  {
    name: "Premium Comfort Bundle",
    items: ["Extra legroom seat", "Priority boarding", "Premium meal", "In-flight Wi-Fi"],
    price: "$89",
    attachRate: 42,
    revenue: "$1.2M",
    status: "active",
    segment: "Business & Premium Economy"
  },
  {
    name: "Family Travel Pack",
    items: ["Seat selection (4x)", "Checked bags (2x)", "Kids meals", "Entertainment bundle"],
    price: "$120",
    attachRate: 38,
    revenue: "$890K",
    status: "active",
    segment: "Leisure Families"
  },
  {
    name: "Digital Nomad Bundle",
    items: ["Wi-Fi unlimited", "Power adapter", "Lounge access", "Priority check-in"],
    price: "$75",
    attachRate: 28,
    revenue: "$650K",
    status: "testing",
    segment: "Solo Business Travelers"
  },
  {
    name: "Long-Haul Essentials",
    items: ["Amenity kit", "Comfort kit", "Premium meal", "Seat upgrade"],
    price: "$150",
    attachRate: 51,
    revenue: "$1.8M",
    status: "active",
    segment: "International Travelers"
  }
];

const experiments = [
  {
    name: "Bundle vs Individual A/B Test",
    variant: "Bundle offer at seat selection",
    control: "Individual ancillaries",
    metric: "Attach rate",
    result: "+23% conversion",
    status: "winner"
  },
  {
    name: "Dynamic Pricing Test",
    variant: "AI-adjusted bundle price",
    control: "Fixed price",
    metric: "Revenue per pax",
    result: "+$12.50 avg",
    status: "winner"
  },
  {
    name: "Timing Optimization",
    variant: "Post-seat selection",
    control: "Pre-seat selection",
    metric: "Completion rate",
    result: "+18% completion",
    status: "running"
  }
];

const Bundles = () => {
  return (
    <DashboardLayout>
      <div className="p-4 md:p-8 space-y-6 md:space-y-8">
        <div className="space-y-2">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">Bundled Offers & Experimentation</h1>
          <p className="text-sm md:text-base text-muted-foreground">
            Test and optimize bundled ancillary offers to maximize revenue
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Active Bundles</CardDescription>
              <CardTitle className="text-2xl md:text-3xl">12</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Package className="w-4 h-4" />
                <span>3 in testing</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Avg. Attach Rate</CardDescription>
              <CardTitle className="text-2xl md:text-3xl">39.8%</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-sm text-green-600">
                <TrendingUp className="w-4 h-4" />
                <span>+15% vs individual</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Bundle Revenue</CardDescription>
              <CardTitle className="text-2xl md:text-3xl">$4.5M</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-sm text-green-600">
                <DollarSign className="w-4 h-4" />
                <span>55% of ancillary revenue</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Running Experiments</CardDescription>
              <CardTitle className="text-2xl md:text-3xl">5</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Play className="w-4 h-4" />
                <span>2 showing wins</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <CardTitle>Bundle Performance</CardTitle>
                <CardDescription>
                  Current bundled offers and their impact
                </CardDescription>
              </div>
              <Button>
                <Package className="w-4 h-4 mr-2" />
                Create Bundle
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {bundles.map((bundle) => (
              <div key={bundle.name} className="p-4 rounded-lg border border-border bg-card/50 space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold text-foreground">{bundle.name}</h4>
                      <Badge variant={bundle.status === "active" ? "default" : "secondary"}>
                        {bundle.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{bundle.segment}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-foreground">{bundle.price}</div>
                    <div className="text-sm text-muted-foreground">per bundle</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1">
                  {bundle.items.map((item) => (
                    <Badge key={item} variant="outline" className="text-xs">
                      {item}
                    </Badge>
                  ))}
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2 border-t border-border">
                  <div>
                    <div className="text-sm text-muted-foreground">Attach Rate</div>
                    <div className="text-lg font-semibold text-foreground">{bundle.attachRate}%</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Revenue</div>
                    <div className="text-lg font-semibold text-foreground">{bundle.revenue}</div>
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <Button variant="outline" size="sm" className="w-full">
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>A/B Test Results</CardTitle>
            <CardDescription>
              Experimental insights to optimize bundle strategy
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {experiments.map((exp) => (
              <div key={exp.name} className="p-4 rounded-lg border border-border bg-card/50">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-3">
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{exp.name}</h4>
                    <div className="space-y-1 text-sm">
                      <div>
                        <span className="text-muted-foreground">Variant: </span>
                        <span className="text-foreground">{exp.variant}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Control: </span>
                        <span className="text-foreground">{exp.control}</span>
                      </div>
                    </div>
                  </div>
                  <Badge variant={exp.status === "winner" ? "default" : "secondary"}>
                    {exp.status}
                  </Badge>
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pt-3 border-t border-border">
                  <div className="text-sm">
                    <span className="text-muted-foreground">Metric: </span>
                    <span className="font-medium text-foreground">{exp.metric}</span>
                  </div>
                  <div className="text-sm font-semibold text-green-600">
                    {exp.result}
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Bundles;
