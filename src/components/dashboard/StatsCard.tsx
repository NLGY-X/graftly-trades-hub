
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatsCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  description?: string;
  trend?: {
    value: string;
    positive: boolean;
  };
  className?: string;
}

export function StatsCard({
  title,
  value,
  icon,
  description,
  trend,
  className,
}: StatsCardProps) {
  return (
    <Card className={cn("overflow-hidden transition-all hover:shadow-md", className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
        <div className="h-5 w-5 text-muted-foreground">{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {description && (
          <p className="text-xs text-muted-foreground mt-1">{description}</p>
        )}
        {trend && (
          <div className="mt-2 flex items-center text-xs font-medium">
            <span
              className={cn(
                "flex items-center gap-1 rounded-full px-1.5 py-0.5",
                trend.positive ? "bg-success/10 text-success" : "bg-destructive/10 text-destructive"
              )}
            >
              {trend.positive ? "↑" : "↓"} {trend.value}
            </span>
            <span className="text-muted-foreground ml-2">vs last month</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
