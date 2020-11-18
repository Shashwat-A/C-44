class Person {
    constructor(imae) {
        this.sprite = createSprite(-10, random(200,600), 30, 50);
        this.imae = imae;
        this.infected = false;
    }

    display() {
        this.sprite.addAnimation("k", this.imae);
        this.sprite.velocityX = random(3, 5);
        //this.sprite.scale = 5;
    }
}