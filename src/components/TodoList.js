import React, { useState, useEffect } from 'react'
import './index.css';

const TodoList = () => {
    const [todos, setTodos, onDeleteToDo] = useState("");
    const [todoList, setTodolist] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3001/todos`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setTodolist(data)
        })
    }, [])
      
    function handleChange(event) {
        console.log(event.target.value)
      }

    function handleSubmit(event) {
        event.preventDefault()
        console.log("form submit")
        fetch (`http://localhost:3001/todos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({content:todos})
        })
        .then(r => r.text())
        .then(data => {console.log(data)})
    }

    const listItems = todoList.map(todo => <li>{todo.content}</li>);

    function handleChange(event) {
        console.log(event.target.value)
    }

    function handleDelete() {
      fetch(`http://localhost:3001/todos/`, {
        method: "DELETE",
      });
    //   onDeleteTodo to remove todo from state
      onDeleteToDo();
    }

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
            <button className="delete-task" onClick={handleDelete} type="submit">Submit</button>
          </form>
          <ul>
          {listItems}
          </ul>
        </div>
      )
    }
  


export default TodoList
