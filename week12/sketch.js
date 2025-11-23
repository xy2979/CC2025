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
let hasUpdatedPattern = false; // 
const TOTAL_PATTERNS = 4;     // total patterns

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
  currentColor = color(random(50, 255), random(50, 255), random(50, 255), random(150, 255));
  currentWeight = random(1, 6);
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
  // let condition = (dA > 3 && dB > 3 && eA > 3);
  console.log(dA, dB, eA)

  // if the current condition is true and the last condition is false
  if (!hasUpdatedPattern && dA < 20 && dB < 20 && eA < 20) {
    // draw a new pattern randomly
    currentPattern = floor(random(TOTAL_PATTERNS)); 
    // generate random RGB color
    currentColor = color(random(50, 255), random(50, 255), random(50, 255), random(150, 255));

    // generate random strokeweight from 1-6
    currentWeight = random(1, 6);
    hasUpdatedPattern = true
  } else {
    hasUpdatedPattern = false
  }

  // // update the previous frame
  // lastCondition = condition;

  // Don't draw if not meet the condition
  // if (!condition) return;

  stroke(currentColor);
  strokeWeight(currentWeight);
  noFill();

// Current Patterns I have
  if (currentPattern === 0) {
    patternCross(thumbA.x, thumbA.y, indexA.x,indexA.y, thumbB.x, thumbB.y, indexB.x, indexB.y);
  }  else if (currentPattern === 1) {
    patternSevenCross(thumbA.x, thumbA.y, indexA.x,indexA.y, thumbB.x, thumbB.y, indexB.x, indexB.y);
  }else if (currentPattern === 2) {
    patternDiamondsCross(thumbA.x, thumbA.y, indexA.x,indexA.y, thumbB.x, thumbB.y, indexB.x, indexB.y);
  }else if (currentPattern === 3) {
    patternFourTriangleCross(thumbA.x, thumbA.y, indexA.x,indexA.y, thumbB.x, thumbB.y, indexB.x, indexB.y);
  }
}

function patternCross(thumbAX, thumbAY, indexAX, indexAY, thumbBX, thumbBY, indexBX, indexBY) {
  //since I want to use lerp later, so I have to let the numbers between 0-1
  let catCradlePattern = [0.0, 0.2, 0.4, 0.6, 0.8, 1.0];

  for (let i = 0; i < catCradlePattern.length; i++) {
    let evenlySpacedA = catCradlePattern[i];
    let evenlySpacedB = 1.0 - evenlySpacedA; // inverse relationship to shape cross
    //make the X shape, the distance between thumb and index is evenly distributed
    let pointAX = lerp(thumbAX, indexAX, evenlySpacedA);
    let pointAY = lerp(thumbAY, indexAY, evenlySpacedA);
    let pointBX = lerp(thumbBX, indexBX, evenlySpacedB);
    let pointBY = lerp(thumbBY, indexBY, evenlySpacedB);
    line(pointAX, pointAY, pointBX, pointBY);
  }
}

function patternSevenCross(thumbAX, thumbAY, indexAX, indexAY, thumbBX, thumbBY, indexBX, indexBY) {
  //find the middle point from thumb to index in same hand
  let pointAX = lerp(thumbAX, indexAX, 0.5);
  let pointAY = lerp(thumbAY, indexAY, 0.5);
  let pointBX = lerp(thumbBX, indexBX, 0.5);
  let pointBY = lerp(thumbBY, indexBY, 0.5);
  // straight line from one thumb to another thumb
  line(thumbAX, thumbAY, thumbBX, thumbBY);
  //straight line from one index to another index
  line(indexAX, indexAY, indexBX, indexBY);
  // straight line in the middle horizontally
  line(pointAX, pointAY, pointBX, pointBY);
  // diagnol straight line 1
  line(thumbAX, thumbAY, indexBX, indexBY);
  //diagnol straight line 2
  line(indexAX, indexAY, thumbBX, thumbBY);
  //straight line in the middle vertically
  line((thumbAX + thumbBX) / 2, (thumbAY + thumbBY) / 2, (indexAX + indexBX) / 2, (indexAY + indexBY) / 2);
}

