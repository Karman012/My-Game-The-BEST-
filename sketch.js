var player, pStand,pRunL,pRunR,pJump,pSlide,pFall,pLanding;
var bg, bgImg;
var edges;
var platform, p1, p2, p3, p4, p5, p6, p7, p8,p9;
var s1;
var score=0;


function preload(){
    bgImg = loadImage("image/mountain.jpg");
    pStand = loadAnimation("image/pStand.png","image/pBlink.png");
    pRunL = loadAnimation("image/pRun.png","image/pLeft.png");
    pRunR = loadAnimation("image/pRun.png","image/pRight.png");
    pJump = loadImage("image/pJump1.png");
    pLanding = loadAnimation("image/pJump2.png","image/pJump3.png")
    pSlide = loadImage("image/pSlide.png");
    pFall = loadImage("image/pFall.png");
    platform = loadImage("image/platform.png");
    s1 = loadSound("sound.mp3");
    
}

function setup(){
createCanvas(1000, 700);

//edges = createEdgeSprite();

bg = createSprite(500, 500, 500, 350);
bg.addImage(bgImg);
bg.scale = 4;
bg.velocityY=+0.6;

player = createSprite(100, 200, 10, 10);
player.addAnimation("standing",pStand);
player.changeAnimation("standing");

p1 = createSprite(220, 600, 100, 20);
p1.addImage(platform);
p1.scale=0.5;
p1.velocityY =+0.6;

p2 = createSprite(440, 490, 100, 20);
p2.addImage(platform);
p2.scale=0.5
p2.velocityY =+0.6;

p3 = createSprite(280, 370, 100, 20);
p3.addImage(platform);
p3.scale=0.5
p3.velocityY =+0.6;

p4 = createSprite(500, 210, 100, 20);
p4.addImage(platform);
p4.scale=0.5
p4.velocityY =+0.6;

p5 = createSprite(700, 550, 100, 20);
p5.addImage(platform);
p5.scale=0.5
p5.velocityY =+0.6;

p6 = createSprite(670, 380, 100, 20);
p6.addImage(platform);
p6.scale=0.5
p6.velocityY =+0.6;

p7 = createSprite(700, 165, 100, 20);
p7.addImage(platform);
p7.scale=0.5
p7.velocityY =+0.6;

p8 = createSprite(815, 270, 100, 20);
p8.addImage(platform);
p8.scale=0.5
p8.velocityY =+0.6;

p9 = createSprite(100, 300, 100, 20);
p9.addImage(platform);
p9.scale=0.5




// player.debug=true;
// platform.debug=true;
// p1.debug=true;

p1.setCollider("circle", 20, 20, 70);
p2.setCollider("circle", 20, 20, 70);
p3.setCollider("circle", 20, 20, 70);
p4.setCollider("circle", 20, 20, 70);
p5.setCollider("circle", 20, 20, 70);
p6.setCollider("circle", 20, 20, 70);
p7.setCollider("circle", 20, 20, 70);
p8.setCollider("circle", 20, 20, 70);
p9.setCollider("circle", 20, 20, 70);

}

function draw(){
background(0);

edges = createEdgeSprites();

if(bg.y>400){
    bg.y=bg.height/2;
}

if(p1.y>700){
    p1.y = 600;
}
if(p2.y>700){
    p2.y=420;
}
if(p3.y>700){
    p3.y=370;
}
if(p4.y>700){
    p4.y=210;
}
if(p5.y>700){
    p5.y=560;
}
if(p6.y>700){
    p6.y=380;
}
if(p7.y>700){
    p7.y=165;
}
if(p8.y>700){
    p8.y=270;
}



if(keyWentDown("space")){
    player.velocityY -=3;
    
    player.addImage(pJump);  

}

player.velocityY +=0.5;


 //if(keyWentUp("space")){
  //   player.addAnimation("land",pLanding);
  //   player.changeAnimation("land");  
// }
 


if(keyDown(LEFT_ARROW)){
    player.y -=8;
    player.x -=6;
    player.addAnimation("run",pRunL);
    player.changeAnimation("run");
}

if(keyDown(RIGHT_ARROW)){
    player.y -=8;
    player.x +=6;
    player.addAnimation("run",pRunR);
    player.changeAnimation("run");
}

if(p1.isTouching(player)){
    player.velocityY=0;
    s1.play();
    score+=1;
}
if(p2.isTouching(player)){
    player.velocityY=0;
    s1.play();
    score+=1;
}
if(p3.isTouching(player)){
    player.velocityY=0;
    s1.play();
    score+=1;
}
if(p4.isTouching(player)){
    player.velocityY=0;
    s1.play();
    score+=1;
}
if(p5.isTouching(player)){
    player.velocityY=0;
    s1.play();
    score+=1;
}
if(p6.isTouching(player)){
    player.velocityY=0;
    s1.play();
    score+=1;
}
if(p7.isTouching(player)){
    player.velocityY=0;
    s1.play();
    score+=1;
}
if(p8.isTouching(player)){
    player.velocityY=0;
    s1.play();
    score+=1;
}
if(p9.isTouching(player)){
    player.velocityY=0;
}



drawSprites();

if(player.y>700){
    textSize(50);
fill (0);
textStyle="BOLD";
text("GAME OVER!!!!!!", 350, 350);
bg.setVelocity(0, 0);
p1.setVelocity(0, 0);
p2.setVelocity(0, 0);
p3.setVelocity(0, 0);
p4.setVelocity(0, 0);
p5.setVelocity(0, 0);
p6.setVelocity(0, 0);
p7.setVelocity(0, 0);
p8.setVelocity(0, 0);
}

textSize(20);
fill (0);
textStyle="BOLD";
text("SCORE: "+score, 20, 50);
}