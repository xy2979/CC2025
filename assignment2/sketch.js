

function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  //setup a variable for future color changing
  let changeColor = "#FCBB01";
  let changeColor2 = "#ffeeb0";
  let changeColor3 = "#7597F9";
  let changeColor4 = "#6FCED0";
  
  //if mouseX > width/2 and mouseY>height/2, change the background
  if (mouseX>width/2 && mouseY>height/2) {
        background("#FFEEB0");
        
      } else if (mouseX < width / 2 && mouseY < height / 2) {
       background("#644098");
  }
  else {
    background("#7597F9"); //otherwise use this color as background
  }

  //I set the coordinate to x = 50, y = 50
  //the pattern on x-axis will stop at "width-50" 
  //the pattern on y-axis will stop at "height-50"
  //the gap between each pattern is 100
  for (let y = 50; y < height - 50; y += 100) {
    
    for (let x = 50; x < width - 50; x += 100) {

      push();
      noStroke();
      //move the coordinate matrix to (50, 50)
      translate(x, y);
      let randomAmount = 0.01;
      let randomXDisp;
      let randomYDisp;
      //randomXDisp and randomYDips will shake along y-axis
      //when y is bigger, the patterns shake harder
      randomXDisp = random(-y * randomAmount, y * randomAmount);
      randomYDisp = random(-y * randomAmount, y * randomAmount);
      
      if (mouseIsPressed == true) {
        //if mouse is pressed, move the coordinate to the randomXDisp
        translate(randomXDisp, randomYDisp);
        changeColor = "#ffc9c2ff";
        changeColor2 = "#9dd9efff";
        changeColor3 = "#d6a0faff";
        changeColor4 = "#4DFFBE";
        //fill("#ffc9c2ff");
        //rect(-25, -25, 50, 50, 50);
      }

      //map the angle use mouseX:0 to width – 0 to 360
      let angle;
      angle = map(mouseX, 0, width, 0, 360);
      rotate(radians(angle));
      //make a variable to hold scale amount
      //map the scaleFactor use mouseY: 0 to height – 0.5 to 2.5
      let scaleFactor;
      scaleFactor = map(mouseY, 0, height, 0.3, 3);
      scale(scaleFactor);
      //make a variable to hold rotation
      //map the rotation to use y: 50 to height-100 – 0 to 360 degrees
      let rotationY;
      rotationY = map(y, 50, height-50, 0, radians(360));
      rotate(rotationY);
      let rotationX;
      rotationX = map(x, 50, width - 50, 0, radians(360));
      rotate(rotationX);

      if (mouseX>width/2 && mouseY>height/2) {
        //draw multiple circles
        fill(changeColor3);
        circle(0, 0, 25); //center circle
        circle(0, -20,10); //top small circle
        circle(0, 20, 10); //bottom small circle
        circle(20, 0, 10); //right small circle
        circle(-20, 0, 10); //left small circle
        fill(changeColor4);//circles around the blue ones
        circle(20, 20, 20);
        circle(-20, 20, 20);
        circle(-20, -20, 20);
        circle(20, -20, 20);
        
      } else if (mouseX < width / 2 && mouseY < height / 2) {
        
        //draw petals
        fill(changeColor2);
        circle(-25, -25, 50);//top left circle
        circle(25, 25, 50);//bottom right circle
        fill(changeColor);
        circle(-25, 25, 50);//bottom left circle
        circle(25, -25, 50);//top right circle
      }
      else {//otherwise
        //run this other code
        fill(changeColor);
        circle(-25, 25, 25);
        circle(25, -25, 25);
        fill(changeColor4);
        arc(-25, 0, 50, 50, radians(180), radians(360));
        arc(25, 0, 50, 50, radians(0), radians(180));
      }

    
      
    


      pop();
    }
  }
  //text function: text, x, y of top left corner
  text(mouseX + "," + mouseY, 5, 15);
}
