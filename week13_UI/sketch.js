let thicknessSlider;
let alphaSlider;
let colorStyleRadio;
let randomRadio;
let monoPicker;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(250);
  
  //adjust thickness
  thicknessSlider = createSlider(1, 50, 1); // 最细1px，最粗20px，初始1
  thicknessSlider.position(150,150);
  
  //adjust transparency
  alphaSlider = createSlider(10, 255, 200);
  alphaSlider.position(150, 250);
  
  //adjust color style
  colorStyleRadio = createRadio();
  colorStyleRadio.position (150, 350);
  colorStyleRadio.option("Monochrome");
  colorStyleRadio.option("Random");
  // default value is Monochrome
  colorStyleRadio.selected("Monochrome");
  
  
  //picker initialization
  monoPicker = createColorPicker('red');
  monoPicker.position(150, 390);

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
  
  line(windowWidth, windowHeight, mouseX, mouseY);
}