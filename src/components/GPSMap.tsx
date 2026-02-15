import { MapPin, Fence, Radio } from "lucide-react";

interface CattlePosition {
  id: number;
  name: string;
  tag: string;
  x: number;
  y: number;
  inZone: boolean;
  bellActive: boolean;
}

const cattle: CattlePosition[] = [
  { id: 1, name: "Bella", tag: "#0247", x: 35, y: 40, inZone: true, bellActive: true },
  { id: 2, name: "Duke", tag: "#0183", x: 55, y: 30, inZone: true, bellActive: true },
  { id: 3, name: "Rosie", tag: "#0312", x: 70, y: 55, inZone: true, bellActive: true },
  { id: 4, name: "Thunder", tag: "#0099", x: 25, y: 65, inZone: true, bellActive: false },
  { id: 5, name: "Daisy", tag: "#0401", x: 88, y: 25, inZone: false, bellActive: true },
  { id: 6, name: "Rex", tag: "#0155", x: 45, y: 70, inZone: true, bellActive: true },
  { id: 7, name: "Luna", tag: "#0278", x: 60, y: 48, inZone: true, bellActive: true },
  { id: 8, name: "Max", tag: "#0333", x: 30, y: 50, inZone: true, bellActive: true },
];

const GPSMap = () => {
  return (
    <div className="rounded-xl border bg-card shadow-card">
      <div className="flex items-center gap-2 border-b px-5 py-4">
        <MapPin className="h-5 w-5 text-primary" />
        <h3 className="font-display font-semibold text-card-foreground">GPS Fence Map</h3>
        <div className="ml-auto flex items-center gap-3 text-xs">
          <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-success" /> In Zone</span>
          <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-destructive" /> Out of Zone</span>
        </div>
      </div>
      <div className="relative aspect-[2/1] bg-primary/5 overflow-hidden">
        {/* Grid lines */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* Fence boundary */}
          <polygon
            points="10,15 80,10 85,80 15,85"
            fill="hsl(152, 45%, 28%, 0.06)"
            stroke="hsl(152, 45%, 28%, 0.3)"
            strokeWidth="0.5"
            strokeDasharray="2,1"
          />
          {/* Grid */}
          {[20, 40, 60, 80].map(v => (
            <g key={v}>
              <line x1={v} y1="0" x2={v} y2="100" stroke="hsl(152, 45%, 28%, 0.08)" strokeWidth="0.3" />
              <line x1="0" y1={v} x2="100" y2={v} stroke="hsl(152, 45%, 28%, 0.08)" strokeWidth="0.3" />
            </g>
          ))}
        </svg>

        {/* Cattle positions */}
        {cattle.map((c) => (
          <div
            key={c.id}
            className="absolute group"
            style={{ left: `${c.x}%`, top: `${c.y}%`, transform: "translate(-50%, -50%)" }}
          >
            <div className={`relative flex h-6 w-6 items-center justify-center rounded-full transition-transform hover:scale-125 ${c.inZone ? "bg-success" : "bg-destructive"}`}>
              <span className="text-[8px] font-bold text-success-foreground">🐄</span>
              {!c.inZone && (
                <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-destructive opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-destructive" />
                </span>
              )}
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 top-full mt-1 hidden group-hover:block z-10 whitespace-nowrap rounded-md bg-foreground px-2 py-1 text-[10px] font-medium text-background shadow-lg">
              {c.name} {c.tag}
            </div>
          </div>
        ))}

        {/* Fence label */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-md bg-card/90 backdrop-blur px-2.5 py-1.5 border shadow-sm">
          <Fence className="h-3.5 w-3.5 text-primary" />
          <span className="text-xs font-medium text-card-foreground">Zone A — North Pasture</span>
        </div>
      </div>
    </div>
  );
};

export default GPSMap;
