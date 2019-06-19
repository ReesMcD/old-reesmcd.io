import React from "react"

import { Container, Row, Col } from "react-bootstrap"

import "../../fontawesome/css/all.min.css"

import "./summary.css"

const Summary = () => (
  <Container className="content" fluid>
    <h3>Cool Recent Tech I use:</h3>
    <br />
    <Row className="text-center tech_icons">
      <Col>
        <a
          style={{ color: "#000" }}
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-react hover_effect" />
          <br />
          <span>React</span>
        </a>
      </Col>
      <Col>
        <a
          style={{ color: "#000" }}
          href="https://www.python.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-python hover_effect" />
          <br />
          <span>Python</span>{" "}
        </a>
      </Col>
      <Col>
        <a
          style={{ color: "#000" }}
          href="https://www.oracle.com/java/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-java hover_effect" />
          <br />
          <span>Java</span>{" "}
        </a>
      </Col>
      <Col>
        <a
          style={{ color: "#000" }}
          href="https://nodejs.org/en/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-node-js hover_effect" />
          <br />
          <span>Node</span>{" "}
        </a>
      </Col>
    </Row>
    <br />

    <h4 className="goal_text text-center">
      My biggest goal as an engineer is to never stop learning, and work on cool
      stuff. Here's a couple of things I'm good at:
    </h4>
    <Row style={{ marginTop: "1.8rem" }}>
      <Col>
        <h4 className="hover_effect">JavaScript</h4>
        <p>
          I think how JavaScript is used nowadays is really cool. When I first
          learned vanilla JavaScript I kinda hated it. But as I learned more and
          the language and community around it has progressed it has become one
          of my favorite technologies to work with. React and Node have become
          some of my favorite technologies to work with and they made web
          development much easier and more fun.
        </p>
      </Col>
      <Col>
        <h4 className="hover_effect">Python</h4>
        <p>
          I actually picked up Python fairly recently, a couple of years ago
          now. I quickly learned how easy it was to make quick and fully
          functioned projects and scripts with Python. It is definitely my go to
          if I need to get something done fast. Python exposed me to some great
          frameworks like Django and Flask, both of which have been very helpful
          in my development experience.
        </p>
      </Col>
    </Row>
    <br />
    <Row>
      <Col>
        <h4 className="hover_effect">Java</h4>
        <p>
          Java, what can I say. Java was the second programming language I
          learned (after C++) but probably the language I spent the most time
          with. While some may have their complaints with Java, I know how
          powerful it can be in creating a plethora of projects, apps, and
          services.
        </p>
      </Col>
      <Col>
        <h4 className="hover_effect">Other Things</h4>
        <p>
          There are a ton of other technologies that I love to use but listing
          them all would be exhausting. Though to pick some notable ones I'd
          have to go with Git and Spring. While my Git skills are definitely
          ever growing I do understand how critical it is for the development
          process. Spring is another technology that I have recently started
          using but quickly learned how powerful it is for an enterprise.
        </p>
      </Col>
    </Row>
    <br />
    <h4 className="goal_text text-center">
    Technology is ever evolving and as a software engineer, I have to be as well. My passion for building and learning new things is why I wanted to become a software engineer. 
    </h4>
  </Container>
)

export default Summary
