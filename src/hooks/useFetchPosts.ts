import { useEffect, useState } from 'react';
import { fetchUserPosts } from '../api/api';
import { Post } from '../types/entities';

export const useFetchPosts = (userId: number) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getPosts = async () => {
      try {
        setLoading(true);
        const postsData = await fetchUserPosts(userId);
        setPosts(postsData);
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

    if (userId) getPosts();
  }, [userId]);

  return { posts, loading, error };
};
