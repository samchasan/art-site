import React from "react";
import {Row, Col, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'


export default class Contact extends React.Component {
  render() {
    console.log("contact");
    return (
      <div>
        <Row>
        <Col>
          <h3> Samuel Canfield Chasan</h3>
          <p>
            <h5> Making and selling artwork since 2004 </h5>
            If you see something you like that is unavailable, 
            I would be glad to make something similar. Commissions 
            happily accepted.
            <hr />
            <div id='miniText'>Please contact me for quotes or requests</div>
          </p>
          <ul id='contactList'>
            <li>
            <a href="tel:206-390-3298">206-390-3298 </a>
            </li>
            <li>
            <a href="mailto:samuelchasan@email.com"> samuelchasan@gmail.com </a>
            </li>
          </ul>
        </Col>    
        <Col>
          <img className='mainImage' src='/Sam Chasan headshot.jpg' />
        </Col>    
        </Row>
      </div>
    );
  }
}
