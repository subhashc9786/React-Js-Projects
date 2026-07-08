import React from 'react'

export const TodoRow = ({ todo } = {}) => {
    const { id, todo: name } = todo || {};
    return (
        <div>
            <span>{name}</span>
        </div>
    )
}
