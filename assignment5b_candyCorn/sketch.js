//////Candy Corn Sketch////////////
let annieNoisePosition = 0;
let annieNoiseSpeed = 0.01;
let annieStartingPoint = 0;
let annieX = 0;
let annieY = 0;

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
  for (let y = 0; y <= height; y += 5) {
    let hue = map(y, 0, height, 0, 180);
    stroke(hue, 100, 100);
    strokeWeight(5);
    line(0, y, width, y);
  }

  //Candy Corn Part///////////
  annieNoisePosition = annieStartingPoint;
  strokeWeight(1); 
  stroke(35, 100, 100);//set stroke color to orange
  
  //moving candy corn on the right using for loop
  //It draws a candy corn every pixel from 0 to i-30 through x axis
  //Since I used a triangleScale, so it scales from 0 to 1 based on its x position
  for (let i = 0; i < width; i++){
    let annieY = noise(annieNoisePosition) * height;
    annieNoisePosition = annieNoisePosition + annieNoiseSpeed;
    let triangleScale = map(i, 0, width, 0, 1);
    //design the candy corn
    push();
    translate(i - 30, annieY);
    scale(triangleScale);
    fill(55, 40, 100);
    triangle(0, 0, 20, 40, -20, 40);
    fill(35, 100, 100);
    triangle(0, 0, 15, 30, -15, 30);
    fill(0, 0, 100);
    triangle(0, 0, 10, 20, -10, 20);
    pop();
  }

  //moving candy corn on the bottom using for loop
  //It draws a candy corn every pixel from 0 to i-60 through y axis
  //Since I used a triangleScale, so it scales from 0 to 1 based on its y position
    for (let i = 0; i < width; i++){
    let annieY = noise(annieNoisePosition) * height;
    annieNoisePosition = annieNoisePosition + annieNoiseSpeed;
    let triangleScale = map(i, 0, width, 0, 1);
    //design the candy corn
    push();
    translate(annieY, i - 60);
    scale(triangleScale);
    fill(55, 40, 100);
    triangle(0, 0, 20, 40, -20, 40);
    fill(35, 100, 100);
    triangle(0, 0, 15, 30, -15, 30);
    fill(0, 0, 100);
    triangle(0, 0, 10, 20, -10, 20);
    pop();
    }
  annieStartingPoint = annieStartingPoint + annieNoiseSpeed;
}
