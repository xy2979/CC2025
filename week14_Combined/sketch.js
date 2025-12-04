/*
 * 👋 Hello! This is an ml5.js example made and shared with ❤️.
 * Learn more about the ml5.js project: https://ml5js.org/
 * ml5.js license and Code of Conduct: https://github.com/ml5js/ml5-next-gen/blob/main/LICENSE.md
 *
 * This example demonstrates hand tracking on live video through ml5.handPose.
 */

//Note for Craig
//ML5 library seem to be unrealiablke when running in live preview, consecutive reboots and updating results in failure

/* Error Message: 
index.html:1 Access to fetch at 'https://www.kaggle.com/models/mediapipe/handpose-3d/tfJs/landmark-full/1/model.json?tfjs-format=file&tfhub-redirect=true' (redirected from 'https://tfhub.dev/mediapipe/tfjs-model/handpose_3d/landmark/full/1/model.json?tfjs-format=file') from origin 'http://127.0.0.1:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.Understand this error www.kaggle.com/models/mediapipe/handpose-3d/tfJs/landmark-full/1/model.json?tfjs-format=file&tfhub-redirect=true:1 Failed to load resource: net::ERR_FAILEDUnderstand this error index.html:1 Access to fetch at 'https://www.kaggle.com/models/mediapipe/handpose-3d/tfJs/detector-full/1/model.json?tfjs-format=file&tfhub-redirect=true' (redirected from 'https://tfhub.dev/mediapipe/tfjs-model/handpose_3d/detector/full/1/model.json?tfjs-format=file') from origin 'http://127.0.0.1:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.Understand this error www.kaggle.com/models/mediapipe/handpose-3d/tfJs/detector-full/1/model.json?tfjs-format=file&tfhub-redirect=true:1 Failed to load resource: net::ERR_FAILEDUnderstand this error platform_browser.js:32 Uncaught (in promise) TypeError: Failed to fetchUnderstand this error
*/

let handPose;
let video;
let hands = [];
let currentPattern = 0;     // current pattern
//let lastCondition = false; 
let currentColor;
let currentWeight;
let hasUpdatedPattern = false; //trigger new pattern any time
const TOTAL_PATTERNS = 6;     // total patterns
let sentences = [
  "Your turn. My turn. The string remembers.",
  "No words. Just hands finding hands.",
  "You pull, I follow. A new shape begins.",
  "Tiny moves. Big magic.",
  "Hold still. Here comes the next secret.",
  "Again? Yes. The string likes us."
];
let currentSentence = sentences[0];
let popSound;
let bgSound;

function preload() {
  // Load the handPose model
  handPose = ml5.handPose();
  popSound = loadSound('pop.mp3');
  bgSound = loadSound('bgmusic.mp3');
}

function setup() {
  bgSound.play();
  bgSound.setVolume(0.5);
  bgSound.loop();
  ///ml5js Part/////////////////////////////////////
  createCanvas(windowWidth,windowHeight);
  // Create the webcam video and hide it
  video = createCapture(VIDEO);
  video.size(640, 480); 
  video.hide();
  // start detecting hands from the webcam video
  handPose.detectStart(video, gotHands);
  // currentColor = color(random(50, 255), random(50, 255), random(50, 255), random(150, 255));
  // currentWeight = random(1, 6);

  //UI Part///////////////////////////////////////
  background(10);
  fill("white");
  //title
  textSize(50);
  textFont("Gamja Flower");
  text('Silent Strings', 30, 50);
  textSize(25);
  textFont("Schoolbell");
  //text for instruction
  text('Thumb + Index Open = Show Pattern', 100, 200);
  text('Pinch Thumb + Index Together = Change Pattern', 100, 240);
  
  //text for sliders/////////////////////
  textSize(20);
  text('Stroke Weight', 100, 300);
  text('Opacity', 100, 340);
  text('Color Style', 100, 380);
  
  //create stroke weight slider///////////////////
  thicknessSlider = createSlider(1, 15, 6); 
  thicknessSlider.position(230, 285);
  thicknessSlider.style('accent-color', '#53f6caff');
  
  //create opacity slider///////////////////////
  alphaSlider = createSlider(10, 255, 255);
  alphaSlider.position(180, 325);
  alphaSlider.style('accent-color', '#53f6caff');
  
  //Create color style radio button////////////////
  colorStyleRadio = createRadio();
  colorStyleRadio.position(200, 365);
  //font color
  colorStyleRadio.style('color', '#ffffffff');
  //radio color
  colorStyleRadio.style('accent-color', '#53f6caff');
  //font
  colorStyleRadio.style('font-family', 'Schoolbell');
  //font size
  colorStyleRadio.style('font-size', '16px');
  colorStyleRadio.style('margin', '6px 10');  
  colorStyleRadio.option("Monochrome");
  colorStyleRadio.option("Random");
  // default value is Monochrome
  colorStyleRadio.selected("Random");
  
  //picker initialization
  monoPicker = createColorPicker('white');
  monoPicker.position(200, 400);
  /////////////////////////////////////
}