function patternDiamondsCross(thumbAX, thumbAY, indexAX, indexAY, thumbBX, thumbBY, indexBX, indexBY) {
  //calculate each point on hand A
  let pointAX = lerp(thumbAX, indexAX, 0.25);
  let pointAY = lerp(thumbAY, indexAY, 0.25);
  let pointA1X = lerp(thumbAX, indexAX, 0.5);
  let pointA1Y = lerp(thumbAY, indexAY, 0.5);
  let pointA2X = lerp(thumbAX, indexAX, 0.75);
  let pointA2Y = lerp(thumbAY, indexAY, 0.75);

  //calculate each point on hand B
  let pointBX = lerp(thumbBX, indexBX, 0.25);
  let pointBY = lerp(thumbBY, indexBY, 0.25);
  let pointB1X = lerp(thumbBX, indexBX, 0.5);
  let pointB1Y = lerp(thumbBY, indexBY, 0.5);
  let pointB2X = lerp(thumbBX, indexBX, 0.75);
  let pointB2Y = lerp(thumbBY, indexBY, 0.75);

  //setup each line
  line(thumbAX, thumbAY, pointB2X, pointB2Y);
  line(pointAX, pointAY, indexBX, indexBY);
  line(pointA1X, pointA1Y, thumbBX, thumbBY);
  line(pointA2X, pointA2Y, pointBX, pointBY);
  line(indexAX, indexAY, pointB1X, pointB1Y);
}

function patternFourTriangleCross(thumbAX, thumbAY, indexAX, indexAY, thumbBX, thumbBY, indexBX, indexBY) {
  //set middle line point
  let pointAX = lerp(thumbAX, indexAX, 0.5);
  let pointAY = lerp(thumbAY, indexAY, 0.5);
  let pointBX = lerp(thumbBX, indexBX, 0.5);
  let pointBY = lerp(thumbBY, indexBY, 0.5);
  //top straight line
  line(thumbAX, thumbAY, thumbBX, thumbBY);
  //middle straight line
  line(pointAX, pointAY, pointBX, pointBY);
  //bottom straight line
  line(indexAX, indexAY, indexBX, indexBY);
  //set a variable to store the top line distance
  let dA = dist(thumbAX, thumbAY, thumbBX, thumbBY);
  // //set a variable to store the middle line distance
  // let dB = dist(pointAX, pointAY, pointBX, pointBY);
  //set a variable to store the middle line distance
  let dC = dist(indexAX, indexAY, indexBX, indexBY);
  //draw the four traingles using line function
  line(pointAX, pointAY, thumbAX + dA / 3, thumbAY);
  line(thumbAX + dA / 3, thumbAY, indexAX + (dC / 3) * 2, indexAY);
  line(indexAX + (dC / 3) * 2, indexAY, pointBX, pointBY);
  line(pointBX, pointBY, thumbAX + (dA / 3) * 2, thumbAY);
  line(thumbAX + (dA / 3) * 2, thumbAY, indexAX + dC / 3, indexAY);
  line(indexAX + dC / 3, indexAY, pointAX, pointAY);

}

// function patternDiamond(thumbAVec, indexAVec, thumbBVec, indexBVec) {
//   let fixedTs = [0.05, 0.25, 0.45, 0.65, 0.9];

//   for (let i = 0; i < fixedTs.length; i++) {
//     let tA = fixedTs[i];
//     let tB = fixedTs[(i + 2) % fixedTs.length];

//     let pA = p5.Vector.lerp(thumbAVec, indexAVec, tA);
//     let pB = p5.Vector.lerp(thumbBVec, indexBVec, tB);

//     line(pA.x, pA.y, pB.x, pB.y);
//   }
// }


// Callback function for when handPose outputs data
function gotHands(results) {
  // save the output to the hands variable
  hands = results;
}
