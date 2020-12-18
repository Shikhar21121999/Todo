import React from 'react'
// This is a Todo.js module
// by default it exports functional component Todo 


// This is a stateless functional component which renders todos
export default function Todo({todo}) {
    console.log(todo);
    return (
        <div>
            <label>
                <input type="checkbox" checked={todo.status} />
                {todo.title}
            </label>    
        </div>
    )
}
