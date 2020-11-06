import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { Auth } from "aws-amplify";

import Routes from "./Routes";
import { AppContext } from "./libs/contextLib";
import "./App.css";



export default function App() {

  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const history = useHistory();

  async function onLoad() {
    try {
      await Auth.currentSession();
      userHasAuthenticated(true);
    }
    catch(e) {
      if (e !== 'No current user') {
        alert(e);
      }
    }
  
    setIsAuthenticating(false);
  }

  useEffect(function() { onLoad() }, []);

  async function handleLogout() {
    await Auth.signOut();
    userHasAuthenticated(false);
    alert("Succesfully logged out.");
    //history.push("/login");
  }

  return (
    !isAuthenticating &&
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