///////////////////////////
//set global variables
//////////////////////////

  //define distance between eyes
  let eyeR = 75
  let eyeL = 75

  //define head shape
  head = {
    x: 200,
    y: 250,
    w: 150,
    h: 200
  }

  //set fade variables
    let fade = 255;
		let rate = 0.1;

	//neck
	neck = {
    x1: 210,
    y1: 345,
    x2: 190,
    y2: 345,
    x3: 185,
    y3: 400,
    x4: 215,
    y4: 400
  }

	// nose
	nose = {
    a: 10,
    b: 15,
    c: 20,
    d: 25
  }
    

//////////////////////////
//setup
//////////////////////////

function setup() {
  createCanvas(400, 400);
  
  //make background color random 
  backColor = {
  	r: random(0, 255),
  	g: random(0, 255),
  	b: random(0, 255)
  }
  
  //make skin random color
  skinColor = {
  	r: random(0, 255),
  	g: random(0, 255),
  	b: random(0, 255)
  }
  
   //make hair random color
  hairColor = {
  	r: random(0, 255),
  	g: random(0, 255),
  	b: random(0, 255)
  }
  
    //make lips random color
  lipColor = {
  	r: random(0, 255),
  	g: random(0, 255),
  	b: random(0, 255)
  }
  
  //random freckles
  freck = {
    onex: random(160, 235),
    oney: random(180, 190),
    twox: random(160, 235),
    twoy: random(180, 190),
    threex:random(160, 235),
    threey: random(180, 190),
    fourx:random(160, 235),
    foury: random(180, 190),
    fivex:random(160, 235),
    fivey: random(180, 190)
  }
}

//////////////////////////
//draw
/////////////////////////

function draw() {
  
  //make eye object
  eyes = {
    Rx: (mouseX + eyeR),
    Ry: mouseY,
    Lx: (mouseX - eyeL),
    Ly: mouseY,
    lid: 50,
    iris: 40,
    pupil: 15,
    r: 43,
    g: 250,
    b: 147
    
  }
  
  //make lash object
  lash = {
		x: 25,
    y: 45,
    mid: 50,
    r: 43,
    g: 216,
    b: 250
  }
  
  
  //set background color to random
  background(backColor.r, backColor.g, backColor.b);
  
  //draw hair
  noStroke();
  fill(hairColor.r, hairColor.g, hairColor.b, fade);
  arc(head.x, head.y, head.x, head.y, PI, TWO_PI); 
  
  //draw antenae
  strokeWeight(8);
  stroke(skinColor.r, skinColor.g, skinColor.b, fade);
  line(head.x, head.y, mouseX + eyeR, mouseY);
  line(head.x, head.y, mouseX - eyeL, mouseY);
  
  //draw head
  noStroke();
  fill(skinColor.r, skinColor.g, skinColor.b, fade);
  ellipse(head.x, head.y, head.w, head.h);
  
  //draw eyelashes
  strokeWeight(4);
  stroke(lash.r, lash.g, lash.b);
  line(eyes.Rx, eyes.Ry, eyes.Rx, eyes.Ry-lash.mid);
  line(eyes.Rx, eyes.Ry, eyes.Rx+lash.x, eyes.Ry-lash.y);
  line(eyes.Rx, eyes.Ry, eyes.Rx-lash.x, eyes.Ry-lash.y);
  
  line(eyes.Lx, eyes.Ly, eyes.Lx, eyes.Ly-lash.mid);
  line(eyes.Lx, eyes.Ly, eyes.Lx-lash.x, eyes.Ly-lash.y);
  line(eyes.Lx, eyes.Ly, eyes.Lx+lash.x, eyes.Ly-lash.y);
  
  //draw eyes
  noStroke();
  fill(0);
  ellipse(eyes.Rx, eyes.Ry, eyes.lid, eyes.lid);
  ellipse(eyes.Lx, eyes.Ly, eyes.lid, eyes.lid);
  
  //draw pupils
  fill(eyes.r, eyes.g, eyes.b);
  ellipse(eyes.Rx, eyes.Ry, eyes.iris, eyes.iris);
  ellipse(eyes.Lx, eyes.Ly, eyes.iris, eyes.iris);

  fill(0);
  ellipse(eyes.Rx, eyes.Ry, eyes.pupil, eyes.pupil);
  ellipse(eyes.Lx, eyes.Ly, eyes.pupil, eyes.pupil);
  
  //draw mouth
    //lips
    fill(lipColor.r, lipColor.g, lipColor.b, fade);
    arc(head.x, head.y*.9, head.x/2, head.x, TWO_PI, PI);
    //teeth
    fill(255, fade);
    arc(head.x, head.y*.94, head.y*.3, head.x*.8, TWO_PI, PI);

  //draw nose
  fill(0, fade);
  triangle(head.x-nose.d, head.x, head.x-nose.b, head.x, head.x-nose.c, head.x+nose.a);
  triangle(head.x+nose.b, head.x, head.x+nose.d, head.x, head.x+nose.c, head.x+nose.a);
  
  //freckles
  stroke(255, fade);
  point(freck.onex, freck.oney);
  point(freck.twox, freck.twoy);
  point(freck.threex, freck.threey);
  point(freck.fourx, freck.foury);
  point(freck.fivex, freck.fivey);
  
  //neck
  noStroke();
  fill(skinColor.r, skinColor.g, skinColor.b, fade);
  quad(neck.x1, neck.y1, neck.x2, neck.y2, neck.x3, neck.y3, neck.x4, neck.y4);
  
  //make face disappear
  fade = fade - rate;

}