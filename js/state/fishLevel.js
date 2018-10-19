var fishLevel = function(game) {

	// Global state variables
	var fmove = false;


}


fishLevel.prototype = {
	preload: function() {
		this.bgstar;
	},
	create: function() {

		this.game.physics.startSystem(Phaser.Physics.ARCADE);

		// bg music
		var musics = game.add.audio('twinkle', 0.5, true);
		//musics.play();

		// adding reset button (function in main)
		resetButton = game.add.button(64, 32, 'reset', reset, this);
    	resetButton.anchor.setTo(0.5);
    	resetButton.scale.setTo(0.3);

    	// adding a mini instruction panel
    	rectangle = game.add.image(game.width / 2, game.height / 2, 'rectangle');
    	rectangle.anchor.setTo(0.5);
    	rectangle.scale.setTo(0.6);
    	style = {font: '32px Arial', fill: '#FFFFFF', wordWrap: true, wordWrapWidth: rectangle.width, align: 'center'};
    	text = game.add.text(0, 0, 'Avoid the fish!\n\nClick to continue.', style);
    	text.anchor.setTo(0.5);
    	rectangle.addChild(text);
    	// destroy rectangle on click; destroySprite function in play.js
    	rectangle.inputEnabled = true;
    	rectangle.events.onInputDown.add(destroySprite, this);

		// adding star prefab to game
		lakestar = new lakeStar(game, game.width / 2, game.height / 2 + 100);
		game.add.existing(lakestar);
		// setting anchor to center
		lakestar.anchor.setTo(0.5);

		lakestar1 = new lakeStar(game, game.width - 150, game.height / 2 + 100);
		game.add.existing(lakestar1);
		lakestar1.anchor.setTo(0.5);

		// player
		player = new Player(game, 50, 50, 1, 1);
		game.add.existing(player);

		// adding star prefab to game
		skystar = new skyStar(game, game.width / 2, game.height / 2 - 100, lakestar);
		game.add.existing(skystar);
		// setting anchor to center
		skystar.anchor.setTo(0.5);


		skystar2 = new skyStar(game, game.width - 150, game.height / 2 - 100, lakestar1);
		game.add.existing(skystar2);
		skystar2.anchor.setTo(0.5);


		// fisherboy/girl/whatever
		fisher = new Fisher(game,100,100,1,1);
		game.add.existing(fisher);

		// add goal
		goal = new Goal(game, 100, 100, 1, 1);
		game.add.existing(goal);

		// background stars that made the bridge?

		// creating background star group
		this.bgstar = game.add.group();
		this.game.physics.enable(this.bgstar, Phaser.Physics.ARCADE);
		this.bgstar.enableBody = true;
		console.log('abc');

		// bgstar to overlap with skystar
		overlapStar = this.bgstar.create(160, 150, 'skystar1');
		overlapStar.anchor.setTo(0.5);
		//bgStar2.scale.setTo(2);
		overlapStar.enableBody = true;

		//bg star to overlap with skystar2
		overlapStar2 = this.bgstar.create(320, 150, 'skystar1');
		overlapStar2.anchor.setTo(0.5);
		overlapStar2.enableBody = true;

		bgStar = this.bgstar.create(80, 150, 'skystar');
		bgStar.anchor.setTo(0.5);
		//add hitbox to sprite
		bgStar.body.collideWorldBounds = true;
		bgStar.body.setSize(70, 79, 25, 40);
		bgStar.body.immovable = true;


		bgStar2 = this.bgstar.create(240, 150, 'skystar');
		bgStar2.anchor.setTo(0.5);
		bgStar2.body.collideWorldBounds = true;
		bgStar2.body.setSize(70, 79, 25, 40);
		bgStar2.body.immovable = true;

		bgStar3 = this.bgstar.create(400, 150, 'skystar');
		bgStar3.anchor.setTo(0.5);
		bgStar3.body.collideWorldBounds = true;
		bgStar3.body.setSize(70, 79, 25, 40);
		bgStar3.body.immovable = true;

		// bg lakestars
		this.bglakestar = game.add.group();
		bglakeStar = this.bglakestar.create(80, 450, 'lakestar');
		bglakeStar.anchor.setTo(0.5);
		bglakeStar.scale.setTo(0.1);

		bglakeStar2 = this.bglakestar.create(240, 450, 'lakestar');
		bglakeStar2.anchor.setTo(0.5);
		bglakeStar2.scale.setTo(0.1);

		bglakeStar3 = this.bglakestar.create(400, 450, 'lakestar');
		bglakeStar3.anchor.setTo(0.5);
		bglakeStar3.scale.setTo(0.1);

	},
	update: function() {
		game.physics.arcade.collide(player, bgStar);
		if(checkOverlap(skystar, overlapStar))
		{
			overlap(skystar, lakestar, overlapStar);
			// console.log('bridge 1 overlap');
		}
		if(checkOverlap(skystar2, overlapStar2))
		{
			overlap(skystar2, lakestar1, overlapStar2);
			// console.log('bridge 2 overlap');
		}
		if(checkOverlap(player, goal))
		{
			console.log('player collided with goal');
		}
		// making instruction thing first viewable thing
		game.world.bringToTop(rectangle);
	},
};