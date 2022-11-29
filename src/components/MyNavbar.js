import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/my-bakery.png";

export default function MyNavbar(props) {
  return (
    <Navbar bg="dark" variant="dark">
      <Container className="px-3 py-2" style={{ marginLeft: 0 }}>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="My Backery Logo"
            style={{ paddingRight: "0.5rem" }}
          />
          My Bakery
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}
