import React, { useState, useEffect } from 'react'

const TodoList = () => {
    const [todos, setTodos] = useState("");
    const [todoList, setTodolist] = useState([])
    //console.log(todos)

    useEffect(() => {
        fetch("http://localhost:3001/todos")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setTodolist(data)
        })
    }, [todoList])

    // function handleClick(event) {
    //     console.log(event)
    //   }
      
    function handleChange(event) {
        console.log(event.target.value)
      }

    function handleSubmit(event) {
        event.preventDefault()
        console.log("form submit")
        fetch ('http://localhost:3001/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({content:todos})
        })
        .then(r => r.json())
        .then(data => {console.log(data)})
    }

    const listItems = todoList.map((todoList) =>
      <li key={todoList.content}>
      {todoList.content}
      </li>
    );


    return (
        <div>
            <hr></hr>
          <h1>Todo List </h1>
          <form onSubmit={handleSubmit}>
              <hr></hr>
            <input type="text" placeholder="Add todo" value={todos} onChange={e => setTodos(e.target.value)} />
            <select onChange={handleChange}>
              <option value="1">High</option>
              <option value="2">Low</option>
            </select>
            <button type="submit">Submit todo</button>
          </form>
          <ul>
          {listItems}
          </ul>
        </div>
      )
    }



export default TodoList 
