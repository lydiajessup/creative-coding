//create object for lost category
class LostCat {
  constructor(r, numSpikes, countArray, passColor){
    this.x = random(0, 800-r);
    this.y = random(0, 800-r);
    this.r = r;
    this.numSpikes = numSpikes;
    this.countArray = countArray;
    //this.color = '#3765ad';
    this.passColor = passColor;
    //console.log(this.passColor);
  }

  show(){

    //let littleY = this.y;
    this.addx = 5;
    this.addy = 10;
    this.angle = PI;

    for (this.i = 0; this.i < this.numSpikes; this.i++){
      stroke(this.passColor);

      //console.log(this.countArray[i]);
      //create vars for drawing spikes
      this.addx +=20;
      this.addy +=5;
      this.angle += PI/10;
      //lineLength = this.countArray[i];
      //draw lines out from center
      push();
      translate(this.x, this.y);
      rotate(this.angle);
      //console.log(this.countArray[i]);
      line(this.x-this.x, this.y-this.y, this.r+30, this.r+30);
      pop();
    }

    //draw the circles
    fill(this.passColor);
    noStroke();
    ellipse(this.x, this.y, this.r, this.r);


  }

//move away from mouse
  move(){
      this.x = this.x + (random(-5, 5));
      this.y = this.y + (random(-5,5));
  }

//sow Rays
// showRay(){
// //let littleY = this.y;
// this.addx = 5;
// this.addy = 10;
// this.angle = PI;
//
// for (this.i = 0; this.i < this.numSpikes; this.i++){
//   stroke(this.passColor);
//
//   //console.log(this.countArray[i]);
//   //create vars for drawing spikes
//   this.addx +=20;
//   this.addy +=5;
//   this.angle += PI/10;
//   //lineLength = this.countArray[i];
//   //draw lines out from center
//   push();
//   translate(this.x, this.y);
//   rotate(this.angle);
//   //console.log(this.countArray[i]);
//   line(this.x-this.x, this.y-this.y, this.r+30, this.r+30);
//   pop();
//   }
//}
}
