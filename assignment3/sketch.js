let woodCoaster;
let whitePlate;
let peterJoes;
let chopsticks;
let sauce;
let eatDumpling;

//Import my png files I exported from illustrator to p5js///////////
function preload() {
  woodCoaster = loadImage('./WoodCoaster.png');
  whitePlate = loadImage('./whitePlate.png');
  peterJoes = loadImage('./PeterJoe.png');
  chopsticks = loadImage('./chopsticks.png');
  sauce = loadImage('./Sauce.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

///use https://svg2p5.com/ website to convert my illustrator svg to p5js code
//The reason I used a converter is that I tried to import the dumpling.png into p5js using loadImage function but it's too blury, I was not satisfied with it
// I find it on google by searching "svg to p5js code converter", not sure who is the author
// Converter draws a complete dumpling for me///////////////////////////
function drawDumpling() {
  stroke("#740C8C");
  strokeWeight(1.5);
  fill("#fae096");
  strokeCap(PROJECT);
  strokeJoin(MITER);
  beginShape();
  vertex(67.61, 237.26);
  bezierVertex(67.61, 237.26, 23.990000000000002, 247.17, 12.089999999999996, 199.58999999999997);
  bezierVertex(12.089999999999996, 199.58999999999997, 10.109999999999996, 187.68999999999997, 41.83, 169.84999999999997);
  bezierVertex(41.83, 169.84999999999997, 35.86, 133.55999999999997, 39.839999999999996, 124.93999999999997);
  bezierVertex(43.81999999999999, 116.31999999999996, 79.50999999999999, 108.38999999999997, 79.50999999999999, 108.38999999999997);
  bezierVertex(79.50999999999999, 108.38999999999997, 83.47999999999999, 70.71999999999997, 89.41999999999999, 66.74999999999997);
  bezierVertex(95.35999999999999, 62.77999999999997, 135.01999999999998, 60.79999999999997, 135.01999999999998, 60.79999999999997);
  bezierVertex(135.01999999999998, 60.79999999999997, 142.95, 33.039999999999964, 158.80999999999997, 27.089999999999968);
  bezierVertex(158.80999999999997, 27.089999999999968, 162.77999999999997, 19.159999999999968, 192.51999999999998, 36.99999999999997);
  vertex(202.42999999999998, 36.99999999999997);
  bezierVertex(202.42999999999998, 36.99999999999997, 220.26999999999998, 13.209999999999972, 234.14999999999998, 15.189999999999973);
  bezierVertex(248.02999999999997, 17.169999999999973, 263.89, 35.01999999999997, 263.89, 35.01999999999997);
  vertex(277.77, 36.999999999999964);
  bezierVertex(277.77, 36.999999999999964, 301.56, 23.119999999999962, 307.51, 25.099999999999966);
  bezierVertex(313.46, 27.079999999999966, 329.32, 46.90999999999997, 333.28999999999996, 60.789999999999964);
  bezierVertex(333.28999999999996, 60.789999999999964, 372.93999999999994, 58.80999999999997, 378.89, 64.75999999999996);
  bezierVertex(384.84, 70.70999999999997, 384.84, 106.39999999999996, 384.84, 106.39999999999996);
  bezierVertex(384.84, 106.39999999999996, 414.58, 112.34999999999997, 426.47999999999996, 122.25999999999996);
  bezierVertex(426.47999999999996, 122.25999999999996, 432.42999999999995, 136.13999999999996, 420.53, 165.87999999999997);
  bezierVertex(420.53, 165.87999999999997, 450.27, 187.68999999999997, 454.23999999999995, 195.61999999999998);
  bezierVertex(458.2099999999999, 203.54999999999998, 448.05999999999995, 225.08999999999997, 425.37999999999994, 238.10999999999999);
  vertex(67.60999999999996, 237.24999999999997);
  endShape();
  fill("#ffe8a5")
  strokeWeight(1.5)
  beginShape();
  vertex(410.62, 237.14);
  bezierVertex(410.62, 141.93, 333.83, 64.75, 239.11, 64.75);
  bezierVertex(144.39000000000004, 64.75, 67.61, 141.93, 67.61, 237.14);
  endShape()
  beginShape();
  vertex(145.41, 126.6);
  bezierVertex(145.41, 126.6, 108.37, 150.65, 100.08, 194.14);
  endShape()
  beginShape();
  vertex(191.08, 95.14);
  bezierVertex(191.08, 95.14, 172.28, 102.2, 165.18, 111.17);
  endShape()
}
///////////Complete Dumpling svg is over////////////////////

//Converter draws a half-bitten dumpling for me/////////////////
function drawHalfDumpling() {
  stroke("#740C8C");
  strokeWeight(5);
  fill("#fae096");
  strokeCap(PROJECT);
  strokeJoin(MITER);
  beginShape();
  vertex(811.45,545.65);
  bezierVertex(811.45,357.15999999999997,900.12,189.39,1038,81.73999999999995);
  bezierVertex(1021.2,64.22999999999995,968.88,13.369999999999948,922.05,6.67999999999995);
  bezierVertex(865.3599999999999,-1.4200000000000497,792.4599999999999,95.76999999999995,792.4599999999999,95.76999999999995);
  vertex(751.9599999999999,95.76999999999995);
  bezierVertex(630.4699999999999,22.879999999999953,614.27,55.26999999999995,614.27,55.26999999999995);
  bezierVertex(549.48,79.56999999999995,517.0799999999999,192.95999999999995,517.0799999999999,192.95999999999995);
  bezierVertex(517.0799999999999,192.95999999999995,355.0999999999999,201.05999999999995,330.79999999999995,217.25999999999996);
  bezierVertex(306.49999999999994,233.45999999999995,290.29999999999995,387.34,290.29999999999995,387.34);
  bezierVertex(290.29999999999995,387.34,144.50999999999996,419.73999999999995,128.26999999999995,454.95);
  bezierVertex(112.01999999999995,490.15999999999997,136.41999999999996,638.41,136.41999999999996,638.41);
  bezierVertex(6.85,711.32,14.95,759.91,14.95,759.91);
  bezierVertex(63.540000000000006,954.29,241.73,913.79,241.73,913.79);
  vertex(942.28,915.4699999999999);
  bezierVertex(860.48,814.43,811.46,685.77,811.46,545.6499999999999);
  endShape();
  fill("#ffe8a5")
  strokeWeight(5);
  beginShape();
  vertex(811.45,541.57);
  bezierVertex(811.45,420.27000000000004,848.1800000000001,307.55000000000007,911.11,213.91000000000003);
  bezierVertex(538.6700000000001,230.24,241.73000000000002,537.3,241.73000000000002,913.76);
  vertex(944.19,913.76);
  bezierVertex(861.24,812.37,811.46,682.79,811.46,541.5699999999999);
  endShape();
  beginShape();
  vertex(567.7,465.84);
  bezierVertex(567.7,465.84,416.38000000000005,564.0899999999999,382.5400000000001,741.73);
  endShape()
  beginShape();
  vertex(754.26,337.32);
  bezierVertex(754.26,337.32,677.46,366.18,648.46,402.81);
  endShape()
}
///////////Half-bitten Dumpling svg is over////////////////////


function draw() {
  background("#e2c69E");
  //Animate dumplings  part/////////////////////////////////////////////////////
  //Map dumpling use second()
  //I want the dumpling's state change every 3 seconds, 60/3=20
  //So in 1 min, all dumplings can be eaten
  //I mapped (0, 60, 0, 20) before, I noticed that sec 60 = sec 0, they are the same. So I used 59.
  let eatDumpling = map(second(), 0, 59, 0, 20);

  //woodcoaster is the last layer of the design, since in function draw() it goes in a loop, I put woodcoaster's code first to avoid it covers other layers
  //I also want to design that after eating all the dumplings, I need to clear up my dining table.
  //when eatDumpling = 18, sec = 54, woodcoaster disappears
  if (eatDumpling < 18) {
    //Woodcoaster////////
    push();
    //2500, 1600 is the max width and height in Illustrator
    //translate width = 2500/1108 = 2.256; translate height = 1600/201 = 7.96
    //the original coord of woordcoaster is (1108, 201)
    translate(width / 2.256, height / 7.96);
    // the rotate degrees in illustrator is 5.543
    rotate(radians(-5.543));
    scale(1);
    // woodCoaster width I measured in illustrator: 2433-1108=1325
    // woodCoaster height I measured in illustrator: 1347-201=1146
    // woodCoaster width = 2500/1325=1.8867; image height = 1600/1146=1.3961
    image(woodCoaster, 0, 0, width / 1.8867, height / 1.3961);
    pop();
  }

  //whiteplate is above the woodcoaster layer, so I put the code after woodcoaster code
  if (eatDumpling < 16) {//when eatDumpling = 16, sec = 48, whiteplate disappears
    //WhitePlate/////////
    push();
    //the original coord of whiteplate is (1232, 61)
    //translate width = 2500/1232=2.029; translate height = 1600/61=26.229
    translate(width/2.029, height/26.229);
    // whitePlate width proportion = 2500/(2576-1232); height proportion = 1600/(1405-61)
    //Then I tested on the browser, it does not meet my expectation
    //I decide to go with fixed number(1000, 800)
    image(whitePlate, 0, 0, width/1.86,height/1.19);
    pop();
  }

  //The reason that I let PeterJoes disappears last is that in the real world I usually throw away the packaging bag last.
  if (eatDumpling < 19) {//when Peterjoes = 19, sec = 57, peterJoes disappears
    //PeterJoes//////
    push();
    //the original coord of woordcoaster is (189, 689)
    //translate width = 2500/189=13.227; translate height = 1600/689=2.322; but the height is too low, I adjusted to 2.522
    translate(width / 13.227, height / 2.522);
    //360-337(the degrees in illustrator)=23
    rotate(radians(23));
    // peterjoes width proportion = 2500/1031=2.4248; height proportion = 1600/1258=1.2718
    //Then I tested on the browser. I didn't like the width, it was too wide.
    //So I decided to go with 2.824.
    image(peterJoes, 0, 0, width / 2.824, height / 1.2718);
    pop();

    //Expiration Date on Package
    push();
    rotate(radians(23));
    textSize(25);
    textFont('Britania_Ligatura');
    //original coord in illustrator is (460, 861) 
    //2500/460=5.43； 1600/861=1.85，but I'm not satisfied with the position
    //So I adjusted the position a little bit, that's why I get 3.47 and 2.6183
    text('Exp: ' + month() + ' / ' + day() + ' / ' + year(), width / 3.47, height / 2.6183);
    pop();
  }

  //At the beginning, I tried eatDumpling == 0, but the dumpling disappears after 1 sec, and then the half dumpling appears
  //When eatDumpling = 1, sec = 3. When sec =1 or 2, eatDumpling is a fraction between 0-1. So I changed from 'eatDumpling = 0' to 'eatDumpling <1 '
  if (eatDumpling < 1) {
  //Complete Dumpling--1st on top///////
  push();
  //original coord in illustrator:(1535, 182)
  //2500/1535=1.628; 1600/182=8.791
  translate(width/1.628, height/8.791);
  //dumpling x-distance in illustrator: 1977-1535=442; dumpling y-distance in illustrator: 405-182=223
  //2500/442=5.56; 1600/223=7.17 I tried the proportion and I was not satisfied with it.
  //So I just let the dumpling scale divided by the illustrator width (2500), and it's still too big. I tested out and finally chose 2900.
  scale(width/2900);
  drawDumpling();
  pop();
  } else if(eatDumpling < 2){ //when eatDumpling = 2, sec = 6, eatDumpling becomes halfDumpling
    //Half Dumpling--1st on top
    push();
    //original coord in illustrator:(1535, 182)
    //2500/1535=1.628; 1600/182=8.791
    translate(width/1.628, height/8.791);
    //After my testing, [complete dumpling scale] : [half dumpling scale] = 0.5 : 0.13
    //0.13/0.5=0.26
    scale(width/2900*0.26);
    drawHalfDumpling();
    pop();
  } //I didn't write else since after eatDumpling = 2, I want the dumpling disappear

  if (eatDumpling < 3) { //when eatDumpling = 3, sec = 9
    //Complete Dumpling--1st one on second line///////
    push();
    //original coord in illustrator: (1352, 458)
    //2500/1352=1.849; 1600/458=3.493
    translate(width/1.849, height/3.493);
    scale(width/2900);
    drawDumpling();
    pop();
  } else if (eatDumpling < 4) { //when eatDumpling = 4, sec = 12, eatDumpling becomes halfDumpling
    //Half Dumpling--1st one on second line///////
    push();
    //original coord in illustrator: (1352, 458)
    //2500/1352=1.849; 1600/458=3.493
    translate(width/1.849, height/3.493);
    //After my testing, [complete dumpling scale] : [half dumpling scale] = 0.5 : 0.13
    //0.13/0.5=0.26
    scale(width/2900*0.26);
    drawHalfDumpling();
    pop();
  }

  if (eatDumpling < 5) {//when eatDumpling = 5, sec = 15
    //Complete Dumpling--2nd one on second line///////
    push();
    //original coord in illustrator: (1966, 318)
    //2500/1966=1.2716; 1600/318=5.03
    translate(width/1.2716, height/5.03);
    scale(width/2900);
    drawDumpling();
    pop();
  } else if (eatDumpling < 6) {//when eatDumpling = 6, sec = 18, eatDumpling becomes halfDumpling
    //Half Dumpling--2nd one on second line///////
    push();
    //original coord in illustrator: (1966, 318)
    //2500/1966 = 1.2716; 1600/318 = 5.03
    translate(width/1.2716, height/5.03);
    //After my testing, [complete dumpling scale] : [half dumpling scale] = 0.5 : 0.13
    //0.13/0.5=0.26
    scale(width/2900*0.26);
    drawHalfDumpling();
    pop();
  }

  if (eatDumpling < 7) {//when eatDumpling = 7, sec = 21
    //Complete Dumpling--1st one on third line///////
    push();
    //original coord in illustrator: (1352, 725)
    // 2500/1352=1.849; 1600/725=2.206
    translate(width/1.849112, height/2.206);
    scale(width/2900);
    drawDumpling();
    pop();
  } else if (eatDumpling < 8) {//when eatDumpling = 8, sec = 24, eatDumpling becomes halfDumpling
    //Half Dumpling--1st one on third line///////
    push();
    //original coord in illustrator: (1352, 725)
    // 2500/1352=1.849; 1600/725=2.206
    translate(width/1.849112, height/2.206);
    //After my testing, [complete dumpling scale] : [half dumpling scale] = 0.5 : 0.13
    //0.13/0.5=0.26
    scale(width/2900*0.26);
    drawHalfDumpling();
    pop();
  }

  if (eatDumpling < 9) {//when eatDumpling = 9, sec = 27
    //Complete Dumpling--2nd one on third line///////
    push();
    //original coord in illustrator: (1795, 611)
    // 2500/1795=1.3927; 1600/611=2.6186
    translate(width/1.3927, height/2.6186);
    scale(width/2900);
    drawDumpling();
    pop();
  } else if (eatDumpling < 10) {//when eatDumpling = 10, sec = 30, eatDumpling becomes halfDumpling
    //Half Dumpling--2nd one on third line///////
    push();
    //original coord in illustrator: (1795, 611)
    // 2500/1795=1.3927; 1600/611=2.6186
    translate(width/1.3927, height/2.6186);
    //After my testing, [complete dumpling scale] : [half dumpling scale] = 0.5 : 0.13
    //0.13/0.5=0.26
    scale(width/2900*0.26);
    drawHalfDumpling();
    pop();
  }

  if (eatDumpling < 11) {//when eatDumpling = 11, sec = 33
    //Complete Dumpling--1st one on fourth line///////
    push();
    //original coord in illustrator: (1572, 978)
    // 2500/1572=1.590; 1600/978=1.63599
    translate(width/1.590, height/1.63599);
    scale(width/2900);
    drawDumpling();
    pop();
  } else if (eatDumpling < 12) {//when eatDumpling = 12, sec = 36, eatDumpling becomes halfDumpling
    //Half Dumpling--1st one on fourth line///////
    push();
    //original coord in illustrator: (1572, 978)
    // 2500/1572=1.590; 1600/978=1.63599
    translate(width/1.590, height/1.63599);
    //After my testing, [complete dumpling scale] : [half dumpling scale] = 0.5 : 0.13
    //0.13/0.5=0.26
    scale(width/2900*0.26);
    drawHalfDumpling();
    pop();
  }

  if (eatDumpling < 13) {//when eatDumpling = 13, sec = 39
    //Complete Dumpling--2nd one on fourth line///////
    push();
    //original coord in illustrator: (1961, 879)
    // 2500/1961=1.2748; 1600/879=1.8583
    translate(width/1.2748, height/1.8183);
    scale(width/2900);
    drawDumpling();
    pop();
  } else if (eatDumpling < 14) {//when eatDumpling = 14, sec = 42, eatDumpling becomes halfDumpling
    //Half Dumpling--2nd one on fourth line///////
    push();
    //original coord in illustrator: (1961, 879)
    // 2500/1961=1.2748; 1600/879=1.8583
    translate(width/1.2748, height/1.8183);
    //After my testing, [complete dumpling scale] : [half dumpling scale] = 0.5 : 0.13
    //0.13/0.5=0.26
    scale(width/2900*0.26);
    drawHalfDumpling();
    pop();
  }

  if (eatDumpling < 15) {//when eatDumpling = 15, sec = 45, chopsticks disappear
    //chopsticks///////////
    push();
    //original coord of chopsticks(-227, 120)
    translate(227/2500*-width, height/13.33); // height=1600/120
    // chopsticks width proportion = 2500/(1060+227)=1.9425; height proportion = 1600/(498-120)=4.2328
    image(chopsticks, 0, 0, width/1.9425, height/4.2328)
    pop();
  }


  if (eatDumpling < 17) {//when eatDumpling = 17, sec = 51, suace disappears
    //sauce/////////
    push();
    //sauce width proportion = 2500/790=3.14; height proportion = 1600/559=2.8622
    translate(width / 3.14, height / 2.86);
    //I previously let sauce be scalable but sometimes it got too small or too big. So I let it be a fixed number 200.
    image(sauce, 0, 0, 200, 200);
    pop();
  }



  /////////////// Rest of the code is the DUMPLING code drafts! //////////////////
  //I first determined the positions of dumplings using the code below, and then incorporate it into the push() and pop() functions.

  // //Complete Dumpling--1st on top///////
  // push();
  // //original coord in illustrator:(1535, 182)
  // //2500/1535; 1600/182
  // translate(width/1.628, height/8.791);
  // //dumpling x-distance: 1977-1535=442; dumpling y-distance: 405-182=223
  // //2500/442=5.56; 1600/223=7.17 
  // scale(width/2900);
  // drawDumpling();
  // pop();

  //Complete Dumpling--1st one on second line///////
  // push();
  // //original coord in illustrator: (1352, 458)
  // //2500/1352; 1600/458
  // translate(width/1.89, height/3.493);
  // //dumpling x-distance: 1977-1535=442; dumpling y-distance: 405-182=223
  // //2500/442=5.56; 1600/223=7.17 
  // scale(width/2900);
  // drawDumpling();
  // pop();

  // //Complete Dumpling--2nd one on second line///////
  // push();
  // //original coord in illustrator: (1966, 318)
  // //2500/1966; 1600/318
  // translate(width/1.2716, height/5.03);
  // //dumpling x-distance: 1977-1535=442; dumpling y-distance: 405-182=223
  // //2500/442=5.56; 1600/223=7.17 
  // scale(width/2900);
  // drawDumpling();
  // pop();

  // //Complete Dumpling--1st one on third line///////
  // push();
  // //original coord in illustrator: (1352, 725)
  // // 2500/1352=1.849; 1600/725=2.206
  // translate(width/1.849112, height/2.206);
  // //dumpling x-distance: 1977-1535=442; dumpling y-distance: 405-182=223
  // //2500/442=5.56; 1600/223=7.17 
  // scale(width/2900);
  // drawDumpling();
  // pop();

  // //Complete Dumpling--2nd one on third line///////
  // push();
  // //original coord in illustrator: (1795, 611)
  // // 2500/1795=1.3927; 1600/611=2.6186
  // translate(width/1.3927, height/2.6186);
  // //dumpling x-distance: 1977-1535=442; dumpling y-distance: 405-182=223
  // //2500/442=5.56; 1600/223=7.17 
  // scale(width/2900);
  // drawDumpling();
  // pop();

  // //Complete Dumpling--1st one on fourth line///////
  // push();
  // //original coord in illustrator: (1572, 978)
  // // 2500/1572=1.590; 1600/978=1.63599
  // translate(width/1.590, height/1.63599);
  // //dumpling x-distance: 1977-1535=442; dumpling y-distance: 405-182=223
  // //2500/442=5.56; 1600/223=7.17 
  // scale(width/2900);
  // drawDumpling();
  // pop();

  // //Complete Dumpling--2nd one on fourth line///////
  // push();
  // //original coord in illustrator: (1961, 879)
  // // 2500/1961=1.2748; 1600/879=1.8583
  // translate(width/1.2748, height/1.8183);
  // //dumpling x-distance: 1977-1535=442; dumpling y-distance: 405-182=223
  // //2500/442=5.56; 1600/223=7.17 
  // scale(width/2900);
  // drawDumpling();
  // pop();

  // //HALF DUMPLING PART!///////////////////////////////
  // //HalfDumpling///////////
  // push();
  // //2500/
  // translate(0, 0);
  // //After my calculation, [complete dumpling scale] : [half dumpling scale] = 0.5 : 0.13
  // //0.13/0.5=0.26
  // scale(width/2900*0.26);
  // drawHalfDumpling();
  // pop();

  


}
