

function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {

  if (mouseX>width/2 && mouseY>height/2) {//if the test inside the () is met...
        background("#FFEEB0");
        
      } else if (mouseX < width / 2 && mouseY < height / 2) {
       background("#644098");
  }
  else {
    background("#7597F9");
  }
  for (let y = 50; y < height - 50; y += 100) {
    
    for (let x = 50; x < width - 50; x += 100) {

      push();
      //background("#7597F9");
      noStroke();
      //move the coordinate matrix to (50, 50)
      translate(x, y);
      let randomAmount = 0.01;
      let randomXDisp;
      let randomYDisp;

      randomXDisp = random(-y * randomAmount, y * randomAmount);
      randomYDisp = random(-y * randomAmount, y * randomAmount);
      if (mouseIsPressed == true) {
        translate(randomXDisp, randomYDisp);
        fill("#ffc9c2ff");
        rect(-25, -25, 50, 50, 50);
      }

      //map the angle use mouseX:0 to width – 0 to 360
      let angle;
      angle = map(mouseX, 0, width, 0, 360);
      rotate(radians(angle));
      //make a variable to hold scale amount
      //map the scaleFactor use mosueY: 0 to height – 0.5 to 1
      let scaleFactor;
      scaleFactor = map(mouseY, 0, height, 0.5, 2);
      scale(scaleFactor);
      //make a variable to hold rotation
      let rotation;
      rotation = map(y, 50, height-100, 0, radians(360));
      rotate(rotation);

      if (mouseX>width/2 && mouseY>height/2) {//if the test inside the () is met...
        //background("#7597F9");
        //draw multiple circles
        fill("#7597F9");
        circle(0, 0, 25);
        circle(0, -20,10);
        circle(0, 20, 10);
        circle(20, 0, 10);
        circle(-20, 0, 10);
        fill("#6FCED0");//center circle color
        circle(20, 20, 20);//center circle size
        circle(-20, 20, 20);
        circle(-20, -20, 20);
        circle(20, -20, 20);
        
      } else if (mouseX < width / 2 && mouseY < height / 2) {
        //background("#644098");
        //draw petals
        fill("#ffeeb0");//big petal color
        //ellipse(0, 0, 120, 105);
        circle(-25, -25, 50);//big circle
        circle(25, 25, 50);
        //rect(0, 0, 50, 50);//big rect
        fill("#FCBB01");//small petal color
        circle(-25, 25, 50);//small circle
        circle(25, -25, 50);
        //rect(25, 25, 25, 25);//small rect
      }
      else {//otherwise
        //run this other code
        fill("#FCBB01");
        circle(-25, 25, 25);
        circle(25, -25, 25);
        fill("#6FCED0");
        arc(-25, 0, 50, 50, radians(180), radians(360));
        arc(25, 0, 50, 50, radians(0), radians(180));
      }

    
      
    


      pop();
    }
  }
  //text function: text, x, y of top left corner
  text(mouseX + "," + mouseY, 5, 15);
}
