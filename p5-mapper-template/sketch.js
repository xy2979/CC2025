/*
 * p5.mapper
 * https://github.com/jdeboi/p5.mapper
 *
 * Jenna deBoisblanc
 * jdeboi.com
 *
 */

let pMapper; //stores the pMapper instance
let hyunjinQuadOne
let shuheQuadOne; 
let annieQuadOne;


//Annie's variations
let annieNoisePosition = 0;
let annieNoiseSpeed = 0.01;
let annieStartingPoint = 0;
let annieX = 0;
let annieY = 0;

//Hyunjin's variations
let heartSpeed = 0.02;
let heartX = 0;
let heartY = 0;

//shuhe's variations
let ringDotsCountA = 24; 
let ringTimeA = 0;  


function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  // create mapper object
  pMapper = createProjectionMapper(this);
  pMapper.load("map.json");

  // create "quads" for each surface of your projection
  annieQuadOne = pMapper.createQuadMap(400, 400);
  hyunjinQuadOne = pMapper.createQuadMap(400, 400);
  shuheQuadOne = pMapper.createQuadMap(400, 400);

}

function draw() {
  background(0);

  // display each of the projection surfaces in draw
  annieQuadOne.displaySketch(annieSketch);
  hyunjinQuadOne.displaySketch(hyunjinSketch);
  shuheQuadOne.displaySketch(shuheSketch);
  // quadLeft.display("red");
  // quadRight.display("green");
  
}

function annieSketch(pg){ // "pg" refers to each canvas "instance"
  pg.clear();
  pg.push();
  // your sketch goes between push and pop. remember to use the 'pg.' prefix for all p5 functions
  pg.colorMode(HSB);
  for (let y = 0; y <= 400; y += 5) {
    let hue = map(y, 0, 400, 0, 180);
    pg.stroke(hue, 100, 100);
    pg.strokeWeight(5);
    pg.line(0, y, 400, y);
  }

  //Candy Corn Part///////////
  annieNoisePosition = annieStartingPoint;
  pg.strokeWeight(1); 
  pg.stroke(35, 100, 100);//set stroke color to orange
  
  //moving candy corn on the right using for loop
  //It draws a candy corn every pixel from 0 to i-30 through x axis
  //Since I used a triangleScale, so it scales from 0 to 1 based on its x position
  for (let i = 0; i < 400; i++){
    let annieY = noise(annieNoisePosition) * 400;
    annieNoisePosition = annieNoisePosition + annieNoiseSpeed;
    let triangleScale = map(i, 0, 400, 0, 1);
    //design the candy corn
    pg.push();
    pg.translate(i - 30, annieY);
    pg.scale(triangleScale);
    pg.fill(55, 40, 100);
    pg.triangle(0, 0, 20, 40, -20, 40);
    pg.fill(35, 100, 100);
    pg.triangle(0, 0, 15, 30, -15, 30);
    pg.fill(0, 0, 100);
    pg.triangle(0, 0, 10, 20, -10, 20);
    pg.pop();
  }

  //moving candy corn on the bottom using for loop
  //It draws a candy corn every pixel from 0 to i-60 through y axis
  //Since I used a triangleScale, so it scales from 0 to 1 based on its y position
    for (let i = 0; i < 400; i++){
    let annieY = noise(annieNoisePosition) * 400;
    annieNoisePosition = annieNoisePosition + annieNoiseSpeed;
    let triangleScale = map(i, 0, 400, 0, 1);
    //design the candy corn
    pg.push();
    pg.translate(annieY, i - 60);
    pg.scale(triangleScale);
    pg.fill(55, 40, 100);
    pg.triangle(0, 0, 20, 40, -20, 40);
    pg.fill(35, 100, 100);
    pg.triangle(0, 0, 15, 30, -15, 30);
    pg.fill(0, 0, 100);
    pg.triangle(0, 0, 10, 20, -10, 20);
    pg.pop();
    }
  annieStartingPoint = annieStartingPoint + annieNoiseSpeed;
  // ends here
  pg.pop();
}

function hyunjinSketch(pg){
  pg.clear();
  pg.push();
  // your mini sketch goes here!
  pg.background("rgb(0,0,0)");  
  pg.fill("rgba(250, 132, 252, 1)");

  let heartXPos = map(noise(random(100)),0,1,0,400);
  let heartYPos = map(noise(random(100)),0,1,0,400);

  // drawing the heart
  pg.beginShape();
  pg.curveVertex(heartXPos,150); // x pos changes the top of the heart smoothly left to right
  pg.curveVertex(200,150);
  pg.curveVertex(290,110);
  pg.curveVertex(330,200);
  pg.curveVertex(200,350);
  pg.curveVertex(70,200);
  pg.curveVertex(110,110);
  pg.curveVertex(200,150);
  pg.curveVertex(200,heartYPos); // y pos changes up and down
  pg.endShape();

  heartX+=heartSpeed; // movement
  heartY+=heartSpeed; // movement

  
  //pg.rectMode(CORNERS);  
  // and ends here!
  pg.pop();
}

function shuheSketch(pg){
  pg.clear();
  pg.push();
  pg.noStroke();
  // your mini sketch goes here!
  pg.background(20);

  let ringBaseRadiusA = 120;
  let ringPulseA = 20 * sin(ringTimeA);   // When sin swings at [-1,1], 20 * it swings at [-20,20]
  let ringRadiusA = ringBaseRadiusA + ringPulseA;

  // Move the coordinate origin to the center of the canvas for easy drawing of a full circle using polar coordinates
  pg.translate(400/2, 400/2);

  // The for loop divides the entire circle of 0 to TWO-PI evenly into 24 points and rotates slightly over time
  for (let ringNumberA = 0; ringNumberA < ringDotsCountA; ringNumberA++){
    // angleA：
    // TWO-PI * (Point/Total): Divide the entire circle evenly
    // + RingTimeA * 0.6: Let the entire circle rotate slowly (0.6 is the speed I have tried to find more comfortable)
    let angleA = TWO_PI * ringNumberA / ringDotsCountA + ringTimeA * 0.6;

    // Convert the angle and radius to the x and y coordinates on the screen using cos and sin
    let dotPosXA = cos(angleA) * ringRadiusA;
    let dotPosYA = sin(angleA) * ringRadiusA;

    let redA   = map(sin(angleA + ringTimeA), -1, 1, 120, 255);
    let greenA = map(sin(angleA + ringTimeA), -1, 1, 80, 200);
    let blueA  = 220;
    pg.fill(redA, greenA, blueA);

    let dotSizeA = map(sin(ringTimeA + ringNumberA*0.2), -1, 1, 6, 14);

    // Draw this point
    pg.ellipse(dotPosXA, dotPosYA, dotSizeA, dotSizeA);
  }

  // Add a little more time: the animation will move on its own without the need for a mouse or keyboard
  ringTimeA = ringTimeA + 0.02; // This value determines the speed. I have tried that 0.01 is too slow, 0.05 is too urgent, and 0.02 is more natural
  
  
  //pg.rectMode(CORNERS);  
  // and ends here!
  pg.pop();
}


function keyPressed() { // keypressed toggles different modes
  switch (key) {
    case "c":
      pMapper.toggleCalibration();
      break;
    case "f":
      let fs = fullscreen();
      fullscreen(!fs);
      break;
    case "l":
      pMapper.load("map.json");
      break;

    case "s":
      pMapper.save("map.json");
      break;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}