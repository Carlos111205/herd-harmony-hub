import { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: string;
  variant?: "default" | "warning" | "success" | "info";
}

const variantStyles = {
  default: "bg-card border-border",
  warning: "bg-card border-l-4 border-l-warning border-t-border border-r-border border-b-border",
  success: "bg-card border-l-4 border-l-success border-t-border border-r-border border-b-border",
  info: "bg-card border-l-4 border-l-info border-t-border border-r-border border-b-border",
};

const iconVariantStyles = {
  default: "bg-primary/10 text-primary",
  warning: "bg-warning/10 text-warning",
  success: "bg-success/10 text-success",
  info: "bg-info/10 text-info",
};

const StatCard = ({ title, value, icon: Icon, trend, variant = "default" }: StatCardProps) => {
  return (
    <div className={`rounded-xl border p-5 shadow-card transition-all hover:shadow-elevated ${variantStyles[variant]}`}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="mt-1 text-3xl font-bold font-display text-card-foreground">{value}</p>
          {trend && (
            <p className="mt-1 text-xs font-medium text-success">{trend}</p>
          )}
        </div>
        <div className={`rounded-lg p-2.5 ${iconVariantStyles[variant]}`}>
          <Icon className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
};

export default StatCard;
