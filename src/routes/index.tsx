import { createFileRoute } from '@tanstack/react-router'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { useState, useMemo } from 'react'
import { TOKU_DB, type Franchise } from '../data/shows'
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

  // 1. Fetch Data (Removed 'isLoading' to fix error)
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
    // 3. Renamed to _err and _vars so TypeScript doesn't complain
    onError: (_err, _vars, context) => {
      queryClient.setQueryData(['tracker', user?.uid], context?.previous);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['tracker', user?.uid] });
    },
  });

  // 4. Stats & Filtering
  const stats = useMemo(() => {
    const currentShows = TOKU_DB.filter(s => s.franchise === activeTab);
    const total = currentShows.length;
    const watched = currentShows.filter(s => watchedIds.includes(s.id)).length;
    return { total, watched, percent: total ? Math.round((watched / total) * 100) : 0 };
  }, [watchedIds, activeTab]);

  const showsByEra = useMemo(() => {
    return TOKU_DB.filter(s => s.franchise === activeTab).reduce((acc, show) => {
      acc[show.era] = [...(acc[show.era] || []), show];
      return acc;
    }, {} as Record<string, typeof TOKU_DB>);
  }, [activeTab]);

  // LOGIN SCREEN
  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center h-[80vh]"></div>