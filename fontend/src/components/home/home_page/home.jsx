import React, { useState } from "react";
import "./home.css";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Carousel from "../carousel/carousel";
import Products from "../products/products";
import About from "../About/about";
import Contact from "../contact/contact";
import axios from "axios";
import _ from "lodash";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";

const Home = () => {
  const formData = {
    first_name: "",
    last_name: "",
    address_id: uuid(),
    email: "",
    password: "",
  };

  const confirmPassword = {
    value: "",
  };

  const [modalIsOpen, setOpen] = useState(false);
  const handleModalOpen = () => setOpen(true);
  const handleModalClose = () => setOpen(false);

  const [signInModelIsOpen, setSignInOpen] = useState(false);
  const handleSignInModalOpen = () => setSignInOpen(true);
  const handleSignInModalClose = () => setSignInOpen(false);

  const handleFirstNameChange = (event) => {
    formData.first_name = event.target.value;
  };
  const handleLastNameChange = (event) => {
    formData.last_name = event.target.value;
  };

  const handleEmailChange = (event) => {
    formData.email = event.target.value;
  };

  const handlePasswordChange = (event) => {
    formData.password = event.target.value;
  };

  const handleConfirmPasswordChange = (event) => {
    confirmPassword.value = event.target.value;
  };
  const handleSubmit = () => {
    if (confirmPassword.value === formData.password) {
      axios
        .post("/addcustomer", formData, {
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
        })
        .then((res) => console.log(res.data));
    } else {
      console.log("Password mismatches");
    }
  };
  return (
    <div className="home_page">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 navbar">
            <span href="" className="logo navbar-brand">
              Nuts And Spices
            </span>
            <ul className="nav">
              <li className="nav-item">
                <Button
                  onClick={handleModalOpen}
                  className="button"
                  variant="primary"
                >
                  <span>Login</span>
                </Button>

                {/* Login model */}

                <Modal show={modalIsOpen} onHide={handleModalClose}>
                  <Modal.Header>
                    <Modal.Title>Login</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form>
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlInput1"
                      >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="name@example.com"
                          autoFocus
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          name="password"
                          placeholder="Enter your password"
                        />
                      </Form.Group>
                    </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="danger" onClick={handleModalClose}>
                      Close
                    </Button>
                    <Button variant="primary">
                      <Link to="/home" style={{ color: "#FFF" }}>
                        Login
                      </Link>
                    </Button>
                  </Modal.Footer>
                </Modal>
              </li>
              <li className="nav-item">
                <Button
                  onClick={handleSignInModalOpen}
                  className="button"
                  variant="success"
                >
                  <span>Sign Up</span>
                </Button>

                {/* Sign in model */}

                <Modal show={signInModelIsOpen} onHide={handleSignInModalClose}>
                  <Modal.Header>
                    <Modal.Title>Sign Up</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form>
                      <Form.Group className="mb-3">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                          type="name"
                          name="firstName"
                          onChange={handleFirstNameChange}
                          placeholder="Enter your first name"
                          required
                          autoFocus
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                          type="name"
                          name="lastName"
                          onChange={handleLastNameChange}
                          placeholder="Enter your last name"
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          onChange={handleEmailChange}
                          placeholder="name@example.com"
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          name="password"
                          onChange={handlePasswordChange}
                          placeholder="Enter your password"
                        />
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                          type="password"
                          name="cpassword"
                          onChange={handleConfirmPasswordChange}
                          placeholder="Re-enter your password"
                        />
                      </Form.Group>
                    </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="danger" onClick={handleSignInModalClose}>
                      Close
                    </Button>
                    <Button
                      variant="primary"
                      type="submit"
                      onClick={handleSubmit}
                    >
                      Register
                    </Button>
                  </Modal.Footer>
                </Modal>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Carousel />
      <Products />
      <About />
      <Contact />
      <br />
      <br />
    </div>
  );
};

export default Home;
