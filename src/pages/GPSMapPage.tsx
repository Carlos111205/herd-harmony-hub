import { MapPin } from "lucide-react";
import LeafletMap from "@/components/LeafletMap";

const GPSMapPage = () => {
  return (
    <main className="mx-auto max-w-7xl p-8">
      <div className="mb-8">
        <h1 className="font-display text-2xl font-bold text-foreground flex items-center gap-2">
          <MapPin className="h-6 w-6 text-primary" />
          GPS Fence Map
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Real-time cattle positions with virtual fence boundaries
        </p>
      </div>

      <div className="rounded-xl border bg-card shadow-card overflow-hidden">
        <div className="flex items-center gap-3 border-b px-5 py-4">
          <div className="flex items-center gap-3 text-xs">
            <span className="flex items-center gap-1"><span className="h-2.5 w-2.5 rounded-full bg-success" /> In Zone</span>
            <span className="flex items-center gap-1"><span className="h-2.5 w-2.5 rounded-full bg-destructive" /> Out of Zone</span>
          </div>
          <span className="ml-auto text-xs text-muted-foreground">8 cattle tracked</span>
        </div>
        <div className="h-[600px]">
          <LeafletMap />
        </div>
      </div>
    </main>
  );
};

export default GPSMapPage;
