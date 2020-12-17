import React from 'react'
import Todo from './Todo'

// Todolist.js is a module which has function Todolist which is exported by default when this module is imported

// This is a functional component which Todolist
// It takse an arrays of todos as props
// which are then rendered by Todo cunctional component


export default function Todolist({todos}) {
    // this functional component rescieves props.todos which is an array of todos
    return (
        todos.map( (todo) => <Todo todo={todo}/> )
    )
}
