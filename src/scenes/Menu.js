class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload()
    {
        //preload audio
        this.load.audio('playSound', './assets/playButton.mp3');
        this.load.audio('music', './assets/Plastic_Bag_by_Katy_Perry.mp3');
        this.load.audio('paper', './assets/papergrab.mp3');
        this.load.audio('trashcan', './assets/trashcan.mp3');
        //preload assets for the game here
        this.load.image('title', './assets/newmenu.png');
    }

    create()
    {
        this.background = this.add.tileSprite(0,0,640,480,'title').setOrigin(0,0);
    

        // define keys
        keyP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.P);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyUP = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
    }
    

  update() {
    if (Phaser.Input.Keyboard.JustDown(keyP)) {
      this.scene.start("playScene");    
      this.sound.play("playSound");
    }  
  }
}