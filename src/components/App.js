import React from 'react'
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Home from './Home';
import Inventory from './Inventory';
import TodoList from './TodoList';
import StateRequirements from './StateRequirements';
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
          <Route path="/staterequirements" element={<StateRequirements/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
