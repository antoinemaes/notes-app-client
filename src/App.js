import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import Routes from "./Routes";
import "./App.css";


export default () => (
  <div className="App container">
    <Navbar fluid collapseOnSelect>
      <Navbar.Brand>
        <Link to="/">Scratch</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar>
    <Routes />
  </div>
);