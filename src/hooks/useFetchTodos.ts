import { useEffect, useState } from 'react';
import { fetchUserTodos } from '../api/api';
import { Todo } from '../types/entities';

export const useFetchTodos = (userId: number) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getTodos = async () => {
      try {
        setLoading(true);
        const todosData = await fetchUserTodos(userId);
        setTodos(todosData);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message || 'Failed to fetch todos');
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    if (userId) getTodos();
  }, [userId]);

  return { todos, loading, error };
};
