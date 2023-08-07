import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";

const Topbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">
        FutsalFinder
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav className="mr-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
          <Nav.Link as={Link} to="/home"> 
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="aboutus">
            About Us
          </Nav.Link>
          <NavDropdown title="login/Register" id="navbarScrollingDropdown">
            <NavDropdown.Item><Link to='playerlogin'>Player</Link></NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action4"><Link to='agentlogin'>Agent</Link></NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form className="d-flex search-form ml-auto">
          <FormControl type="search" placeholder="Search" aria-label="Search" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Topbar;
