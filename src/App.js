import React, { useState,useRef } from 'react';
import Todolist from './Todolist'
import { uuid } from 'uuidv4';

// This is a App functional component
// It is a stateful functional component

// This app component further contains Todolist functional component
// This also has other elements such as input button,clear button
// and a text message which displays number of todos left




function App() {

  // utility function that prints the value in input dialog box when add to do is clicked

  const [todos,setTodos]=useState([])
  // we use usetate to declare and initialize a state
  // use state returns two things first is a variable for the current state
  // second is the function that can be used to alter or change this state
  // we use destructuring as in ES6 to store them as todos and setTodos

  const new_todo_input_ref=useRef()

  function new_todo_add(e) {
    
    const todo_title=new_todo_input_ref.current.value
    if(todo_title ==='')return

    // using the function form as we need to acess the prev value
    setTodos(prevlistTodo => {
      return [...prevlistTodo,{id:uuid(),title:todo_title,status:false}];
    })
    new_todo_input_ref.current.value=null
  }



  return (
    <>
      <Todolist todos={todos}/>
      <input ref={new_todo_input_ref} type="text"/>
      <button onClick={new_todo_add}>Add a new todo</button>
      <button>Clear complete</button>
      <div>0 left to do</div>
    </>
  )
}

export default App;
