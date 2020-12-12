import React, { useState } from 'react';
import Todolist from './Todolist'

function App() {

  const [todos,setTodos]=useState(["todo 1","todo 2"])

  return (
    <>
      <Todolist todos={todos}/>
      <input type="text"/>
      <button>Add to do </button>
      <button>Clear complete</button>
      <div>0 left to do</div>
    </>
  )
}

export default App;
