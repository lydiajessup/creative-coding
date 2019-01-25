/////////////////////////
//declare objects
////////////////////////

//floating objects
var spaceThing = {
  ax: 50,
  ay: 0,
  aw: 30,
  ah: 30,
  bx: 0,
  by: 150,
  cx: 100,
  cy: 400
}

//speed of objects
var speed = {
  a: .5,
  b: .5,
  c: .5
}

/////////////////////
// setup
/////////////////////

  
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(2, 14, 33);
  
  
//////////////////////////
// galaxy
//////////////////////////

for (let i = 10; i < 100; i = i+10){
  noStroke();
  fill(78+i*4, 191-i*2, 13+i*2, 120-i);
  ellipse((height/2)+i, (height/2)+i, 50, 30+i);
  ellipse((height/2)-i, (height/2)-i, 50, 30+i);
  ellipse((height/2)+i, (height/2)-i, 50, 30+i);
  ellipse((height/2)-i, (height/2)+i, 50, 30+i);
}

  
//////////////////////////
// twinkling stars //
/////////////////////////
  
//make a grid of stars in background with twinkling
//added different rotations to make stars look random
for (let x = 0; x < width; x = x + 20){
  translate(150, 200);
  rotate(PI/2);
  for (let y = 0; y < height; y = y + 50){
    translate(100, 100);
    rotate(PI/4);
    noStroke();
    fill(random(0,255));
    ellipse(x, y, 2, 2); 
  }
}


///////////////////////////
// floating objects//
//////////////////////////
  

//make spacethings move back and forth on and off the screen
  noStroke();
  var pad = 100;
  
  //space thing a (circle)
  fill(229, 217, 48);
  ellipse(spaceThing.ax, spaceThing.ay, 30, 30);
  
  spaceThing.ax = spaceThing.ax + speed.a;
  spaceThing.ay = spaceThing.ay + speed.a;
  
	if ((spaceThing.ax>= width+pad) || (spaceThing.ax<0-pad)) {
      speed.a = speed.a * -1;
      }
 
  //thing b (square)
  fill(214, 48, 229);
  rect(spaceThing.bx, spaceThing.by, 30, 30);
  spaceThing.bx = spaceThing.bx + speed.b;
  spaceThing.by = spaceThing.by - speed.b;
  
	if ((spaceThing.by>= height+pad) || (spaceThing.by<0-pad)) {
      speed.b = speed.b * -1;
      }
  
  //thing c (rectangle)
  fill(48, 229, 211);
  rect(spaceThing.cx, spaceThing.cy, 30, 50);
  spaceThing.cx = spaceThing.cx + speed.c;
  spaceThing.cy = spaceThing.cy - (speed.c);
  
	if ((spaceThing.cy>= height+pad) || (spaceThing.cy<0-pad)) {
      speed.c = speed.c * -1;
      }
 

}