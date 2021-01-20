import React from "react";
import {Link} from "react-router-dom"
import { Row, Col } from "react-flexbox-grid";
import "./contactSocial.scss";


import Linkedin from "../../../assets/contact/linkedin.svg";
import TwitterIcons from "../../../assets/contact/twitter.svg";
import DribbleIcon from "../../../assets/contact/dribble.svg";


const contactSocial = () => (
  <Row>
    <Col xs={12}>
      <Row center="xs">
        <Col xs={12} lg={1} className="contact__social">
          <a href="https://www.linkedin.com/in/shabnam-bano-0a209a193" target="_blank">
          <img src={Linkedin} alt="facebook" />
          </a>
        </Col>
        {/* <Col xs={12} lg={1} className="contact__social">
          <img src={TwitterIcons} alt="Twitter" />
        </Col>
        <Col xs={12} lg={1} className="contact__social">
          <img src={DribbleIcon} alt="Dribble" />
        </Col> */}
      </Row>
    </Col>
  </Row>
);

export default contactSocial;
