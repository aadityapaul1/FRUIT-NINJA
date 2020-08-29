var sword, sword_img;
var bg, bg_img;
var fruit1, fruit1_img;
var fruit2, fruit2_img;
var fruit3, fruit3_img;
var fruit4, fruit4_img;
var monster, monster_img;
var rand, rand2, rand3, rand4, rand5;

var fruitGroup1, fruitGroup2, fruitGroup3, fruitGroup4;
var monsterGroup;

var start_button,start_button_img;

var score = 0;

var splash, over, win,win_img,over_img;
var restart,restart_img;

var gamestate = "serve";

function preload() {

  bg_img = loadImage("wood6.jpg");
  sword_img = loadAnimation("sword0.png");
  fruit1_img = loadImage("fruit10.png");
  fruit2_img = loadImage("fruit30.png");
  fruit3_img = loadImage("fruit40.png");
  fruit4_img = loadImage("banana0.png");
  monster_img = loadAnimation("monster0.png", "monster1.png");
  
  start_button_img = loadImage("START.png")
  splash = loadSound('splash.mp3');
  over = loadSound('game-over.mp3');
  win = loadSound('game-win.mp3');
  
  win_img = loadAnimation("game.jpg");
  over_img = loadAnimation("gameOver.png");
  restart_img = loadImage("restart.png");
  
}

function setup() {
  createCanvas(1080, 720);

  bg = createSprite(200, 200, 1920, 720);
  bg.addImage(bg_img);

  sword = createSprite(200, 200, 20, 20);
  sword.addAnimation("button",start_button_img);
  sword.addAnimation("game",win_img);
  sword.addAnimation("over",over_img)
  sword.addAnimation("sword",sword_img);
  sword.scale = 0.725;

  restart = createSprite(540,400,20,20);
  restart.visible = false;
  restart.addImage (restart_img);
  
  fruitGroup1 = new Group();
  fruitGroup2 = new Group();
  fruitGroup3 = new Group();
  fruitGroup4 = new Group();
  monsterGroup = new Group();

}

function draw() {
  background(180);
  
  if(gamestate==="serve"){
    sword.changeAnimation("button",start_button_img);
    sword.x = 540;
    sword.y = 360;
  }
  
  if(mousePressedOver(sword)){
     gamestate = "play";
  sword.changeAnimation("sword",sword_img);
    
  }
  
  if(gamestate==="play"){
  
  sword.scale = 0.725;
    
  sword.x = mouseX;
  sword.y = mouseY;
    
  sword.changeAnimation("sword",sword_img);
   

  if (frameCount % 60 == 0) {
    fruits1();
  }

  if (frameCount % 100 == 0) {
    fruits2();
  }

  if (frameCount % 140 == 0) {
    fruits3();
  }

  if (frameCount % 180 == 0) {
    fruits4();
  }

  if (frameCount % 120 == 0) {
    spawn_monster();
  }

  if (fruitGroup1.isTouching(sword)) {
    splash.play();
    fruitGroup1.destroyEach();
    score = score + 1
  }

  if (fruitGroup2.isTouching(sword)) {
    splash.play();
    fruitGroup2.destroyEach();
    score = score + 2;
  }

  if (fruitGroup3.isTouching(sword)) {
    splash.play();
    fruitGroup3.destroyEach();
    score = score + 3;
  }

  if (fruitGroup4.isTouching(sword)) {
    splash.play();
    fruitGroup4.destroyEach();
    score = score + 4;
  }
    
restart.visible = false;
  
    if(monsterGroup.isTouching(sword)){
   over.play();
      fruitGroup1.destroyEach();
      fruitGroup2.destroyEach();
      fruitGroup3.destroyEach();
      fruitGroup4.destroyEach();
      monsterGroup.destroyEach();
      
  gamestate ="end";
  }
  }//end of play state
  
      if(score===150||score>150){
     gamestate = "win"
      win.play();
      sword.changeAnimation("game",win_img);
      sword.scale = 4;
        fruitGroup1.destroyEach();
        fruitGroup2.destroyEach();
        fruitGroup3.destroyEach();
        fruitGroup4.destroyEach();
        monsterGroup.destroyEach();
        score = 0;
    }
  
  if(gamestate==="end"){
    sword.changeAnimation("over",over_img);
    
    sword.x = 540;
      sword.y = 360;
    sword.scale = 2;
    restart.visible = true;
    
    if(mousePressedOver(restart)){
     gamestate = "play";
      fruitGroup1.destroyEach();
      fruitGroup2.destroyEach();
      fruitGroup3.destroyEach();
      fruitGroup4.destroyEach();
      monsterGroup.destroyEach();
      score = 0;
    }
  }
  
  if(gamestate==="win"){
   sword.x = 540;
    sword.y = 360;
   
  }
  
  drawSprites();

  stroke("yellow");
  fill("red");
  textFont("algerian");
  textSize(25);
  text("SCORE : " + score, 900, 50);

}

function fruits1() {
  rand = Math.round(random(0, 1));

  fruit1 = createSprite(540, 0, 20, 20);
  fruit1.addAnimation("f1", fruit1_img);
  fruit1.scale = 0.12525;
  fruit1.velocityY = 5;
  fruit1.lifetime = 144;
  fruit1.x = random(20, 1000);
  fruitGroup1.add(fruit1);
  if (rand === 0) {
    fruit1.y = 720;
    fruit1.velocityY = -5;
  } else {
    fruit1.y = 0;


  }
}


function fruits2() {
  rand2 = Math.round(random(0, 1));

  fruit2 = createSprite(540, 0, 20, 20);
  fruit2.addAnimation("f2", fruit2_img);
  fruit2.scale = 0.5;
  fruit2.velocityY = 5;
  fruit2.lifetime = 144;
  fruit2.x = random(20, 1000);
  fruitGroup2.add(fruit2);

  if (rand2 === 0) {
    fruit2.y = 720;
    fruit2.velocityY = -5;
  } else {
    fruit2.y = 0;

  }
}


function fruits3() {
  rand3 = Math.round(random(0, 1));

  fruit3 = createSprite(540, 0, 20, 20);
  fruit3.addAnimation("f3", fruit3_img);
  fruit3.scale = 0.5;
  fruit3.velocityY = 5;
  fruit3.lifetime = 144;
  fruit3.x = random(20, 1000);
  fruitGroup3.add(fruit3);

  if (rand3 === 0) {
    fruit3.y = 720;
    fruit3.velocityY = -5;
  } else {
    fruit3.y = 0;

  }
}


function fruits4() {
  rand4 = Math.round(random(0, 1));

  fruit4 = createSprite(540, 0, 20, 20);
  fruit4.addAnimation("f4", fruit4_img);
  fruit4.scale = 0.123;
  fruit4.velocityY = 5;
  fruit4.lifetime = 144;
  fruit4.x = random(20, 1000);
  fruitGroup4.add(fruit4);

  if (rand4 === 0) {
    fruit4.y = 720;
    fruit4.velocityY = -5;

  } else {
    fruit4.y = 0;
  }
}

function spawn_monster() {
  monster = createSprite(540, 0, 20, 20);
  rand5 = Math.round(random(0, 1));
  monster.addAnimation("m", monster_img);
  monster.scale = 0.08
  monster.velocityY = 5;
  monster.lifetime = 144;
  monster.x = random(20, 1000);
  monsterGroup.add(monster);

  if (rand5 == 0) {
    monster.y = 720;
    monster.velocityY = -5;

  } else {
    monster.y = 0;

  }
}