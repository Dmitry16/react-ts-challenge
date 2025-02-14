import React, { createContext, useReducer, useContext, ReactNode } from "react";

// Define types
interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface Post {
  id: number;
  title: string;
  body: string;
}

interface Photo {
  id: number;
  title: string;
  thumbnailUrl: string;
  url: string;
}

// Define state type
interface State {
  users: User[];
  todos: Todo[];
  posts: Post[];
  photos: Photo[];
  selectedUser: User | null;
  loading: boolean;
  error: string | null;
}

// Define action types
type Action =
  | { type: "SET_USERS"; payload: User[] }
  | { type: "SET_TODOS"; payload: Todo[] }
  | { type: "SET_POSTS"; payload: Post[] }
  | { type: "SET_PHOTOS"; payload: Photo[] }
  | { type: "SET_SELECTED_USER"; payload: User | null }
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_ERROR"; payload: string | null };

// Initial state
const initialState: State = {
  users: [],
  todos: [],
  posts: [],
  photos: [],
  selectedUser: null,
  loading: false,
  error: null,
};

// Reducer function
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_USERS":
      return { ...state, users: action.payload, loading: false };
    case "SET_TODOS":
      return { ...state, todos: action.payload, loading: false };
    case "SET_POSTS":
      return { ...state, posts: action.payload, loading: false };
    case "SET_PHOTOS":
      return { ...state, photos: action.payload, loading: false };
    case "SET_SELECTED_USER":
      return { ...state, selectedUser: action.payload };
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "SET_ERROR":
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
}

// Create context
const UserContext = createContext<{
  state: State;
  fetchUsers: () => void;
  selectUser: (user: User) => void;
} | undefined>(undefined);

// Provider component
export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Fetch users
  const fetchUsers = async () => {
    dispatch({ type: "SET_LOADING", payload: true });
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
      
      const data: User[] = await response.json();
      dispatch({ type: "SET_USERS", payload: data });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
      dispatch({ type: "SET_ERROR", payload: errorMessage });
    }
  };

  // Select user and fetch related data
  const selectUser = async (user: User) => {
    dispatch({ type: "SET_SELECTED_USER", payload: user });
    dispatch({ type: "SET_LOADING", payload: true });

    try {
      const [todosRes, postsRes, albumsRes] = await Promise.all([
        fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/todos`),
        fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`),
        fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/albums`),
      ]);

      if (!todosRes.ok || !postsRes.ok || !albumsRes.ok) {
        throw new Error("Failed to fetch some user data.");
      }

      const [todos, posts, albums] = await Promise.all([
        todosRes.json(),
        postsRes.json(),
        albumsRes.json(),
      ]);

      // Fetch photos for each album
      const photoPromises = albums.map((album: { id: number }) =>
        fetch(`https://jsonplaceholder.typicode.com/albums/${album.id}/photos`).then(res => res.json())
      );

      const photosArray = await Promise.all(photoPromises);
      const photos: Photo[] = photosArray.flat();

      console.log("posts", posts)

      dispatch({ type: "SET_TODOS", payload: todos });
      dispatch({ type: "SET_POSTS", payload: posts });
      dispatch({ type: "SET_PHOTOS", payload: photos });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
      dispatch({ type: "SET_ERROR", payload: errorMessage });
    }
  };

  return (
    <UserContext.Provider value={{ state, fetchUsers, selectUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
