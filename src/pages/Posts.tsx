import { useUser } from '../store/UserContext';
import { useFetchPosts } from '../hooks/useFetchPosts';
import List from '../components/List';

const Posts = () => {
  const { selectedUser } = useUser();
  const { posts, loading, error } = useFetchPosts(selectedUser?.id)

  if(loading) return <div>loading...</div>
  if(error) return <div className='error'>{error}</div>

  return (
    <List listArray={posts} />
  );
};

export default Posts;
