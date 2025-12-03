let thicknessSlider;
let alphaSlider;
let colorStyleRadio;
let randomRadio;
let monoPicker;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(10);
  fill("white");
  //title
  textSize(50);
  textFont("Gamja Flower");
  text('Silent Strings', 30, 50);
  textSize(25);
  textFont("Schoolbell");
  //text for instruction
  text('Thumb + Index Open = Show Pattern', 100, 200);
  text('Pinch Thumb + Index Together = Change Pattern', 100, 240);
  
  //text for sliders/////////////////////
  textSize(20);
  text('Stroke Weight', 100, 300);
  text('Opacity', 100, 340);
  text('Color Style', 100, 380);
  
  //create stroke weight slider///////////////////
  thicknessSlider = createSlider(1, 15, 3); 
  thicknessSlider.position(230, 285);
  thicknessSlider.style('accent-color', '#53f6caff');
  
  //create opacity slider///////////////////////
  alphaSlider = createSlider(10, 255, 100);
  alphaSlider.position(180, 325);
  alphaSlider.style('accent-color', '#53f6caff');
  
  //Create color style radio button////////////////
  colorStyleRadio = createRadio();
  colorStyleRadio.position(200, 365);
  //font color
  colorStyleRadio.style('color', '#ffffffff');
  //radio color
  colorStyleRadio.style('accent-color', '#53f6caff');
  //font
  colorStyleRadio.style('font-family', 'Schoolbell');
  //font size
  colorStyleRadio.style('font-size', '16px');
  colorStyleRadio.style('margin', '6px 10');  
  colorStyleRadio.option("Monochrome");
  colorStyleRadio.option("Random");
  // default value is Monochrome
  colorStyleRadio.selected("Monochrome");
  
  //picker initialization
  monoPicker = createColorPicker('white');
  monoPicker.position(200, 400);

}

function draw() {
  let w = thicknessSlider.value();
  let a = alphaSlider.value();
  let c;
  if (colorStyleRadio.value() == "Monochrome") {
    c = monoPicker.color();
  } else if (colorStyleRadio.value() == "Random") {
    c = color(random(50, 255), random(50, 255), random(50, 255), random(150, 255));
  }
  c.setAlpha(a);
  strokeWeight(w);
  stroke(c);
  noFill();
  
  //line(windowWidth, windowHeight, mouseX, mouseY);
}