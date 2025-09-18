//start a color variable, represent pink color in the painting
let pinkColor = "#f7befaff"; 
let greenColor = "#64E2B7";
let yellowColor = "#FBF3C1";
let purpleColor = "#d50b8ba2";
let orangeColor = "#FFC107";
let blueColor = "#66D2CE";
let lightPurple = "#6F00FF";


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
  fill(purpleColor);
  noStroke();

  triangle(width / 6.518, height / 3.05, width / 10, height / 1.23, width / 4.8, height / 1.23);
  triangle(width / 6.518, height / 1.427, width / 10, height / 1.23, width / 4.8, height / 1.23);

  //left arc
  noFill();
  stroke(lightPurple);
  strokeWeight(20);
  arc(width / 6.47, height / 4.643, width / 10.73, width / 10.73, radians(30), radians(150));


  //left quad
  beginShape();
  vertex()




}
