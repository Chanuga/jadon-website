import logo from './logo.svg';
import './App.css';
import MainImage from './MainImage';
import MainUsages from './MainUsages';
import Features from './Features';
import Carousel from './Carousel'
import Footer from './Footer';
import SupImage from './SupImage';
import ProductsSuite from './ProductsSuite';
import NavbarTop from './NavbarTop';
import MainImageSection from './MainImageSection/MainImageSection.js'
import DetailsSection from './DetailsSection/DetailsSection.js'
import ImageArray from './ImageArray/ImageArray.js'
import SuplimentryImage from './SuplimentryImage/SuplimentryImage.js'
import ArrayOfImages from './ArrayOfImages/ArrayOfImages.js'
import FooterPart from './Footer/FooterPart.js'
import { Navbar, Nav } from 'react-bootstrap'

function App() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" variant="dark" sticky="top" style={{ background: '#202020' }}>
        <Navbar.Brand href="#home" style={{color:'#ffdf6c'}}>QINMI</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
          <Nav>
            <Nav.Link href="#AboutUs" style={{color:'#ffdf6c'}}>About Us</Nav.Link>
            <Nav.Link eventKey={2} href="#ContactUs" style={{color:'#ffdf6c'}}>
              Contact Us
            </Nav.Link>
            <Nav.Link eventKey={3} href="#Retailers" style={{color:'#ffdf6c'}}>
              Retailers
            </Nav.Link>
            <Nav.Link eventKey={4} href="#Help" style={{color:'#ffdf6c'}}>
              Help
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <MainImageSection />
      <DetailsSection />
      <ImageArray />
      <SuplimentryImage />
      <ArrayOfImages />
      <FooterPart />
    </div>
  );
}

export default App;
