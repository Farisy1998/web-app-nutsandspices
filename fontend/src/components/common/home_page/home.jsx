import React, { Component } from "react";
import NavBar from "../navbar/navbar";
import Table from "react-bootstrap/Table";
import axios from "axios";
import "./home.css";
import { Link } from "react-router-dom";

export class Home extends Component {
  state = {
    products: [],
  };
  componentDidMount() {
    axios
      .get("/products", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "GET",
      })
      .then((res) => this.setState({ products: res.data }));
  }
  handleCart = (product) => {
    const data = {
      product_id: product.product_id,
    };
    axios
      .post("/addcart", data, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      })
      .then((res) => console.log(res));
  };
  render() {
    return (
      <div>
        <NavBar />
        <div className="card">
          <h2 className="product_heading">Products</h2>
          <Table
            responsive
            id="product_table"
            className="table table-borderless"
          >
            <thead>
              <tr>
                <th></th>
                <th></th>
                <th>Name</th>
                <th>Price</th>
                <th>Add to Cart</th>
              </tr>
            </thead>
            <tbody>
              {this.state.products.map((product) => (
                <tr key={product.product_id}>
                  <td></td>
                  <td></td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>
                    <button
                      className="btn btn-success"
                      onClick={() => this.handleCart(product)}
                    >
                        Cart
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        <br />
        <br />
      </div>
    );
  }
}
