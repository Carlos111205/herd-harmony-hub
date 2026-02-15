import { List, Search, Plus } from "lucide-react";
import CattleTable from "@/components/CattleTable";

const CattlePage = () => {
  return (
    <main className="mx-auto max-w-7xl p-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="font-display text-2xl font-bold text-foreground flex items-center gap-2">
            <List className="h-6 w-6 text-primary" />
            Cattle Management
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            View and manage your entire herd inventory
          </p>
        </div>
        <button className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors">
          <Plus className="h-4 w-4" />
          Add Cattle
        </button>
      </div>

      {/* Search bar */}
      <div className="mb-6 flex items-center gap-3">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search by name, tag, breed..."
            className="w-full rounded-lg border bg-card pl-10 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
        </div>
      </div>

      <CattleTable />
    </main>
  );
};

export default CattlePage;
