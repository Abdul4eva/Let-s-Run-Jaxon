
function preload(){
  //pre-load images
  pathImg=loadImage("path.png");
  runner1Img=loadImage("Runner-1.png")

}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale=1.4;

  player=createSprite(200,200);
  player.addImage(runner1Img);
  player.scale=0.1
  
  
}

function draw() {
  background(0);
  if(path.y > 400){
    path.y = height/2;
  }
  player.x=mouseX
  drawSprites();

}



