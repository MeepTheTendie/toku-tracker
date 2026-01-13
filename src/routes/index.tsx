import { createFileRoute, useRouter } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { convex } from "../lib/convex";
import { api } from "../../convex/_generated/api";
import { Check } from "lucide-react";

export const Route = createFileRoute("/")({
  loader: async () => {
    const shows = await convex.query(api.shows.getAllShows);
    const progress = await convex.query(api.progress.getProgress);
    return { shows, progress };
  },
  component: TrackerPage,
});

function TrackerPage() {
  const { shows, progress } = Route.useLoaderData();
  const [activeTab, setActiveTab] = useState<"rider" | "sentai" | "metal">(
    "rider",
  );
  const router = useRouter();

  const stats = useMemo(() => {
    const currentShows = shows.filter((s: any) => s.franchise === activeTab);
    const total = currentShows.length;
    const watched = currentShows.filter((s: any) => progress[s.id]).length;
    return {
      total,
      watched,
      percent: total ? Math.round((watched / total) * 100) : 0,
    };
  }, [shows, progress, activeTab]);

  const showsByEra = useMemo(() => {
    const currentFranchise = shows.filter(
      (s: any) => s.franchise === activeTab,
    );
    return currentFranchise.reduce((acc: Record<string, any[]>, show: any) => {
      if (!acc[show.era]) acc[show.era] = [];
      acc[show.era].push(show);
      return acc;
    }, {});
  }, [shows, activeTab]);

  return (
    <div className="max-w-4xl mx-auto pb-20">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Toku Tracker</h1>
      </div>

      <div className="flex gap-4 mb-6 border-b border-gray-800">
        {(["rider", "sentai", "metal"] as const).map((f) => (
          <button
            key={f}
            onClick={() => setActiveTab(f)}
            className={`pb-2 px-4 capitalize ${
              activeTab === f
                ? "border-b-2 border-green-500 text-green-400"
                : "text-gray-500"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mb-8 bg-gray-800 p-4 rounded-lg">
        <div className="flex justify-between mb-2 text-sm">
          <span>{stats.percent}% Complete</span>
          <span>
            {stats.watched} / {stats.total} Shows
          </span>
        </div>
        <div className="w-full bg-gray-900 h-2 rounded-full overflow-hidden">
          <div
            className="bg-green-500 h-full transition-all duration-300"
            style={{ width: `${stats.percent}%` }}
          />
        </div>
      </div>

      <div className="space-y-8">
        {Object.entries(showsByEra).map(([era, eraShows]) => (
          <div key={era}>
            <h2 className="text-lg font-bold mb-4 text-gray-400 border-l-4 border-gray-700 pl-3 capitalize">
              {era.replace(/([A-Z])/g, " $1").trim()}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {(eraShows as any[]).map((show) => {
                const isWatched = progress[show.id];
                return (
                  <button
                    key={show.id}
                    onClick={async () => {
                      await convex.mutation(api.progress.toggleShow, {
                        showId: show.id,
                        watched: !isWatched,
                      });
                      router.invalidate();
                    }}
                    className={`p-4 rounded-lg text-left transition-all border ${
                      isWatched
                        ? "bg-green-900/20 border-green-800 text-green-100"
                        : "bg-[#1e1e1e] border-[#333] hover:bg-[#252525]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded border flex items-center justify-center ${
                          isWatched
                            ? "bg-green-500 border-green-500"
                            : "border-gray-600"
                        }`}
                      >
                        {isWatched && <Check className="w-3 h-3 text-black" />}
                      </div>
                      <span className="font-medium">{show.title}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
