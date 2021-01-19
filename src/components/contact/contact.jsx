import React from "react";
import { Row, Col } from "react-flexbox-grid";
import "./contact.scss";
import * as emailjs from "emailjs-com";
import Title from "../ui-components/title/title";
import ContactInfo from './contactInfo/contactInfo';
import ContactSocial from './contactInfo/contactSocial';
import Modal from '../contact-modal/Modal';

import ContactBackground from '../../assets/contact/bg.png';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      sending: false,
      successModal: false,
      errorModal: false,
    };
  }

  inputHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (e) => {
    var self = this;
    this.setState({ sending: true });
    e.preventDefault();

    var template_params = {
      from_name: this.state.name,
      to_name: this.state.email,
      message: this.state.message,
    };




    // YOUR EMAIL.JS API KEY IN FORMAT user_xxxxxxxxxxxxxxxxxx
    let API_KEY = "user_Ei7PEnNwcqOQ79taW4m2h";

    // YOUR EMAIL.JS TEMPLATE ID
    let TEMPLATE_ID = "1712minato";




    emailjs.send("1712minato", TEMPLATE_ID, template_params, API_KEY).then(
      function (response) {
        // console.log(response)
        if (response.status === 200) {
          self.showSuccessModal();
        } else {
          self.showErrorModal();
        }
      },
      function (error) {
        self.showErrorModal();
      }
    );
  };

  // SUCCESS MODAL
  showSuccessModal = () => {
    this.setState({ successModal: true, sending: false });
    this.resetForm();
  };
  // ERROR MODAL
  showErrorModal = () => {
    this.setState({ errorModal: true, sending: false });
    this.resetForm();
  };
  // RESET CONTACT FORM
  resetForm() {
    this.setState({ name: "", email: "", message: "" });
  }
  // CLOSE ALL MODALS
  closeModal = () => {
    this.setState({ successModal: false, errorModal: false });
  };

  resetForm = () => {
    this.setState({ name: "", email: "", message: "" });
  };

  render() {
    let submitButtonRender = (
      <div className="small__button">
        <button aria-label="send message" type="submit" value="Send Message">
          Send Message
        </button>
      </div>
    );
    if (this.state.sending) {
      submitButtonRender = (
        <div className="small__button sending-btn">
          <div className="flex-center">
            <div className="sbl-circ"></div>
          </div>
        </div>
      );
    }
    let modalRender = null;
    if (this.state.successModal) {
      modalRender = <Modal closeModal={this.closeModal} status="success" />;
    } else if (this.state.errorModal) {
      modalRender = <Modal closeModal={this.closeModal} status="error" />;
    }
    return (
      <div id="contact">
        {modalRender}
        <div className="wrapper">
          <Title title="CONTACT US." />
          <p className="font12">
          Get in touch via the form below, or by emailing <a>adv.shabnam01@gmail.com</a>.
          </p>

          <Row className="padding40">
            <Col md={12} lg={6}>
              <form id="contact-form" onSubmit={this.handleSubmit}>
                <h4 className="font30 weight800 padding30">Send Us Message.</h4>
                <input type="text" placeholder="Name" required name="name" value={this.state.name} onChange={this.inputHandler} />
                <input type="email" placeholder="Email" required name="email" value={this.state.email} onChange={this.inputHandler} />
                <textarea
                  rows="6"
                  cols="50"
                  placeholder="Message..."
                  required
                  name="message"
                  value={this.state.message}
                  onChange={this.inputHandler}
                ></textarea>
                {submitButtonRender}

              </form>
            </Col>
            <Col md={12} lg={6}>
              <div className="flex-center">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.549768230142!2d80.95428631511288!3d26.79061807178498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfc9d79b8cdd1%3A0x77163193b9c74c59!2sSameer%20Mobile!5e0!3m2!1sen!2sin!4v1610983290692!5m2!1sen!2sin" width="500" height="500" >

              </iframe>
              </div>
            </Col>
          </Row>
          <ContactInfo />
          <ContactSocial />
        </div>
      </div>
    );
  }
};

export default Contact;
