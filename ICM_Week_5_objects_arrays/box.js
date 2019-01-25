class Box {
  
  constructor(x, y, l, r, t, b){
    this.x = x;
    this.y = y;
    this.l = l;
    this.r = r;
    this.t = t;
    this.b = b;
    this.opacity = 50;
    this.color1 = color(12, 104, 91, this.opacity);
    this.color2 = color(195, 78, 147, this.opacity);
    this.color3 = color(247, 235, 64, 50, this.opacity);
    this.color4 = color(84, 209, 214, this.opacity);
    this.location = 0;
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
        fill(this.color1);
        rect(0, 0, width, height);
        pop();
        this.location = "upperright";
    }

    //top left
    if (this.r < this.l && this.t > this.b){
      //rect to top left
      push();
      translate(this.x, this.y);
      rotate(PI);
      fill(this.color2);
      rect(0, 0, width, height);
      pop();
      this.location = "upperleft";
    }

    //bottom right
    if(this.r > this.l && this.t < this.b){

      //rect to bottom right
      push();
      translate(this.x, this.y);
      rotate(TWO_PI);
      fill(this.color3);
      rect(0, 0, width, height);
      pop();
      this.location = "bottomright";
    }

    //bottom left
    if(this.r < this.l && this.t < this.b){ 
      //rect to bottom left
      push();
      translate(this.x, this.y);
      rotate(PI/2);
      fill(this.color4);
      rect(0, 0, width, height);
      pop();
      this.location = "bottomleft";
      
    }
    
       print(this.location);
  }
  
  
//   intersects (mX, mY){
//     let d = dist(mX, mY, this.x, this.y); 
//     if (d < width-this.x && d < height-this.y){
//       return true;
//     }
//     else{
//       return false;
//     }
//   }
  
  
  
}