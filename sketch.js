function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}
let x = innerWidth / 2;
let y = innerHeight / 2;
let r = 40;
let a = 1;

let Dot = function() {
  this.r = r;
  this.a = a;
  this.x = mouseX;
  this.y = mouseY;

  this.draw = function() {
    fill(`rgba(255, 0, 0, ${this.a})`);
    noStroke();
    ellipse(this.x, this.y, this.r, this.r);
  };
  this.update = function() {
    if (this.a >= 0.01) {
      this.a -= 0.01;
    }
    if (this.r >= 1)
    this.r -= 1;
    this.draw();
  };
};
let dotArray = [];

function draw() {
  background("blue");

  fill(`rgba(255, 0, 0, 1)`);
  noStroke();
  ellipse(mouseX, mouseY, r, r);

  for (i = 0; i < dotArray.length; i++) {
    dotArray[i].update();
  }
  mouseDragged = function() {
    dotArray.push(new Dot());
  };
}
