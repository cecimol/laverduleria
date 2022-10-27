import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
      <Container>
        <Navbar.Brand href="#home">La Verduleria</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-center" style={{ width: "100%" }}>
            <Nav.Link href="#frutas">Frutas</Nav.Link>
            <Nav.Link href="#verduras">Verduras</Nav.Link>
            <Nav.Link href="#congelados">Congelados</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#cartwidget">
              <CartWidget />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
