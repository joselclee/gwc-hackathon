import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="Header">
        <Navbar>
            <Navbar.Brand href="#home">CSUN Notify</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/Home">Home</Nav.Link>
                <Nav.Link href="/Calendar">Features</Nav.Link>
            </Nav>
        </Navbar>
    </div>
  )
}

export default Header