import React from "react"
import { Jumbotron } from "react-bootstrap"

//import custom styles
import "./hero.css"
import SocialRow from "../SocialRow/SocialRow"

const Hero = () => (
  <Jumbotron style={jumbo_styles} className="jumbo" fluid>
    <div className="jumbo_content">
      <h1>Hi! Im Rees McDevitt, a Software Engineer from Philadelpia, currently living in Detroit.</h1>
      <br />
      <h3>
        Right now I'm a Software Engineer working at Ford Motor Company. 
        I love building new things and using cool and new solutions to do it!
      </h3>
      <p>What to talk?</p>
      <p>
        Let's chat{" "}
        <a href="mailto:mcdevittrees@gmail.com">
          <span style={{ color: "#129490" }}>mcdevittrees@gmail.com</span>
        </a>
      </p>
    </div>
    <div>
      <SocialRow />
    </div>
  </Jumbotron>
)

const jumbo_styles = {
  backgroundColor: "#fff",
  paddingLeft: "1rem",
}

export default Hero
