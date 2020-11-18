class Corona{
    constructor() {
        this.sprite = createSprite(random(20, 1170), 800, 50,50);
        this.image = loadImage("images/corona_final.png");

    }

    display() {
        this.sprite.addImage(this.image);
        this.sprite.scale = random(0.5,0.7);
        this.sprite.velocityY = random(-5,-8);
    }
}