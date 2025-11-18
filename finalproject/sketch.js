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

  // calculate the distance between thumb–index in one hand
  let dA = dist(thumbA.x, thumbA.y, indexA.x, indexA.y);
  let dB = dist(thumbB.x, thumbB.y, indexB.x, indexB.y);

  //calculate the distance between one thumb and another thumb
  let eA = dist(thumbA.x, thumbA.y, thumbB.x, thumbB.y);

  // when the distance between thumbtip and indextip > 20 and two hands distance > 50
  // let openA = dA > 20;
  // let openB = dB > 20;
  // let twoHandsFar = eA > 50;

  if (!(dA > 50 && dB > 50 && eA > 100)) {
  // 三个条件都成立 → 画线
    return;
}

  // 只有当两只手都张开的时候才画线
  //if (!(openA && openB&&twoHandsFar)) return;

  // 把坐标转成 p5.Vector，方便插值
  let thumbAVec = createVector(thumbA.x, thumbA.y);
  let indexAVec = createVector(indexA.x, indexA.y);
  let thumbBVec = createVector(thumbB.x, thumbB.y);
  let indexBVec = createVector(indexB.x, indexB.y);

  // 画很多 random 线
  let numLines = 10; // 线条数量，可调
  stroke("#46ffbeff");   // 克莱因蓝（你刚问的那个颜色）
  strokeWeight(2);
  noFill();

  for (let i = 0; i < numLines; i++) {
    // 在 A 手拇指–食指连线之间选一个随机位置
    let t1 = random(); // 0~1
    let pA = p5.Vector.lerp(thumbAVec, indexAVec, t1);

    // 在 B 手拇指–食指连线之间选一个随机位置
    let t2 = random();
    let pB = p5.Vector.lerp(thumbBVec, indexBVec, t2);

    // 加一点 jitter 让线更像“乱线”
    // let jitterA = createVector(random(-5, 5), random(-5, 5));
    // let jitterB = createVector(random(-5, 5), random(-5, 5));

    line(
      pA.x,
      pA.y,
      pB.x,
      pB.y,
    );
  }
}

    // for (let j = 0; j < hand.keypoints.length; j++) {
    //   let keypoint = hand.keypoints[j];
    //   fill(0, 255, 0);
    //   noStroke();
    //   circle(keypoint.x, keypoint.y, 10);
    // }
  
  // are there hands currently being tracked
  // if (hands.length > 0) {
  //   let indexTip = hands[0].keypoints[8]; //store the index fingertip
  //   let thumbTip = hands[0].keypoints[4];
  //   let centerX = lerp(indexTip.x, thumbTip.x, 0.5);
  //   let centerY = lerp(indexTip.y, thumbTip.y, 0.5);
  //   pinch = dist(indexTip.x, indexTip.y, thumbTip.x, thumbTip.y);
  //   if (pinch < 10) { //this threshold should be scaled to accomodate different depths
  //     strokeWeight(10);
  //     if (pinched == false) {
  //       let coord = createVector(centerX, centerY);
  //       stars.push(coord);
  //       //pinched = true;
  //     }
  //   } else {
  //     strokeWeight(1);
  //     //pinched = false;
  //   }
  //   circle(centerX, centerY, pinch);

  //   for (i = 0; i < stars.length; i++){
  //     circle(stars[i].x, stars[i].y, 10);
  //   }
  // }
// }

// Callback function for when handPose outputs data
function gotHands(results) {
  // save the output to the hands variable
  hands = results;
}

