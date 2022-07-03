import react from "react";
import Container from "react-bootstrap/Container";

import Navbar from "react-bootstrap/Navbar";

import "./header.css";

import Figure from 'react-bootstrap/Figure';
import FigureImage from 'react-bootstrap/FigureImage';

let Header=()=>{
    return(
        <Navbar expand="lg" className="trial" variant="dark" bg="dark">
    <Container>
      <Navbar.Brand href="/" className="navbar-brand">
          <Figure>
              <FigureImage 
                  alt="Logo image"
                  src="images/company-logo.png"
                  id="navbar-brand-icon"
              />
          </Figure>
      </Navbar.Brand>
    </Container>
  </Navbar>
    )
}
export default Header;