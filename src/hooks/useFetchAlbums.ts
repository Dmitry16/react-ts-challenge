import { useEffect, useState } from 'react';
import { fetchUserAlbums } from '../api/api';
import { Post } from '../types/entities';

export const useFetchAlbums = (userId: number) => {
  const [albums, setAlbums] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getAlbums = async () => {
      try {
        setLoading(true);
        const postsData = await fetchUserAlbums(userId);
        setAlbums(postsData);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message || 'Failed to fetch posts');
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    if (userId) getAlbums();
  }, [userId]);

  return { albums, loading, error };
};
