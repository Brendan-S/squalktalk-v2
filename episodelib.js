let circles = []; 
let xpos=0; 
let ypos=0;

let canvas;

function setup() {
  
  createCanvas(windowWidth, windowHeight);
    noStroke();
    for (let i = 0; i < 50; i++) {
      circles.push(new Move());
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
fill(240);
  background(150);
  stroke(240);
  
  
  for (let i = 0; i < circles.length; i++) {
   circles[i].move();
    circles[i].display();
  }
}


class Move {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.diameter = (30, 30);
    this.speed = 2;
  }

  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

  display() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}

