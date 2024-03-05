import React from 'react';
import Checkbox from '../atoms/Checkbox/Checkbox';
import TodoLabel from '../molecules/TodoLabel';
import TodoActions from '../molecules/TodoActions';

export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
  return (
    <li>
      <Checkbox checked={completed} onChange={e => toggleTodo(id, e.target.checked)} />
      <TodoLabel title={title} />
      <TodoActions deleteTodo={deleteTodo} id={id} />
    </li>
  );
}

export default TodoItem
