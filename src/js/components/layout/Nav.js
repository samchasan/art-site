import React from "react";
import { NavLink } from "react-router-dom";
import {Col} from 'react-bootstrap'

export default class Nav extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed: true,
    };
  }


  render() {
  
    return (
      <nav id='navBar' className="navbar navbar-inverse navbar-fixed-top horizontalGradient" role="navigation">
         {/* <Row> */}
          <Col md="auto"><img id='logo' src='/signature.png'/></Col>
          <Col className='d-flex justify-content-end' md="auto">
              <NavLink id='nav' to="/"> Home </NavLink>
              <NavLink id='nav' to="/contact" > Contact</NavLink>
              <NavLink id='nav' to={{
                                pathname: './gallery',
                                state: {
                                    availability: 'available'
                                }
                                }}> Gallery </NavLink>
          </Col>
      </nav>
    );
  }
}
