import React from "react";
import { Link } from "react-router-dom"
import { Row, Col } from "react-flexbox-grid";
import "./contactInfo.scss";

import ContactInfoBox from "../contactInfo/contactInfoBox";


import ContactInfoIcon1 from '../../../assets/contact/contact-info-icon1.svg';
import ContactInfoIcon2 from "../../../assets/contact/contact-info-icon2.svg";
import ContactInfoIcon3 from "../../../assets/contact/contact-info-icon3.svg";


const contactInfo = () => (
  <Row>
    <Col xs={12}>
      <Row center="xs">
        <Col xs={12} lg={3} className="contact__info">

          <ContactInfoBox
            icon={ContactInfoIcon1}
            textLine1="Rajiv Nagar
            Telibagh, Lucknow, Uttar Pradesh 226002"
          />

        </Col>
        <Col xs={12} lg={3} className="contact__info">
          <a href="tel:+91-84470-72786" target="_blank">
            <ContactInfoBox

              icon={ContactInfoIcon2}
              textLine1="+91-84470-72786"

            />
          </a>
        </Col>
        <Col xs={12} lg={3} className="contact__info">
          <ContactInfoBox
            icon={ContactInfoIcon3}
            textLine1="adv.shabnam01@gmail.com"

          />
        </Col>
      </Row>
    </Col>
  </Row>
);

export default contactInfo;
