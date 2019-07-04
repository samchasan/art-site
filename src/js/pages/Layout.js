import React from "react";
// import { Link } from "react-router";

import Nav from "../components/layout/Nav";
import Footer from "../components/layout/Footer";

class Layout extends React.Component {
  render() {
    const { children  } = this.props;
    const containerStyle = {
      marginTop: "60px"
    };
    console.log("layout");
    return (
      <div>
          <Nav/>
              <div class="container" style={containerStyle}>
              {children}                                     
              </div>
          <Footer/>
      </div>
    );
  }
}
export default Layout