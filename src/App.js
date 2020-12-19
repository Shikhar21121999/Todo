import React, { useState,useRef,useEffect } from 'react';
import Todolist from './Todolist'
import { uuid } from 'uuidv4';

// This is a App functional component
// It is a stateful functional component

// This app component further contains Todolist functional component
// This also has other elements such as input button,clear button
// and a text message which displays number of todos left




function App() {

  // utility function that prints the value in input dialog box when add to do is clicked

  const [todoarr,setTodoarr]=useState([])
  const new_todo_input_ref=useRef()
  // we use usetate to declare and initialize a state
  // use state returns two things first is a variable for the current state
  // second is the function that can be used to alter or change this state
  // we use destructuring as in ES6 to store them as todos and setTodos

  // now to ensure that data is stored even after refresh we store the data in local storage
  // to manage local storage and ensure that data stored in local storage always corrosponds to the
  // data that we have on app we use useState

  // to retrieve the data from local storage
  useEffect(() =>{
    const stored_todos = JSON.parse(localStorage.getItem('todoarraykey'))
    console.log("initial local storage: " );
    console.log(stored_todos)

    if (stored_todos) setTodoarr(stored_todos)
  },[])

  // to update data in local storage
  useEffect(() => {
      console.log("changed took place updating local storage");
      console.log(todoarr)
      localStorage.setItem('todoarraykey',JSON.stringify(todoarr))
    },[todoarr]
  )

  

  

  function new_todo_add(e) {
    
    const todo_title=new_todo_input_ref.current.value
    if(todo_title ==='')return

    // using the function form as we need to acess the prev value
    setTodoarr(prevlistTodo => {
      return [...prevlistTodo,{id:uuid(),title:todo_title,status:false}];
    })
    new_todo_input_ref.current.value=null
  }

  function update_todo_check(currid) {
    // this is a utility function for changing the checked status of todo
    // whose id is given

    const todo_arr_copy=[...todoarr]

    // now we find the todo(object) with given id that is the one which is clicked
    const curr_todo=todo_arr_copy.find(({id}) => id===currid);

    // toggle status of current_todo

    curr_todo.status=!curr_todo.status;
    
    // we update the tododarr
    setTodoarr(todo_arr_copy);
    
  }


  function remove_completed(){
  // This is a utility function that is used to remove
  // all the todos that are complete

  const incomplete_todo_arr=todoarr.filter( ({status}) => !status )
  // we make an array of all incomplete todo

  // and set todoarr as the incomplete todo array
  setTodoarr(incomplete_todo_arr)
}



  return (
    <>
      <Todolist todoarr={todoarr} update_todo_check={update_todo_check}/>
      <input ref={new_todo_input_ref} type="text"/>
      <button onClick={new_todo_add}>Add a new todo</button>
      <button onClick={remove_completed}>Clear complete</button>
      <div>{todoarr.filter( ({status}) => !status).length} left to do</div>
    </>
  )
}

export default App;
