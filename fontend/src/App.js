import React, { Component } from "react";
import "./App.css";
import Home from "./components/home/home_page/home";
import { Route, Switch } from "react-router-dom";
import { Home as CustomerHome } from "./components/common/home_page/home";
import Cart from "./components/common/cart/cart";
import Orders from "./components/common/orders/orders";
import Profile from "./components/common/profile/profile";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={CustomerHome} />
          <Route path="/cart" component={Cart} />
          <Route path="/orders" component={Orders} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
