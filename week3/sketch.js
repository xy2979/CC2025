//variable declaration:
//"let" is a keyword that allows you to declare a variable
//in the below example, a new variable is being created called "circleSize" which is storing a number (125)
//below are GLOCAL variable: they are accessible by any block of code
let circleSize; //variable to store circle size
let redColor = "rgba(255, 33, 33, 1)";//start a color variable, represent red color in the painting


function setup() { //runs once at startup
  createCanvas(windowWidth, windowHeight);// set a 400px by 400px canvas
  circleSize = width * 0.25; //set circleSize variable in relation to width
}

function draw() {

  console.log(mouseX/width+" "+ mouseY/height);
  // A greyscale is denoted as a number 0-255
  // an rgb color is denoted as 3 numbers (red, green blue)
  //background(127, 54, 200);
  // we can use the name of a color like "black" or "olive"
  //background("pink");
  //background("rgba(0, 0, 0, 1)")
  background("rgba(241, 251, 174, 1)");

  noStroke();
  fill("#c7fedaff");

  rect(0, 0, width / 2, height / 2); // a square in the top left corner
  rect(width/2, height/2, width, height);


  //stroke and fill change the color of drawn shapes
  stroke("rgba(126, 36, 253, 1)");
  fill("rgba(248, 111, 111, 1)");
  
  strokeWeight(5);
  //noStroke(); // get rid of stroke completely
  //noFill(); // get rid og the fill completely
  
  //circle takes 3 parameters: x, y, and d:
  circle(120, 310, circleSize);

  //setting a new fill for my rectangle
  fill("rgba(255, 191, 63, 1)");
  stroke("rgba(34, 202, 62, 1)");
  // rect takes 4 parameters:
  // x coord of top left, y coord of top left, wigth and height
  rect(200, 170, 150, -70, 10);

  fill("rgba(68, 224, 133, 1)");

  //x coord of center, y coord of center, width and height
  ellipse(240, 130, 40, 20);

  //line connects two coords: x1, y1, x2, y2
  line(180, 230, 240, 130);
  
  //to draw complex polygons (more than two coords):
  //create a beginShape(); function and an endShape function
  //any vertex(x, y) functions you place inbetween beginShape and endShape
  //will be rendered as points in a complete polygon

  beginShape();
  vertex(100, 120); //leftmost coord
  vertex(200, 100); //top right coord
  vertex(200, 150); //bottom-most coord
  strokeJoin(ROUND);
  endShape(CLOSE); // CLOSE parameter closes the polygon

  fill("#a6ff00ff"); // colors can also be denoted in hex format
  //circle(width / 2, height*0.75, circleSize);
  
  //ellipse(mouseX, mouseY, mouseY / 3, mouseX / 3);
  
  //arcs are like ellipse, except they have two extra parameters:
  //START and END, which are provided in RADIANS format
  //you can convert degrees to radians using the radians() function
  arc(width / 2, height * 0.75, 100, 100, radians(30-mouseX), radians(330+mouseX), PIE);

}
