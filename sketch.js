var bullet,wall;
var thickness,weight,speed;
var damage;
function setup() {
  createCanvas(1400,400);
  bullet=createSprite(10, 200, 50, 20);
  bullet.shapeColor="yellow";
  wall=createSprite(1200,200,thickness,height/2);
  speed=Math.round(random(223,321));
  thickness=Math.round(random(22,83))
  weight=Math.round(random(30,52));
  bullet.velocityX=speed;
  
  damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
}

function draw() {
  background(0,0,0); 
  console.log(bullet.x);
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    if(damage>10){
      wall.shapeColor="red";
    }
    
    if(damage<10){
      wall.shapeColor="green";
    }
  } 
  hasCollided(bullet,wall);
  drawSprites();
}



