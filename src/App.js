import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

import Routes from "./Routes";
import { AppContext } from "./libs/contextLib";
import "./App.css";



export default function App() {

  const [isAuthenticated, userHasAuthenticated] = useState(false);

  function handleLogout() {
    userHasAuthenticated(false);
    alert("Logged out");
  }

  return (
    <div className="App container">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand as={Link} to="/">Scratch</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          { isAuthenticated ? 
            <Nav>
              <Nav.Link href="#" onClick={handleLogout}>Logout</Nav.Link>
            </Nav>
          : <Nav>
              <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
            </Nav> 
          }
        </Navbar.Collapse>
      </Navbar>
      <AppContext.Provider value={ { isAuthenticated, userHasAuthenticated } }>
        <Routes />
      </AppContext.Provider>
    </div>
  );

}