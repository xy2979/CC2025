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

  // calculate the distance between thumb–index in two hands
  let dA = dist(thumbA.x, thumbA.y, indexA.x, indexA.y);
  let dB = dist(thumbB.x, thumbB.y, indexB.x, indexB.y);

  //calculate the distance between one thumb and another thumb
  let eA = dist(thumbA.x, thumbA.y, thumbB.x, thumbB.y);

  // when the distance between thumbtip and indextip is not > 20 and two hands distance is not > 50
  if (!(dA > 20 && dB > 20 && eA > 50)) {
    // then don't draw
    return;
  }

  stroke("#46ffbeff");  
  strokeWeight(2);
  noFill();

  //since I want to use lerp later, so I have to let the numbers between 0-1
  let catCradlePattern = [0.0, 0.2, 0.4, 0.6, 0.8, 1.0];

  for (let i = 0; i < catCradlePattern.length; i++) {
    let evenlySpacedA = catCradlePattern[i];
    let evenlySpacedB = 1.0 - evenlySpacedA; // inverse relationship to shape cross

    let pointAX = lerp(thumbA.x, indexA.y, evenlySpacedA);
    let pointAY = lerp(thumbA.y, indexA.y, evenlySpacedA);
    let pointBX = lerp(thumbB.x, indexB.x, evenlySpacedB);
    let pointBY = lerp(thumbB.y, indexB.y, evenlySpacedB);
    line(pointAX, pointAY, pointBX, pointBY);
  }
}

// Callback function for when handPose outputs data
function gotHands(results) {
  // save the output to the hands variable
  hands = results;
}
