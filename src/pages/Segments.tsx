import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Users, TrendingUp, DollarSign, Target } from "lucide-react";

const segments = [
  {
    name: "Business Frequent Flyers",
    size: 28500,
    conversion: 62,
    avgRevenue: 1850,
    growth: 8.2,
    characteristics: ["High cabin upgrade rate", "Prefers flexibility", "Mobile-first"],
    color: "hsl(var(--chart-1))",
  },
  {
    name: "Leisure Budget Travelers",
    size: 56200,
    conversion: 23,
    avgRevenue: 420,
    growth: 12.5,
    characteristics: ["Price-sensitive", "Books early", "Family-oriented"],
    color: "hsl(var(--chart-2))",
  },
  {
    name: "Premium Leisure",
    size: 18900,
    conversion: 54,
    avgRevenue: 1320,
    growth: 15.8,
    characteristics: ["Ancillary enthusiasts", "Long-haul focus", "High engagement"],
    color: "hsl(var(--chart-3))",
  },
  {
    name: "Corporate Bookers",
    size: 12400,
    conversion: 71,
    avgRevenue: 2100,
    growth: 5.3,
    characteristics: ["Policy-driven", "Predictable patterns", "Loyalty members"],
    color: "hsl(var(--chart-4))",
  },
  {
    name: "Occasional Travelers",
    size: 34800,
    conversion: 18,
    avgRevenue: 380,
    growth: 3.1,
    characteristics: ["Low frequency", "Holiday bookings", "Deal seekers"],
    color: "hsl(var(--chart-5))",
  },
];

const Segments = () => {
  return (
    <DashboardLayout>
      <div className="p-8 space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-foreground">Customer Segmentation Analysis</h1>
          <p className="text-muted-foreground">
            Detailed breakdown of customer groups by behavior and value
          </p>
        </div>

        {/* Segment Cards */}
        <div className="space-y-4">
          {segments.map((segment, index) => (
            <Card key={index} className="p-6 shadow-card hover:shadow-glow transition-all animate-slide-up">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md"
                    style={{ backgroundColor: segment.color }}
                  >
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{segment.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {segment.size.toLocaleString()} customers
                    </p>
                  </div>
                </div>
                <Badge
                  variant="outline"
                  className={
                    segment.growth > 10
                      ? "bg-success/10 text-success border-success/20"
                      : "bg-primary/10 text-primary border-primary/20"
                  }
                >
                  +{segment.growth}% growth
                </Badge>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Conversion Rate</span>
                  </div>
                  <div className="space-y-2">
                    <p className="text-2xl font-bold text-foreground">{segment.conversion}%</p>
                    <Progress value={segment.conversion} className="h-2" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <DollarSign className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Avg Revenue per Customer</span>
                  </div>
                  <p className="text-2xl font-bold text-foreground">${segment.avgRevenue}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Total Segment Value</span>
                  </div>
                  <p className="text-2xl font-bold text-foreground">
                    ${((segment.size * segment.avgRevenue) / 1000000).toFixed(1)}M
                  </p>
                </div>
              </div>

              <div>
                <p className="text-sm font-medium text-foreground mb-2">Key Characteristics</p>
                <div className="flex flex-wrap gap-2">
                  {segment.characteristics.map((char, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {char}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Segments;
