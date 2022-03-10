function setup() {
createCanvas(600, 600);
}


function draw() {
  background(120,120,255);
  
  //circle
  strokeWeight(0);
  fill (120, 120, 120);
  ellipse (300, 300, 350, 350);
  triangle (20, 325, 300, 20, 580, 325);
  
  
  //backpack
  strokeJoin(ROUND)
  //rect (200, 340, 200, 600)
  //shirt
  strokeWeight(6)
  fill(75, 175, 50);
ellipse (300, 550, 200, 550);
//face
fill(235, 219, 152);
ellipse (300, 250, 200, 250);
//eyebrows
fill(173, 137, 64)
ellipse (350, 200, 50, 10);
ellipse (250, 200, 50, 10);
//eyes
 fill (255, 255, 255);
ellipse(250, 230, 35, 50);
ellipse(350, 230, 35, 50);
//eyeballs
strokeWeight(12);
fill(0,0,0);
ellipse(255,230,10);
ellipse(355,230,10);

//glasses
 strokeJoin(ROUND);
  strokeWeight(6);
  fill(0,0,0,20);
  rect (225,210, 50, 50);
 rect (325,210, 50, 50);
;rect (225,210, 50, 50);
 rect (325,210, 50, 50);
 line (275,230, 325,230);
 line (225, 225, 230, 210)
 line (195, 230, 225, 230);
  line (380, 230, 405, 230);

//mouth
noFill();
arc (300, 300, 60, 60, TWO_PI, PI);

//arms
ellipse(230, 550, 30, 400);ellipse(370, 550, 30, 400);
//hands
fill(235, 219, 152);
ellipse (230, 585, 60, 30);ellipse (370, 585, 60, 30);

//cheekbones
arc (230, 260, 30, 30, PI/2, PI);
arc (375, 260, 30, 30, TWO_PI, PI/2);
 line (225, 275, 230, 280)

//hair
fill (150, 105, 65);
ellipse (230, 156, 30, 60);
//triangle (220, 165, 270, 90, 400, 175);
arc (300, 175, 165, 120, PI, TWO_PI);
arc (270, 160, 60, 30, PI, TWO_PI);
arc (270, 180, 90, 30, PI, TWO_PI);

}
