// I want to save all the donuts that I've created
let donuts = [];
//At beginning, there's no donut on the screen, so i set it to 0
//let donutAmount = 0; I believe using donut.length is more accurate

//set up a background color that I can change easily for future
let bgcolor = "#b49b7aff";

//see my donut sketch in readme file

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
    //redraw background to cover deleted donut
    background(bgcolor);

    //use for loop to draw donuts, once for every donut from the array by calling the drawDonut function
    for (let i = 0; i < donuts.length; i++) {
      donuts[i].drawDonut();
    }

    //write the instruction
    push();
    noStroke();
    fill("#f8efd9ff");
    textSize(25);
    textFont('Pixelify Sans');
    text('Welcome to Annie Donut!', 10, 30);
    text('Click to add a donut; click again to delete.', 10, 60);
    pop();
}
  

function mousePressed() {
  //I want a random flavor to come out every time when I clicked
  let donutFlavor = ["strawberry", "matcha", "vanilla", "sky", "plain", "chocolate"];
  let choice = random(donutFlavor);
  
  //I want each time pick a donut size randomly from (1 - 1.5)
  let donutSize = random(1, 1.5);
  
  //Previously, I didn't use boolean function, when I clicked on the donut I want to delete, a new donut will automatically appear where I click
  //It is really annoying! So i created this boolean variable to determine whether or not to draw a new donut when i click. 
  // I referred to week5a code about set a variable for boolean.
  let drawDonut = true;

  //Since I want to delete my donut that I clicked on, I need to know which donut my mouseX and mouseY is inside
  //So i used a for loop to check each donut and delete the one that i clicked on
  for (let p = 0; p < donuts.length; p++) {
    //I referred to week5a code about detecting the mouseX, mouseY whether in the donut
    let distance = dist(mouseX, mouseY, donuts[p].x, donuts[p].y);
    //the donut's size is diameter, but the distance should be radius, so that I can know whether my mouseX, Y is inside the donuts
    if (distance < donuts[p].size / 2) {
      //I used splice function to delete 1 donut starting at index p
      donuts.splice(p, 1);
      //This time I didn't want to draw a new donut since I 've deleted one. 
      drawDonut = false;
    }
  }
  
  //since I've let drawDonut = true, I just write drawDonut this variable in this function
  //if no donut is clicked, then draw new donut
  if (drawDonut) {
      //create a new donut and add to the end of donuts array
      //donuts.push = new Donut(mouseX, mouseY, choice, 120);
      let tempDonut = new Donut(mouseX, mouseY, choice, donutSize);
      donuts.push(tempDonut);
    }
  
  }
  

  class Donut {
    constructor(x, y, flavor, size) {
      this.x = x;
      this.y = y;
      this.flavor = flavor;
      this.size = size;
      this.diameter = 120;
    }
    drawDonut() {
      strokeWeight(1);
      stroke("#f8efd9ff");

      push();
      translate(this.x, this.y);
      //scale the entire donut based on the size
      scale(this.size);

      //start to draw my strawberry flavor donut
      if (this.flavor === "strawberry") {
        fill("#F3D07f");
        circle(0, 0, this.diameter);
        //Draw the strawberry glaze
        fill("#FF8DD7");
        circle(0, 0, this.diameter - 15);
        //Draw the blue sprinkles
        fill("#15D3F1");
        circle(25, 15, this.diameter * 0.08);
        circle(-10, 33, this.diameter * 0.08);
        circle(-25, -25, this.diameter * 0.08);
        circle(10, 40, this.diameter * 0.08);
        circle(6, -31, this.diameter * 0.08);
        circle(-39, 0, this.diameter * 0.08);
        circle(35, -16, this.diameter * 0.08);
        circle(-27, 18, this.diameter * 0.08);
        //Draw the donut hole
        fill(bgcolor);
        circle(0, 0, this.diameter*0.3);
      }

      //start to draw my chocolate flavor donut
      if (this.flavor === "chocolate") {
        fill("#F3D07f");
        circle(0, 0, this.diameter);
        //draw the chocolate glaze
        fill("#682800");
        circle(0, 0, this.diameter - 15);
        //I tested out all the numbers below, to make sure they evenly spread over the donut.
        //draw the sprinkles
        fill("#FF8DD7");
        circle(- 5, - 5, this.diameter * 0.1);
        circle(- 5, 5, this.diameter * 0.1);
        circle(5, - 5, this.diameter * 0.1);
        circle(5, 5, this.diameter * 0.1);
        circle(24, 24, this.diameter * 0.05);
        circle(24, - 24, this.diameter * 0.05);
        circle(- 24, 24, this.diameter * 0.05);
        circle(- 24, - 24, this.diameter * 0.05);
        fill("#15D3F1");
        circle(0, 0, this.diameter * 0.1);
        circle(0, 24, this.diameter * 0.05);
        circle(0, - 24, this.diameter * 0.05);
        circle(24, 0, this.diameter * 0.05);
        circle(- 24, 0, this.diameter * 0.05);
      }
      
      //start to draw my plain flavor donut
      if (this.flavor === "plain") {
        fill("#F3D07f");
        circle(0, 0, this.diameter);
        //draw the donut hole
        fill(bgcolor);
        circle(0, 0, this.diameter * 0.3);
      }
      
      //start to draw my vanilla flavor
      if (this.flavor === "vanilla") {
        fill("#F3D07f");
        circle(0, 0, this.diameter);
        //draw the vanilla glaze
        fill("#ffffffff");
        circle(0, 0, this.diameter - 15);
        //I tested out all the numbers below, to make sure they evenly spread over the donut
        //draw the orange sprinkles
        fill("#FF8C02");
        circle(24, 20, this.diameter * 0.07);
        circle(38, 0, this.diameter * 0.07);
        circle(- 38, 0, this.diameter * 0.07);
        circle(25, - 18, this.diameter * 0.07);
        circle(5, - 40, this.diameter * 0.07);
        circle(- 17, 28, this.diameter * 0.07);
        circle(- 21, - 16, this.diameter * 0.07);
        //draw the blue sprinkles
        fill("#0094FF");
        circle(21, 36, this.diameter * 0.07);
        circle(10, 25, this.diameter * 0.07);
        circle(- 4, 39, this.diameter * 0.07);
        circle(- 14, - 36, this.diameter * 0.07);
        circle(- 33, - 28, this.diameter * 0.07);
        circle(- 36,  18, this.diameter * 0.07);
        circle(36, - 22, this.diameter * 0.07);
        //draw the donut hole
        fill(bgcolor);
        circle(0, 0, this.diameter * 0.3);
      }

      //draw my matcha flavor donut
      if (this.flavor === "matcha") {
        fill("#F3D07f");
        circle(0, 0, this.diameter);
        //draw the matcha glaze
        fill("#AFFCC1");
        circle(0, 0, this.diameter - 15);
        //draw the dark green stripes
        push();
        strokeWeight(3);
        stroke("#00762B");
        //draw the matcha drizzle
        //I tested out all the numbers below, to make sure they are parallel to each other
        line(- 15, - 50,  - 50, - 5);
        line(0, - 50, - 50, 15);
        line( 15, - 49,  - 43,  29);
        line(30, - 39, - 29, 39);
        line(39, - 29, - 18, 47);
        line(46, - 16, - 3, 50);
        line(50, - 2, 15, 47);
        pop();
        //draw the donut hole
        fill(bgcolor);
        circle(0, 0, this.diameter * 0.3);
      }

      //draw my sky flavor donut
      if (this.flavor === "sky") {
        fill("#F3D07f");
        circle(0, 0, this.diameter);
        //draw the sky glaze
        fill("#0094FF");
        circle(0, 0, this.diameter - 15);
        //draw the yellow sprinkles
        push();
        strokeWeight(5);
        stroke("#FAFF00");
        //draw the yellow sprinkle
        //I tested out all the numbers below, to make sure they evenly spread over the donut
        line(- 20,  20, - 24,  24);
        line(0, 34, - 4, 38);
        line(- 4, - 35, - 8, - 31);
        line(- 25, - 22, - 29, - 18);
        line(25, 14, 21, 18);
        line( 28, - 20, 24, - 16);
        line(- 30, - 4, - 34, 0);
        line(39, - 4, 35, 0);
        line(22, - 38, 18, - 34);
        pop();
        //draw the donut hole
        fill(bgcolor);
        circle(0, 0, this.diameter * 0.3);
      }
      pop();
    }
  }

