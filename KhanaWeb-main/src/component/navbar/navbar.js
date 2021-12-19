import  React from "react";
import "./navbar.css"

import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

import Logo from "../../images/logo.jpg"
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';



function Nabar(){
    return(
      <>
     
     <Navbar bg="light" variant="light">
    <Container>
    <Navbar.Brand >< img className="Logo" src={Logo}/></Navbar.Brand>


    <Nav className="me-auto">
      
      <Nav.Link  className="login">
      <Link  to="/Signin">Login</Link>
      </Nav.Link>
    </Nav>
    </Container>
  </Navbar>
    
     
    </>
  


      
    )
}


export default Nabar;