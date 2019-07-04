import React from 'react'
import photos from '../components/photos'
import {Row, Col, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'



const imgURL = 'https://static1.squarespace.com/static/50931bf7e4b047ba54e41100/594c42dd8419c243fdb30611/594c430ac534a59822fea37e/1498170125953/show-8.jpeg?format=1000w'
let availableArt
let unavailableArt


function loadData (artworks) {
  availableArt = artworks.available
  unavailableArt = artworks.unavailable 
  // console.log(data)
};

let listItems
let mainPhoto = './aurora.jpg'

class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.componentDidMount = this.componentDidMount.bind(this)
    this.changeLink = this.changeLink.bind(this)
    this.createGallery = this.createGallery.bind(this)

    this.state = {
      listItems: [],
      imgURL: require('./aurora.jpg'),
      view: 'available'
    };
  }

componentDidMount(){
  loadData(photos)
  const {availability} = this.props.location.state
  if(availability === 'available'){
    this.createGallery(availableArt)  
    this.createThumbs(availableArt)
    this.setState({view: 'available'})
    } 
   
   if(availability === 'unavailable'){
    this.createGallery(unavailableArt)
    this.createThumbs(unavailableArt)
    this.setState({view: 'unavailable'})

  }
}


createGallery(e) {
  // console.log
  console.log(e)
  listItems = e.map((piece) =>
    <Button type="button" id='sideBtn' 
            className='btn btn-outline-primary btn-block btn-sm' 
            key={piece}
            name={piece} className='mainImage' 
            onClick={this.changeLink}> {piece} </Button>
  );
  this.setState(listItems)
}

createThumbs(e) {
e.forEach(piece => {
  console.log(piece)
})
}

changeLink(e){
  const img = e.target.name
  const newURL = '/art/' + this.state.view + '/' + img
  // const newPhoto = require(newURL)
  this.setState({imgURL: newURL})
}
 

render (){
    return (
      <Row>
      <Col>{listItems}</Col>
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
          <img src={this.state.imgURL} />
          {/* <img src={require(this.state.imgURL.toString())} /> */}
          {/* <img src={require('./aurora.jpg')} /> */}


      </Col>
      <Col></Col>
  </Row>
    );
  };
}
export default Gallery