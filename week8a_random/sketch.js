let points = []; //declaring array for coordinates
let lineStart = 0;
let lineEnd = 0;

let otherPoints = [
  { x: 25, y: 25 },
  { x: 25, y: 10 },
  { x: 10, y: 90 }, //these are objects literals
  //they specify the keys (name of fields)
  //and values (values of fields) of different
  //
];

function setup() {
  createCanvas(500, 500);

  points = [
    createVector(0, 0),
    createVector(0, -100),
    createVector(85, 50),
    createVector(-85, 50),
    createVector(0, 100),
    createVector(-85, -50),
    createVector(85, -50),
  ];
}

function draw() {
  noLoop();
  background(0);
  translate(width / 2, height / 2);
  stroke(255);
  strokeWeight(5);
  // point(0, 0); //center
  // point(0, -100);
  // point(85, 50);
  // point(-85, 50);
  // point(0, 100);
  // point(-85, -50);
  // point(85, -50);
  for (let i = 0; i < points.length; i++) {
    point(points[i].x, points[i].y);
  }
  stroke(255, 0, 0);
  // line(
  //   points[lineStart].x,
  //   points[lineStart].y,
  //   points[lineEnd].x,
  //   points[lineEnd].y
  // );

  let lineAmount = floor(random(1, 9));
  for (let i = 0; i < lineAmount; i++){
    let start = floor(random(points.length));
    let end = floor(random(points.length));
    line(points[start].x, points[start].y, points[end].x, points[end].y);
  }
}

function mousePressed(){
  lineStart = floor(random(points.length));
  lineEnd = floor(random(points.length));
  //floor function will round a number to whatever the lower whole integar is


}