function draw() {
  // Draw the webcam video
  push();
  translate(700, 150);
  //filter part/////////////
  video.loadPixels(); // load pixel data into array
  for (let i = 0; i < video.pixels.length; i += 4){ // go through array by intervals of 4 (rgba)
    let r = video.pixels[i + 0]; // red component of pixel
    let g = video.pixels[i + 1];
    let b = video.pixels[i + 2];
    let avg = (r + g + b) / 2;
    video.pixels[i*1.5 + 0] = avg; // average all color data and copy average into r g and b numbers
    video.pixels[i*1.5 + 1] = avg;
    video.pixels[i*1.5 + 2] = avg;
  }
  video.updatePixels(); // copy image array back into image variable
  image(video, 0, 0, 640, 480); //change here to shift video draw origin (top left corner)
  //filter(GRAY); // this makes the image black and white, but slows everything down
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
    //look up setINTERVAL 

    let indexTip = hand.keypoints[8]; //store the indextip
    let d = dist(thumbTip.x, thumbTip.y, indexTip.x, indexTip.y);
    //if the distance between thumbtip and indextip are < 20
    //the circles will be green
    if (d < 30) {
      fill("#46ffbeff");  // green
    } else {
      fill(255);          // white
    }
    noStroke();
    circle(indexTip.x, indexTip.y, 17);
  }
  fill(10);
  rect(0, 0, 640, -200); // above rectangle
  rect(640, 0, 200, 480); // right rectangle
  rect(0, 0, -200, 480); // left rectangle
  rect(0, 480, 640, 200); // below rectangle
  pop();

  
  //draw the dialogues randomly
  //use the rectangle to cover the previous frame
  fill(10);
  noStroke();
  rect(70, 450, 600, 500);
  //dialogue
  textSize(25);
  fill("white");
  text(currentSentence, 100, 550);
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

  let w = thicknessSlider.value();
  let a = alphaSlider.value();
  let c;

  if (colorStyleRadio.value() == "Monochrome") {
    c = monoPicker.color();
  } else if (colorStyleRadio.value() == "Random") {
    c = color(random(50, 255), random(50, 255), random(50, 255), random(150, 255));
  }

  //console.log(dA, dB, eA)

  // if the current condition is true and the last condition is false
  if (!hasUpdatedPattern && dA < 30 && dB < 30 && eA < 30) {
    currentSentence = random(sentences);
    // draw a new pattern randomly
    currentPattern = floor(random(TOTAL_PATTERNS)); 
    popSound.play();
    hasUpdatedPattern = true; //once it's true, don't trigger a new pattern
  } else {
    hasUpdatedPattern = false; //trigger a new pattern
  }
  c.setAlpha(a);
  strokeWeight(w);
  stroke(c);
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
  }else if (currentPattern === 4) {
    patternBowShape(thumbA.x, thumbA.y, indexA.x,indexA.y, thumbB.x, thumbB.y, indexB.x, indexB.y);
  }else if (currentPattern === 5) {
    patternGrid(thumbA.x, thumbA.y, indexA.x,indexA.y, thumbB.x, thumbB.y, indexB.x, indexB.y);
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

function patternBowShape(thumbAX, thumbAY, indexAX, indexAY, thumbBX, thumbBY, indexBX, indexBY) {
  //draw the top line
  line(indexAX, indexAY, indexBX, indexBY);
  //draw the diagnol line 1
  line(indexAX, indexAY, thumbBX, thumbBY);
  //draw the diagnol line 2
  line(indexBX, indexBY, thumbAX, thumbAY);
  
  //find the middle point from thumb to index in same hand
  let pointAX = lerp(thumbAX, indexAX, 0.5);
  let pointAY = lerp(thumbAY, indexAY, 0.5);
  let pointBX = lerp(thumbBX, indexBX, 0.5);
  let pointBY = lerp(thumbBY, indexBY, 0.5);
  //draw the middle line
  line(pointAX, pointAY, pointBX, pointBY);
  //draw the bottom line
  line(thumbAX, thumbAY, thumbBX, thumbBY);
  //draw the left vertical line
  line(indexAX, indexAY, pointAX, pointAY);
  //draw the right vertical line
  line(indexBX, indexBY, pointBX, pointBY);
  // //draw the bottom part of the bow
  // let bottomX = dist(thumbAX, thumbAY, thumbBX, thumbBY) / 3;
  // line(indexBX, indexBY, thumbAX + bottomX, thumbAY);
  // line(indexAX, indexAY, thumbAX + bottomX * 2, thumbAY);
}

function patternGrid(thumbAX, thumbAY, indexAX, indexAY, thumbBX, thumbBY, indexBX, indexBY) {
  //draw the horizontal lines
  let gridPattern1 = [0.0, 0.25, 0.5, 0.75, 1.0];
  for (let i = 0; i < gridPattern1.length; i++) {
    let evenlySpacedA = gridPattern1[i];
    //draw the horizontal lines evenly
    let pointAX = lerp(thumbAX, indexAX, evenlySpacedA);
    let pointAY = lerp(thumbAY, indexAY, evenlySpacedA);
    let pointBX = lerp(thumbBX, indexBX, evenlySpacedA);
    let pointBY = lerp(thumbBY, indexBY, evenlySpacedA);
    line(pointAX, pointAY, pointBX, pointBY);
  }
  //draw the vertical lines
    let gridPattern2 = [0.0, 0.16, 0.32, 0.48, 0.64, 0.8, 1.0];
    for (let i = 0; i < gridPattern2.length; i++) {
    let evenlySpacedB = gridPattern2[i];
    //draw the horizontal lines evenly
    let pointAX = lerp(thumbAX, thumbBX, evenlySpacedB);
    let pointAY = lerp(thumbAY, thumbBY, evenlySpacedB);
    let pointBX = lerp(indexAX, indexBX, evenlySpacedB);
    let pointBY = lerp(indexAY, indexBY, evenlySpacedB);
    line(pointAX, pointAY, pointBX, pointBY);
  }
}

// Callback function for when handPose outputs data
function gotHands(results) {
  // save the output to the hands variable
  hands = results;
}
