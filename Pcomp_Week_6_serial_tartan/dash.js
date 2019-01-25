
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
