import { useEffect, useState } from 'react';
import { fetchAlbumPhotos } from '../api/api';
import { Photo } from '../types/entities';

export const useFetchPhotos = (albumId: number) => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getPhotos = async () => {
      try {
        setLoading(true);
        const photosData = await fetchAlbumPhotos(albumId);
        setPhotos(photosData);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message || 'Failed to fetch photos');
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    if (albumId) getPhotos();
  }, [albumId]);

  return { photos, loading, error };
};
