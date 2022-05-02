import React from 'react'
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Home from './Home';
import Inventory from './Inventory';
import TodoList from './TodoList';
import Requirements from './Requirements';
import Navbar from './Navbar';
//import './src/App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/inventory" element={<Inventory/>} />
          <Route path="/todos" element={<TodoList/>} />
          <Route path="/requirements" element={<Requirements/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
