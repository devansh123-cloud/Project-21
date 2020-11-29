var car , wall;
var speed , weight;


function setup() {
  createCanvas(800,400);
  speed = random(55,90);
  weight = random(400,1500);
  car = createSprite(50, 200, 40, 20);
  car.shapeColor = "white";
  car.debug = true;
  car .velocityX = speed;
  wall = createSprite(700, 200, 60, height/2);


}

function draw() {
  background("black"); 
  if(wall.x - car.x < (car.width + wall.width)/2){
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed* speed/22509;
    if(deformation > 180) {
      wall.shapeColor = "red";
    }
if(deformation < 180 && deformation > 100) {
  wall.shapeColor = "yellow";
}
if(deformation < 100) {
  wall.shapeColor = "green"

}
  }

   
  drawSprites();
}