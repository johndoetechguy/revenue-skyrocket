import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { AIRecommendationCard } from "@/components/dashboard/AIRecommendationCard";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Sparkles, TrendingUp, Users, Map, Target } from "lucide-react";

const recommendations = {
  upsell: [
    {
      title: "Dynamic Pricing for Premium Seats",
      description: "Implement time-based pricing for premium cabin upgrades. Data shows 34% higher conversion when offers are personalized based on booking window.",
      confidence: 91,
      impact: "high" as const,
      category: "Pricing Strategy",
    },
    {
      title: "Post-Purchase Upgrade Offers",
      description: "Send targeted upgrade offers 48-72 hours after booking. This timing shows 28% better acceptance rates than at-booking offers.",
      confidence: 84,
      impact: "high" as const,
      category: "Timing Optimization",
    },
    {
      title: "Bundle Ancillaries for Families",
      description: "Create family-focused bundles (4+ travelers) combining seats, bags, and meals. Shows 43% higher conversion vs individual upsells.",
      confidence: 76,
      impact: "medium" as const,
      category: "Product Bundling",
    },
    {
      title: "Mobile UX Enhancement",
      description: "Simplify mobile upgrade flow - current abandonment rate is 31%. Recommend single-tap upgrade option for returning customers.",
      confidence: 82,
      impact: "medium" as const,
      category: "UX Optimization",
    },
  ],
  segments: [
    {
      title: "High-Value Leisure Segment",
      description: "Premium leisure travelers (18.9K) show 54% upgrade rate but are under-targeted. Recommend dedicated campaign for long-haul routes.",
      confidence: 88,
      impact: "high" as const,
      category: "Segment Targeting",
    },
    {
      title: "Business Traveler Retention",
      description: "28.5K business travelers at 62% conversion - focus on loyalty benefits and flexible fare brands to prevent churn.",
      confidence: 79,
      impact: "high" as const,
      category: "Retention Strategy",
    },
    {
      title: "Occasional Traveler Activation",
      description: "34.8K occasional travelers at 18% conversion. Test promotional offers during holiday booking windows to boost engagement.",
      confidence: 72,
      impact: "medium" as const,
      category: "Activation Campaign",
    },
  ],
  routes: [
    {
      title: "JFK-LHR Capacity Optimization",
      description: "92% demand vs 85% capacity - recommend adding frequency or larger aircraft. Upgrade rate of 58% indicates premium demand.",
      confidence: 89,
      impact: "high" as const,
      category: "Capacity Planning",
    },
    {
      title: "SEA-ICN Revenue Opportunity",
      description: "68% demand with 38% upgrade rate - test promotional cabin upgrades and ancillary bundles to boost per-passenger revenue.",
      confidence: 74,
      impact: "medium" as const,
      category: "Route Optimization",
    },
    {
      title: "Peak Season Route Strategy",
      description: "4 routes in peak season with 82%+ demand - implement surge pricing for premium cabins and prioritize inventory allocation.",
      confidence: 86,
      impact: "high" as const,
      category: "Seasonal Planning",
    },
  ],
  general: [
    {
      title: "AI-Powered Offer Personalization",
      description: "Deploy ML model to predict best offer type per customer. Early tests show 23% conversion lift vs rule-based approach.",
      confidence: 87,
      impact: "high" as const,
      category: "AI/ML Integration",
    },
    {
      title: "Real-Time Demand Forecasting",
      description: "Enhance forecasting model with real-time booking data. Could improve yield management by 12-15% based on competitor benchmarks.",
      confidence: 81,
      impact: "high" as const,
      category: "Predictive Analytics",
    },
    {
      title: "Cross-Channel Attribution",
      description: "62% of conversions involve multiple touchpoints. Implement attribution model to optimize marketing spend across channels.",
      confidence: 78,
      impact: "medium" as const,
      category: "Analytics Enhancement",
    },
    {
      title: "Customer Lifetime Value Tracking",
      description: "Implement CLV prediction model to identify high-value prospects early. Could shift acquisition strategy and improve ROI by 18%.",
      confidence: 85,
      impact: "high" as const,
      category: "Customer Analytics",
    },
  ],
};

const Recommendations = () => {
  return (
    <DashboardLayout>
      <div className="p-8 space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-foreground flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            AI-Powered Recommendations
          </h1>
          <p className="text-muted-foreground">
            Data-driven insights and actionable strategies to optimize revenue
          </p>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="p-4 shadow-card animate-slide-up">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Target className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">Total Recommendations</span>
            </div>
            <p className="text-2xl font-bold text-foreground">16</p>
            <Badge variant="outline" className="bg-success/10 text-success border-success/20 text-xs mt-2">
              8 High Impact
            </Badge>
          </Card>

          <Card className="p-4 shadow-card animate-slide-up">
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="w-8 h-8 text-chart-1" />
              <span className="text-sm font-medium text-muted-foreground">Avg Confidence</span>
            </div>
            <p className="text-2xl font-bold text-foreground">82%</p>
          </Card>

          <Card className="p-4 shadow-card animate-slide-up">
            <div className="flex items-center gap-3 mb-2">
              <Users className="w-8 h-8 text-chart-2" />
              <span className="text-sm font-medium text-muted-foreground">Segments Analyzed</span>
            </div>
            <p className="text-2xl font-bold text-foreground">5</p>
          </Card>

          <Card className="p-4 shadow-card animate-slide-up">
            <div className="flex items-center gap-3 mb-2">
              <Map className="w-8 h-8 text-chart-3" />
              <span className="text-sm font-medium text-muted-foreground">Routes Evaluated</span>
            </div>
            <p className="text-2xl font-bold text-foreground">142</p>
          </Card>
        </div>

        {/* Recommendations by Category */}
        <Tabs defaultValue="all" className="space-y-6">
          <TabsList className="grid grid-cols-5 w-full max-w-2xl">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="upsell">Upsell</TabsTrigger>
            <TabsTrigger value="segments">Segments</TabsTrigger>
            <TabsTrigger value="routes">Routes</TabsTrigger>
            <TabsTrigger value="general">General</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            {[...recommendations.upsell.slice(0, 2), ...recommendations.segments.slice(0, 1), ...recommendations.routes.slice(0, 1), ...recommendations.general.slice(0, 2)].map(
              (rec, index) => (
                <AIRecommendationCard key={index} {...rec} />
              )
            )}
          </TabsContent>

          <TabsContent value="upsell" className="space-y-4">
            {recommendations.upsell.map((rec, index) => (
              <AIRecommendationCard key={index} {...rec} />
            ))}
          </TabsContent>

          <TabsContent value="segments" className="space-y-4">
            {recommendations.segments.map((rec, index) => (
              <AIRecommendationCard key={index} {...rec} />
            ))}
          </TabsContent>

          <TabsContent value="routes" className="space-y-4">
            {recommendations.routes.map((rec, index) => (
              <AIRecommendationCard key={index} {...rec} />
            ))}
          </TabsContent>

          <TabsContent value="general" className="space-y-4">
            {recommendations.general.map((rec, index) => (
              <AIRecommendationCard key={index} {...rec} />
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Recommendations;
