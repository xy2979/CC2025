

function setup() {
  // runs once at the start
  createCanvas(windowWidth, windowHeight);
  //camelBackNotation
  //createCanvas is a function that creates a canvas for our p5.js sketch to draw into. 
  //it takes two parameters, width and height. windowwidth and windowheight are used to set the size to the full size of our browser window.
  background(100, 121, 245);
}

function draw() {
  // runs in a loop after setup
  strokeweight(4);
  
  circle(100, 200, 120);
  //circle takes these parameters: x position, y position, diameter
  ellipse(550, 190, 130, 70);
  quad(360, 580, 360, 360, 100, 360, 100, 580);
  

}
