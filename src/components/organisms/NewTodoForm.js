import React, { useState } from 'react';
import FormItem from '../molecules/Forms/FormItem';

export function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === "") return;

    onSubmit(newItem);
    setNewItem("");
  }

  return (
      <form onSubmit={handleSubmit} className="new-item-form">
        <FormItem labelFor="item" inputValue={newItem} onInputChange={(e) => setNewItem(e.target.value)} />
      </form>
  );
}
