import React, { Component } from "react";
import Card from "../card/card";
import "./about.css";

class About extends Component {
  state = {};
  render() {
    return (
      <Card className="card bg-danger">
        <span id="about_card_title">About Us</span>
        <div id="card_about" className="card">
          <h2 id="about_header1">
            A global leader in food & beverage <br></br> ingredients
          </h2>
          <hr id="about_hr1"></hr>
          <p id="about_paragraph1">
            Pioneers at heart, we operate at the forefront of consumer trends to
            provide food & beverage manufacturers with products and ingredients
            that will delight their consumers. Also, with a toungh taste food
            preprations.
          </p>
          <br></br>
          <h4 id="about_header2">
            Making real our Purpose to <br></br> ‘Be the change for good food
            and a healthy future’
          </h4>
          <hr id="about_hr2"></hr>
          <p id="about_paragraph1">
            Making a positive impact on people and planet is all part of the
            delight. With a deep-rooted presence in the <br></br> countries
            where our ingredients are grown, we are closer to farmers, enabling
            better quality, <br></br> and more reliable, traceable and
            transparent supply.
          </p>
          <p id="about_paragraph1">
            Supplying products and ingredients at scale is just the start. We
            add value through our unique, <br></br> complementary portfolio of
            natural, delicious and nutritious products.
          </p>
          <p id="about_paragraph1">
            With our fresh thinking, we help our customers unleash the sensory
            and functional attributes of cocoa, coffee, <br></br> dairy, nuts
            and spices so they can create naturally good food and beverage
            products that <br></br>
            meet consumer expectations.
          </p>
          <p id="about_paragraph_last">
            And whoever we’re with, whatever we’re doing, we always make it
            real.
          </p>
        </div>
      </Card>
    );
  }
}

export default About;
