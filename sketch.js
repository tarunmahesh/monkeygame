
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var ground, backGround, backGroundImage, invisibleGround
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  backGroundImage = loadImage("jungle.jpg")
  
 
}



function setup() {
  
  createCanvas(600,600)
  
  backGround = createSprite(600,300,2400,600)
  backGround.addImage("jungle", backGroundImage)
  backGround.scale = 1.5
  backGround.depth = -1;
  
  monkey = createSprite(100,500,100,100);
  monkey.addAnimation("running", monkey_running)
  monkey.scale = 0.1;
  
  ground = createSprite(600,550,1200,20)
  
  invisibleGround = createSprite(300,550,600,20)

  invisibleGround.shapeColor = color(131,82,65);
  
  foodGroup = new Group();
  obstacleGroup = new Group();
  
  score = 0;
  
}


function draw() {
  background(0);
  
  ground.velocityX = -2;
  
  if(ground.x < 0){
    ground.x = 600;
  }
  
  backGround.velocityX = -2
  
  if(backGround.x < 0){
    backGround.x = 600;
  }
  
  if(keyWentDown("space") && monkey.collide(invisibleGround)){
    monkey.velocityY = -6;
  }
  
  monkey.velocityY += 0.15;
  
  monkey.collide(invisibleGround);
  //invisibleGround.tint(255, 127);
  
  
  bananas();
  obstacles();
  
  score = Math.round(frameCount/10);
  

  
  drawSprites();
  
  textSize(16);
  fill("white");
  text("Survival Time: "+score, 450, 100)
}

function bananas(){
  if(frameCount % 80 === 0){
    banana = createSprite(600,200,50,50);
    banana.addImage("banana", bananaImage);
    banana.scale = 0.1
    banana.y = Math.round(random(350,400));
    banana.velocityX = -3;
    banana.lifetime = 200;
    foodGroup.add(banana);
  }
}

function obstacles(){
  if(frameCount % 300 === 0){
    obstacle = createSprite(600,200,50,50);
    obstacle.addImage("banana", obstacleImage);
    obstacle.scale = 0.2
    obstacle.y = 500
    obstacle.velocityX = -3;
    obstacle.lifetime = 200;
    obstacleGroup.add(obstacle);
  }
}