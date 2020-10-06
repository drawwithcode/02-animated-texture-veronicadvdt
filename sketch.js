const colorPalette = ["red", "black", "grey", "orange"];

function setup() {
  createCanvas(windowWidth,windowHeight)

}

function draw() {

  noStroke();
  let x = random()*width;
  let y = random()*height;
  let r = random (10,60);
  let col = random (colorPalette);

  fill (color(col))

  ellipse(x, y, r);

}
