import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FaShoppingCart, FaSearch } from 'react-icons/fa';
import logo from '../../assets/logo.svg';
const Header = () => {
  return (
    <header className='header'>
    <Navbar bg="light" expand="lg" className="py-3 shadow-sm"> {/* bg-light, py-3 for padding, shadow-sm for subtle shadow */}
      <Container>
        {/* Logo and Brand Name */}
        <LinkContainer to="/">
          <Navbar.Brand>
            {/* Replace with your actual logo path */}
            <img
              src={logo}
              alt="Kuruvi Crackers Logo"
              height="40" // Adjust height as needed
              className="d-inline-block align-top me-2" // d-inline-block and align-top for vertical alignment
            />
          </Navbar.Brand>
        </LinkContainer>

        {/* Navbar Toggler for mobile responsiveness */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Collapsible content for navigation and search */}
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Navigation Links */}
          <Nav className="mx-auto"> {/* mx-auto to center navigation links */}
            <LinkContainer to="/">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/product">
              <Nav.Link>Product</Nav.Link>
            </LinkContainer>
             <LinkContainer to="/giftbox">
              <Nav.Link>Giftbox</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/price">
              <Nav.Link>Pricelist</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/aboutus">
              <Nav.Link>About Us</Nav.Link>
            </LinkContainer>
           
            {/* Add more links as per your site's structure */}
          </Nav>

          {/* Search Bar and Icons (aligned to the right) */}
          <Nav className="ms-auto d-flex align-items-center"> {/* ms-auto to push to right, d-flex and align-items-center for icon alignment */}
            <Form className="d-flex me-2"> {/* d-flex for inline search, me-2 for margin */}
              <FormControl
                type="search"
                placeholder="Search products..."
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">
                <FaSearch />
              </Button>
            </Form>
            
            <LinkContainer to="/cart">
              <Nav.Link className="position-relative">
                <FaShoppingCart size={22} />
                {/* Optional: Add a badge for cart item count */}
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  0 {/* Replace with actual cart item count from state */}
                  <span className="visually-hidden">cart items</span>
                </span>
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar></header>
    
  );
};

export default Header;