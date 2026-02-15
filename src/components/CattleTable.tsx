import { Bell, BellOff, MapPin, CheckCircle, AlertCircle } from "lucide-react";

interface CattleEntry {
  id: number;
  name: string;
  tag: string;
  breed: string;
  age: string;
  weight: string;
  health: "healthy" | "attention" | "critical";
  bellStatus: "active" | "inactive";
  zone: string;
  inFence: boolean;
}

const cattleData: CattleEntry[] = [
  { id: 1, name: "Bella", tag: "#0247", breed: "Angus", age: "4y", weight: "520 kg", health: "critical", bellStatus: "active", zone: "Zone A", inFence: true },
  { id: 2, name: "Duke", tag: "#0183", breed: "Hereford", age: "3y", weight: "580 kg", health: "attention", bellStatus: "active", zone: "Zone A", inFence: true },
  { id: 3, name: "Rosie", tag: "#0312", breed: "Holstein", age: "5y", weight: "490 kg", health: "attention", bellStatus: "active", zone: "Zone A", inFence: true },
  { id: 4, name: "Thunder", tag: "#0099", breed: "Brahman", age: "6y", weight: "620 kg", health: "healthy", bellStatus: "inactive", zone: "Zone A", inFence: true },
  { id: 5, name: "Daisy", tag: "#0401", breed: "Angus", age: "2y", weight: "410 kg", health: "healthy", bellStatus: "active", zone: "Zone B", inFence: false },
  { id: 6, name: "Rex", tag: "#0155", breed: "Charolais", age: "4y", weight: "560 kg", health: "healthy", bellStatus: "active", zone: "Zone A", inFence: true },
];

const healthBadge = {
  healthy: "bg-success/10 text-success",
  attention: "bg-warning/10 text-warning",
  critical: "bg-destructive/10 text-destructive",
};

const CattleTable = () => {
  return (
    <div className="rounded-xl border bg-card shadow-card overflow-hidden">
      <div className="flex items-center gap-2 border-b px-5 py-4">
        <span className="text-lg">🐄</span>
        <h3 className="font-display font-semibold text-card-foreground">Cattle Management</h3>
        <span className="ml-auto text-xs text-muted-foreground">{cattleData.length} head</span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b bg-muted/50 text-left text-xs font-medium uppercase tracking-wider text-muted-foreground">
              <th className="px-5 py-3">Name / Tag</th>
              <th className="px-5 py-3">Breed</th>
              <th className="px-5 py-3">Age</th>
              <th className="px-5 py-3">Weight</th>
              <th className="px-5 py-3">Health</th>
              <th className="px-5 py-3">E-Bell</th>
              <th className="px-5 py-3">GPS Zone</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {cattleData.map((c) => (
              <tr key={c.id} className="transition-colors hover:bg-muted/30">
                <td className="px-5 py-3.5">
                  <div className="font-semibold text-card-foreground">{c.name}</div>
                  <div className="text-xs text-muted-foreground">{c.tag}</div>
                </td>
                <td className="px-5 py-3.5 text-muted-foreground">{c.breed}</td>
                <td className="px-5 py-3.5 text-muted-foreground">{c.age}</td>
                <td className="px-5 py-3.5 text-muted-foreground">{c.weight}</td>
                <td className="px-5 py-3.5">
                  <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${healthBadge[c.health]}`}>
                    {c.health}
                  </span>
                </td>
                <td className="px-5 py-3.5">
                  {c.bellStatus === "active" ? (
                    <Bell className="h-4 w-4 text-success" />
                  ) : (
                    <BellOff className="h-4 w-4 text-muted-foreground" />
                  )}
                </td>
                <td className="px-5 py-3.5">
                  <div className="flex items-center gap-1.5">
                    {c.inFence ? (
                      <CheckCircle className="h-3.5 w-3.5 text-success" />
                    ) : (
                      <AlertCircle className="h-3.5 w-3.5 text-destructive" />
                    )}
                    <span className="text-muted-foreground">{c.zone}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CattleTable;
