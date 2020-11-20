
var fixedRect,movingRect;
var gameObject1,gameObject2;

function setup(){
createCanvas(1600,400);
fixedRect=createSprite(400,200,60,50);
fixedRect.shapeColor= "yellow"

movingRect= createSprite(800,400,80,30);
movingRect.shapeColor="yellow"

gameObject1 = createSprite(100, 100, 50, 50);
gameObject1.shapeColor = "green";
gameObject2 = createSprite(200, 100, 50, 50);
gameObject2.shapeColor = "green";
}
function draw() {
    movingRect.x=World.mouseX
    movingRect.y=World.mouseY

    if(isTouching(movingRect, gameObject1)){
    movingRect.shapeColor = "blue"
    gameObject1.shapeColor = "blue"
  }
  else {
    movingRect.shapeColor = "green"
    gameObject1.shapeColor = "green"
  }
  drawSprites();
}

function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object2.y < object2.height/2 + object1.height/2) {
    
    return true;
  }
  else {
      return false;
  }





