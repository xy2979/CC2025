////////////lollipop sketch//////////////////
let annieX2 = 0;
let annieY2 = 0;
let annieNoisePosition2 = 0;
let annieNoiseSpeed2 = 0.05; // the speed of drawing lollipops
let annieStartingPoint2 = 0;
let annieNoiseTheta2 = 0;
let annieNoiseRadius2 = 150; // let the lollipop draws the circle in radius 150 
// let annieNoiseRadius3 = 185;
//let annieNoiseRadius2 = 0;
let annieNoisePositionAngle2 = 1000; 

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  colorMode(HSB);

  //Background color//////////
  //Using for loop for my gradient background
  //It draws a line every 5 pixels from 0 to the width of the canvas
  //It also changes the hue of the stroke color from blue to red.
  for (let x = 0; x <= width; x += 5) {
    let hue = map(x, 0, width, 200, 360);
    stroke(hue, 70, 100);
    strokeWeight(5);
    line(0, x, width, x);
  }
}

function draw() {
  
  
  translate(width / 2, height / 2);
  //get a random theta number between 0-1 and map it to the degree between 0-360
  annieNoiseTheta2 = map(noise(annieNoisePositionAngle2), 0, 1, 0, 360);
  
  //I don't want to use noise
  //annieNoiseRadius2 = map(noise(annieNoisePosition2), 0, 1, 0, width / 2); 

  //decide the XY position of the orange lollipop
  let annieX2 = cos(annieNoiseTheta2) * annieNoiseRadius2;
  let annieY2 = sin(annieNoiseTheta2) * annieNoiseRadius2;

  //draw the orange lollipop
  strokeWeight(4);
  stroke(175, 35, 100);
  line(annieX2, annieY2, annieX2, annieY2 + 70); //
  strokeWeight(1);
  fill(48, 90, 100);
  circle(annieX2, annieY2, 30);
  triangle(annieX2, annieY2 + 15, annieX2 - 6, annieY2 + 21, annieX2 + 6, annieY2 + 21);

  //decide the XY position of the purple lollipop
  let annieX3 = -cos(annieNoiseTheta2) * annieNoiseRadius2;
  let annieY3 = sin(annieNoiseTheta2) * annieNoiseRadius2;

  //draw the purple lollipop
  strokeWeight(4);
  stroke(48, 90, 100);
  line(annieX3, annieY3, annieX3, annieY3 + 70);
  strokeWeight(1);
  fill(280, 80, 100);
  circle(annieX3, annieY3, 30);
  triangle(annieX3, annieY3 + 15, annieX3 - 6, annieY3 + 21, annieX3 + 6, annieY3 + 21);

  
  //let the lollipops move by adding the noise speed each frame
  annieNoisePosition2 = annieNoisePosition2 + annieNoiseSpeed2;
  annieNoisePositionAngle2 += annieNoiseSpeed2;

}
