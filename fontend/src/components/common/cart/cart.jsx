import React, { Component } from "react";
import NavBar from "../navbar/navbar";
import axios from "axios";
import "./cart.css";
import CartProduct from "./cartProduct";

class Cart extends Component {
  state = {
    cartItems: [],
    quantity: 250,
  };

  styles = {
    fontSize: 17,
  };

  componentDidMount() {
    axios
      .get("/getcart", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "GET",
      })
      .then((res) => this.setState({ cartItems: res.data }));
  }
  
  render() {
    const { quantity, cartItems } = this.state;
    return (
      <React.Fragment>
        <NavBar />
        <div className="card bg-success">
          <div className="container">
            <h2 id="cart_heading">Your Cart</h2>
            {cartItems.length===0?<p>Cart is empty</p>:cartItems.map((cartItem) => (
              <CartProduct key={cartItem.cart_id} quantity={quantity}/>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Cart;
