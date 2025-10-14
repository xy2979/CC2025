// I want to save all the donuts that I've created
let donuts = [];
//At beginning, there's no donut on the screen, so i set it to 0
//let donutAmount = 0; I believe using donut.length is more accurate

//set up a background color that I can change easily for future
let bgcolor = "#b49b7aff";



function setup() {
  createCanvas(windowWidth, windowHeight);

}

//I want one donut to appear per click
//Previously I used mouseIsPressed, but when I pressed, it created a lot of donuts at one time, as it depends on the duration I pressed
//So I switched to mouseClicked, it is more precise.
function mouseClicked() {
  //I want a random flavor to come out every time when I clicked
  let donutFlavor = ["strawberry", "chocolate", "plain", "matcha", "sky", "vanilla"];
  let choice = random(donutFlavor);
  
  //I want the donut size at 120
  let donutSize = 150;
  
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
      donuts[donuts.length] = new Donut(mouseX, mouseY, choice, donutSize);
      //print(donuts.length);
    }

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
        //I tested out all the numbers below, to make sure they evenly spread over the donut.
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
        //I tested out all the numbers below, to make sure they evenly spread over the donut
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
        //draw the matcha drizzle
        //I tested out all the numbers below, to make sure they are parallel to each other
        line(this.x - 15, this.y - 50, this.x - 50, this.y - 5);
        line(this.x, this.y - 50, this.x - 50, this.y + 15);
        line(this.x + 15, this.y - 49, this.x - 43, this.y + 29);
        line(this.x + 30, this.y - 39, this.x - 29, this.y + 39);
        line(this.x + 39, this.y - 29, this.x - 18, this.y + 47);
        line(this.x + 46, this.y - 16, this.x - 3, this.y + 50);
        line(this.x + 50, this.y - 2, this.x + 15, this.y + 47);
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
        //draw the yellow sprinkle
        //I tested out all the numbers below, to make sure they evenly spread over the donut
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

