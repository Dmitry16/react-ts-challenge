import { Link } from 'react-router-dom';
import { useUser } from "../hooks/useUser";

const Posts = () => {
  const { state } = useUser();

  if (!state.selectedUser) {
    return <p>Please select a user from the <Link to="/">Home page.</Link></p>;
  }

  return (
    <div>
      <Link to="/">Back to Home</Link>
      <h1>Posts by {state.selectedUser.name}</h1>
      <ul>
        {state.posts.length > 0 ? (
          state.posts.map((post) => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))
        ) : (
          <p>No posts found.</p>
        )}
      </ul>
    </div>
  );
};

export default Posts;
