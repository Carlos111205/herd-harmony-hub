import { BarChart3, TrendingUp, Calendar } from "lucide-react";

const ReportsPage = () => {
  return (
    <main className="mx-auto max-w-7xl p-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold text-foreground flex items-center gap-2">
            <BarChart3 className="h-6 w-6 text-primary" />
            Reports & Analytics
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Comprehensive insights into your herd's performance
          </p>
        </div>
        <button className="flex items-center gap-2 rounded-lg border bg-card px-4 py-2.5 text-sm font-medium text-foreground hover:bg-muted transition-colors">
          <Calendar className="h-4 w-4" />
          Last 30 Days
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[
          { title: "Herd Growth", value: "+12", subtitle: "New cattle this month", color: "bg-success/10 text-success" },
          { title: "Avg Weight Gain", value: "2.3 kg", subtitle: "Per head per week", color: "bg-primary/10 text-primary" },
          { title: "Health Score", value: "94%", subtitle: "Herd-wide average", color: "bg-info/10 text-info" },
          { title: "Fence Breaches", value: "3", subtitle: "This month", color: "bg-warning/10 text-warning" },
          { title: "Bell Uptime", value: "98.2%", subtitle: "Average device uptime", color: "bg-success/10 text-success" },
          { title: "Feed Costs", value: "$12,450", subtitle: "Monthly total", color: "bg-secondary/10 text-secondary" },
        ].map((report) => (
          <div key={report.title} className="rounded-xl border bg-card shadow-card p-6">
            <p className="text-sm font-medium text-muted-foreground">{report.title}</p>
            <p className={`mt-2 text-3xl font-bold font-display ${report.color.split(" ")[1]}`}>
              {report.value}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">{report.subtitle}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-xl border bg-card shadow-card p-6">
        <h3 className="font-display font-semibold text-card-foreground mb-4 flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-primary" />
          Monthly Activity Log
        </h3>
        <div className="space-y-3">
          {[
            { date: "Feb 14", event: "12 new calves registered", type: "info" },
            { date: "Feb 12", event: "Fence breach detected — Zone B", type: "warning" },
            { date: "Feb 10", event: "Bella #0247 flagged for fever", type: "critical" },
            { date: "Feb 8", event: "3 e-bells replaced (low battery)", type: "info" },
            { date: "Feb 5", event: "Monthly weight records updated", type: "info" },
          ].map((log, i) => (
            <div key={i} className="flex items-center gap-4 rounded-lg border px-4 py-3">
              <span className="text-xs font-medium text-muted-foreground w-16">{log.date}</span>
              <span className={`h-2 w-2 rounded-full ${
                log.type === "critical" ? "bg-destructive" : log.type === "warning" ? "bg-warning" : "bg-info"
              }`} />
              <span className="text-sm text-foreground">{log.event}</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ReportsPage;
