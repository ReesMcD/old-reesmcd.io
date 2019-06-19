import React from "react"

import { Container, Jumbotron, Row, Col } from "react-bootstrap"
import { Link } from "gatsby"

import "./footer.css"
import "../../fontawesome/css/all.min.css"

const Footer = () => (
  <Jumbotron fluid style={footer_styles}>
    <Container style={{ maxWidth: "960px" }}>
      <Row>
        <Col>
          <h3>Rees McDevitt</h3>
          <p >
            <a href="mailto:mcdevittrees@gmail.com">
              <span style={{ color: "#129490", fontSize: "1.3rem" }}>mcdevittrees@gmail.com</span>
            </a>
          </p>

          <br />
          <p style={{ fontSize: "1.3rem" }}>
            A passionate developer trying to make his way through the world.
          </p>
        </Col>
      </Row>
      <Row>
        <Col
          style={{
            textDecoration: "underline",
            fontSize: "1.4rem",
            marginBottom: "1rem",
            marginTop: "2rem",
          }}
        >
          Menu
        </Col>
      </Row>
      <Row>
        <Col xs={2} style={{ fontSize: "1.3rem" }}>
          <Link to="/">
            <span className="link_styles">Home</span>
          </Link>
        </Col>
        <Col xs={2} style={{ fontSize: "1.3rem" }}>
          <Link to="/about">
            <span className="link_styles">About</span>
          </Link>
        </Col>
{        
  // <Col xs={2} style={{ fontSize: "1.3rem" }}>
  //         <Link to="/projects">
  //           <span className="link_styles">Projects</span>
  //         </Link>
  //       </Col>
      }
      </Row>

      {/* TODO: Make use of the SocialRow component to make the below icons obsolete */}

      <Row className="footer_social text-center">
      <Col>
      <a
        style={{ color: "#000" }}
        href="https://github.com/ReesMcD"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-github-alt hover_effect" />
      </a>
    </Col>
    <Col>
      <a
        style={{ color: "#000" }}
        href="https://www.linkedin.com/in/rees-mcdevitt-81a155127/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-linkedin hover_effect" />
      </a>
    </Col>
    <Col>
      <a
        style={{ color: "#000" }}
        href="https://medium.com/@mcdevittrees"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-medium-m hover_effect" />
      </a>
    </Col>
    <Col>
    <a
      style={{ color: "#000" }}
      href="https://res.cloudinary.com/dlz4rglw0/image/upload/v1560903443/Rees%20McDevitt%20Resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fab fa-telegram hover_effect" />
    </a>
  </Col>
      </Row>
      <Row className="text-center" style={{ marginTop: "3rem" }}>
        <Col>
          Rees McDevitt © {new Date().getFullYear()}, Built with
          <a 
          target="_blank"
          style={{
            color: "#fff",
            marginLeft: "10px",
            marginRight: "3px",
            fontSize: "1.5rem",
            }} href="https://en.wikipedia.org/wiki/Coffee">
              <i className="fas fa-mug-hot"/>
          </a>
          <a target="_blank" href="https://www.gatsbyjs.org">
            {" "}
            <span className="gatspy-link">& Gatsby</span>
          </a>
        </Col>
      </Row>
    </Container>
  </Jumbotron>
)

const footer_styles = {
  marginTop: "3rem",
  marginBottom: "0",
  backgroundColor: "#000",
  color: "#fff",
  paddingBottom: "1rem",
  width: "100%",
}

export default Footer
