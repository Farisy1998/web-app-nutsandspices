import React, { Component } from "react";

class CartProduct extends Component {
  state = {
    quantity: this.props.quantity,
  };
  handleIncrement = () => {
    this.setState({ quantity: this.state.quantity + 250 });
  };

  handleDecrement = () => {
    this.setState({ quantity: this.state.quantity - 250 });
  };
  render() {
    const { quantity } = this.state;
    
    return (
      <div>
        <div className="card" id="cart_item_card">
          <div className="card-body">
            <h4 className="card-title">product</h4>
            <span
              id="counter_span"
              className="badge badge-pill badge-primary m-3"
            >
              {quantity<1000?quantity:quantity/1000}{"    "}{quantity<1000?"grams":"kg"}
            </span>
            <button
              className="btn btn-secondary btn-sm m-1"
              onClick={this.handleIncrement}
            >
              +
            </button>
            <button
              className="btn btn-secondary btn-sm m-1"
              disabled={quantity <= 250 && true}
              onClick={this.handleDecrement}
            >
              -
            </button>
            <button className="btn btn-danger btn-md m-3">Remove</button>
            <button className="btn btn-warning btn-md m-l-2">By now</button>
          </div>
        </div>
      </div>
    );
  }
}

export default CartProduct;
