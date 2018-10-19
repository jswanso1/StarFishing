// Player prefab constructor function
function Player(game, key, frame, scale, rotation) {
	// call to Phaser.Sprite // new Sprite(game, x, y, key, frame)
	Phaser.Sprite.call(this, game, 50, 100, 'player', '', 1);
	this.anchor.setTo(0.5);
	this.scale.setTo(0.1);
	this.enableBody = true;

	game.physics.enable(this, Phaser.Physics.ARCADE);
	this.body.gravity.y = 100;


	game.input.keyboard.addKeyCapture([Phaser.Keyboard.SPACEBAR]);

}
// explicitly define prefab's prototype (Phaser.Sprite) and constructor (Player)
Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;

Player.prototype.update = function() {
	//movement controls

	if(fmove == 0){
		if(game.input.keyboard.isDown(Phaser.Keyboard.D)){
			this.body.velocity.x = 50;
		} else if(game.input.keyboard.isDown(Phaser.Keyboard.A)){
			this.body.velocity.x = -50;
		} else{
			this.body.velocity.x = 0;
		}
	}
	if(game.input.keyboard.isDown(Phaser.Keyboard.W)){
		if(this.body.velocity.y == 0){
			this.body.velocity.y = -80;
		}
	}



}
