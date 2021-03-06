// skyStar prefab constructor function
var thislakestarID;

function skyStar(game, xpos, ypos, lakestarID) {

	// call to Phaser.Sprite // new Sprite(game, x, y, key, frame)
	Phaser.Sprite.call(this, game, xpos, ypos, 'skyStar');
	this.enableBody = true;
	this.anchor.setTo(0.5);
	// for scope reasons
	this.thislakestarID = lakestarID;

	// boolean to check if star is locked
	this.starLocked = false;
}
// explicitly define prefab's prototype (Phaser.Sprite) and constructor (skyStar)
skyStar.prototype = Object.create(Phaser.Sprite.prototype);
skyStar.prototype.constructor = skyStar;

skyStar.prototype.update = function() {
	this.x = this.thislakestarID.x;
	this.y = -(this.thislakestarID.y - 650);

	//console.log('this.x pos: ' + this.x);
	//console.log('this.y pos: ' + this.y)
}

