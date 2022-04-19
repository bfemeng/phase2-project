import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Navbar } from 'react-bootstrap'

const App = () => {
  return (
    <div className="App">
      <Navbar bg="dark">
        <Navbar.Brand>
          Handmade By Tay
        </Navbar.Brand>
      </Navbar> 
    </div>
  );
}

export default App;

