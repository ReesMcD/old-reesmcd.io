import React from "react"
import { Row, Col } from "react-bootstrap"

import "./socialRow.css"

export default () => (
  <Row className="jumbo_social text-center">
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
        href="https://res.cloudinary.com/dlz4rglw0/image/upload/v1577682375/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-telegram hover_effect" />
      </a>
    </Col>
  </Row>
)
