import React from 'react';
import TodoItem from '../organisms/TodoItem';

const TodoItemList = ({ todos, toggleTodo, deleteTodo }) => (
  <ul className="list">
    {todos.length === 0 && "No Todos"}
    {todos.map(todo => (
      <TodoItem
        {...todo}
        key={todo.id}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
    ))}
  </ul>
);

export default TodoItemList