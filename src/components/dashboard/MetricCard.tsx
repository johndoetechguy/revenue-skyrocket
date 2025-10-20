import { ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { TrendingUp, TrendingDown } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  change?: number;
  changeLabel?: string;
  icon?: ReactNode;
  trend?: "up" | "down";
  className?: string;
}

export const MetricCard = ({
  title,
  value,
  change,
  changeLabel,
  icon,
  trend,
  className,
}: MetricCardProps) => {
  const isPositive = trend === "up" || (change && change > 0);

  return (
    <Card className={cn("p-6 shadow-card hover:shadow-glow transition-all duration-300 animate-slide-up", className)}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="text-3xl font-bold mt-2 text-foreground">{value}</p>
          {change !== undefined && (
            <div className={cn("flex items-center gap-1 mt-2", isPositive ? "text-success" : "text-destructive")}>
              {isPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
              <span className="text-sm font-medium">{Math.abs(change)}%</span>
              {changeLabel && <span className="text-xs text-muted-foreground ml-1">{changeLabel}</span>}
            </div>
          )}
        </div>
        {icon && (
          <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
            {icon}
          </div>
        )}
      </div>
    </Card>
  );
};
