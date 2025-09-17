let originX = 450;
let originY = 500;

function setup() {
  // runs once at the start
  createCanvas(windowWidth, windowHeight);
  //camelBackNotation
  //createCanvas is a function that creates a canvas for our p5.js sketch to draw into. 
  //it takes two parameters, width and height. windowwidth and windowheight are used to set the size to the full size of our browser window.
  background(100, 180, 205);
}

function draw() {
  // runs in a loop after setup
  stroke(111, 56, 250); //change stroke to light purple
  strokeWeight(4); //change strokeWeight to 4px
  fill(225, 110, 103); //change fill to coral
  circle(100, 200, 120); // draw a circle at x: 100, y: 200 that is 120 pixels wide
  //circle takes these parameters: x position, y position, diameter
  
  stroke(120, 280, 234);//change stroke to light blue
  strokeWeight(1.5);// change strokeweight to 1.5px
  fill(30, 78, 200); // change fill to navy blue
  ellipse(350, 190, 130, 70); // draw a ellipse at x: 350, y: 190 that is 130 pixels wide, 70 pixels tall

  strokeWeight(3); //change strokeweight to 3 pixels
  fill(200, 45, 190); // change fill to pink
  quad(360, 580, 360, 400, 100, 300, 100, 580);
  // draw a quad at x1, y1 (360, 580); x2, y2, (360, 400); x3, y3(100, 300); x4, y4 (100, 580);
  
  stroke(0, 200, 255); // change stroke to light blue
  strokeWeight(6); // change strokweight to 6px
  noFill();
  quad(360 + 30, 580 + 30, 360 + 30, 400 + 30, 100 + 30, 300 + 30, 100 + 30, 580 + 30);
  
  fill(200, 15, 20);
  triangle(originX, originY, originX + 60, originY, originX + 30, originY + 160);

}
