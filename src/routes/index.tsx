import { createFileRoute } from '@tanstack/react-router'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { useState, useMemo } from 'react'
import { TOKU_DB, type Franchise, type Show } from '../data/shows'
import { getWatchedShows, toggleShowStatus } from '../api/tracker'
import { auth, googleProvider } from '../lib/firebase'
import { signInWithPopup, signOut } from 'firebase/auth'

export const Route = createFileRoute('/')({
  component: TrackerPage,
})

function TrackerPage() {
  const [user, setUser] = useState(auth.currentUser);
  const [activeTab, setActiveTab] = useState<Franchise>('rider');
  const queryClient = useQueryClient();

  // Auth Listener
  auth.onAuthStateChanged((u) => setUser(u));

  // 1. Fetch Data
  const { data: watchedIds = [] } = useQuery({
    queryKey: ['tracker', user?.uid],
    queryFn: () => getWatchedShows(user!.uid),
    enabled: !!user,
  });

  // 2. Mutation
  const { mutate } = useMutation({
    mutationFn: toggleShowStatus,
    onMutate: async ({ showId, isWatched }) => {
      await queryClient.cancelQueries({ queryKey: ['tracker', user?.uid] });
      const previous = queryClient.getQueryData<string[]>(['tracker', user?.uid]);
      
      queryClient.setQueryData<string[]>(['tracker', user?.uid], (old = []) => 
        isWatched ? old.filter(id => id !== showId) : [...old, showId]
      );
      
      return { previous };
    },
    // We rename error vars to _ to tell TypeScript we know they are unused
    onError: (_err, _vars, context) => {
      queryClient.setQueryData(['tracker', user?.uid], context?.previous);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['tracker', user?.uid] });
    },
  });

  // 3. Stats
  const stats = useMemo(() => {
    const currentShows = TOKU_DB.filter(s => s.franchise === activeTab);
    const total = currentShows.length;
    const watched = currentShows.filter(s => watchedIds.includes(s.id)).length;
    return { total, watched, percent: total ? Math.round((watched / total) * 100) : 0 };
  }, [watchedIds, activeTab]);

  // 4. Grouping by Era (Fixed type definition here)
  const showsByEra = useMemo(() => {
    const currentFranchise = TOKU_DB.filter(s => s.franchise === activeTab);
    
    return currentFranchise.reduce((acc, show) => {
      if (!acc[show.era]) {
        acc[show.era] = [];
      }
      acc[show.era].push(show);
      return acc;
    }, {} as Record<string, Show[]>);
  }, [activeTab]);

  // LOGIN SCREEN
  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center h-[80vh]">
        <h1 className="text-4xl font-bold mb-8 text-green-500">Toku Tracker</h1>
        <button 
          onClick={() => { signInWithPopup(auth, googleProvider); }}
          className="bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition"
        >
          Sign in with Google
        </button>
      </div>
    );
  }

  // MAIN APP
  return (
    <div className="max-w-4xl mx-auto pb-20">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Toku Tracker</h1>
        <button onClick={() => signOut(auth)} className="text-sm text-gray-400 hover:text-white">Sign Out</button>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-6 border-b border-gray-800">
        {(['rider', 'sentai', 'metal'] as Franchise[]).map((f) => (
          <button
            key={f}
            onClick={() => setActiveTab(f)}
            className={`pb-2 px-4 capitalize ${activeTab === f ? 'border-b-2 border-green-500 text-green-400' : 'text-gray-500'}`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Progress */}
      <div className="mb-8 bg-gray-800 p-4 rounded-lg">
        <div className="flex justify-between mb-2 text-sm">
          <span>{stats.percent}% Complete</span>
          <span>{stats.watched} / {stats.total} Shows</span>
        </div>
        <div className="w-full bg-gray-900 h-2 rounded-full overflow-hidden">
          <div className="bg-green-500 h-full transition-all duration-300" style={{ width: `${stats.percent}%` }} />
        </div>
      </div>

      {/* Grid */}
      <div className="space-y-8">
        {Object.entries(showsByEra).map(([era, shows]) => (
          <div key={era}>
            <h2 className="text-lg font-bold mb-4 text-gray-400 border-l-4 border-gray-700 pl-3">{era}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {shows.map((show) => {
                const isWatched = watchedIds.includes(show.id);
                return (
                  <button
                    key={show.id}
                    onClick={() => mutate({ userId: user.uid, showId: show.id, isWatched })}
                    className={`
                      p-4 rounded-lg text-left transition-all border
                      ${isWatched 
                        ? 'bg-green-900/20 border-green-800 text-green-100' 
                        : 'bg-[#1e1e1e] border-[#333] hover:bg-[#252525]'}
                    `}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded border flex items-center justify-center ${isWatched ? 'bg-green-500 border-green-500' : 'border-gray-600'}`}>
                        {isWatched && <span className="text-black text-xs font-bold">✓</span>}
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