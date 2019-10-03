import React from "react"
import Layout from "../components/layout/Layout"
import MyJumbo from "../components/myJumbo/MyJumbo"
import MyButton from "../components/myButton/MyButton"

import "../fontawesome/css/all.min.css"
import "./index.css"

import { Container, Row, Col } from "react-bootstrap"

import CV from "/" //Import you CV file here!
import other from "/" //Import other downloadable here

export default () => (
  <div className="App">
    <Layout>
      <MyJumbo
        body={
          "So you are looking for a proactive and outgoing software engineer who loves to keep learning?"
        }
        body2={"Well look no further."}
        title={"tldr; About me."}
      />
      <hr />
      <Container fluid>
        {
          // <Row style={{ marginTop: "2rem", marginBottom: "1.5rem" }}>
          //   <MyButton text={"CV download"} URL={CV} />
          //   <MyButton text={"Other Downloadable"} URL={other} />
          // </Row>
        }
        <Row>
          <Col>
            <h3>Summary</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5>I love learning, challenges, and building new things.</h5>
            <br />
            <p>
              I'm a Software Engineer that loves to build cool and new web
              applications.
              <br />
              <br />
              I grew up in the Philadelphia area in Pennsylvania and attended
              college at Penn State University and earned a B.S. in Information
              Sciences and Technology. At my time at Penn State, I learned tons
              of things relating to software development and unrelated to it.
              These skills have shaped me into the engineer I am today.
              <br />
              <br />I currently work at Ford Motor Company in Detroit as a
              Software Engineer. There I work full stack on web application
              dealing with Ford Owners. Here we are using modern solutions to
              solve complex and challenging problems. Often dealing with
              security, architecture, and performance in terms of our web
              applications.
            </p>
          </Col>
        </Row>
        <hr />
        {/* This is the beginning of the career section*/}
        <Row>
          <Col>
            <h3>Work experience</h3>
          </Col>
        </Row>
        {/* Ford */}
        <Row>
          <Col>
            <h5>Software Engineer</h5>
          </Col>
        </Row>
        <Row>
          <Col>Ford Motor Company, Dearborn, MI</Col>
          <Col>2019.01 - present</Col>
        </Row>
        <Row>
          <Col>
            <p style={{ marginTop: "1rem" }}>
              Developed full stack on Ford's Owner Expedition team creating
              scalable applications for Ford customers. Designing and developed
              single-page applications with Angular and microservices with
              Spring Boot for related business needs.
            </p>
          </Col>
        </Row>
        <hr />
        {/* Haynes Lab */}
        <Row>
          <Col>
            <h5>Mobile Application Developer</h5>
          </Col>
        </Row>
        <Row>
          <Col>Penn State University, University Park, PA</Col>
          <Col>2018.03 - 2018.12</Col>
        </Row>
        <Row>
          <Col>
            <p style={{ marginTop: "1rem" }}>
              Mobile Application Developer for Dr. Steven Haynes’ Research Lab.
              Dr. Steven Haynes is a Professor of Information Sciences and
              Technology at Penn State University. In his lab, I focused on
              creating, designing, and developing mobile and web applications
              using various JavaScript frameworks, such as Node and React
              Native.
            </p>
          </Col>
        </Row>
        <hr />
        {/* TSV */}
        <Row>
          <Col>
            <h5>Technology Analyst Intern </h5>
          </Col>
        </Row>
        <Row>
          <Col>Textron Specialized Vehicles, Augusta, GA</Col>
          <Col>2018.05 - 2018.08</Col>
        </Row>
        <Row>
          <Col>
            <p style={{ marginTop: "1rem" }}>
              Textron Specialized Vehicles is a forerunner in the automotive
              industry providing a large line of utility, support, and off-road
              vehicles. I was partnered with the Integrated Supply Chain team to
              optimize workflow throughout the company’s manufacturing process
              from the technical end. Focusing on warehouse management and
              eliminating inefficiencies in production.
            </p>
          </Col>
        </Row>
        <hr />

        {/* THON */}
        <Row>
          <Col>
            <h5>Software Developer</h5>
          </Col>
        </Row>
        <Row>
          <Col>THON, University Park, PA</Col>
          <Col>2017.09 - 2018.07</Col>
        </Row>
        <Row>
          <Col>
            <p style={{ marginTop: "1rem" }}>
              One of twenty-one software developers that provided technical
              services for Penn State’s THON, the largest student-run
              philanthropy in the world. A 46 hour no sleeping or sitting dance
              marathon raising money for childhood cancer. As a developer, I
              created various software essential for the organization utilizing
              frameworks like Django and Wordpress. Also having to regularly
              communicate with other teams to fulfill the needs and wants of the
              organization.
            </p>
          </Col>
        </Row>
        <hr />

        {/* Textron */}
        <Row>
          <Col>
            <h5>Network Engineering Intern</h5>
          </Col>
        </Row>
        <Row>
          <Col>Textron, Fort Worth, TX</Col>
          <Col>2017.06 - 2017.08</Col>
        </Row>
        <Row>
          <Col>
            <p style={{ marginTop: "1rem" }}>
              Textron is an American global aerospace, defense, security and
              advanced technologies industrial conglomerate. Partnered with the
              Network Infrastructure team developing and maintaining SQL Server
              databases for the team to have more optimized access and
              management of data; developed web dashboards created with PowerBI
              with SQL Server and various Python scripts to streamline important
              information for the department.
            </p>
          </Col>
        </Row>
        <hr />

        {/* This is the beginning of the education section*/}
        <Row>
          <Col>
            <h3>Education</h3>
          </Col>
        </Row>
        {/* BS Degreee*/}
        <Row>
          <Col>
            <h5>B.S. Information Sciences and Technology</h5>
          </Col>
        </Row>
        <Row>
          <Col>Pennsylvania State University, University Park, PA</Col>
          <Col>2014 - 2018</Col>
        </Row>
        <Row>
          <Col>
            <p style={{ marginTop: "1rem" }}>
              <strong>Specialization:</strong>
              <br /> Focused in Design and Development. Curriculum stressed user
              interaction and experience as well as logical and complex software
              development. This focus is to teach the full development
              life-cycle and to create adaptable full stack engineers.
            </p>
          </Col>
        </Row>
      </Container>
    </Layout>
  </div>
)
