import React from 'react'
import DeleteButton from '../atoms/Button/DeleteButton'
import { faTrash } from "@fortawesome/free-solid-svg-icons"

const TodoActions = ({ deleteTodo, id }) => (
    <DeleteButton icon={faTrash} onClick={() => deleteTodo(id)} />
)

export default TodoActions