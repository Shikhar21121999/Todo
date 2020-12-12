import React from 'react'
import Todo from '/Todo'

export default function Todolist({todos}) {
    // this functional component rescieves props.todos which is an array of todos
    return (
        todos.map( (todo) => <Todo todo={todo}/> )
    )
}
