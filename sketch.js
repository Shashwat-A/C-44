//to create game states 
const SERVE = 1;
const PLAY = 2;
const END = -1;
const WIN = 3;
const TOUCHED = 0;
var gameState = "serve2";
var gChange = "serve2";


// to create the player boy
var player;

// creating the edges
var edge1, edge2;

//for the mask power in 2nd level
var wear = "NO";

// to create sanitizer drop and its group
var drop,dropGrp;

// to create corona and corona group
var corona1, coronaGrp1;
var corona2, coronaGrp2;
var corona3, coronaGrp3;

//to make the immunity and lives
var immunity = 500;
var lives = 2;

// level two people  
var per1, per2, per3, per4;
var per1Img, per2Img, per3Img, per4Img;
var inf = [];
var heal = [];
var pTimer = 120;


//create a timer masked power
var timer = 10;

//so that it is easy to change the image of player in mask
var playerState = "normal";

//to create the mask power
var mask = 3;

//to create the fruit power
var fruit = 2;

//to store score
var score = 14;

function preload() {
  per1Img = loadAnimation("images/m_w_1.png", "images/m_w_2.png", "images/m_w_3.png", "images/m_w_4.png", "images/m_w_5.png");
  per2Img = loadAnimation("images/m2_w_1.png", "images/m2_w_2.png", "images/m2_w_3.png", "images/m2_w_4.png", "images/m2_w_5.png", "images/m2_w_6.png", "images/m2_w_7.png", "images/m2_w_8.png");
  per3Img = loadAnimation("images/b_w_1.png", "images/b_w_2.png", "images/b_w_1.png", "images/b_w_3.png", "images/b_w_4.png", "images/b_w_5.png", "images/b_w_6.png", "images/b_w_7.png");
  per4Img = loadAnimation("images/g_w_1.png", "images/g_w_2.png", "images/g_w_3.png", "images/g_w_4.png", "images/g_w_5.png", "images/g_w_6.png", "images/g_w_7.png", "images/g_w_8.png");
}


function setup() {
  createCanvas(1200,800);
  
  player = new Player();

  dropGrp = createGroup();
  coronaGrp1 = createGroup();
  coronaGrp2 = createGroup();
  coronaGrp3 = createGroup();

  edge1 = createSprite(-5, 50, 10, 100);
  edge2 = createSprite(1205, 50, 10, 100);
  spawnPeople();

}

function draw() {
  background(0,0,0); 

  if(gChange === "play2") {
    gameState = "play2";
  }

  //colliding the player with the edges
  player.sprite.bounce(edge1);
  player.sprite.bounce(edge2);

  player.display();
  movePlayer();

  //console.log(pTimer);

  if(lives === 0){
    gameState = END;
  }

  if(score === 15) {
    gameState = "serve2";
  }

  if(wear === "NO" || playerState === "normal") {
    timer = 10;
  }
  
  // to spwan drops and corona
  spawnDrop();
  spawnCorona();

  //level one
  instructions();
  play();
  coronaTouched();
  gameOver();

  //level two
  play2();
  instructions2();

  //powers
  fruitPow();
  maskPow();
  fruitPowV2();
  maskPowV2();

  repeat();

  drawSprites();

  //to display score
  fill("white");
  textSize(40);
  text("Score: " + score, 1030, 50);

  //to display the immunity and lives
  text("Immunity: " + immunity, 10, 30);
  text("Lives: " + lives, 10, 80);

  //to display timer of mask
  if(playerState === "masked") {
    text("Timer: " + round(timer), 10, 130);
  }

  

}

function spawnDrop() {
  if(gameState === PLAY || gameState === "play2") {
    if(keyWentDown('space')) {
      drop = createSprite(player.sprite.x, player.sprite.y + 50, 10,10);
      drop.velocityY = 8;     
      dropGrp.add(drop);
    }
  }
}