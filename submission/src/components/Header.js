import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="Header">
        <Navbar>
            <Navbar.Brand as={Link} to ="/">CSUN Notify</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/Calendar">Calendar</Nav.Link>
            </Nav>
        </Navbar>
    </div>
  )
}

export default Header