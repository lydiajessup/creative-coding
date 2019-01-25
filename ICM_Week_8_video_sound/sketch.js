//set global variables
var capture;
var img;
var x = 0;
var y = 0;
var z = -1;
var video;


function setup() {
  
  //set up canvas
  createCanvas(400, 400);

  
  //////////////////////////////////
  //make background image
  /////////////////////////////////
  
  //make same size as canvas
  img = createImage(width, height);
  
  //access the pixels
	img.loadPixels();
  
  //loop through and set the color to random
	for (var i = 0; i < img.width; i++) {
  	for (var j = 0; j < img.height; j++) {
    img.set(i, j, color(random(255), random(255), random(255)));
  	}
	}

  //update pixels  
  img.updatePixels();
  image(img, 0, 0);
	
  //////////////////////////
  //create video capture
  //////////////////////////
  video = createCapture(VIDEO);
  //hide for now
  video.hide();
  
 
}

function draw() {
	
  //make box dimensions
  let boxw = width/10;
  let boxh = height/10;
  
  ///////////////////////
	//Make video move
  ///////////////////////
  
  //video variables
  var w = video.width;
  var h = video.height;
  
  //copy video to moving line
  copy(video, 0, 0, w, h, x, y, .5, height);
  
  copy(img, 0, 0, w, h, x, 100, .5, 250);

  //stripes
  //copy(img, 0, 0, w, h, x, boxh, .5, boxh);
  // copy(img, 0, 0, w, h, x, boxh*3, .5, boxh);
  // copy(img, 0, 0, w, h, x, boxh*5, .5, boxh);
  // copy(img, 0, 0, w, h, x, boxh*7, .5, boxh);
  // copy(img, 0, 0, w, h, x, boxh*9, .5, boxh);
  
  
  //incriment by .5
  x = x +.5;
  z = z +.5;
  
  //reset when gets to end of canvas
  if (x > width){
    x = 0;
    z = 0; 
  }
  
  ///////////////////
  //Draw grid overlay
  ///////////////////

  //draw grid with black triangles
  for (let i = 0; i < width; i= i+boxw){
    for(let j = 0; j < height; j = j+boxh){
    noFill();
    rect(i, j, boxw, boxh);
  	fill(0);
    triangle(i, j, i+boxw, j, i, j+boxh);
    noFill();
  	}
  }
  
  
}