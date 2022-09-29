import React, { Component } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";

class Layout extends Component {
  render() {
    return (
      <div>
        <Header title="My header" subtitle="subtitle2" />
        {this.props.children}
        <Footer note="Footer Note" />
      </div>
    );
  }
}

export default Layout;
