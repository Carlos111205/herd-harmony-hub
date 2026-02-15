import { Heart, Filter } from "lucide-react";
import HealthAlerts from "@/components/HealthAlerts";

const HealthPage = () => {
  return (
    <main className="mx-auto max-w-7xl p-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold text-foreground flex items-center gap-2">
            <Heart className="h-6 w-6 text-destructive" />
            Health Alerts
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Monitor cattle health vitals and receive real-time alerts
          </p>
        </div>
        <button className="flex items-center gap-2 rounded-lg border bg-card px-4 py-2.5 text-sm font-medium text-foreground hover:bg-muted transition-colors">
          <Filter className="h-4 w-4" />
          Filter
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <HealthAlerts />
        <div className="rounded-xl border bg-card shadow-card p-6">
          <h3 className="font-display font-semibold text-card-foreground mb-4">Health Summary</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between rounded-lg bg-success/10 p-4">
              <span className="text-sm font-medium text-foreground">Healthy</span>
              <span className="text-2xl font-bold font-display text-success">244</span>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-warning/10 p-4">
              <span className="text-sm font-medium text-foreground">Needs Attention</span>
              <span className="text-2xl font-bold font-display text-warning">3</span>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-destructive/10 p-4">
              <span className="text-sm font-medium text-foreground">Critical</span>
              <span className="text-2xl font-bold font-display text-destructive">1</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HealthPage;
