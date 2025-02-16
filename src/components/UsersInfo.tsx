import React from 'react'
import { useUser } from '../store/UserContext'
import { SHOW_BUTTONS } from '../constants/buttons';
import { Link } from 'react-router-dom';

export default function UsersInfo() {
  const { selectedUser } = useUser();

  return (
    <div className='user-info'>
      <h2>{selectedUser?.name || "Select User"}</h2>
      <p className='italic'>☎️ {selectedUser?.phone || "xxx-xxx-xxxx"}</p>
      {
        SHOW_BUTTONS.map((button, index) => <Link key={index} to={button.url}>{button.text}</Link>)
      }
    </div>
  )
}
