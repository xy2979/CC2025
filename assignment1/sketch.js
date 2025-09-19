//start a color variable, represent pink color in the painting
let pinkColor = "#f7befaff"; 
let greenColor = "#64E2B7";
let yellowColor = "#FBF3C1";
let transColor = "#8dffaf84";
let orangeColor = "#ffcf30ff";
let blueColor = "#66D2CE";
let lightPurple = "#e484ffff";


function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  // below is all about the grid background///////////////////////
  //create 1st top left rectangle on 1st line
  fill(pinkColor);
  noStroke();
  rect(0, 0, width / 6.5, height / 12.2);

  //create 2nd top left rectangle on 1st line
  fill(greenColor);
  noStroke();
  rect(width / 6.5, 0, width / 11.4, height / 12.2);

  //create 3rd top left rectangle on 1st line
  fill(yellowColor);
  noStroke();
  rect(width / 4.15, 0, width / 7, height / 12.2);

  //create 4th top left rectangle on 1st line
  fill(blueColor);
  noStroke();
  rect(width / 2.61, 0, width / 4.65, height / 12.2);

  //create 5th top left rectangle on 1st line
  fill(pinkColor);
  noStroke();
  rect(width / 1.67, 0, width / 4.3, height / 12.2);

  //create 6th top left rectangle on 1st line
  fill(greenColor);
  noStroke();
  rect(width / 1.207, 0, width / 5.8, height / 1.988);

  //create 1st top left rectangle on 2nd line
  fill(blueColor);
  noStroke();
  rect(0, height / 12.2, width / 6.5, height / 8.62);
  
  //create 2nd top left rectangle on 2nd line
  fill(yellowColor);
  noStroke();
  rect(width / 6.518, height / 12.2, width / 11.428, height / 8.62);
  
  //create 3rd top left rectangle on 2nd line
  fill(pinkColor);
  noStroke();
  rect(width / 4.15, height / 12.2, width / 7.096, height / 8.62);

  //create 4th top left rectangle on 2nd line
  fill(yellowColor);
  noStroke();
  rect(width / 2.619, height / 12.2, width / 4.656, height / 2.371);

  //create 5th top left rectangle on 2nd line
  fill(greenColor);
  noStroke();
  rect(width / 1.676, height / 12.2, width / 9.166, height / 8.62);

  //create 6th top left rectangle on 2nd line
  fill(yellowColor);
  noStroke();
  rect(width / 1.417, height / 12.2, width / 8.148, height / 8.62);

  //create 1st top left rectangle on 3rd line
  fill(pinkColor);
  noStroke();
  rect(0, height / 5.068, width / 4.1509, height / 4.7769);

  //create 2nd top left rectangle on 3rd line
  fill(yellowColor);
  noStroke();
  rect(width / 4.1509, height / 5.068, width / 14.915, height / 9.9104);

  //create 3rd top left rectangle on 3rd line
  fill(blueColor);
  noStroke();
  rect(width / 3.247, height / 5.068, width / 13.5384, height / 9.8104);

  //create 4th top left rectangle on 3rd line
  fill(pinkColor);
  noStroke();
  rect(width / 1.67619, height / 5.068, width / 9.167, height / 3.2709);

  //create 5th top left rectangle on 3rd line
  fill(blueColor);
  noStroke();
  rect(width / 1.41706, height / 5.068, width / 8.148, height / 3.2709);

  //create 1st top left rectangle on 4th line
  fill(greenColor);
  noStroke();
  rect(width / 4.1509, height / 3.336, width / 14.915, height / 4.9185);

  //create 2nd top left rectangle on 4th line
  fill(pinkColor);
  noStroke();
  rect(width / 3.2472, height / 3.336, width / 13.538, height / 4.9185);

  //create 1st top left rectangle on 5th line
  fill(blueColor);
  noStroke();
  rect(0, height / 2.454, width / 6.8466, height / 1.68527);

  //create 2nd top left rectangle on 5th line
  fill(blueColor);
  noStroke();
  rect(width / 6.875, height / 2.454, width / 18.7234, height / 10.375);
  
  //create 3rd top left rectangle on 5th line
  fill(greenColor);
  noStroke();
  rect(width / 5.028, height / 2.454, width / 24, height / 10.375);
  
  //create 1st top left rectangle on 6th line
  fill(yellowColor);
  noStroke();
  rect(width / 22.97, height / 1.988, width / 5.0867, height / 2.4411);

  //create 2nd rectangle on 6th line
  fill(blueColor);
  noStroke();
  rect(width / 4.17, height / 1.988, width / 7.04, height / 2.012);

  //create 3rd rectangle on 6th line
  fill(pinkColor);
  noStroke();
  rect(width / 2.619, height / 1.988, width / 3.8427, height / 2.4411);

  //create 4th rectangle on 6th line
  fill(yellowColor);
  noStroke();
  rect(width / 1.557, height / 1.988, width / 3.761, height / 2.8255);

  //create 5th rectangle on 6th line
  fill(pinkColor);
  noStroke();
  rect(width / 1.101, height / 1.988, width / 3.761, height / 2.012);

  //create a small rect on the 5th rectangle on 6th line
  fill(greenColor);
  noStroke();
  rect(width / 1.101, height / 1.6077, width / 17.254, height / 3.44);

  //create 1st rectangle on 7th line
  fill(pinkColor);
  noStroke();
  rect(width / 6.875, height / 1.0957, width / 10.6, height / 11.44);

  //create 2nd rectangle on 7th line
  fill(greenColor);
  noStroke();
  rect(width / 2.619, height / 1.0957, width / 3.8427, height / 11.44);

  //create 3rd rectangle on 7th line
  fill(blueColor);
  noStroke();
  rect(width / 1.557, height / 1.166, width / 3.7606, height / 6.9894);
  
  ////////////////////////////////////background is over

  // vertical lines on the rectangle
  stroke(yellowColor);
  strokeWeight(2);
  line(width / 1.557, height / 1.988, width / 1.557, height);
  line(width / 1.504, height / 1.1669, width / 1.504, height);
  line(width / 1.4617, height / 1.1669, width / 1.4617, height);
  line(width / 1.414, height / 1.1669, width / 1.414, height);
  line(width / 1.3685, height / 1.1669, width / 1.3685, height);
  line(width / 1.3253, height / 1.1669, width / 1.3253, height);
  line(width / 1.2903, height / 1.1669, width / 1.2903, height);
  line(width / 1.2517, height / 1.1669, width / 1.2517, height);
  line(width / 1.2171, height / 1.1669, width / 1.2171, height);
  line(width / 1.1827, height / 1.1669, width / 1.1827, height);
  line(width / 1.1518, height / 1.1669, width / 1.1518, height);
  line(width / 1.1238, height / 1.1669, width / 1.1238, height);
  line(width / 1.1013, height / 1.1669, width / 1.1013, height);

  //left triangle
  fill(transColor);
  noStroke();

  triangle(width / 6.518, height / 3.05, width / 10, height / 1.23, width / 4.8, height / 1.23);//big one
  triangle(width / 6.518, height / 1.427, width / 10, height / 1.23, width / 4.8, height / 1.23);//small one



  fill(orangeColor);

  //left quad
  beginShape();
  vertex(width / 3.8, height / 1.711); //top left coord
  vertex(width / 2.767, height / 1.711); //top right coord
  vertex(width / 3.077, height / 1.307); //middle right coord
  vertex(width / 2.767, height / 1.0473); // bottom right coord
  vertex(width / 3.8, height / 1.0473);//bottom left coord
  vertex(width / 3.371, height / 1.307); //middle left coord
  endShape();


  fill(lightPurple);
  //top right triangle in the middle small quad
  beginShape();
  vertex(width / 2.22, height / 4.9924);//middle coord
  vertex(width / 2.22, height / 6.574);//top coord
  vertex(width / 1.977, height / 4.9924);//right coord
  endShape();

  //bottom left triangle in the middle small quad
  beginShape();
  vertex(width / 2.22, height / 4.9924);//middle coord
  vertex(width / 2.22, height / 3.97);//bottom coord
  vertex(width / 2.521, height / 4.9924);//left coord
  endShape();

  
  fill(orangeColor);
  //bottom right triangle in the middle small quad
  beginShape();
  vertex(width / 2.22, height / 4.9924);//middle coord
  vertex(width / 1.977, height / 4.9924);//right coord
  vertex(width / 2.22, height / 3.97);//bottom coord
  endShape();

  //top left triangle in the middle small quad
  beginShape();
  vertex(width / 2.22, height / 4.9924);//middle coord
  vertex(width / 2.22, height / 6.574); //top coord
  vertex(width / 2.521, height / 4.9924);//left coord
  endShape();

  fill(transColor);
  //middle left triangle
  triangle(width / 2.22, height / 3.97, width / 2.22, height / 1.4127, width / 1.818, height / 1.4127);
  //middle right triangle
  triangle(width / 1.818, height / 2.912, width / 2.22, height / 1.4127, width / 1.818, height / 1.4127);
  
  fill(lightPurple);
  //middle right small triangle
  triangle(width / 1.682, height / 1.9762, width / 1.682, height / 1.4127, width / 1.818, height / 1.4127);
  
  //middle bottom left triangle
  triangle(width / 1.818, height / 1.4127, width / 1.818, height / 1.0473, width / 2.0229, height / 1.0473);
  
  fill(orangeColor);
  //middle bottom right triangle
  triangle(width / 1.818, height / 1.4127, width / 1.818, height / 1.0473, width / 1.657, height / 1.0473);

  
  //top right triangle in the yellow box
  beginShape();
  vertex(width / 1.2884, height / 1.6077); //middle coord
  vertex(width / 1.2884, height / 1.8292);//top coord
  vertex(width / 1.1686, height / 1.6077);//right coord
  endShape();

  //bottom left triangle in the yellow box
  beginShape();
  vertex(width / 1.2884, height / 1.6077);//middle coord
  vertex(width / 1.2884, height / 1.434);//bottom coord
  vertex(width / 1.44, height / 1.6077);//left coord
  endShape();

  fill(lightPurple);

  //bottom right triangle in the yellow box
  beginShape();
  vertex(width / 1.2884, height / 1.6077); //middle coord
  vertex(width / 1.1686, height / 1.6077); //right coord
  vertex(width/1.2884, height/1.434)//bottom coord
  endShape();

  //top left triangle in the yellow box
  beginShape();
  vertex(width / 1.2884, height / 1.6077);//middle coord
  vertex(width / 1.2884, height / 1.8292);//top coord
  vertex(width / 1.44, height / 1.6077);//left coord
  endShape();
  
   //bottom triangle on the left side
  triangle(width / 1.2884, height / 1.434, width / 1.414, height / 1.2116, width / 1.2884, height / 1.2116);

  fill(orangeColor);
  //bottom triangle on the right side
  triangle(width / 1.2884, height / 1.434, width / 1.1827, height / 1.2116, width / 1.2884, height / 1.2116);
  

  fill(lightPurple);
  //whole right quad
  beginShape();
  vertex(width / 1.159, height / 12.7); //top left coord
  vertex(width / 1.0414, height / 12.7);//top right coord
  vertex(width / 1.0744, height / 2.977);//middle right coord
  vertex(width / 1.0414, height / 2.155);//bottom right coord
  vertex(width / 1.159, height / 2.155);//bottom right coord
  vertex(width / 1.124, height / 2.977);//middle left coord
  endShape();

  //different color small quads from top to bottom
  fill(orangeColor);
  //1st quad
  beginShape();
  vertex(width / 1.156, height / 9.22);//top left coord
  vertex(width / 1.04389, height / 9.22);//top right coord
  vertex(width / 1.04637, height / 7.7209);//bottom right coord
  vertex(width/1.1533, height/7.7209);//bottom left coord
  endShape();

  //2nd quad
  beginShape();
  vertex(width / 1.1503, height / 6.4466);//top left coord
  vertex(width / 1.05012, height / 6.4466);//top right coord
  vertex(width / 1.05263, height / 5.72413);//bottom right coord
  vertex(width / 1.14732, height / 5.72413);//bottom left coord
  endShape();

  //3rd quad
  beginShape();
  vertex(width/1.14285, height/4.9552);//top left coord
  vertex(width/1.05769, height/4.9552);//top right coord
  vertex(width/1.06024, height/4.5479);//bottom right coord
  vertex(width/1.13842, height/4.5479);//bottom left coord
  endShape();

  //4th quad
  beginShape();
  vertex(width/1.13548, height/3.97604);//top left coord
  vertex(width/1.06408, height/3.97604);//top right coord
  vertex(width/1.06667, height/3.70949);//bottom right coord
  vertex(width/1.13256, height/3.70949);//bottom left coord
  endShape();

  //5th quad
  beginShape();
  vertex(width/1.12820, height/3.44935);//top left coord
  vertex(width/1.07055, height/3.44935);//top right coord
  vertex(width/1.07317, height/3.2549);//bottom right coord
  vertex(width/1.12676, height/3.2549);//bottom left coord
  endShape();

  //6th quad
  beginShape();
  vertex(width/1.12388, height/3.01818);//top left coord
  vertex(width/1.07711, height/3.01818);//top right coord
  vertex(width/1.07317, height/2.851);//bottom right coord
  vertex(width/1.1282, height/2.851);//bottom left coord
  endShape();

  //7th quad
  beginShape();
  vertex(width/1.13548, height/2.6667);//top left coord
  vertex(width/1.065375, height/2.6667);//top right coord
  vertex(width/1.06024, height/2.52471);//bottom right coord
  vertex(width/1.141374, height/2.52471);//bottom left coord
  endShape();

  //8th quad
  beginShape();
  vertex(width/1.14882, height/2.3971);//top left coord
  vertex(width/1.05263, height/2.3971);//top right coord
  vertex(width/1.0488677, height/2.2896);//bottom right coord
  vertex(width/1.15485, height/2.2896);//bottom left coord
  endShape();


  //left arc
  noFill();
  stroke(lightPurple);
  strokeWeight(20);
  strokeCap(SQUARE);
  arc(width / 6.47, height / 3.05-height / 16.11, width / 13.396, height / 10.11, radians(10), radians(170));

  noFill();
  stroke(lightPurple);
  strokeWeight(20);
  //right arc
  arc(width / 1.408, height / 3.83, width / 7.2727, height / 5.487, radians(25), radians(155));
  
  //middle arc
  arc(width / 3.20116, height / 1.47719, width / 6.61238, height / 6.70707, radians(10), radians(170));

  //right color on the left arc
  stroke(orangeColor);
  arc(width / 6.47, height / 3.05 - height / 16.11, width / 13.396, height / 10.11, radians(30), radians(50));
  //middle color on the left arc
  arc(width / 6.47, height / 3.05 - height / 16.11, width / 13.396, height / 10.11, radians(80), radians(100));
  //left color on the left arc
  arc(width / 6.47, height / 3.05 - height / 16.11, width / 13.396, height / 10.11, radians(130), radians(150));

  //1st color on the middle arc from left to right
  arc(width / 3.20116, height / 1.47719, width / 6.61238, height / 6.70707, radians(20), radians(35));
  //2nd color on the middle arc from left to right
  arc(width / 3.20116, height / 1.47719, width / 6.61238, height / 6.70707, radians(50), radians(65));
  //3rd color on the middle arc from left to right
  arc(width / 3.20116, height / 1.47719, width / 6.61238, height / 6.70707, radians(80), radians(95));
  //4th color on the middle arc from left to right
  arc(width / 3.20116, height / 1.47719, width / 6.61238, height / 6.70707, radians(110), radians(125));
  //5th color on the middle arc from left to right
  arc(width / 3.20116, height / 1.47719, width / 6.61238, height / 6.70707, radians(140), radians(155));
  
  
  
  
}
