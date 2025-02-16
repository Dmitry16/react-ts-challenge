import React from 'react'
import { useFetchUsers } from '../hooks/useFetchUsers';
import UsersList from './UsersList';

export default function Users() {
  const { users, loading, error } = useFetchUsers();

  return (
      <div className='users'>
        <div className='titles'>
          <h1>List of Users</h1>
        </div>
  
        {loading && <p>Loading...</p>}
        {error && <p className='error'>{error}</p>}
        
        <UsersList users={users} />
      </div>
  )
}
