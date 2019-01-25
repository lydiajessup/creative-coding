
//MTA lost and found visualization

// var url = "http://advisory.mtanyct.info/LPUWebServices/CurrentLostProperty.aspx";
// var key = "567be5d60db170b7691b8ddaad4b6b5c";



//preload the data
function preload(){
  lostItems = loadJSON("lost_found.json");
  //print(lostItems);
}

/////////////////////////////
//initialize global variables
/////////////////////////////

let lostCatArray = [];
let numItems = 0;
let totalItems = 0;
let r;
let numSpikes;
let countArray = [];
//define mtaColors

////////////////////////////
//// setup
////////////////////////////

function setup(){
  createCanvas(800, 800);
  background(0);

  //rgb
  // let mtablue = color(19,58, 160);
  // let mtaorange = color(237, 109, 52);
  // let mtagreen = color(128, 187, 66);
  // let mtabrown = color(146, 104, 60);
  // let mtasilver = color(167, 169, 172);
  // let mtayellow = color(245, 205, 71);
  // let mtared = color(219, 70, 58);
  // let mtadarkg = color(64, 144, 71);
  // let mtapurp = color(170, 64, 168);

  let mtablue = "#133aa0";
  let mtaorange = "#ed6d34";
  let mtagreen = "#80bb42";
  let mtabrown = "#92683c";
  let mtasilver = "#a7a9ac";
  let mtayellow = "#f5cd47";
  let mtared = "#db463a";
  let mtadarkg = "#409047";
  let mtapurp = "#aa40a8";

  let mtaColors = [mtablue, mtaorange, mtagreen, mtabrown, mtasilver, mtayellow, mtared, mtadarkg, mtapurp];

  //make a circle for each Category
  //find category length
  let lostCategories = lostItems.LostProperty.Category;
  //now make circles and put them in an array
  //for(i = 0; i < lostCategories.length; i++){
  for (i = 0; i < lostCategories.length; i++){  //console.log(lostCategories[i]);
    //get number of items in each category
    for (j = 0; j <lostCategories[i].SubCategory.length; j++ ){
      numItems = int(lostCategories[i].SubCategory[j].count);
      totalItems = totalItems + numItems;
      //put into countArray
      countArray.push(numItems);
    }
    //console.log(countArray);


    //re-map
    r = map(totalItems, 500, 219998, 0, 200);
    numSpikes = lostCategories[i].SubCategory.length;

    //pick a random mtaColors
    cPick = floor(random(0, 9));
    let passColor = mtaColors[cPick];
    //let passColor = '#3764ad';
    console.log(passColor);
    //fill(passColor);
    //ellipse(200, 200, 100, 100);
    //console.log(numSpikes);
    //send to object
    //console.log(countArray);
    lostCatArray[i] = new LostCat(r, numSpikes, countArray, passColor);

    //reset to 0
    totalItems = 0;
    countArray = [];

  }
  // let test = new LostCat(30);
  // test.show();

  //count number of items in lostCatArray
  //console.log(lostCategories[0].SubCategory[0].count);



}


///////////////////
// draw
//////////////////
function draw() {

  //ellipse( 200, 200, 30, 30);
  //console.log(lostCatArray[1]);
  for(i = 0; i < lostCatArray.length; i++){
    lostCatArray[i].show();
    lostCatArray[i].move();
  }

}
