function maskPow() {
    if(keyWentDown('m') & playerState === "normal" & mask > 0) {
        playerState = "masked";
        mask = mask -1;
    }
    
    if(playerState === "masked" & timer > 0) {
        timer = timer - 0.031;
    }
    
    if(timer > 0 & timer < 1){
        playerState = "normal";
    }
}

function fruitPow() {
    if(keyWentDown('f') & gameState ===  PLAY & immunity >= 0 & immunity < 500 & lives === 2 & fruit != 0){
        fruit = fruit - 1;
        immunity = immunity + 100;
    }
    
    if(keyWentDown('f') & gameState ===  PLAY & immunity === 0 & lives > 0 & lives < 2 & fruit != 0){
        fruit = fruit - 1;
        lives = lives + 1;
    }
}

function fruitPowV2() {
    if(keyWentDown('f') && gameState ===  "play2" && fruit > 0 && inf.length != 0){
        fruit = fruit - 1;

        /*for(i = 0; i < inf.length; i++) { 
            inf[i].infected = false;
            console.log(i);
        }*/

        var rand = Math.round(random(0,inf.length - 1));

        inf[rand].infected = false;

        console.log(inf);

        inf.pop();
    }
}

function maskPowV2() {
    if(keyWentDown('m') && gameState === "play2" && mask > 0) {
        mask = mask - 1;
        wear = "YES";
    }

    console.log(timer);

    if(timer > 0 && timer < 1 && gameState === "play2"){
        wear = "NO";
    }
}