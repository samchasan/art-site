var fs = require('fs');
var artworks;
let availableArt
let unavailableArt


fs.readFile('../photos.json', 'utf8', function (err, data) {
  if (err) throw err;
  artworks = JSON.parse(data);
  availableArt = artworks.available
  unavailableArt = artworks.unavailable 

  console.log(artworks)
});


/* 

1) Create Routes

For each 'piece' in 'availableArt' && 'unavailableArt'
- create a unique route for it
- add route to array of routes 

/////////////

2) Create UX

Main page
- two options, available and unavailale
- background = random [unavailable] then random[available] 
- fading through every 2s

Gallery (both)
- single image 800px across
- arrow to left and right
- thumbnails beneath
- if you click thumbnail gallery moves to that point

*/