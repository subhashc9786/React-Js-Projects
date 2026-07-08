import React from 'react'
import { TodoRow } from './TodoRow'

export const TodoList = ({ todos }) => {
    return (
        <div>
            {todos?.map((todo) => {
                return <TodoRow key={todo?.id} todo={todo} />
            })}
        </div>
    )
}
