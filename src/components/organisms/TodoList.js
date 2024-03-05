import React from 'react';
import TodoItemList from '../molecules/TodoItemList';

export function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
      <TodoItemList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
  );
}