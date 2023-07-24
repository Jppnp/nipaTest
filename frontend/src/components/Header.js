import { Container, Nav, Navbar, NavLink } from "react-bootstrap";
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <Navbar
      collapseOnSelect
      expand="sm"
      bg="dark"
      variant="dark"
      style={{
        marginBottom: "1rem",
        padding: "1rem",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            alt=""
            src={"../assets/tickets.png"}
            width="36"
            height="36"
            className="d-inline-block align-top"
            style={{ marginRight: "1rem" }}
          />
          <span>
            My tickets
          </span>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbarScroll"
          data-bs-target="#navbarScrll"
        />
        <Navbar.Collapse id="navbarScroll">
          {/* <Nav className="me-auto" style={{ textAlign: "left" }}>
            <NavLink as={Link} to="/client/cart">
              Cart
            </NavLink>
            <NavLink as={Link} to="/client/history ">
              History
            </NavLink>
          </Nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
