/////wrapped Candy///////////////
let anniePX = 0; //previous position
let anniePY = 0;

let annieTargetX = 0; // destination position
let annieTargetY = 0;

let annieCurrentX = 0; //current position to draw eye to
let annieCurrentY = 0;

let annieLerpAmount = 1; //how far into our lerp are we?
let annieSpeed = 0.05; //how quickly to increment

let anniePrevS = 0; //store previous second to 0

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  colorMode(HSB);
}

function draw() {
  //Background color//////////
  //Using for loop for my gradient background
  //It draws a line every 5 pixels from 0 to the height of the canvas
  //It also changes the hue of the stroke color from green to blue.
  for (let x = 0; x <= width; x += 10) {
    let hue = map(x, 0, width, 50, 0);
    stroke(hue, 40, 100);
    strokeWeight(10);
    line(0, x, width, x);
  }

  //decide the XY position of the orange lollipop
  annieCurrentX = lerp(anniePX, annieTargetX, annieLerpAmount);
  annieCurrentY = lerp(anniePY, annieTargetY, annieLerpAmount);

  //draw the candy!///////
  push();
  translate(annieCurrentX, annieCurrentY);
  strokeWeight(1.5);
  stroke(280, 40, 100);
  //draw the candy wrapper on left side
  fill(56, 90, 100);
  triangle(10, 20, -40, 10, -30, 30);
  //draw the candy wrapper on right side
  triangle(70, 20, 120, 30, 110, 10);
  //draw the candy part////
  fill(260, 100, 100);
  rect(0, 0, 80, 40, 5);
  //draw the decoration on the wrapper
  fill(310, 90, 100);
  circle(40, 20, 15);
  fill(175, 35, 95);
  circle(20, 20, 15);
  circle(60, 20, 15);
  pop();

  //every frame, increment from 0 to 1 by speed
  annieLerpAmount = annieLerpAmount + annieSpeed;
  annieLerpAmount = constrain(annieLerpAmount, 0, 1);


  if (second() != anniePrevS) {
    anniePrevS = second(); // store current time in stopwatch
    anniePX = annieCurrentX;
    anniePY = annieCurrentY;
    annieTargetX = random(width);
    annieTargetY = random(height);
    //set a boundary to avoid the candy out of the screen
    annieTargetX = constrain(annieTargetX, 120, width - 120);
    annieTargetY = constrain(annieTargetY, 40, height - 40);
    annieLerpAmount = 0;
  }
}
