import React from "react";
import { Row, Col } from "react-flexbox-grid";
// SCSS
import "./hero.scss";
//Assets
import HeroImage from '../../assets/hero/hero.jpg';
//Components
import Button from '../ui-components/button/button';

const hero = () => (
  <div className="hero" id="hero">
    <div className="wrapper">
      <Row>
        <Col md={12} lg={6}>
          <div className="hero-info">
            <h1 className="weight800 font60">
            Our Most Important Partners Are Our Clients.
            </h1>
            <p className="font12">
            We earn your trust and are diligent in your case.
            </p>
            <Button label="SEND MESSAGE" target={"contact"} />
          </div>
        </Col>
        <Col md={12} lg={6}>
          <div className="hero-image">
            <img src={HeroImage} alt="hero" />
          </div>
        </Col>
      </Row>
    </div>
  </div>
);

export default hero;
