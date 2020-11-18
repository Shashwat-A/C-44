function spawnCorona() {
    if(gameState === PLAY || gameState === "play2") {

        if(World.frameCount % 100 === 0) {
            corona1 = new Corona();
            corona1.display();
            coronaGrp1.add(corona1.sprite);
        }

        if(World.frameCount % 150 === 0) {
            corona2 = new Corona();
            corona2.display();
            coronaGrp2.add(corona2.sprite);
        }
    
        if(World.frameCount % 200 === 0) {
            corona3 = new Corona();
            corona3.display();
            coronaGrp3.add(corona3.sprite);
        }

    }

}

function movePlayer() {
    if(gameState === PLAY || gameState === "play2") {
        if(keyDown('right')) {
            player.sprite.x = player.sprite.x + 20; 
        }
      
        if(keyDown('left' )) {
            player.sprite.x = player.sprite.x - 20; 
        }
    }
}

function repeat() {
    if(pTimer < 90) {
        if(per1.sprite.x > 1270) {
            per1.sprite.x = -10;
            per1.sprite.y = random(300,600);
        }

        if(coronaGrp1.isTouching(per1.sprite) && wear === "NO") {
            per1.infected = true;
            inf.push(per1);
            coronaGrp1.destroyEach();
        }

        if(coronaGrp2.isTouching(per1.sprite) && wear === "NO") {
            per1.infected = true;
            inf.push(per1);
            coronaGrp2.destroyEach();
        }

        if(coronaGrp3.isTouching(per1.sprite) && wear === "NO") {
            per1.infected = true;
            inf.push(per1);
            coronaGrp3.destroyEach();
        }


        if(per1.infected === true) {
            per1.sprite.debug = true;
        }

        if(per1.infected === false) {
            per1.sprite.debug = false;
        }
    }

    if(pTimer < 70) {
        if(per2.sprite.x > 1270) {
            per2.sprite.x = -10;
            per2.sprite.y = random(300,600);
        }
        if(coronaGrp1.isTouching(per2.sprite) && wear === "NO") {
            per2.infected = true;
            inf.push(per2);
            coronaGrp1.destroyEach();
        }

        if(coronaGrp2.isTouching(per2.sprite) && wear === "NO") {
            per2.infected = true;
            inf.push(per2);
            coronaGrp2.isTouching(per2.sprite)
        }

        if(coronaGrp3.isTouching(per2.sprite) && wear === "NO") {
            per2.infected = true;
            inf.push(per2);
            coronaGrp3.destroyEach();
        }

        if(per2.infected === true) {
            per2.sprite.debug = true;
        }

        if(per2.infected === false) {
            per2.sprite.debug = false;
        }
    }

    if(pTimer < 50) {
        if(per3.sprite.x > 1270) {
            per3.sprite.x = -10;
            per3.sprite.y = random(300,600);         
        }

        if(coronaGrp1.isTouching(per3.sprite) && wear === "NO") {
            per3.infected = true;
            inf.push(per3);
            coronaGrp1.destroyEach();
        }

        if(coronaGrp2.isTouching(per3.sprite) && wear === "NO") {
            per3.infected = true;
            inf.push(per3);
            coronaGrp2.destroyEach();
        }

        if(coronaGrp3.isTouching(per3.sprite) && wear === "NO") {
            per3.infected = true;
            inf.push(per3);
            coronaGrp3.destroyEach();
        }

        if(per3.infected === true) {
            per3.sprite.debug = true;
        }

        if(per3.infected === false) {
            per3.sprite.debug = false;
        }
        
    }

    if(pTimer < 30) {
        if(per4.sprite.x > 1270) {
            per4.sprite.x = -10;
            per4.sprite.y = random(300,600);
        }

        if(coronaGrp1.isTouching(per4.sprite) && wear === "NO") {
            per4.infected = true;
            inf.push(per4);
            coronaGrp1.destroyEach();
        }

        if(coronaGrp2.isTouching(per4.sprite) && wear === "NO") {
            per4.infected = true;
            inf.push(per4);
            coronaGrp2.destroyEach();
        }

        if(coronaGrp3.isTouching(per4.sprite) && wear === "NO") {
            per4.infected = true;
            inf.push(per4);
            coronaGrp3.destroyEach();
        }

        if(per4.infected === true) {
            per4.sprite.debug = true;
        }

        if(per4.infected === false) {
            per4.sprite.debug = false;
        }
    }
}

function spawnPeople() {
    if(pTimer === 90) {
        per1 = new Person(per1Img) ;
        per1.display();
    }

    if(pTimer === 70) {
        per2 = new Person(per2Img) ;
        per2.display();
    }

    if(pTimer === 50) {
        per3 = new Person(per3Img) ;
        per3.display();
    }

    if(pTimer === 30) {
        per4 = new Person(per4Img) ;
        per4.display();
    }

}
    