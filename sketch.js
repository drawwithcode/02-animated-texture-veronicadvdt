var colorList = ['DodgerBlue','SlateBlue','Sandybrown','Tomato', 'Hotpink', 'Khaki', 'Lightseagreen', 'Powderblue'];


function setup() {

    createCanvas(windowWidth,windowHeight);
    frameRate(5);
}

function draw() {
for(var x = 0; x < 4000; x += 65) {
    for(var y = 0; y < 1000; y += 65) {
    var index = floor(random() * colorList.length);
    var colorHex = colorList[index];
    fill(color(colorHex));
    stroke(color("black"));
    strokeWeight(30);
    ellipse(x,y,50,50);
    }
  }

}
