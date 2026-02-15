import { Bell, BellOff, Battery, Signal, Volume2 } from "lucide-react";

interface BellInfo {
  id: number;
  cattle: string;
  tag: string;
  battery: number;
  signal: "strong" | "weak" | "lost";
  active: boolean;
  lastPing: string;
}

const bells: BellInfo[] = [
  { id: 1, cattle: "Bella", tag: "#0247", battery: 85, signal: "strong", active: true, lastPing: "2s ago" },
  { id: 2, cattle: "Duke", tag: "#0183", battery: 62, signal: "strong", active: true, lastPing: "5s ago" },
  { id: 3, cattle: "Rosie", tag: "#0312", battery: 44, signal: "weak", active: true, lastPing: "12s ago" },
  { id: 4, cattle: "Thunder", tag: "#0099", battery: 8, signal: "lost", active: false, lastPing: "3 hr ago" },
  { id: 5, cattle: "Daisy", tag: "#0401", battery: 91, signal: "strong", active: true, lastPing: "1s ago" },
  { id: 6, cattle: "Rex", tag: "#0155", battery: 73, signal: "strong", active: true, lastPing: "3s ago" },
];

const signalColor = {
  strong: "text-success",
  weak: "text-warning",
  lost: "text-destructive",
};

const BellStatus = () => {
  const activeBells = bells.filter(b => b.active).length;

  return (
    <div className="rounded-xl border bg-card shadow-card">
      <div className="flex items-center gap-2 border-b px-5 py-4">
        <Volume2 className="h-5 w-5 text-secondary" />
        <h3 className="font-display font-semibold text-card-foreground">Electronic Bells</h3>
        <span className="ml-auto text-xs text-muted-foreground">{activeBells}/{bells.length} active</span>
      </div>
      <div className="grid gap-2 p-4">
        {bells.map((bell) => (
          <div
            key={bell.id}
            className={`flex items-center gap-3 rounded-lg border px-4 py-3 transition-colors ${bell.active ? "bg-card" : "bg-muted/50 opacity-70"}`}
          >
            {bell.active ? (
              <Bell className="h-4 w-4 text-secondary" />
            ) : (
              <BellOff className="h-4 w-4 text-muted-foreground" />
            )}
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-card-foreground">{bell.cattle}</span>
                <span className="text-xs text-muted-foreground">{bell.tag}</span>
              </div>
              <span className="text-xs text-muted-foreground">{bell.lastPing}</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <Battery className="h-3.5 w-3.5 text-muted-foreground" />
                <span className={`text-xs font-medium ${bell.battery < 20 ? "text-destructive" : "text-muted-foreground"}`}>
                  {bell.battery}%
                </span>
              </div>
              <Signal className={`h-3.5 w-3.5 ${signalColor[bell.signal]}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BellStatus;
