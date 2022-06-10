import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';

/* Add basic styling for NavLinks */
const linkStyles = {
  display: "inline-block",
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "black",
  textDecoration: "none",
  color: "white",
};

/* define the NavBar component */
function Navbar() {
  return (
    <div>
      <NavLink
        to="/"
        /* set exact so it knows to only set activeStyle when route is deeply equal to link */
        //exact
        /* add styling to Navlink */
        style={linkStyles}
        /* add prop for activeStyle */
        activestyle={{
          background: "lightpurple",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/inventory"
        //exact
        style={linkStyles}
        activestyle={{
          background: "darkblue",
        }}
      >
        Inventory
      </NavLink>
      <NavLink
        to="/todos"
        //exact
        style={linkStyles}
        activestyle={{
          background: "darkblue",
        }}
      >
        TodoList
      </NavLink>
    </div>
  );
}

export default Navbar