import { Bell } from "lucide-react";
import BellStatus from "@/components/BellStatus";
import StatCard from "@/components/StatCard";
import { Battery, Signal, BellOff } from "lucide-react";

const BellsPage = () => {
  return (
    <main className="mx-auto max-w-7xl p-8">
      <div className="mb-8">
        <h1 className="font-display text-2xl font-bold text-foreground flex items-center gap-2">
          <Bell className="h-6 w-6 text-secondary" />
          Electronic Bells
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Monitor and manage all electronic bell devices
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 mb-8">
        <StatCard title="Active Bells" value={241} icon={Bell} variant="success" />
        <StatCard title="Low Battery" value={3} icon={Battery} variant="warning" />
        <StatCard title="Inactive" value={7} icon={BellOff} variant="info" />
      </div>

      <BellStatus />
    </main>
  );
};

export default BellsPage;
