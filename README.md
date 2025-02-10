# React + TypeScript Coding Challenge

## Part 1: Implement functionality to render list of users

1. Implement basic functionality to render a list of users.
2. On a list item (user) click fetch the selected user's todos, count completed, uncompleted todos and render selected user's name, phone and numbers of completed and uncompleted todos.

End-point to fetch users: `https://jsonplaceholder.typicode.com/users`
End-point to fetch user's todos: `https://jsonplaceholder.typicode.com/users/${selectedUser.id}/todos`

## Part 2: Extend functionality adding possibility to display posts and photos of the selected user

End-point for posts: `https://jsonplaceholder.typicode.com/users/${selectedUser.id}/posts`
End-point for photos: `https://jsonplaceholder.typicode.com/users/${selectedUser.id}/albums`, `https://jsonplaceholder.typicode.com/albums/1/photos`

1. Add buttons "Show Posts" and "Show Photos". On a button click render Posts or Photos in a new page.

### Routing

1. Add a basic Router.
2. Add 3 pages with routing logic: Home (for the first list of users), User's Posts and User's Photos.

### State management

Implement basic state management logic with useContext, useState and useReducer hooks.

### Unit tests

Add unit tests.
