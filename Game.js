function instructions() {
    if(gameState === SERVE) {
        //to give instructions to the player
        fill("white");
        textSize(20);
        text("Welcome to the corona game. Be a corona and fight against corona with sanitizer. Beware if it touches you, your immunity will ", 20, 500);
        text("decrease by 100. You have 500 immunity and 2 lives. Press space to shoot.", 20, 520);
        text("'press space to countinue'", 420,600);
        
        //to change the game state to play
        if(keyWentDown('space')) {
          gameState = PLAY;
        }
      }
}

function play() {
     if(gameState === PLAY || gameState === "play2") {
    //to destroy the corona when the drop touches it
    if(dropGrp.isTouching(coronaGrp1)) {
      coronaGrp1.destroyEach();
      dropGrp.destroyEach();
      score = score + 1;
    }

    if(dropGrp.isTouching(coronaGrp2)) {
      coronaGrp2.destroyEach();
      dropGrp.destroyEach();
      score = score + 1;
    }

    if(dropGrp.isTouching(coronaGrp3)) {
      coronaGrp3.destroyEach();
      dropGrp.destroyEach();
      score = score + 1;
    }

    if(score === 15){
      gameState = WIN
    }

    //making the condition when the corona touches the player
    
    if(playerState === "normal" & immunity > 0 & coronaGrp1.isTouching(player.sprite) || coronaGrp2.isTouching(player.sprite) || coronaGrp3.isTouching(player.sprite)) {
      coronaGrp1.destroyEach();
      coronaGrp2.destroyEach();
      coronaGrp3.destroyEach();

      if(playerState === "normal" & immunity != 0) {
        immunity = immunity - 100
        gameState = TOUCHED;
      }

    }

    if(playerState === "normal" & immunity === 0 & coronaGrp1.isTouching(player.sprite) || coronaGrp2.isTouching(player.sprite) || coronaGrp3.isTouching(player.sprite)) {
      lives = lives - 1;
  
      coronaGrp1.destroyEach();
      coronaGrp2.destroyEach();
      coronaGrp3.destroyEach();
  
      gameState = TOUCHED;
    }
  }
}

function coronaTouched() {
    if(gameState === TOUCHED) {
        fill("white");
        textSize(30);
    
        text("Oh!! Corona touched you. Be careful", 20, 500);
        
        if(keyDown('space')){
          gameState = PLAY;
        }
      }
    
}

function gameOver() {
    if(gameState === END) {
        fill("white");
        textSize(55);
        textFont("Georgia");
        text("Game Over!!", 400, height/2);
    
        player.sprite.x = width/2;
        player.sprite.y = 100;
    
        coronaGrp1.destroyEach();
        coronaGrp2.destroyEach();
        coronaGrp3.destroyEach();
    
        if(keyWentDown('space')){
          gameState = SERVE;
        }
    }
}

function instructions2() {
  if(gameState === "serve2") {
    fill("white");
    textSize(25);
    textFont("Georgia");
    text("Congratulations!! You have passed the first level. This is the next the level. You have to protect people from", 20, 500);
    text("corona, you can use fruit power to revive one person and mask to protect people for 10 seconds.", 20, 530);
    text("'press space to countinue'", 420,600);

    if(keyDown('space')) {
      gChange = "play2";
      console.log("done");
    }
  }
}

function play2() {
  if(gameState === "play2") {
    spawnPeople();
    pTimer = pTimer - 0.25;

    
  }
}