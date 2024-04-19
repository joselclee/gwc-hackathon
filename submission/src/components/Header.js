import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div className="custom-nav">
        <Navbar className="custom-nav">
            <Navbar.Brand className="title-text"as={Link} to ="/"><span className="csun-text">CSUN</span> Notify</Navbar.Brand>
            <Nav>
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/Calendar">Calendar</Nav.Link>
                <Nav.Link as={Link} to="/Finder">Finder</Nav.Link>
            </Nav>
        </Navbar>
    </div>
  )
}

export default Header