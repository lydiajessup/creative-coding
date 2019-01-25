////////////////////
// initialize
///////////////////

//empty mountain array
let mountains1 = [];
let mountains2 = [];
let mountains3 = [];
let books = [];
let glasses = [];

// global variables
let pad = 75;
let state = glasses;
let offset = .05;
let mountainLength = 200;


//////////////////
// setup
//////////////////

function setup() {
  createCanvas(400, 400);
  
	//set up mountain array - making 10
	for (let i = 0; i < mountainLength; i++){
		//change y values
    for(let j = 0; j < mountainLength; j++){
    let x = -100 +  i*pad;
    let y = -40 + i*pad;
    mountains1[i] = new Mountain(x,y);
    }
	}
  for (let i = 0; i < mountainLength; i++){
		//change y values
    for(let j = 0; j < mountainLength; j++){
    let x = -100 + i*pad;
    let y = 150 + i*pad;
    mountains2[i] = new Mountain(x,y);
    }
	}
   for (let i = 0; i < mountainLength; i++){
		//change y values
    for(let j = 0; j < mountainLength; j++){
    let x = 30 + i*pad;
    let y = -100 + i*pad;
    mountains3[i] = new Mountain(x,y);
    }
	}
}




//////////////////////
// draw
//////////////////////

function draw() {
  background(9, 107, 22);
  
  //drawing all mountains mountains in array in line
 for (let i = 0; i < mountains1.length; i++){
   mountains1[i].show(); 
   mountains1[i].move(offset);

 }
  for (let i = 0; i < mountains2.length; i++){
   mountains2[i].show(); 
   mountains2[i].move(-offset);
 }
    for (let i = 0; i < mountains3.length; i++){
   mountains3[i].show(); 
   mountains3[i].move(-offset);
 }

  
  //show glasses array on drag
  for (i = 0; i < glasses.length; i++){
    glasses[i].show();
  }
  
  
  //show book array on click
  for (i = 0; i < books.length; i++){
    books[i].show();
  }
  

  
}


/////////////////////
// classes
/////////////////////

//create class mountain
class Mountain {
  //constructor
 
  constructor(x, y){
    this.x = x;
    this.y = y;
  
  }
  
  move(offset){
  	
    this.offset = offset;
  
    this.x = this.x + this.offset;
    this.y = this.y + this.offset;
    
    
    
//     if (this.x > width || this.y >height ){
//       //this.speedx = this.speedx * -1;
//       this.x = 0;
//       this.y = 0;
  
//     }
    	
//   	// if (this.y > height || this.y < 0){
//   	// //this.speedy = this.speedy *-1;
//   	// 	this.y = this.ypad;
//   	// }
    
//     this.x = this.x + this.speedx;
//     this.y = this.y + this.speedy;
  }


  show(){
    noStroke();
  	//mountain
    fill(4, 45, 112);
  	triangle(this.x, this.y, this.x+30, this.y-30, this.x+60, this.y);
    //snow
    fill(255);
    triangle(this.x+15, this.y-15, this.x+30, this.y-30, this.x+45, this.y-15);
  }
}


//glasses class

class Glasses {
  
  constructor(x, y){
    this.x = x;
    this.y = y;
  }
  
  show() {
  
    //top bar
    fill(239, 124, 207);
    arc(this.x+15, this.y, 25, 50, PI/8, PI);
    arc(this.x+40, this.y, 25, 50, PI/8, PI);

    //white middle
    fill (255);
    arc(this.x+15, this.y, 20, 45, PI/8, PI);
    arc(this.x+40, this.y, 20, 45, PI/8, PI);

    //rim
    fill(239, 124, 207);
    rect(this.x, this.y, 55, 5);

  }
} 
  

//book class
class Book {
    
     constructor(x, y){
       this.x = x;
       this.y = y;
     }  
    
     show() {
       //book
      push();
      translate(this.x, this.y);
      rotate(PI/4);
      fill(255);
      triangle(0, 0, 30, 0, 30, -10);
      fill(247, 234, 59);
      rect(0, 0, 35, 45);
      pop();
     }
  
}
  
////////////////////
// interaction
///////////////////

//draw a new book where the user clicks
//each click adds the book to an array
function mousePressed(){
  
  if (state == glasses){
    let b = new Book(mouseX, mouseY);
    books[0] = b;
    books.push(b);
    state = books;
  }
  else {
    let g = new Glasses(mouseX, mouseY);
  	glasses[0] = g;
  	glasses.push(g);
    state = glasses;
  }
  
  offset = offset *-1;
  
    
}
  

   
    
    
    
    
    