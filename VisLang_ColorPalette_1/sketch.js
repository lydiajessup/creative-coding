let boxes = [];

function setup() {
  createCanvas(400, 400);
   //background(125, 22, 78, 50);
}

function draw() {
 
  
  //show boxes array on click
  for (i = 0; i < boxes.length; i++){
  	boxes[i].show();
  }
  
}




class Box {
  
  constructor(x, y, l, r, t, b){
    this.x = x;
    this.y = y;
    this.l = l;
    this.r = r;
    this.t = t;
    this.b = b;
  }
  
  show() {
     
    //draw rect from mouse to farthest walls

   noStroke();
    
    //top right
    if (this.r > this.l && this.t > this.b){
        //rect to top right
        push();
        translate(this.x, this.y);
        rotate(3*PI/2);
        fill(12, 104, 91, 50);
        rect(0, 0, width, height);
        pop();
    }

    //top left
    if (this.r < this.l && this.t > this.b){
      //rect to top left
      push();
      translate(this.x, this.y);
      rotate(PI);
      fill(195, 78, 147, 50);
      rect(0, 0, width, height);
      pop();

    }

    //bottom right
    if(this.r > this.l && this.t < this.b){

      //rect to bottom right
      push();
      translate(this.x, this.y);
      rotate(TWO_PI);
      fill(247, 235, 64, 50);
      rect(0, 0, width, height);
      pop();
    }

    //bottom left
    if(this.r < this.l && this.t < this.b){ 
      //rect to bottom left
      push();
      translate(this.x, this.y);
      rotate(PI/2);
      fill(84, 209, 214, 50);
      rect(0, 0, width, height);
      pop();
    }
  }
}



////////////////////
// interaction
///////////////////

//draw a new box where the user clicks
//each click adds the book to an array
function mousePressed(){
  
  
  let distL = dist(mouseX, mouseY, 0, mouseY);
 
  let distR = dist(mouseX, mouseY, width, mouseY);
 
  //evaluate distance between point and top/bottom walls
  let distT = dist(mouseX, mouseY, mouseX, 0);
 
  let distB = dist(mouseX, mouseY, mouseX, height);
  
  
  let b = new Box(mouseX, mouseY, distL, distR, distT, distB);
  boxes[0] = b;
  boxes.push(b);

}


