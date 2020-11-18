class Player{
    constructor() {
        this.sprite = createSprite(width/2, 100, 50, 100); 
        this.image = loadImage("images/Shoot b.png");
        this.image2 = loadImage("images/Boy norm b.png");
        this.imageM1 = loadImage("images/boy_norm_masked_b.png");
        this.imageM2 = loadImage("images/boy_shoot_masked_b.png");
        
    }

    display() {
        this.sprite.addImage("normal",this.image2);
        this.sprite.addImage("shoot", this.image);
        this.sprite.addImage("Mnormal",this.imageM1);
        this.sprite.addImage("Mshoot", this.imageM2);

        if(playerState === "masked") {
            this.sprite.changeImage("Mnormal", this.imageM1);
            this.sprite.scale = 0.5;
        }

        if(playerState === "normal") {
            this.sprite.changeImage("normal", this.image2);
            this.sprite.scale = 1;
        }

        if(gameState === PLAY || gameState === "play2") {
            if(playerState === "normal") {
                if(keyWentDown('space')) {
                    this.sprite.changeImage("shoot", this.image);
                }
              
                  if(keyWentUp('space')){
                    player.sprite.changeImage("normal", this.image2);
                }
            }

            if(playerState === "masked") {
                if(keyWentDown('space')) {
                    this.sprite.changeImage("Mshoot", this.imageM2);
                }
              
                  if(keyWentUp('space')){
                    player.sprite.changeImage("Mnormal", this.imageM1);
                }
            }
            
        }
    }
}