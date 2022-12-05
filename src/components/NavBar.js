import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import { CartContext } from "../context/cartContext";
import { useContext } from "react";

const NavBar = () => {
  const { isCartEmpty } = useContext(CartContext);
  return (
    <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
      <Container>
        <Link to={"/"}>
          <Navbar.Brand href="#home">La Verduleria</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="justify-content-center" style={{ width: "100%" }}>
            <Link to={"/category/frutas"}>
              <Nav.Link href="#frutas">Frutas</Nav.Link>
            </Link>
            <Link to={"/category/verduras"}>
              <Nav.Link href="#verduras">Verduras</Nav.Link>
            </Link>
            <Link to={"/category/congelados"}>
              <Nav.Link href="#congelados">Congelados</Nav.Link>
            </Link>
          </Nav>
          {!isCartEmpty() && (
            <Nav>
              <Link to={"/cart"}>
                <Nav.Link href="#cartwidget">
                  <CartWidget />
                </Nav.Link>
              </Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
