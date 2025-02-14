import React, { useEffect } from "react";
import { useUser } from "../hooks/useUser";
import { Link } from 'react-router-dom';

const Home = () => {
  const { state, fetchUsers, selectUser } = useUser();
  const { users, selectedUser, todos, loading, error } = state;

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>React + TypeScript</h1>
      <h2>Coding challenge</h2>
      <h3>List of Users</h3>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div className='content'>
        <ul>
          {users.map((user) => (
            <li
              key={user.id}
              onClick={() => selectUser(user)}
              style={{ cursor: "pointer", marginBottom: "5px", fontWeight: selectedUser?.id === user.id ? "bold" : "normal" }}
            >
              {user.name}
            </li>
          ))}
        </ul>

        {selectedUser && (
          <div style={{ marginTop: "20px", padding: "10px", border: "1px solid #ddd" }}>
            <h2>{selectedUser.name}</h2>
            <p><strong>Phone:</strong> {selectedUser.phone}</p>

            <div className='links'>
              <Link to="/posts">Posts</Link>
              <Link to="/photos">Photos</Link>
            </div>


            {/* Todos Summary */}
            <h3>Todos Summary</h3>
            <p>✅ Completed: {todos.filter((todo) => todo.completed).length}</p>
            <p>❌ Uncompleted: {todos.filter((todo) => !todo.completed).length}</p>

            <ul>
              {todos.map((todo) => (
                <li key={todo.id} style={{ marginBottom: "5px" }}>
                  {todo.title} - {todo.completed ? "Completed" : "Uncompleted"}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
