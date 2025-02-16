import React from "react";
import { useUser } from "../store/UserContext";
import { User } from '../types/entities';

interface UsersListProps {
  users: User[];
}

export default function UsersList({ users }: UsersListProps) {
  const { selectedUser, setSelectedUser } = useUser();

  return (
    <ul className='user-list'>
      {users.map((user) => (
        <li
          key={user.id}
          onClick={() => setSelectedUser(user)}
          className={`${selectedUser?.id === user.id && "active"}`}
        >
          {selectedUser?.id === user.id ? "🙂" : "😌"} {user.name}
        </li>
      ))}
    </ul>
  );
}
