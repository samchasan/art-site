import React from 'react'
import {Link} from 'react-router-dom'
import {Row, Col, Button} from 'react-bootstrap'
const imgURL = 'https://static1.squarespace.com/static/50931bf7e4b047ba54e41100/594c42dd8419c243fdb30611/594c430ac534a59822fea37e/1498170125953/show-8.jpeg?format=1000w'

// console.log(props)

const Home = () => {
    return (
        <div>
            <h4 id='title'>Art by Samuel</h4>
            <Row>
                <Col></Col>
                <Col>
                    {/* <ButtonToolbar> */}
                        <Row id='dirButtons'>
                        <Col>
                            <Link to={{
                                pathname: './gallery',
                                state: {
                                    availability: 'available'
                                }
                                }}>
                                <Button variant='outline-primary'> Available </Button>
                            </Link>
                        </Col>
                        <Col>
                            <Link to={{
                                    pathname: './gallery',
                                    state: {
                                        availability: 'unavailable'
                                    }
                                    }}>
                                    <Button variant='outline-primary'> Unavailable </Button>
                            </Link>                        
                        </Col>
                        </Row>
                    {/* </ButtonToolbar> */}
                    <br></br>
                    <img src={imgURL} />
                </Col>
                <Col></Col>
            </Row>
        </div>
    );
};

export default Home