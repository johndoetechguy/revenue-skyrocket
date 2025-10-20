import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles, TrendingUp, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface AIRecommendationCardProps {
  title: string;
  description: string;
  confidence: number;
  impact: "high" | "medium" | "low";
  category: string;
}

export const AIRecommendationCard = ({
  title,
  description,
  confidence,
  impact,
  category,
}: AIRecommendationCardProps) => {
  const impactColors = {
    high: "bg-success/10 text-success border-success/20",
    medium: "bg-warning/10 text-warning border-warning/20",
    low: "bg-muted text-muted-foreground border-border",
  };

  return (
    <Card className="p-5 shadow-card hover:shadow-glow transition-all duration-300 animate-slide-up">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0 shadow-glow">
          <Sparkles className="w-5 h-5 text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h4 className="font-semibold text-foreground">{title}</h4>
            <Badge variant="outline" className={cn("text-xs", impactColors[impact])}>
              {impact} impact
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground mb-3">{description}</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-success" />
                <span className="text-xs text-muted-foreground">
                  Confidence: <span className="font-medium text-foreground">{confidence}%</span>
                </span>
              </div>
              <Badge variant="secondary" className="text-xs">
                {category}
              </Badge>
            </div>
            <Button variant="ghost" size="sm" className="text-primary hover:text-primary-glow">
              View Details
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};
