import React from "react";
import { Row, Col } from "react-flexbox-grid";
import "./about.scss";
// Components
import TeamBox from './teamBox';
import TeamInfo from "./teamInfo";
import Title from "../ui-components/title/title";
// Assets
import Person01 from "../../assets/about/person01.jpeg";
import Person02 from "../../assets/about/person02.png";

const about = () => (
  <div id="about">
    <div className="wrapper">
      <Title title="ABOUT US." />
      <p className="font12">
      Since 2015 we are here with a vision to provide professional and reliable legal services to individuals and businesses<br />
       in traditional as well as new and emerging areas of law. With such a diverse practice the team is uniquely placed too <br />
       cater to clients with a range of legal needs.We give personalised attention to every case and even to smallest of the <br />
       details, so that the solutions we provide are both practicable and exhaustive.
      </p>
      <Row>
        <Col md={12} lg={4}>
          <TeamBox avatar={Person01} name="Shabnam Bano" job="Advocate" />
        </Col>
        {/* <Col md={12} lg={4}>
          <TeamBox avatar={Person02} name="Han Solo" job="Graphic Designer" />
        </Col> */}
        <Col md={12} lg={4}>
          <TeamInfo />
        </Col>
      </Row>
    </div>
  </div>
);

export default about;
