import React from 'react';
import { useFetchTodos } from '../hooks/useFetchTodos';
import { useUser } from '../store/UserContext';
import List from '../components/List';

export default function Todos() {
  const { selectedUser } = useUser();
  const { todos } = useFetchTodos(selectedUser?.id);

  return <>
    <p>✅ Completed: <strong>{ todos.filter(todo => todo.completed).length }</strong></p>
    <p className='uncompleted'>❌ Uncompleted: <strong>{ todos.filter(todo => !todo.completed).length }</strong></p>
    { todos.length === 0 ? <p>No Todos list...</p> : <List listArray={todos} /> }
  </>;
}
