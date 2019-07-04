import React from 'react';
import logo from './logo.svg';
import './App.css';
const fs = require('fs');
let availableArt
let unavailableArt


fs.readFile('../photos.json', 'utf8', function (err, data) {
  if (err) throw err;
  const artworks = JSON.parse(data);
  availableArt = artworks.available
  unavailableArt = artworks.unavailable 

  console.log(artworks)
});


function createElements(e) {
  e.forEach(piece => {
   // do something with the piece
  })
}

function App() {

  createElements(availableArt)
  createElements(unavailableArt)


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
