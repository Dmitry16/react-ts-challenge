import { Album, Post, Todo } from '../types/entities';
import PhotoList from './PhotoList';

interface ListProps {
  listArray: Todo[] | Post[] | Album[];
}

export default function List({ listArray }: ListProps) {
  if (listArray.length === 0) return <p>No items found.</p>;

  const listType =
    listArray.every((item) => "completed" in item) ? "todo" :
    listArray.every((item) => "body" in item) ? "post" :
    "album";

  return (
    <ul className={listType || "unknown"}>
      {listType === "todo" &&
        (listArray as Todo[]).map((todo) => (
          <li key={todo.id}>
            {todo.completed ? "✅" : "❌"} {todo.title}
          </li>
        ))}

      {listType === "post" &&
        (listArray as Post[]).map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}

      {listType === "album" &&
        (listArray as Album[]).map((album) => (
          <li key={album.id}>
            <h3>{album.title}</h3>
            <PhotoList albumId={album.id} />
          </li>
        ))}
    </ul>
  );
}
