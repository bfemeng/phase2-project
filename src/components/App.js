import React from 'react'
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Home from './Home';
import Inventory from './Inventory';
import TodoList from './TodoList';
import Navbar from './Navbar';
import Form from './Form';
import './index.css';
//import './src/App.css';

const App = () => {
  const [todoList, setTodolist] = useState([])

  function handleListChange(event) {
    setTodolist(event.target.value);
  }

  return (
    <Router>
      <Navbar />
      <div className="App">
        <Form todoList={todoList} handleListChange={handleListChange}/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/inventory" element={<Inventory/>} />
          <Route path="/todos" element={<TodoList/>} />
        </Routes>
      </div>
    </Router>
  )
}


export default App;
