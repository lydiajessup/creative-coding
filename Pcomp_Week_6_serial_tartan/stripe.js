
class Stripe {
  
  //make the stripe
  constructor(x,y, w, r, g, b) {
    this.x = x;
    this.y = y;
    this.w = w;
    //this.speedx = speedx;
    //this.speedy = speedy;
    this.c = color(r, g, b);
  }
  
  //show the square
  show(){
    noStroke(0);
    fill(this.c);
    rectMode(CENTER);
    rect(this.x, this.y, (height/numgrid)* this.w, (height/numgrid)* this.w); 
  }
  
  move(speedx, speedy){
    this.speedx = speedx;
    this.speedy = speedy;
    
    this.y = this.y + this.speedy;
    this.x = this.x + this.speedx;
	}
  
  
}
