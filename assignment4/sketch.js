// I want to save all the donuts that I've created
let donuts = [];
//At beginning, there's no donut on the screen, so i set it to 0
//let donutAmount = 0;
let bgcolor = "#b49b7aff";



function setup() {
  createCanvas(windowWidth, windowHeight);

}

//I want one donut appears once I clicked
//Previously I used mouseIsPressed, but when I pressed, it came out a lot of flavor at one time, as it depends on the duration I pressed
//So I switched to mouseClicked, it is more precise.
function mouseClicked() {
  //I want when I clicked, one flavor will come out randomly
  let donutFlavor = ["strawberry", "chocolate", "plain", "matcha", "sky", "vanilla"];
  let choice = random(donutFlavor);
  
  //I want the donut size between 100-150 randomly
  let donutSize = 120;
  
  //Previously, I didn't use boolean function, when I clicked on the donut I want to delete, it will automatically appear a donut that I just click
  //It is really annoying! So i have to make the boolean. I referred to week5a code about set a variable for boolean.
  // I want to draw the donut when I click my mouse.
  let drawDonut = true;
  
  //Since I want to delete my donut when I click the donut again, I need to know whether my mouseX and mouseY is in the donuts that I drew
  //So i used a for loop to record the donuts' index
  for (let p = 0; p < donuts.length; p++) {
    //I referred to week5a code about detecting the mouseX, mouseY whether in the circle
    let distance = dist(mouseX, mouseY, donuts[p].x, donuts[p].y);
    //the donut's size is diameter, it should be radius, so that I can know whether my mouseX, Y is inside the donuts
    if (distance < donuts[p].size / 2) {
      //I used splice function to delete 1 donut start from index p
      donuts.splice(p, 1);
      //This time I didn't want to draw donuts when I click mouse. I want to delete donut.
      drawDonut = false;
    }
  }
  
  //since I've let drawDonut = true, I just write drawDonut this variable
  if (drawDonut) {
      //tell p5js that when meet drawDonut boolean, generate donut one by one
      donuts[donuts.length] = new Donut(mouseX, mouseY, choice, donutSize);
      //print(donuts.length);
    }

}
  



  function draw() {
  
    background(bgcolor);

    //use for loop to draw donuts, one mouse click one donut 
    for (let i = 0; i < donuts.length; i++) {
      donuts[i].drawDonut();
    }

    //write the instruction
    push();
    noStroke();
    fill("#f8efd9ff");
    textSize(15);
    textFont('Pixelify Sans');
    text('Welcome to Annie Donut!', 10, 30);
    text('Click to add a donut; click again to delete.', 10, 60);
    pop();
  }

  class Donut {
    constructor(x, y, flavor, size) {
      this.x = x;
      this.y = y;
      this.flavor = flavor;
      this.size = size;
    }
    drawDonut() {
      strokeWeight(1);
      stroke("#f8efd9ff");
      
      //scale(this.size);
      //start to draw my strawberry flavor donut
      if (this.flavor === "strawberry") {
        fill("#F3D07f");
        circle(this.x, this.y, this.size);
        //Draw the strawberry glaze
        fill("#FF8DD7");
        circle(this.x, this.y, this.size - 15);
        //Draw the blue sprinkles
        fill("#15D3F1");
        circle(this.x + 25, this.y + 15, this.size * 0.08);
        circle(this.x - 10, this.y + 33, this.size * 0.08);
        circle(this.x - 25, this.y - 25, this.size * 0.08);
        circle(this.x + 10, this.y + 40, this.size * 0.08);
        circle(this.x + 6, this.y - 31, this.size * 0.08);
        circle(this.x - 39, this.y, this.size * 0.08);
        circle(this.x + 35, this.y - 16, this.size * 0.08);
        circle(this.x - 27, this.y + 18, this.size * 0.08);
        //Draw the donut hole
        fill(bgcolor);
        circle(this.x, this.y, this.size*0.3);
      }

      //start to draw my chocolate flavor donut
      if (this.flavor === "chocolate") {
        fill("#F3D07f");
        circle(this.x, this.y, this.size);
        //draw the chocolate glaze
        fill("#682800");
        circle(this.x, this.y, this.size - 15);
        //draw the sprinkles
        fill("#FF8DD7");
        circle(this.x - 5, this.y - 5, this.size * 0.1);
        circle(this.x - 5, this.y + 5, this.size * 0.1);
        circle(this.x + 5, this.y - 5, this.size * 0.1);
        circle(this.x + 5, this.y + 5, this.size * 0.1);
        circle(this.x + 24, this.y + 24, this.size * 0.05);
        circle(this.x + 24, this.y - 24, this.size * 0.05);
        circle(this.x - 24, this.y + 24, this.size * 0.05);
        circle(this.x - 24, this.y - 24, this.size * 0.05);
        fill("#15D3F1");
        circle(this.x, this.y, this.size * 0.1);
        circle(this.x, this.y + 24, this.size * 0.05);
        circle(this.x, this.y - 24, this.size * 0.05);
        circle(this.x + 24, this.y, this.size * 0.05);
        circle(this.x - 24, this.y, this.size * 0.05);
      }
      
      //start to draw my plain flavor donut
      if (this.flavor === "plain") {
        fill("#F3D07f");
        circle(this.x, this.y, this.size);
        //draw the donut hole
        fill(bgcolor);
        circle(this.x, this.y, this.size * 0.3);
      }
      
      //start to draw my vanilla flavor
      if (this.flavor === "vanilla") {
        fill("#F3D07f");
        circle(this.x, this.y, this.size);
        //draw the vanilla glaze
        fill("#ffffffff");
        circle(this.x, this.y, this.size - 15);
        //draw the orange sprinkles
        fill("#FF8C02");
        circle(this.x + 24, this.y + 20, this.size * 0.07);
        circle(this.x + 38, this.y, this.size * 0.07);
        circle(this.x - 38, this.y, this.size * 0.07);
        circle(this.x + 25, this.y - 18, this.size * 0.07);
        circle(this.x + 5, this.y - 40, this.size * 0.07);
        circle(this.x - 17, this.y + 28, this.size * 0.07);
        circle(this.x - 21, this.y - 16, this.size * 0.07);
        //draw the blue sprinkles
        fill("#0094FF");
        circle(this.x + 21, this.y + 36, this.size * 0.07);
        circle(this.x + 10, this.y + 25, this.size * 0.07);
        circle(this.x - 4, this.y + 39, this.size * 0.07);
        circle(this.x - 14, this.y - 36, this.size * 0.07);
        circle(this.x - 33, this.y - 28, this.size * 0.07);
        circle(this.x - 36, this.y + 18, this.size * 0.07);
        circle(this.x + 36, this.y - 22, this.size * 0.07);
        //draw the donut hole
        fill(bgcolor);
        circle(this.x, this.y, this.size * 0.3);

      }
      //draw my matcha flavor donut
      if (this.flavor === "matcha") {
        fill("#F3D07f");
        circle(this.x, this.y, this.size);
        //draw the matcha glaze
        fill("#AFFCC1");
        circle(this.x, this.y, this.size - 15);
        //draw the dark green stripes
        push();
        strokeWeight(3);
        stroke("#00762B");
        line(this.x, this.y - 50, this.x - 50, this.y + 15);
        line(this.x - 15, this.y - 50, this.x - 50, this.y - 5);
        line()
        pop();
        //draw the donut hole
        fill(bgcolor);
        circle(this.x, this.y, this.size * 0.3);
      }

      //draw my sky flavor donut
      if (this.flavor === "sky") {
        fill("#F3D07f");
        circle(this.x, this.y, this.size);
        //draw the sky glaze
        fill("#0094FF");
        circle(this.x, this.y, this.size - 15);
        //draw the yellow sprinkles
        push();
        strokeWeight(5);
        stroke("#FAFF00");
        line(this.x - 20, this.y + 20, this.x - 24, this.y + 24);
        line(this.x, this.y + 34, this.x - 4, this.y + 38);
        line(this.x - 4, this.y - 35, this.x - 8, this.y - 31);
        line(this.x - 25, this.y - 22, this.x - 29, this.y - 18);
        line(this.x + 25, this.y + 14, this.x + 21, this.y + 18);
        line(this.x + 28, this.y - 20, this.x + 24, this.y - 16);
        line(this.x - 30, this.y - 4, this.x - 34, this.y);
        line(this.x + 39, this.y - 4, this.x + 35, this.y);
        line(this.x + 22, this.y - 38, this.x + 18, this.y - 34);
        pop();
        //draw the donut hole
        fill(bgcolor);
        circle(this.x, this.y, this.size * 0.3);
      }
    }
  }

