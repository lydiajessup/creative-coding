var serial; // variable to hold an instance of the serialport library
var portName = "/dev/cu.usbmodem14321";

///////////////
// declare globals
///////////////

let numgrid = 10;
let speed = 0;
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
  
  //serial connection
   serial = new p5.SerialPort(); // make a new instance of the serialport library
   serial.on('list', printList); // set a callback function for the serialport list event
   serial.on('connected', serverConnected); // callback for connecting to the server
   serial.on('open', portOpen);        // callback for the port opening
   serial.on('data', serialEvent);     // callback for when new data arrives
   serial.on('error', serialError);    // callback for errors
   serial.on('close', portClose);      // callback for the port closing

  serial.list();
  serial.open(portName);  
  

  
  
  //canvas
    createCanvas(400, 400);
    background(247, 235, 64);
  
  
  	//draw vertical green stripes
   	for (let i = 0; i < 3; i++){
      //let speed = map(, 0, 255, 0, 3);
      //console.log(speed);
      let x = 10+ width/6 + i*(width/3);
      let y = 0
      greenStripesV[i] = new Stripe(x, y, greenW, 12, 104, 91);
    }
  
		//draw horizontal green stripes
   	for (let i = 0; i < 3; i++){
      let x = 0 
      let y = width/6 + i*(width/3);
      greenStripesH[i] = new Stripe(x, y, greenW, 84, 209, 214);
    }
  
   //draw vertical red stripes
  	for (let i = 0; i < 2; i++){
      let x = 150 + i*125;
      let y = 0
      redStripesV[i] = new Stripe(x, y, redW, 125, 22, 78);
    }
  
   //draw horizontal red stripes
   	for (let i = 0; i < 2; i++){
      let x = 0 
      let y = 150 + i*125;
      redStripesH[i] = new Stripe(x, y, redW, 195, 78, 147);
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



/////////////////
/// Serial Functions
/////////////////


function serverConnected() {
  print('connected to server.');
}
 
function portOpen() {
  print('the serial port opened.')
}
 
 
function serialError(err) {
  print('Something went wrong with the serial port. ' + err);
}
 
function portClose() {
  print('The serial port closed.');
}

function serialEvent() {
  var inString = serial.readLine();
  if (inString.length >0){
    inData = Number(inString);
  	speed = map(inData, 0, 255, 0, 10);
    print(speed);
  }
  
  //inData = serial.readLine();
  //inData = Number(serial.read());
  //print(inData);
}

function printList(portList) {
 // portList is an array of serial port names
 for (var i = 0; i < portList.length; i++) {
 // Display the list the console:
 print(i + " " + portList[i]);
 }
}




///////////////////
///Draw
///////////////////

function draw() {

  
  //draw green stripes

	//vertical  
   for (let i = 0; i < greenStripesV.length; i++){
   	 greenStripesV[i].show(); 
  	 greenStripesV[i].move(0, speed);
	 }
  
   for (let i = 0; i < greenStripesV.length; i++){
   	 greenStripesH[i].show(); 
  	 greenStripesH[i].move(speed, 0);
	 }
  
  //red stripes
   for (let i = 0; i < redStripesV.length; i++){
   	 redStripesV[i].show(); 
  	 redStripesV[i].move(0, speed);
	 }
  
	 for (let i = 0; i < redStripesH.length; i++){
	 redStripesH[i].show(); 
	 redStripesH[i].move(speed, 0);
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




