var img1;
var img2;
var img3;
var img4;
var img5;
var initials ='ps'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 225; // off white background
var lastscreenshot=61; // last screenshot never taken

function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('cat.jpg');  // cat.jpg needs to be next to this .js file
// you can link to an image on your github account
  img1 = loadImage('https://dma-git.github.io/images/74.png');
    img2 = loadImage('https://patrick-samuels.github.io/diypsart74sp22/Nowar.jpg');
      img3 = loadImage('https://patrick-samuels.github.io/diypsart74sp22/sunflower.jpg');
        img4 = loadImage('https://patrick-samuels.github.io/diypsart74sp22/peace.jpg');
          img5 = loadImage('https://patrick-samuels.github.io/diypsart74sp22/heart.jpg');
}

function setup() {
createCanvas(600, 600);  // canvas size
background(screenbg);   // use our background screen color

}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function
  
  } 
  if (toolChoice == '1' ) {
    image(img5, mouseX+50, mouseY+50);
 }
 
  else if (toolChoice == '2') { 
    // classic eraser tool
        noStroke();
        fill(255);
  } 
  
  else if (toolChoice == '3') { // third tool
//yellow chalk
    stroke(255, 215, 0, 80);
    line(mouseX, mouseY, pmouseX, pmouseY);
    line(mouseX+5, mouseY+5, pmouseX, pmouseY);
  } 
  
  else if (toolChoice == '4') {
//blue round chalk
    stroke(0, 87, 183,80);
    fill(180);
    strokeWeight(6);
 ellipse(mouseX-31, mouseY-31, 5, 15);
 rotate(mouseX / 100.0);    
  }     
  
  else if (key == '5') {  
// peace symbol
    image(img4, mouseX-40, mouseY-40);
  }
  
  else if (toolChoice == '6') {
//flag
    stroke(120);
    fill(0, 87, 183);
    rect(mouseX, 1/2*mouseY, mouseX+80, mouseY+30)
    fill(255, 215, 0);
    rect(mouseX, 30+mouseY, mouseX+80, mouseY+60);
  } 
  
  else if (toolChoice == '7') {
//sunflower
    image(img3, mouseX, mouseY);
  } 
    
  else if (toolChoice == '8') {
//3-brick set
 fill(300, 100, 0);
   rect(mouseX, mouseY, 80, 40);
   rect(mouseX+80, mouseY+40, 80, 40);
   rect(mouseX+160, mouseY, 80, 40);
  } 
  
  else if (toolChoice == '8') {
//another brick in the wall
    fill(300, 100, 0);
     rect(mouseX, mouseY, 80, 40);
  } 
  
  else if (toolChoice == '9') {
//3-brick set
 fill(300, 100, 0);
   rect(mouseX, mouseY, 80, 40);
   rect(mouseX+80, mouseY+40, 80, 40);
   rect(mouseX+160, mouseY, 80, 40);
  } 
  
  else if (toolChoice == '0')  {
    // 0 replaces the rect with an image we pre-loaded
    image(img2, mouseX-31, mouseY-31);  
  } 
  
  else if (toolChoice == 'g' || toolChoice == 'G') { // g places the image we pre-loaded
    image(img, mouseX, mouseY);
 }
 
function testbox(r, g, b) {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(r, g, b);
  rect(x-50, y-50, 100, 100);
}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(screenbg); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
}
