function setup() {
  createCanvas(400, 400);
}

function draw() {
  
  //set background color to 
  background(252, 252, 81);
  
  //draw hair
  noStroke();
  fill(250, 85, 191);
  arc(200, 250, 200, 250, PI, TWO_PI); 
  
  //draw antenae
  strokeWeight(8);
  stroke(163, 88, 220);
  line(200, 250, 275, 75);
  line(200, 250, 125, 75);
  
  //draw head
  noStroke();
  fill(163, 88, 220);
  ellipse(200, 250, 150, 200);
  
  //draw eyelashes
  strokeWeight(4);
  stroke(43, 216, 250);
  line(275, 75, 275, 25);
  line(275, 75, 300, 30);
  line(275, 75, 250, 30);
  
  line(125, 75, 125, 25);
  line(125, 75, 100, 30);
  line(125, 75, 150, 30);
  
  //draw eyes
  noStroke();
  fill(0);
  ellipse(275, 75, 50, 50);
  ellipse(125, 75, 50, 50);
  
  //draw pupils
  fill(43, 250, 147);
  ellipse(275, 75, 40, 40);
  ellipse(125, 75, 40, 40);

  fill(0);
  ellipse(275, 75, 15, 15);
  ellipse(125, 75, 15, 15);
  
  //draw mouth
  fill(250, 154, 43);
  arc(200, 225, 100, 200, TWO_PI, PI);
  fill(255);
  arc(200, 235, 75, 160, TWO_PI, PI);
  
  //draw nose
  fill(0);
  triangle(175, 200, 185, 200, 180, 210);
  triangle(215, 200, 225, 200, 220, 210);
  
  //freckles
  stroke(255, 150);
  point(160, 190);
  point(177, 180);
  point(220, 180);
  point(200, 187);
  point(235, 190);
  
  //neck
  noStroke();
  fill(163, 88, 220);
  quad(210, 345, 190, 345,185, 400, 215, 400);

}