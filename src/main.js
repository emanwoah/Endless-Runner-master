let config = {
    type : Phaser.CANVAS,
    width : 640,
    height : 480,
    physics : {
        default: 'arcade',
        arcade:{
            //debug: true
        }
    },
    scene : [Menu, Play]
}

let game = new Phaser.Game(config);

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

// reserve keyboard variables
let keyP, keyR, keyUP, keyDOWN, keyLEFT, keyRIGHT;
let bag = null;
const bagVelocity = 40;
const garbageWidth = 88;
const garbageHeight = 88;


// PROJECT INFO FOR CMPM 120-01
//
// COLLABORATORS: ALLISON PHAM, CHRISTIAN ROUSE, EMANUEL MALIG, HENRY MATTINGLY
// DATE COMPLETED: 5/2/21

// Creative Tilt Justification:
// A couple of things that we love about our game is the movement of the plastic bag. We were looking to refine the movement, and make it close to reality, as if a plastic bag
// were floating through the wind. Another interesting aspect of our game is the procedurely generated enemies and rewards, in this case, the garbage cans and the blue bags.
// We were astonished by the example from class, when we were presented with Paddle Parkour by Professor Nathan Altice. 
// Our group immediately decided we would want that "random" effect towards the enemies,
// and rewards within our game.

// Moving towards the visual style, our artists, Allison Pham and Christian Rouse, did an amazing job on our art assets! They handrew all of our assets, and the detail within each
// of them are very meticulous. Furthermore the background music for the actual game, is sung by none other than the great Katy Perry. We loved the idea of using her iconic line,
// "Do you ever feel like a plastic bag?" from the song "Firework", and this was the root of inspiration for our game as a whole.