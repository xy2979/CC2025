// I want to save all the donuts that I've created
let donuts = [];
//At beginning, there's no donut on the screen, so i set it to 0
let donutAmount = 0;



function setup() {
  createCanvas(windowWidth, windowHeight);
  background("white");
  
  
}

//I want one donut appears once I clicked
//Previously I used mouseIsPressed, but when I pressed, it came out a lot of flavor at one time, as it depends on the duration I pressed
//So I switched to mouseClicked, it is more precise.
function mouseClicked() {
  //I want when I clicked, one flavor will come out randomly
  let donutFlavor = ["strawberry", "chocolate", "plain", "matcha", "sky", "vanilla"];
  let choice = random(donutFlavor);
  let donutSize = random(20, 50);
  donuts[donutAmount++] = new Donut(mouseX, mouseY, choice, donutSize);
  print(choice); 


}

function draw() {
  


  // print(donuts)
  for (let i = 0; i < donutAmount;  i++) {
    donuts[i].drawDonut();
  }

 
}


class Donut {
  constructor(x, y, flavor, size) {
    this.x = x;
    this.y = y;
    this.flavor = flavor;
    this.size = size;
  }
  drawDonut() {
    if (this.flavor === "strawberry") {
      //draw my strawberry flavor donut
      fill("black");
      circle(this.x, this.y, this.size);
    }
    if (this.flavor === "chocolate") {
      //draw my strawberry flavor donut
      fill("brown");
      circle(this.x, this.y, this.size);
    }
    if (this.flavor === "plain") {
      //draw my strawberry flavor donut
      fill("yellow");
      circle(this.x, this.y, this.size);
    }
    if (this.flavor === "vanilla") {
      //draw my strawberry flavor donut
      fill("orange");
      circle(this.x, this.y, this.size);
    }
    if (this.flavor === "matcha") {
      //draw my strawberry flavor donut
      fill("green");
      circle(this.x, this.y, this.size);
    }
    if (this.flavor === "sky") {
      //draw my strawberry flavor donut
      fill("blue");
      circle(this.x, this.y, this.size);
    }
  }
}
