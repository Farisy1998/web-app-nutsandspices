import React, { Component } from "react";
import Card from "../card/card";
import "./contact.css";

class Contact extends Component {
  state = {};
  render() {
    return (
      <Card className="contact_card bg-info">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <span id="contact_card_title">Contact Us</span>
              <div id="contact_card" className="card bg-light">
                <p id="contact_details">
                  ABCD Villa, <br></br>123 Colony, EFGH Street
                  <br></br> District, State, India. <br></br>PH: 1234567890
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <span id="contact_card_title">Websites</span>
              <div id="contact_card" className="card bg-light">
                <p id="websites_details">
                  Github:{"          "}
                  <a href="https://github.com/">https://github.com/</a>
                  <br></br>
                  Instagram:{"          "}
                  <a href="https://www.instagram.com/">
                    https://www.instagram.com/
                  </a>
                  <br></br>
                  Facebook:{"          "}
                  <a href="https://www.facebook.com/">
                    https://www.facebook.com/
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    );
  }
}

export default Contact;
