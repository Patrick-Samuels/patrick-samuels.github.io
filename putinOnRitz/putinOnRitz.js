//Chase The Ball Game
var ballx = 300;
var bally = 300;
var ballsize = 40;
var score = 0;
var img1;
var img2;
var img3;
var img4;
var cursorimg;
var gamestate = "L1";

function preload() {
   img1 = loadImage('https://patrick-samuels.github.io/images/gamebackground.png');
  img2 = loadImage('https://patrick-samuels.github.io/images/Cracker.png');
  img3 = loadImage('https://patrick-samuels.github.io/images/Flag.png');
  img4 = loadImage('https://patrick-samuels.github.io/images/PutinOnRitz.png');

    cursorimg = loadImage('https://patrick-samuels.github.io/images/vladimir.png');

}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  
 // if(gameState == "begin"){
 // beginGame();
//}
  
if(gamestate == "L1"){
  levelOne();
}
  if(gamestate == "L2"){
  levelTwo();

  }
  if(gamestate == "L3"){
  YOU_WIN();
  }
    cursor('https://patrick-samuels.github.io/images/vladimir.png');

}
//function beginGame(){  
 // background(img1);
 //if (mouseIsPressed === true) {
 // gameState="L1";  
// } 
//} // end of beginGame

function levelOne(){
  background(img1);
    cursor('https://patrick-samuels.github.io/images/vladimir.png');
  fill(255);
  stroke(0);
  strokeWeight(1);
  textAlign(CENTER);
  
  let distToBall = dist(ballx,bally, mouseX,mouseY);
  if (distToBall < ballsize/2){
  ballx = random(width);
    bally = random(height);
    score = score+1
  }
  if (score >= 5){
  gamestate="L2";
  
  }
  stroke (255);
  line(ballx,bally, mouseX+15,mouseY+15);
  image(img2, ballx-20, bally-5);
  text(("Score: "+score),width/2,40);
text("Level 1", width/2,height-20);
textSize(20);

}  //end of level 1

function levelTwo(){
  background(img3);
  fill(80,10,200);
  
  let distToBall = dist(ballx,bally, mouseX,mouseY);
  if (distToBall < ballsize/2){
  ballx = random(width);
    bally = random(height);
    score = score+1
  }
  if (score >= 10){
  gamestate="L3";
  
  }
image(img2, ballx, bally);
line(ballx, bally, mouseX+30, mouseY+15);
  stroke(255);
  strokeWeight(1);
  textAlign(CENTER);
  text(("Score: "+score),width/2,40);
text("Last Level ", width/2,height-20);
textSize(20);
}
function YOU_WIN(){
  noStroke();
background (img4);
  fill(random(255));
  text("WINNER!",width/2,height/2);
  textSize(50);
}
