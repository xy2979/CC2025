////////////lollipop sketch//////////////////
let annieX2 = 0;
let annieY2 = 0;
let annieNoisePosition2 = 0;
let annieNoiseSpeed2 = 0.05;
let annieStartingPoint2 = 0;
let annieNoiseTheta2 = 0;
// let annieNoiseRadius2 = 55;
// let annieNoiseRadius3 = 185;
let annieNoiseRadius2 = 0;
let annieNoisePositionAngle2 = 1000; 

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  colorMode(HSB);
  //Background color//////////
  //Using for loop for my gradient background
  //It draws a line every 5 pixels from 0 to the width of the canvas
  //It also changes the hue of the stroke color from blue to red.
  for (let x = 0; x < width; x += 5) {
    let hue = map(x, 0, width, 200, 360);
    stroke(hue, 70, 100);
    strokeWeight(5);
    line(0, x, width, x);
  }
}

function draw() {
  
  
  translate(width / 2, height / 2);

  annieNoiseTheta2 = map(noise(annieNoisePositionAngle2), 0, 1, 0, 360);
  annieNoiseRadius2 = map(noise(annieNoisePosition2), 0, 1, 0, width / 2);

  let annieX2 = cos(annieNoiseTheta2) * annieNoiseRadius2;
  let annieY2 = sin(annieNoiseTheta2) * annieNoiseRadius2;

  //background(annieNoiseTheta2, 100, annieNoiseRadius2);

  //draw the orange lollipop
  strokeWeight(4);
  stroke(175, 35, 100);
  line(annieX2, annieY2, annieX2, annieY2 + 60);
  strokeWeight(1);
  fill(48, 90, 100);
  circle(annieX2, annieY2, 30);
  triangle(annieX2, annieY2 + 15, annieX2 - 6, annieY2 + 21, annieX2 + 6, annieY2 + 21);

  let annieX3 = -sin(annieNoiseTheta2) * annieNoiseRadius2;
  let annieY3 = -cos(annieNoiseTheta2) * annieNoiseRadius2;

  //draw the purple lollipop
  strokeWeight(4);
  stroke(48, 90, 100);
  line(annieX3, annieY3, annieX3, annieY3 + 60);
  strokeWeight(1);
  fill(280, 80, 100);
  circle(annieX3, annieY3, 30);
  triangle(annieX3, annieY3 + 15, annieX3 - 6, annieY3 + 21, annieX3 + 6, annieY3 + 21);

  

  annieNoisePosition2 = annieNoisePosition2 + annieNoiseSpeed2;
  annieNoisePositionAngle2 += annieNoiseSpeed2;

}
