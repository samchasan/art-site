import React from 'react'
import {Link} from 'react-router-dom'
import {Row, Col, Button} from 'react-bootstrap'
import photos from '../components/photos'


const imgURL = 'https://static1.squarespace.com/static/50931bf7e4b047ba54e41100/594c42dd8419c243fdb30611/594c430ac534a59822fea37e/1498170125953/show-8.jpeg?format=1000w'


// function loadData (artworks) {
//     availableArt = artworks.available
//     unavailableArt = artworks.unavailable 
//   };

// console.log(props)

class Home extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            photos: null,
            numberAvailable: 0,
            numberUnavailable: 0
        }
    }


    componentDidMount(){
        // const data = loadData(photos)
        // console.log(photos)
        this.setState({
            numberAvailable: photos.available.length,
            numberUnavailable: photos.unavailable.length})
        }
    
  

    render(){
    return (
        <div>
            <h4 id='title'>Art by Samuel</h4>
            <Row>
                <Col>
                <div className='homePageText'>
                <h3 className='d-flex justify-content-end'>{this.state.numberAvailable}</h3>
                <h5 className='d-flex justify-content-end'>pieces available</h5>
                </div>
                <div className='d-flex justify-content-end'>
                <Link 
                    to={{
                    pathname: './gallery',
                    state: {
                        availability: 'available'
                    }
                    }}>
                    <Button variant='outline-primary'> Available Work</Button>
                </Link>
                </div>
              
                </Col>
                <Col>
                    <img className='mainImage' src={imgURL} />
                </Col>
                <Col>
                <div className='homePageText'>
                <h3>{this.state.numberUnavailable}</h3>
                <h5>pieces unavailable</h5>
                </div>
                <div className='d-flex justify-content-start'>
                <Link 
                    to={{
                    pathname: './gallery',
                    state: {
                        availability: 'unavailable'
                    }
                    }}>
                    <Button variant='outline-primary'> View unavailable </Button>
                </Link> 
                </div>
                </Col>
            </Row>
        </div>
    );
}
}


export default Home