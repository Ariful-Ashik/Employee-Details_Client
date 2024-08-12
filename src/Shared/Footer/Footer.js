// FancyFooter.js
import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import './Footer.css'; // Optional: Create this CSS file for additional styling

const Footer = () => {
  return (
    <footer className="fancy-footer text-white py-5">
      <Container>
        <Row className="mb-4">
          <Col md={3} className="mb-4 mb-md-0">
            <h5>About Us</h5>
            <p>
              We are dedicated to providing top-notch services and products that meet your needs. Our team is committed to excellence and customer satisfaction.
            </p>
          </Col>
          <Col md={3} className="mb-4 mb-md-0">
            <h5>Quick Links</h5>
            <Nav className="flex-column">
              <Nav.Link href="#home" className="text-light">Home</Nav.Link>
              <Nav.Link href="#services" className="text-light">Services</Nav.Link>
              <Nav.Link href="#contact" className="text-light">Contact</Nav.Link>
            </Nav>
          </Col>
          <Col md={3} className="mb-4 mb-md-0">
            <h5>Contact Us</h5>
            <p>
              Email: info@example.com
              <br />
              Phone: +1 234 567 890
            </p>
          </Col>
          <Col md={2}>
            <h5>Follow Us</h5>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <p className="mb-0">© {new Date().getFullYear()} Your Company. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
