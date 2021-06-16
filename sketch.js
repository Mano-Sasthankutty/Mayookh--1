var pathImg,boyImg;
var path,runner;

function preload(){
  pathImg = loadImage("temple run 2.jpg");
  boyImg = loadAnimation("Jake1.png","Jake2.png","jake3.png","jake4.PNG","jake5.png");
}

function setup() {
  createCanvas(displayWidth,displayHeight);
path = createSprite(width/2,50,width+500,height);
path.scale=3.5
path.addImage(pathImg);

runner = createSprite(180,340,30,30);
runner.addAnimation("runner running",boyImg);
}

function draw() {
  background("white");  
  // path.velocityY = 4;
  // if(path.y > 600 ){
  //   path.y = height/2;
  // }
  drawSprites();
}