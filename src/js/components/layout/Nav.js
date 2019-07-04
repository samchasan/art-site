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
      <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
         {/* <Row> */}
          <Col md="auto">Logo goes here</Col>
          <Col md="auto">
              <NavLink id='nav' to="/"> Home </NavLink>
              <NavLink id='nav' to="/contact"> Contact</NavLink>
              <NavLink id='nav' to="/gallery"> Gallery </NavLink>
          </Col>
        {/* </Row> */}
      </nav>
    );
  }
}
