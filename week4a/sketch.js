

function setup() {
  createCanvas(windowWidth, windowHeight);

  // iteration operatprs: 
  // i++: adds 1 to i
  // i+=10: adds 10 to i
  //i--: substracts 1 from i
  //i-=5: substracts 5 from i

  for (let i = 0; i < 10; i++){
    console.log(i);
  }
}

function draw() {
  background("#f8a0a0ff");
  noLoop(); //prevents from looping
  for (let y = 50; y < height - 50; y += 100){
    
    for (let x = 50; x < width - 50; x += 80) {
      //circle(x, 50, 100);
      push();
      translate(x, y);
      let rotation = map(y, 50, height-50, 0, 2 * PI);
      rotate(rotation);
      //everything within this push/pop block will be centered, with 0, 0 as the center point
      let randomRotation;
      let randomAmount = 0.075;
      let randomXDisp;
      let randomYDisp;

      //let scaleFactor = y / height;
      //scale(scaleFactor);

      randomXDisp = random(-y * randomAmount, y * randomAmount);
      randomYDisp = random(-y * randomAmount, y * randomAmount);
      if (mouseIsPressed == true) {
        translate(randomXDisp, 0);
      }

      strokeWeight(3);
      fill("#ecfac1ff");
      circle(0, 0, 100);
      circle(-15, -10, 10);
      circle(15, -10, 10);
      let happiness;
      happiness = map(x, 0, width, -25, 25);
      noFill();
      arc(0, 0, 60, 60, radians(0 - happiness), radians(180 + happiness));
      pop();
    }
  }


  
}
