const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var soldier, soldierImg, backgroundImg, zombie;

var soldierAnimation;

var bullet, bulletImg, antidote, antidoteImg; 

var zombieAnimation; 

var health, healthImg;

var score = 0;

function preload(){

  zombieAnimation = loadAnimation("Zombie1.png","Zombie2.png", "Zombie3.png", "Zombie4.png",
   "Zombie5.png", "Zombie6.png", "Zombie7.png", "Zombie8.png");

   soldierAnimation = loadAnimation("sm1.png", "sm2.png", "sm3.png", "sm4.png", "sm5.png", "sm6.png");

soldierImg = loadImage("soldier-firing.png");
bulletImg = loadImage("Bullet.png");
backgroundImg = loadImage("background.jpg");
antidoteImg = loadImage("Antidote.png");
healthImg = loadImage("Health.png");



}

function setup() {
  createCanvas(800,400);
  
  soldier = createSprite(750, 200, 50, 50);
  //soldier.addAnimation("soldiers", soldierAnimation)
  soldier.addImage("soldier", soldierImg);
  soldier.scale = 1.5;
  
  zombGroup = new Group();
  bulletGroup = new Group();
  antidoteGroup = new Group();

}

function draw() {
  background(backgroundImg);

  
  textSize(30);
  fill("white");
  text("『 Zᴏᴍʙɪᴇ•Sʟᴀʏᴇʀ 』", 270,50);

  textSize(29);
  fill("white");
  text("Sᴄᴏʀᴇ : " + score, 650,50);

if (frameCount%50===0){
spawnZombies();
}

soldier.y = mouseY
//soldier.x = mouseX

if (keyDown("SPACE")){
  createBullet();

}

if (frameCount%400===0){
createAntidote();
}

if (soldier.isTouching(antidoteGroup)){
score = score+1;
antidoteGroup.destroyEach();
}

  drawSprites();
}

function spawnZombies(){
 var zomb = createSprite(0,Math.round(random(180,370)),10,10);
 zomb.addAnimation("zombie", zombieAnimation);
 zomb.velocityX = 5;
 zomb.lifetime = 900;
 zomb.scale = 0.5;
 zombGroup.add(zomb);
}

function createBullet(){
var bullet = createSprite(100,100,50,20);
bullet.addImage("bullet", bulletImg);
bullet.x = 750;
bullet.y = soldier.y;
bullet.velocityX = -5;
bullet.lifetime = 800;
bullet.scale = 0.1;
bulletGroup.add(bullet);
}

function createAntidote(){
var antidote = createSprite(Math.round(random(0,500)), Math.round(random(190,370)), 10,10);
antidote.addImage("antidote", antidoteImg);
antidote.scale = 0.05;
antidoteGroup.add(antidote);


}
