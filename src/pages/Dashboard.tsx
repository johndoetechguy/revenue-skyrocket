import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { ConversionFunnel } from "@/components/dashboard/ConversionFunnel";
import { SegmentChart } from "@/components/dashboard/SegmentChart";
import { RevenueChart } from "@/components/dashboard/RevenueChart";
import { AIRecommendationCard } from "@/components/dashboard/AIRecommendationCard";
import { TrendingUp, Users, DollarSign, Target } from "lucide-react";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="p-8 space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-foreground">Revenue Analytics Overview</h1>
          <p className="text-muted-foreground">
            Comprehensive insights into customer behavior and upsell performance
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MetricCard
            title="Conversion Rate"
            value="40.2%"
            change={5.4}
            changeLabel="vs last month"
            icon={<Target className="w-6 h-6 text-white" />}
            trend="up"
          />
          <MetricCard
            title="Total Revenue"
            value="$8.2M"
            change={12.3}
            changeLabel="vs last month"
            icon={<DollarSign className="w-6 h-6 text-white" />}
            trend="up"
          />
          <MetricCard
            title="Active Customers"
            value="124.5K"
            change={-2.1}
            changeLabel="vs last month"
            icon={<Users className="w-6 h-6 text-white" />}
            trend="down"
          />
          <MetricCard
            title="Upsell Revenue"
            value="$3.4M"
            change={18.7}
            changeLabel="vs last month"
            icon={<TrendingUp className="w-6 h-6 text-white" />}
            trend="up"
          />
        </div>

        {/* Charts Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <RevenueChart />
          <SegmentChart />
        </div>

        {/* Conversion Funnel */}
        <ConversionFunnel />

        {/* AI Recommendations */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-foreground">AI-Powered Recommendations</h2>
            <span className="text-sm text-muted-foreground">Updated 5 minutes ago</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <AIRecommendationCard
              title="Target Premium Cabin Upgrades"
              description="Business travelers on long-haul flights show 67% higher upgrade acceptance. Focus on routes over 6 hours."
              confidence={89}
              impact="high"
              category="Cabin Upsell"
            />
            <AIRecommendationCard
              title="Bundle Ancillaries for Families"
              description="Family segments respond 43% better to bundled offers (seats + bags + meals) vs individual upsells."
              confidence={76}
              impact="high"
              category="Ancillary Bundle"
            />
            <AIRecommendationCard
              title="Optimize Mobile Upsell Timing"
              description="Mobile users abandon 31% more when offers appear pre-seat selection. Suggest moving to post-selection."
              confidence={82}
              impact="medium"
              category="UX Optimization"
            />
            <AIRecommendationCard
              title="Loyalty Discount Strategy"
              description="High-tier members show low paid upgrade rates but high engagement. Consider complimentary upgrade offers."
              confidence={71}
              impact="medium"
              category="Loyalty Program"
            />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
