import React, { useState, useEffect } from 'react'

const TodoList = () => {
    useEffect(() => {
        fetch("http://localhost:3001/todos")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setTodoList(data)
        })
    }, [])
  return (
    <div>TodoList</div>
  )
}

export default TodoList 