// api.ts

// Fetch users
export const fetchUsers = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) throw new Error("Failed to fetch users");
    return await response.json();
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};

// Fetch todos for a specific user
export const fetchUserTodos = async (userId: number) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`);
    if (!response.ok) throw new Error("Failed to fetch todos");
    return await response.json();
  } catch (error) {
    console.error("Error fetching todos:", error);
    return [];
  }
};

// Fetch posts for a specific user
export const fetchUserPosts = async (userId: number) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
    if (!response.ok) throw new Error("Failed to fetch posts");
    return await response.json();
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};

// Fetch albums for a specific user
export const fetchUserAlbums = async (userId: number) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/albums`);
    if (!response.ok) throw new Error("Failed to fetch albums");
    return await response.json();
  } catch (error) {
    console.error("Error fetching albums:", error);
    return [];
  }
};

// Fetch photos from a specific album
export const fetchAlbumPhotos = async (albumId: number) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos`);
    if (!response.ok) throw new Error("Failed to fetch photos");
    return await response.json();
  } catch (error) {
    console.error("Error fetching photos:", error);
    return [];
  }
};
