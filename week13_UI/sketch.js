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
  textSize(40);
  textFont("Gamja Flower");
  text('Silent Strings', 30, 50);
  textSize(19);
  textFont("Schoolbell");
  //text for instruction
  text('Thumb + Index Open = Show Pattern', 600, 100);
  text('Pinch Thumb + Index Together = Change Pattern', 600, 130);
  
  //text for sliders/////////////////////
  textSize(15);
  text('Stroke Weight', 600, 190);
  text('Opacity', 600, 220);
  text('Color Style', 600, 250);
  
  //create stroke weight slider///////////////////
  thicknessSlider = createSlider(1, 15, 3); 
  thicknessSlider.position(710, 175);
  thicknessSlider.style('accent-color', '#53f6caff');
  
  //create opacity slider///////////////////////
  alphaSlider = createSlider(10, 255, 100);
  alphaSlider.position(660, 205);
  alphaSlider.style('accent-color', '#53f6caff');
  
  //Create color style radio button////////////////
  colorStyleRadio = createRadio();
  colorStyleRadio.position(680, 235);
  //font color
  colorStyleRadio.style('color', '#ffffffff');
  //radio color
  colorStyleRadio.style('accent-color', '#53f6caff');
  //font
  colorStyleRadio.style('font-family', 'Schoolbell');
  //font size
  colorStyleRadio.style('font-size', '14px');
  colorStyleRadio.style('margin', '6px 10');  
  colorStyleRadio.option("Monochrome");
  colorStyleRadio.option("Random");
  // default value is Monochrome
  colorStyleRadio.selected("Monochrome");
  
  //picker initialization
  monoPicker = createColorPicker('white');
  monoPicker.position(700, 260);

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