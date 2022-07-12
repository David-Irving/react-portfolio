import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/Untitled.png";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github-1.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/david-j-irving/"><img src={navIcon1} alt="LinkedIn" /></a>
              <a href="https://github.com/David-Irving"><img src={navIcon2} alt="GitHub" /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
