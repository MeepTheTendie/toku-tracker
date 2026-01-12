import { doc, getDoc, updateDoc, arrayUnion, arrayRemove, setDoc } from 'firebase/firestore';
import { db } from '../lib/firebase';

export const getWatchedShows = async (userId: string): Promise<string[]> => {
  const docRef = doc(db, 'users', userId);
  const snapshot = await getDoc(docRef);
  if (!snapshot.exists()) return [];
  return snapshot.data().watchedShows || [];
};

export const toggleShowStatus = async ({ userId, showId, isWatched }: { userId: string, showId: string, isWatched: boolean }) => {
  const docRef = doc(db, 'users', userId);
  // Create document if it doesn't exist
  await setDoc(docRef, { lastUpdated: new Date() }, { merge: true });
  
  await updateDoc(docRef, {
    watchedShows: isWatched ? arrayRemove(showId) : arrayUnion(showId)
  });
};
