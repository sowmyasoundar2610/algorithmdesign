function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  createSprite(200, 200, 200, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}