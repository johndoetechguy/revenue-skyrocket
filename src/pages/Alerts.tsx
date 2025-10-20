import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  AlertTriangle, 
  TrendingUp, 
  Lightbulb, 
  Bell, 
  CheckCircle2,
  XCircle,
  Clock
} from "lucide-react";

const alerts = [
  {
    id: 1,
    type: "critical",
    title: "Sharp Drop in Mobile Upsell Conversion",
    description: "Mobile web upsell conversion dropped from 38% to 32% over the last 3 days. Potential UI/UX issue detected.",
    timestamp: "2 hours ago",
    status: "active",
    impact: "high",
    recommendation: "Review mobile booking flow and recent deployment changes"
  },
  {
    id: 2,
    type: "opportunity",
    title: "Premium Cabin Demand Spike on LAX-JFK",
    description: "Business class demand increased 45% on LAX-JFK route. Strong upsell opportunity for economy passengers.",
    timestamp: "4 hours ago",
    status: "active",
    impact: "high",
    recommendation: "Target economy passengers with upgrade offers at 20% discount"
  },
  {
    id: 3,
    type: "insight",
    title: "Family Segment Bundle Performance",
    description: "Family Travel Pack bundle showing 43% attach rate, outperforming individual ancillaries by 28%.",
    timestamp: "6 hours ago",
    status: "resolved",
    impact: "medium",
    recommendation: "Expand bundle to more routes and promote in family segment campaigns"
  },
  {
    id: 4,
    type: "warning",
    title: "Loyalty Member Upsell Decline",
    description: "Platinum tier members showing 15% lower paid upgrade acceptance. May expect complimentary upgrades.",
    timestamp: "1 day ago",
    status: "active",
    impact: "medium",
    recommendation: "Test complimentary upgrade offers or enhanced loyalty incentives"
  },
  {
    id: 5,
    type: "opportunity",
    title: "High-Value Segment Identified",
    description: "Last-minute business travelers on routes >6hrs show 82% premium seat acceptance. 12.5K customers monthly.",
    timestamp: "1 day ago",
    status: "active",
    impact: "high",
    recommendation: "Create targeted campaign with dynamic pricing for this segment"
  }
];

const suggestions = [
  {
    title: "Test Baggage Bundle on European Routes",
    description: "European routes show high baggage add-on rates but low bundle adoption. Test bundled offer.",
    expectedImpact: "+$250K monthly",
    confidence: 78
  },
  {
    title: "Mobile One-Tap Upgrade Experiment",
    description: "Simplify mobile upgrade flow to single-tap acceptance to reduce friction and abandonment.",
    expectedImpact: "+8% mobile conversion",
    confidence: 85
  },
  {
    title: "Post-Booking Upgrade Retargeting",
    description: "60% of non-converters can be retargeted via email/app. Test 24hr post-booking upgrade offers.",
    expectedImpact: "+$180K monthly",
    confidence: 72
  }
];

const Alerts = () => {
  const getAlertIcon = (type: string) => {
    switch (type) {
      case "critical": return <AlertTriangle className="w-5 h-5 text-red-600" />;
      case "opportunity": return <TrendingUp className="w-5 h-5 text-green-600" />;
      case "insight": return <Lightbulb className="w-5 h-5 text-blue-600" />;
      default: return <Bell className="w-5 h-5 text-yellow-600" />;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "resolved": return <CheckCircle2 className="w-4 h-4" />;
      case "dismissed": return <XCircle className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <DashboardLayout>
      <div className="p-4 md:p-8 space-y-6 md:space-y-8">
        <div className="space-y-2">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">Alerts & Actionable Insights</h1>
          <p className="text-sm md:text-base text-muted-foreground">
            Real-time notifications and AI-powered recommendations
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Active Alerts</CardDescription>
              <CardTitle className="text-2xl md:text-3xl">4</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-sm text-red-600">
                <AlertTriangle className="w-4 h-4" />
                <span>1 critical</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Opportunities</CardDescription>
              <CardTitle className="text-2xl md:text-3xl">2</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-sm text-green-600">
                <TrendingUp className="w-4 h-4" />
                <span>High revenue impact</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Insights Generated</CardDescription>
              <CardTitle className="text-2xl md:text-3xl">18</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Lightbulb className="w-4 h-4" />
                <span>This week</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Resolved Today</CardDescription>
              <CardTitle className="text-2xl md:text-3xl">3</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4" />
                <span>83% resolution rate</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <CardTitle>Recent Alerts</CardTitle>
                <CardDescription>
                  Real-time notifications requiring attention
                </CardDescription>
              </div>
              <Button variant="outline" size="sm">
                <Bell className="w-4 h-4 mr-2" />
                Configure Alerts
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {alerts.map((alert) => (
              <div 
                key={alert.id} 
                className={`p-4 rounded-lg border ${
                  alert.status === "resolved" 
                    ? "border-border bg-card/30 opacity-60" 
                    : "border-border bg-card/50"
                }`}
              >
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="shrink-0 mt-1">
                    {getAlertIcon(alert.type)}
                  </div>
                  
                  <div className="flex-1 space-y-2">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{alert.title}</h4>
                        <p className="text-sm text-muted-foreground">{alert.description}</p>
                      </div>
                      <div className="flex gap-2">
                        <Badge variant={alert.impact === "high" ? "default" : "secondary"}>
                          {alert.impact} impact
                        </Badge>
                        <Badge variant="outline" className="gap-1">
                          {getStatusIcon(alert.status)}
                          {alert.status}
                        </Badge>
                      </div>
                    </div>

                    <div className="p-3 rounded-md bg-muted/50 border border-border">
                      <div className="text-xs text-muted-foreground mb-1">Recommendation</div>
                      <div className="text-sm text-foreground">{alert.recommendation}</div>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-2 pt-2">
                      <span className="text-xs text-muted-foreground">{alert.timestamp}</span>
                      {alert.status === "active" && (
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            Dismiss
                          </Button>
                          <Button size="sm">
                            Take Action
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>AI Experiment Suggestions</CardTitle>
            <CardDescription>
              Data-driven recommendations for revenue optimization
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {suggestions.map((suggestion, idx) => (
              <div key={idx} className="p-4 rounded-lg border border-border bg-gradient-to-r from-card/50 to-primary/5">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-3">
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-1">{suggestion.title}</h4>
                    <p className="text-sm text-muted-foreground">{suggestion.description}</p>
                  </div>
                  <Badge variant="secondary" className="self-start">
                    {suggestion.confidence}% confidence
                  </Badge>
                </div>
                
                <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-border">
                  <div className="text-sm">
                    <span className="text-muted-foreground">Expected Impact: </span>
                    <span className="font-semibold text-green-600">{suggestion.expectedImpact}</span>
                  </div>
                  <Button size="sm">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Run Experiment
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Alerts;
