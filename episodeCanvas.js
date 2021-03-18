let xpos = 0;
let ypos = 0;

let canvas; 
// function setup() {
//   createCanvas(windowWidth, windowHeight);
//   background(150);
//   frameRate(15);
// }

function setup() {
  createCanvas(windowWidth, windowHeight); 
  noStroke();
  fill(50, 50, 50);

  frameRate(15); 
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  
  stroke(255);
  strokeWeight(0);

  
  ellipse(
    800+sin(xpos)*800,
    500+sin(ypos)*150,
    30, 30);
  xpos += 0.1360;
  ypos += 0.1600;
  
  ellipse(
    900+sin(xpos)*1000,
    600+sin(ypos)*1000,
    10, 30);
 
  ellipse(
    10+sin(xpos)*1000,
    10*sin(ypos)*100,
    10, 30);


}