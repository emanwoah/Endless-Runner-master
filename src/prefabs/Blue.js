class Blue extends Phaser.Physics.Arcade.Sprite{
    constructor( scene, velocity) {
        super(scene, game.config.width + 32, Phaser.Math.Between(16, game.config.height - 16), 'blueBag');
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.setVelocityX(velocity);
        this.setImmovable();
        this.newBlue = true;
    }

    update()
    {
        //spawn new coin when current one reaches middle of map
        if(this.newBlue && this.x < game.config.width/2)
        {
            this.newBlue = false;
            this.scene.addBlue(this.parent, this.velocity);
        }

        //destory coin when it goes off screen
        if(this.x < -this.width)
        {
            this.destroy();
        }       
    } 
}