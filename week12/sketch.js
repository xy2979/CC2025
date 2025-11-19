/*
 * 👋 Hello! This is an ml5.js example made and shared with ❤️.
 * Learn more about the ml5.js project: https://ml5js.org/
 * ml5.js license and Code of Conduct: https://github.com/ml5js/ml5-next-gen/blob/main/LICENSE.md
 *
 * This example demonstrates hand tracking on live video through ml5.handPose.
 */

let handPose;
let video;
let hands = [];
let currentPattern = 0;     // current pattern
let lastCondition = false; 
let currentColor;
let currentWeight;
const TOTAL_PATTERNS = 3;     // total patterns

function preload() {
  // Load the handPose model
  handPose = ml5.handPose();
}

function setup() {
  createCanvas(640, 480);
  // Create the webcam video and hide it
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();
  // start detecting hands from the webcam video
  handPose.detectStart(video, gotHands);
}

function draw() {
  // Draw the webcam video
  image(video, 0, 0, width, height);

  // when detect two hands, draw cat cradle line
  if (hands.length >=2) {
    drawCatCradleLines(hands[0], hands[1]);
  }

  // Draw specific tracked hand points
  for (let i = 0; i < hands.length; i++) {
    let hand = hands[i];
    let thumbTip = hand.keypoints[4]; //store the thumbtip
    fill(255);
    noStroke();
    circle(thumbTip.x, thumbTip.y, 12);

    let indexTip = hand.keypoints[8]; //store the indextip
    let d = dist(thumbTip.x, thumbTip.y, indexTip.x, indexTip.y);
    //if the distance between thumbtip and indextip are < 20
    //the circles will be green
    if (d < 20) {
      fill("#46ffbeff");  // green
    } else {
      fill(255);          // white
    }
    noStroke();
    circle(indexTip.x, indexTip.y, 12);
  }
}

function drawCatCradleLines(handA, handB) {
  // store both hands' thumbtip & indextip
  let thumbA = handA.keypoints[4];
  let indexA = handA.keypoints[8];
  let thumbB = handB.keypoints[4];
  let indexB = handB.keypoints[8];

  // calculate the distance between thumb–index in one hand
  let dA = dist(thumbA.x, thumbA.y, indexA.x, indexA.y);
  let dB = dist(thumbB.x, thumbB.y, indexB.x, indexB.y);

  //calculate the distance between one thumb and another thumb
  let eA = dist(thumbA.x, thumbA.y, thumbB.x, thumbB.y);

  // How my hands meet the conditions
  let condition = (dA > 25 && dB > 25 && eA > 150);

  // if the condition meets
  if (condition && !lastCondition) {
  // draw a new pattern randomly
  currentPattern = floor(random(TOTAL_PATTERNS)); 
    // generate random color
    currentColor = color(
      random(50, 255),   // R
      random(50, 255),   // G
      random(50, 255),   // B
      random(150, 255)   // Alpha
    );

    // generate random strokeweight from 1-6
    currentWeight = random(1, 6);
  }

  // update the previous frame
  lastCondition = condition;

  // Don't draw if not meet the condition
  if (!condition) return;

  // store the thumbtip and indextip position on both hands
  let thumbAVec = createVector(thumbA.x, thumbA.y);
  let indexAVec = createVector(indexA.x, indexA.y);
  let thumbBVec = createVector(thumbB.x, thumbB.y);
  let indexBVec = createVector(indexB.x, indexB.y);

  stroke(currentColor);
  strokeWeight(currentWeight);
  noFill();

// Current Patterns I have
  if (currentPattern === 0) {
    patternCross(thumbAVec, indexAVec, thumbBVec, indexBVec);
  } else if (currentPattern === 1) {
    patternDoubleCross(thumbAVec, indexAVec, thumbBVec, indexBVec);
  } else if (currentPattern === 2) {
    patternDiamond(thumbAVec, indexAVec, thumbBVec, indexBVec);
  }
}

function patternCross(thumbAVec, indexAVec, thumbBVec, indexBVec) {
  let catCradlePattern = [0.0, 0.2, 0.4, 0.6, 0.8, 1.0];

  for (let i = 0; i < catCradlePattern.length; i++) {
    let evenlySpacedA = catCradlePattern[i];
    let evenlySpacedB = 1.0 - evenlySpacedA; // Use the reversed direction to generate an X-pattern.

    let pointA = p5.Vector.lerp(thumbAVec, indexAVec, evenlySpacedA);
    let pointB = p5.Vector.lerp(thumbBVec, indexBVec, evenlySpacedB);

    line(pointA.x, pointA.y, pointB.x, pointB.y);
  }
}


function patternDoubleCross(thumbAVec, indexAVec, thumbBVec, indexBVec) {
  let catCradlePattern = [0.1, 0.3, 0.5, 0.7, 0.9];

  for (let i = 0; i < catCradlePattern.length; i++) {
    let t = catCradlePattern[i];

    let pA1 = p5.Vector.lerp(thumbAVec, indexAVec, t);
    let pB1 = p5.Vector.lerp(thumbBVec, indexBVec, 1 - t);
    line(pA1.x, pA1.y, pB1.x, pB1.y);

    let pA2 = p5.Vector.lerp(thumbAVec, indexAVec, 1 - t);
    let pB2 = p5.Vector.lerp(thumbBVec, indexBVec, t);
    line(pA2.x, pA2.y, pB2.x, pB2.y);
  }
}


function patternDiamond(thumbAVec, indexAVec, thumbBVec, indexBVec) {
  let fixedTs = [0.05, 0.25, 0.45, 0.65, 0.9];

  for (let i = 0; i < fixedTs.length; i++) {
    let tA = fixedTs[i];
    let tB = fixedTs[(i + 2) % fixedTs.length];

    let pA = p5.Vector.lerp(thumbAVec, indexAVec, tA);
    let pB = p5.Vector.lerp(thumbBVec, indexBVec, tB);

    line(pA.x, pA.y, pB.x, pB.y);
  }
}


// Callback function for when handPose outputs data
function gotHands(results) {
  // save the output to the hands variable
  hands = results;
}
