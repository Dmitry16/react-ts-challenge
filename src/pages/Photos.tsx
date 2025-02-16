import { useUser } from '../store/UserContext';
import List from '../components/List';
import { useFetchAlbums } from '../hooks/useFetchAlbums';

const Photos = () => {
  const { selectedUser } = useUser();
  const { albums, loading, error } = useFetchAlbums(selectedUser?.id);

  if(loading) return <div>loading...</div>
  if(error) return <div className='error'>{error}</div>

  return (
    <List listArray={albums} />
  );
};

export default Photos;
