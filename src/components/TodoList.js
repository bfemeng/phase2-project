import React, { useState, useEffect } from 'react'

const TodoList = () => {
    const [todos, setTodos] = useState("");
    console.log(todos)

    useEffect(() => {
        fetch("http://localhost:3001/todos")
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }, [])

    function handleClick(event) {
        console.log(event)
      }
      
    function handleChange(event) {
        console.log(event.target.value)
      }

    function handleSubmit(event) {
        event.preventDefault()
        console.log("form submit")
    }
    return (
        <div>
          <h1>Todo List </h1>
          <button onClick={handleClick}>Click Me</button>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Add todo" value={todos} onChange={e => setTodos(e.target.value)} 
      />
            <select onChange={handleChange}>
              <option value="1">High</option>
              <option value="2">Low</option>
            </select>
            <button type="submit">Submit todo</button>
          </form>
        </div>
      )
    }



export default TodoList 

// return (
//     <div>TodoList</div>
//   )