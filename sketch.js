var ship, shipMoving
var sea, seaImg
function preload(){
shipMoving = loadAnimation("ship-1.png","ship-2.png", "ship-3.png", "ship-4.png")
seaImg = loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);

  sea = createSprite(400,200)
  sea.addImage(seaImg)
  sea.scale = 0.3

  ship = createSprite(150,250,30,30);
  ship.addAnimation("moving", shipMoving)
  ship.scale = 0.1;
  

}

function draw() {
  background("blue");
  if(sea.x <0){
    sea.x = sea.width/8
  }
  sea.velocityX = -5
  drawSprites();
}