let boxes = [];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  //draw background
  background(125, 22, 78);
  
  //show boxes array on click
  for (let b of boxes){
  	b.show();
    //if (b.intersects(mouseX, mouseY)){
        //print("hello!");
  	//}
  }
  
}




////////////////////
// user interaction
///////////////////

//draw a new box where the user clicks
//each click adds the book to an array
function mousePressed(){
  
  //evaluate distance between mouse pressed and walls
  let distL = dist(mouseX, mouseY, 0, mouseY);
  let distR = dist(mouseX, mouseY, width, mouseY);
  let distT = dist(mouseX, mouseY, mouseX, 0);
  let distB = dist(mouseX, mouseY, mouseX, height);
  
  //draw box to walls farthest from mouse
  let b = new Box(mouseX, mouseY, distL, distR, distT, distB);
  boxes[0] = b;
  boxes.push(b);

}


