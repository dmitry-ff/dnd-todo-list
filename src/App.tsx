import {KeyboardEventHandler, useState} from 'react'
import * as React from "react";

function App() {
  const [todos, setTodos] = useState<string[]>([])

  const handleTodoAdd: KeyboardEventHandler<HTMLInputElement>  =  (e) => {
    console.log(e)
    if (e.key === "Enter") {
      console.log("hello")
      setTodos((t) => [...t, e.currentTarget])
    }
  }

  return (
    <div>
      <ul>
        {todos.map((todo) => <li>{todo}</li>)}
      </ul>
      <input className="border-indigo-600 border-2 outline-0" onKeyDown={handleTodoAdd}/>
    </div>
  )
}

export default App
