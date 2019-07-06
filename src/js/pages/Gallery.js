import React from 'react'
import photos from '../components/photos'
import {Row, Col, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'



const imgURL = 'https://static1.squarespace.com/static/50931bf7e4b047ba54e41100/594c42dd8419c243fdb30611/594c430ac534a59822fea37e/1498170125953/show-8.jpeg?format=1000w'
let availableArt
let unavailableArt
let pastView
let thumbURL

function loadData (artworks) {
  availableArt = artworks.available
  unavailableArt = artworks.unavailable 
};

let listItems
let mainPhoto = './aurora.jpg'

class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.componentDidMount = this.componentDidMount.bind(this)
    this.changeLink = this.changeLink.bind(this)
    this.showThumb = this.showThumb.bind(this)
    this.move = this.move.bind(this)
    this.createGallery = this.createGallery.bind(this)
    this.updateView = this.updateView.bind(this)
    this.componentDidUpdate = this.componentDidUpdate.bind(this)
    this.removeFiles = this.removeFiles.bind(this)
    this.removeFile = this.removeFile.bind(this)


    this.state = {
      listItems: [],
      imgURL: require('./aurora.jpg'),
      currentImg: '',
      thumbURL: '',
      view: 'available',
    };
  }

componentDidUpdate(){

  console.log('updated thumb URL', this.thumbURL)

  let currentView = this.state.view

  if(currentView !== pastView){

  if(this.state.view === 'available'){
    this.createGallery(availableArt)  
    } 
   
   if(this.state.view === 'unavailable'){
    this.createGallery(unavailableArt)
  }
  pastView = currentView
}
}

componentDidMount(){
  loadData(photos)
  const {availability} = this.props.location.state
  if(availability === 'available'){
    this.createGallery(availableArt)  
    this.setState({view: 'available'})
    } 
   
   if(availability === 'unavailable'){
    this.createGallery(unavailableArt)
    this.setState({view: 'unavailable'})

  }
}

camelize(str)   {

    str = str.split(" ");

    for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
}

removeFiles(e, titles){
  e.forEach((piece, i) =>{
    let newString
    if(piece.includes('.jpeg')) {
    newString = piece.replace('.jpeg','')
    }
    else if(piece.includes('.jpg')) {
      newString = piece.replace('.jpg','')
      }
     else if(piece.includes('.png')) {
        newString = piece.replace('.png','')
        } 
        const camelString = this.camelize(newString)  
  
        console.log(camelString)
      
        titles[i] = camelString
      
        })
}


removeFile(piece){
    let newString
    if(piece.includes('.jpeg')) {
    newString = piece.replace('.jpeg','')
    }
    else if(piece.includes('.jpg')) {
      newString = piece.replace('.jpg','')
      }
     else if(piece.includes('.png')) {
        newString = piece.replace('.png','')
        } 
      return newString
}

createGallery(e) {

  let titles = []

  this.removeFiles(e, titles)
   
  console.log(e)
  listItems = e.map((piece, i) =>
    <Button type="button" id='sideBtn' 
            className='btn btn-outline-primary btn-block btn-sm' 
            key={piece}
            onMouseEnter={ () => (this.showThumb(listItems[i].key)) }
            name={piece} className='mainImage' 
            onClick={this.changeLink}> {titles[i]} </Button>
  );
  this.setState({listItems})
}

createThumbs(e) {
e.forEach(piece => {
  console.log('making thumb of', piece)
})
}

updateView(availability){
  this.setState({view: availability})
}

changeLink(e){
  const img = e.target.name
  const newURL = '/art/' + this.state.view + '/' + img
  this.setState({
    imgURL: newURL,
    currentImg: img
  })
}

showThumb(img){
  const newURL = '/art/' + this.state.view + '/' + img
  console.log(newURL)
  this.setState({thumbURL: newURL})
  thumbURL = newURL
}
 
move(direction){

  console.log('direction', direction)

  const img = this.removeFile(this.state.currentImg)
  if(direction === 'back'){
    if (this.state.view === 'available'){
      availableArt.forEach((piece, i) => {
        if(piece.includes(img)){
            // console.log('true')
            console.log(i, availableArt[i-1])
            if (i === 0){ i = availableArt.length}
            const newURL = {target: {name: availableArt[i-1]}}
            this.changeLink(newURL)
        }
      })
    }
    if (this.state.view === 'unavailable'){
      unavailableArt.forEach((piece, i) => {
        if(piece.includes(img)){
            // console.log('true')
            console.log(i, unavailableArt[i-1])
            if (i === 0){ i = unavailableArt.length}
            const newURL = {target: {name: unavailableArt[i-1]}}
            this.changeLink(newURL)
        }
      })
    }
  }


  if(direction === 'forward'){
 if (this.state.view === 'available'){
      availableArt.forEach((piece, i) => {
        if(piece.includes(img)){
            // console.log('true')
            console.log(i, availableArt[i+1])
            if (i === availableArt.length -1){ i = -1}
            const newURL = {target: {name: availableArt[i+1]}}
            this.changeLink(newURL)
        }
      })
    }
    if (this.state.view === 'unavailable'){
      unavailableArt.forEach((piece, i) => {
        if(piece.includes(img)){
            // console.log('true')
            console.log(i, unavailableArt[i+1])
            if (i === unavailableArt.length-1 ){ i = -1}
            const newURL = {target: {name: unavailableArt[i+1]}}
            this.changeLink(newURL)
        }
      })
    }  }
  
}

render (){

  // console.log(this.state)

  let availableIsOn
  let unavailableIsOn

  const view = this.state.view
  if(view === 'available'){
    availableIsOn = 'on'
    unavailableIsOn = 'off'
  }
  if(view === 'unavailable'){
    availableIsOn = 'off'
    unavailableIsOn = 'on'
  }

    return (

      <Row>
      <Col>
      <div className='d-flex justify-content-end' >
      <img id='thumb' 
           src={thumbURL} />
      </div>
      <div className='pre-scrollable'>
      {listItems}
      </div></Col>
      <Col>
          <img className='mainImage' src={this.state.imgURL} />
      </Col>
      <Col >
    
                  <Link 
                    class="d-flex justify-content-center"
                    to={{
                      pathname: './gallery',
                      state: {
                          availability: 'available'
                      }
                      }}>
                      <Button id='galleryButton' 
                              className={availableIsOn}
                              onClick={() => this.updateView('available')}
                              variant='outline-primary'> Available </Button>
                  </Link>
             <br></br>
                  <Link 
                      class="d-flex justify-content-center"
                      to={{
                        pathname: './gallery',
                        state: {
                            availability: 'unavailable'
                        }
                        }}>
                    <Button id='galleryButton' 
                            className={unavailableIsOn}
                            onClick={() => this.updateView('unavailable')}
                            variant='outline-primary'> Unavailable </Button>
                  </Link>             
                  <br></br>
                  <div id='toggleButtons' class="d-flex justify-content-center">
                    <button class="btn" onClick={() => this.move('back')}><i class="fa fa-chevron-left"></i></button>
                    <button class="btn" onClick={() => this.move('forward')}><i class="fa fa-chevron-right"></i></button>
                  </div>
      </Col>
  </Row>
    );
  };
}
export default Gallery