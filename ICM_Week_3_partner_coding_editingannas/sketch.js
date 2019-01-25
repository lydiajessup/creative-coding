//Lydia
//create state variable
var state = true;

function setup() {
createCanvas(windowWidth, windowHeight);
frameRate(10);

}

function draw() {

  //Create gradient background using lerp function
  function setGradient(x, y, w, h, c1, c2, axis) {
    noFill();
    
    //Top to bottom gradient
    if (axis =="Y") {
      for (let i = y; i<= y + h; i++) {
        var inter = map(i, y, y+h, 0, 1);
        var c = lerpColor(c1, c2, inter);
        stroke(c);
        line(x, i, x+w, i);
      }
    }
    //Left to right gradient
    else if (axis == "X") { 
      for (let j = x; j<= x+w; j++) {
        var inter2 = map(j, x, x+w, 0, 1);
        var d = lerpColor(c1,c2, inter2);
        stroke(d);
        line(j, y, j, y+h);
      }
    }
  }
  
  //Colors for the gradient function
  var color1 = color(0, 0, 20);
	var color2 = color(20, 0, 90);
  
  //Lydia: add new colors for button
  var color3 = color(237, 54, 157);
  var color4 = color(244, 112, 51); 
  
  //Lydia: create states for button
  if(state){
  setGradient(0, 0, windowWidth, windowHeight, color1, color2, "Y");
    
   //Create stars using loop
      for (var i = 0; i < 200; i++) {
    	}
      var x = random(windowWidth);
      var y = random(windowHeight);

      noStroke();
      fill(255, 255, 0);
      ellipse(x, y, 2, 2);
    
    	fill(255);  
    
  } else {
  setGradient(0, 0, windowWidth, windowHeight, color3, color4, "Y");
    
  //add a cloud
  fill(255);
  noStroke();
  ellipse(width/4, height/4, 100, 100);
  ellipse(width/4+50, height/4+25, 100, 50);
  ellipse(width/4-50, height/4+25, 100, 50);
  }  
    
 
  //create a moon
  fill(255, 255, 102);
  ellipse(width - 100, 100, 80, 80)
  
}


//Lydia: create a button event for clicking on the moon
function mousePressed() {
  if (dist(mouseX, mouseY, width-100, 100) < 80/2) {
    state = !state;
  }
  
}

