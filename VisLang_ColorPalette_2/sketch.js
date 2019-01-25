
///////////////////////////////////
// Personal Tartan
///////////////////////////////////



///////////////
// declare globals
///////////////

let numgrid = 10;
let speed = 1;
let greenW = 1.25;
let redW = .5;

let greenStripesV = [];
let greenStripesH = [];

let redStripesV = [];
let redStripesH = [];

let dashes1 = [];
let dashes2 = [];
let dashes3 = [];
let dashpad = 10;


let linepad = 10;

////Setup


function setup() {
  createCanvas(400, 400);
  
   //draw background here to create layers 
    background(247, 235, 64);
  
  
  	//draw vertical green stripes
   	for (let i = 0; i < 3; i++){
      let x = 10+ width/6 + i*(width/3);
      let y = 0
      greenStripesV[i] = new Stripe(x, y, greenW, 0, 1, 12, 104, 91);
    }
  
		//draw horizontal green stripes
   	for (let i = 0; i < 3; i++){
      let x = 0 
      let y = width/6 + i*(width/3);
      greenStripesH[i] = new Stripe(x, y, greenW, 1, 0, 84, 209, 214);
    }
  
   //draw vertical red stripes
  	for (let i = 0; i < 2; i++){
      let x = 150 + i*125;
      let y = 0
      redStripesV[i] = new Stripe(x, y, redW, 0, 1, 125, 22, 78);
    }
  
   //draw horizontal red stripes
   	for (let i = 0; i < 2; i++){
      let x = 0 
      let y = 150 + i*125;
      redStripesH[i] = new Stripe(x, y, redW, 1, 0, 195, 78, 147);
    }
  
  //dashes 1
    for (let i = 0; i < 100; i++){
      let x = 0 + i*dashpad;
      let y = 200;
      dashes1[i] = new Dash(x,y);
    }
  //dashes 2
    for (let i = 0; i < 100; i++){
      let x = 0 + i*dashpad;
      let y = 333;
      dashes2[i] = new Dash(x,y);
    }
      
  //dashes 3
   for (let i = 0; i < 100; i++){
      let x = 0 + i*dashpad;
      let y = 67;
      dashes3[i] = new Dash(x,y);
    }
  
}



///Draw


function draw() {

  
  
 
//   //draw grid
//   for(i = 0; i< numgrid; i++){
//     strokeWeight(5);
//     line((width/numgrid)*i, 0, (width/numgrid)*i, height);
//   }
  
//   for(i = 0; i<10; i++){
//     strokeWeight(5);
//     line(0, (height/numgrid)*i, width, (height/numgrid)*i); 
//   }
  
   
 

  
  //draw green stripes

	//vertical  
   for (let i = 0; i < greenStripesV.length; i++){
   	 greenStripesV[i].show(); 
  	 greenStripesV[i].move();
	 }
  
   for (let i = 0; i < greenStripesV.length; i++){
   	 greenStripesH[i].show(); 
  	 greenStripesH[i].move();
	 }
  
  //red stripes
   for (let i = 0; i < redStripesV.length; i++){
   	 redStripesV[i].show(); 
  	 redStripesV[i].move();
	 }
  
	 for (let i = 0; i < redStripesH.length; i++){
	 redStripesH[i].show(); 
	 redStripesH[i].move();
	 }
  
  
////draw dashes
  for (let i = 0; i < dashes1.length; i++){
   dashes1[i].show(); 
 	}
  
   for (let i = 0; i < dashes1.length; i++){
   dashes2[i].show(); 
 	}
  
   for (let i = 0; i < dashes1.length; i++){
   dashes3[i].show(); 
 	}
  

}

///////////////////
// Classes
//////////////////

class Stripe {
  
  //make the stripe
  constructor(x,y, w, speedx, speedy, r, g, b) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.speedx = speedx;
    this.speedy = speedy;
    this.c = color(r, g, b);
  }
  
  //show the square
  show(){
    noStroke(0);
    fill(this.c);
    rectMode(CENTER);
    rect(this.x, this.y, (height/numgrid)* this.w, (height/numgrid)* this.w); 
  }
  
  move(){
    this.y = this.y + this.speedy;
    this.x = this.x + this.speedx;
	}
  
  
}


//dashes
class Dash {
   
  constructor(x,y) {
    this.x = x;
    this.y = y;
  }
  
  show(){
  	stroke(247, 235, 64);
  	line(this.x, this.y, this.x+5, this.y+5);
  }
  
}




