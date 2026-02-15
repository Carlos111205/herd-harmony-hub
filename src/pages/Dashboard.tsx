import { Beef, Bell, MapPin, AlertTriangle } from "lucide-react";
import StatCard from "@/components/StatCard";
import GPSMap from "@/components/GPSMap";
import HealthAlerts from "@/components/HealthAlerts";
import CattleTable from "@/components/CattleTable";
import BellStatus from "@/components/BellStatus";
import heroImage from "@/assets/hero-farm.jpg";

const Dashboard = () => {
  return (
    <main>
      {/* Hero header */}
      <div className="relative h-48 overflow-hidden">
        <img src={heroImage} alt="Farm landscape" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 to-foreground/40" />
        <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end p-8">
          <h1 className="font-display text-3xl font-bold text-background">Cattle Dashboard</h1>
          <p className="mt-1 text-sm text-background/70">
            Real-time monitoring • GPS fencing • Health tracking • Electronic bells
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl p-8">
        {/* Stats */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard title="Total Cattle" value={248} icon={Beef} trend="+12 this month" variant="default" />
          <StatCard title="Active E-Bells" value={241} icon={Bell} variant="success" />
          <StatCard title="Health Alerts" value={4} icon={AlertTriangle} variant="warning" />
          <StatCard title="Fence Breaches" value={1} icon={MapPin} variant="info" />
        </div>

        {/* Map + Alerts */}
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2"><GPSMap /></div>
          <div><HealthAlerts /></div>
        </div>

        {/* Cattle Table + Bell Status */}
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2"><CattleTable /></div>
          <div><BellStatus /></div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
