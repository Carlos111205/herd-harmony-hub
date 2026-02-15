import { AlertTriangle, Heart, Thermometer, Activity } from "lucide-react";

interface Alert {
  id: number;
  cattle: string;
  tag: string;
  type: "critical" | "warning" | "info";
  message: string;
  time: string;
}

const alerts: Alert[] = [
  { id: 1, cattle: "Bella", tag: "#0247", type: "critical", message: "Temperature above 40°C — possible fever", time: "5 min ago" },
  { id: 2, cattle: "Duke", tag: "#0183", type: "warning", message: "Heart rate elevated during rest period", time: "22 min ago" },
  { id: 3, cattle: "Rosie", tag: "#0312", type: "warning", message: "Unusual movement pattern detected", time: "1 hr ago" },
  { id: 4, cattle: "Thunder", tag: "#0099", type: "info", message: "Rumination time below average today", time: "2 hr ago" },
];

const typeStyles = {
  critical: "border-l-destructive bg-destructive/5",
  warning: "border-l-warning bg-warning/5",
  info: "border-l-info bg-info/5",
};

const typeIcons = {
  critical: Thermometer,
  warning: Heart,
  info: Activity,
};

const HealthAlerts = () => {
  return (
    <div className="rounded-xl border bg-card shadow-card">
      <div className="flex items-center gap-2 border-b px-5 py-4">
        <AlertTriangle className="h-5 w-5 text-warning" />
        <h3 className="font-display font-semibold text-card-foreground">Health Alerts</h3>
        <span className="ml-auto rounded-full bg-destructive/10 px-2.5 py-0.5 text-xs font-semibold text-destructive">
          {alerts.filter(a => a.type === "critical").length} Critical
        </span>
      </div>
      <div className="divide-y">
        {alerts.map((alert) => {
          const Icon = typeIcons[alert.type];
          return (
            <div key={alert.id} className={`flex items-start gap-3 border-l-4 px-5 py-3.5 ${typeStyles[alert.type]}`}>
              <Icon className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-sm text-card-foreground">{alert.cattle}</span>
                  <span className="text-xs text-muted-foreground">{alert.tag}</span>
                </div>
                <p className="text-sm text-muted-foreground">{alert.message}</p>
              </div>
              <span className="shrink-0 text-xs text-muted-foreground">{alert.time}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HealthAlerts;
