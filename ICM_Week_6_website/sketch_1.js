////////////
/// global vars
////////////



////////////
/// setup
////////////


function setup() {
  var canvas = createCanvas(250, 200);
  //canvas.position(0,0);
  //var canvas2 = createCanvas(200, 200);
  background(255);

  
  var list = select('#observations');
  var reflect = select('#reflections');
  var dropzone;
  
  /////////////////////
  //add list elements
  /////////////////////
  
  //create list input textbox and add to observation list
  textbox = createInput('Add observations here');
 
  //style textbox
  //textbox.style('border', ');
  
  textbox.parent('observations');
  
  //when you press enter, add observation to list
  textbox.changed(addItem);
  
  //change color when you mouse over
  list.mouseOver(highlightObs);
  list.mouseOut(unhighlightObs);

  
  //////////////////////////////
  //write reflections paragraph
  /////////////////////////////
  reflections = select('#reflections');
  textbox2 = createInput('Write a reflection');
  textbox2.parent('reflections');
  
  //add textbox style
  textbox2.style('width', '400px');
  textbox2.style('height', '100px');
  textbox2.style('text-align', 'top');
  
  //when you press enter it becomes a paragraph
  textbox2.changed(addP);
  
  //highlight 
  reflections.mouseOver(highlightR);
  reflections.mouseOut(unhighlightR);
  
  /////////////////////////////
  //add image
	/////////////////////////////
  dropzone = select('#dropzone');
  dropzone.dragOver(highlight);
  dropzone.dragLeave(unHighlight);
  dropzone.drop(gotFile);
  
//////////////////
/// Other functions
//////////////////

function gotFile(file){
  //createP(file.name);
  //createP(file.type);
  //createP(file.size);
  var img = createImg(file.data);
  img.size(200, 200);
  image(img, 0, 0, width, height);
  //dropzone.child(createElement('img', imgDraw));
 
  
}

function addItem() {
 	//add input to list
  list.child(createElement('li', textbox.value()));
}

function addP(){
  //add paragraph to reflections
  reflect.child(createElement('p', textbox2.value()));
}
  
  
function highlight(){
  dropzone.style('background-color', 'black');
}
  
function unHighlight(){
  dropzone.style('background-color', 'white');
  
}
  
function highlightObs(){
  list.style('background-color', '#e317f1');
}
  
function unhighlightObs(){
  list.style('background-color', 'white');
}
  
function highlightR(){
  reflections.style('background-color', 'blue');
}
  
function unhighlightR(){
  reflections.style('background-color', 'white');
}
  
  
}


////////////
/// Draw
///////////


function draw() {
 
  //doodle app
  //mousedragged function below
 
  
}


function mouseDragged(){
  
  noStroke();
  fill(0);
  ellipse(mouseX, mouseY, 5, 5);
  
}