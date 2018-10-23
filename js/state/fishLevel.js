var fishLevel = function(game) {

	// Global state variables
	var fmove = 0;
}


fishLevel.prototype = {
	preload: function() {
		this.bgstar;
	},
	create: function() {

		background = game.add.image(0, 0, 'starLakebg');
		background.scale.setTo(0.7);

		this.game.physics.startSystem(Phaser.Physics.ARCADE);

		// bg music
		var musics = game.add.audio('twinkle', 0.5, true);
		//musics.play();

		// adding reset button
		resetButton = game.add.button(64, 32, 'reset', resetFish, this);
    	resetButton.anchor.setTo(0.5);
    	resetButton.scale.setTo(0.3);

    	// adding a mini instruction panel
    	rectangle = game.add.image(game.width / 2, game.height / 2, 'rectangle');
    	rectangle.anchor.setTo(0.5);
    	rectangle.scale.setTo(0.6);
    	style = {font: '32px Arial', fill: '#FFFFFF', wordWrap: true, wordWrapWidth: rectangle.width, align: 'center'};
    	text = game.add.text(0, 0, 'Oh no! That stupid fish (the last of its kind)\nis messing with the stars.\nKILL IT!\n\nClick to continue.', style);
    	text.anchor.setTo(0.5);
    	rectangle.addChild(text);
    	// destroy rectangle on click; destroySprite function in play.js
    	rectangle.inputEnabled = true;
    	rectangle.events.onInputDown.add(destroySprite, this);

    	// bg lakestars
		this.bglakestar = game.add.group();
		bglakeStar = this.bglakestar.create(80, 500, 'lakeStar');
		bglakeStar.anchor.setTo(0.5);
		bglakeStar.scale.setTo(0.5);

		bglakeStar2 = this.bglakestar.create(450, 370, 'lakeStar');
		bglakeStar2.anchor.setTo(0.5);
		bglakeStar2.scale.setTo(0.5);

		bglakeStar3 = this.bglakestar.create(300, game.height - 50, 'lakeStar');
		bglakeStar3.anchor.setTo(0.5);
		bglakeStar3.scale.setTo(0.5);

		bglakeStar4 = this.bglakestar.create(630, 400, 'lakeStar');
		bglakeStar4.anchor.setTo(0.5);
		bglakeStar4.scale.setTo(0.5);

		bglakeStar5 = this.bglakestar.create(700, 420, 'lakeStar');
		bglakeStar5.anchor.setTo(0.5);
		bglakeStar5.scale.setTo(0.5);

		bglakeStar6 = this.bglakestar.create(770, 440, 'lakeStar');
		bglakeStar6.anchor.setTo(0.5);
		bglakeStar6.scale.setTo(0.5);

		bglakeStar7 = this.bglakestar.create(900, 470, 'lakeStar');
		bglakeStar7.anchor.setTo(0.5);
		bglakeStar7.scale.setTo(0.5);

		moon = this.bglakestar.create(1050, 450, 'goal');
		moon.anchor.setTo(0.5);
		moon.scale.y*=-1;


		// adding star prefab to game
		lakestar = new lakeStar(game, game.width / 2, game.height / 2 + 100);
		game.add.existing(lakestar);
		// setting anchor to center
		lakestar.anchor.setTo(0.5);

		lakestar1 = new lakeStar(game, game.width - 150, game.height / 2 + 100);
		game.add.existing(lakestar1);
		lakestar1.anchor.setTo(0.5);

		lakestar2 = new lakeStar(game, 320, game.height / 2 + 150);
		game.add.existing(lakestar2);
		lakestar2.anchor.setTo(0.5);

		lakestar3 = new lakeStar(game, 700, game.height / 2 + 150);
		game.add.existing(lakestar3);
		lakestar3.anchor.setTo(0.5);

		// add goal
		goal = new Goal(game, 1050, 200, 1, 1);
		game.add.existing(goal);

		// adding star prefab to game
		skystar = new skyStar(game, game.width / 2, game.height / 2 - 100, lakestar);
		game.add.existing(skystar);
		// setting anchor to center
		skystar.anchor.setTo(0.5);


		skystar2 = new skyStar(game, game.width - 150, game.height / 2 - 100, lakestar1);
		game.add.existing(skystar2);
		skystar2.anchor.setTo(0.5);

		skystar3 = new skyStar(game, game.width - 80, game.height / 2 - 300, lakestar2);
		game.add.existing(skystar3);
		skystar3.anchor.setTo(0.5);

		skystar4 = new skyStar(game, 800, game.height / 2 - 300, lakestar3);
		game.add.existing(skystar4);
		skystar4.anchor.setTo(0.5);


		// fisherboy/girl/whatever
		fisher = new Fisher(game,100,100,1,1);
		game.add.existing(fisher);

		// background stars that made the bridge?

		// creating background star group
		this.bgstar = game.add.group();
		this.game.physics.enable(this.bgstar, Phaser.Physics.ARCADE);
		this.bgstar.enableBody = true;

		// bgstar to overlap with skystar
		overlapStar = this.bgstar.create(200, 210, 'skystar1');
		overlapStar.anchor.setTo(0.5);
		//bgStar2.scale.setTo(2);
		overlapStar.enableBody = true;

		//bg star to overlap with skystar2
		overlapStar2 = this.bgstar.create(320, 240, 'skystar1');
		overlapStar2.anchor.setTo(0.5);
		overlapStar2.enableBody = true;

		overlapStar3 = this.bgstar.create(560, 270, 'skystar1');
		overlapStar3.anchor.setTo(0.5);
		overlapStar3.enableBody = true;

		overlapStar4 = this.bgstar.create(840, 190, 'skystar1');
		overlapStar4.anchor.setTo(0.5);
		overlapStar4.enableBody = true;

		bgStar = this.bgstar.create(80, 150, 'skyStar');
		setbgStarProperties(bgStar);


		bgStar2 = this.bgstar.create(450, 280, 'skyStar');
		setbgStarProperties(bgStar2);

		bgStar3 = this.bgstar.create(300, 40, 'skyStar');
		setbgStarProperties(bgStar3);

		bgStar4 = this.bgstar.create(630, 250, 'skyStar');
		setbgStarProperties(bgStar4);

		bgStar5 = this.bgstar.create(700, 230, 'skyStar');
		setbgStarProperties(bgStar5);

		bgStar6 = this.bgstar.create(770, 210, 'skyStar');
		setbgStarProperties(bgStar6);

		bgStar7 = this.bgstar.create(900, 180, 'skyStar');
		setbgStarProperties(bgStar7);

		// fish

		// player
		// player
		player = new Player(game, 50, 50, 1, 1);
		game.add.existing(player);

	},
	update: function() {
		game.physics.arcade.collide(player, bgStar);
		game.physics.arcade.collide(player, bgStar2);
		game.physics.arcade.collide(player, bgStar3);
		game.physics.arcade.collide(player, bgStar4);
		game.physics.arcade.collide(player, bgStar5);
		game.physics.arcade.collide(player, bgStar6);
		game.physics.arcade.collide(player, bgStar7);
		game.physics.arcade.collide(player, overlapStar);
		game.physics.arcade.collide(player, overlapStar2);
		game.physics.arcade.collide(player, overlapStar3);
		game.physics.arcade.collide(player, overlapStar4);

		if(checkOverlap(skystar, overlapStar))
		{
			overlap(skystar, lakestar, overlapStar);
			//once overlapstar in its designated position enable collision disable drag
		}
		if(checkOverlap(skystar2, overlapStar2))
		{
			overlap(skystar2, lakestar1, overlapStar2);
		}
		if(checkOverlap(skystar3, overlapStar3))
		{
			overlap(skystar3, lakestar2, overlapStar3);
		}
		if(checkOverlap(skystar4, overlapStar4))
		{
			overlap(skystar4, lakestar3, overlapStar4);
		}
		if(checkOverlap(player, goal))
		{
			console.log('player collided with goal');
			end();
		}
		// making instruction thing first viewable thing
		game.world.bringToTop(rectangle);
		game.world.bringToTop(player);
	},
};
function resetFish()
{
	game.state.start('fishLevel');
}
function end(){
	rectangle = game.add.image(game.width / 2, game.height / 2, 'rectangle');
    rectangle.anchor.setTo(0.5);
   	rectangle.scale.setTo(0.6);
   	style = {font: '32px Arial', fill: '#FFFFFF', wordWrap: true, wordWrapWidth: rectangle.width, align: 'center'};
   	text = game.add.text(0, 0, 'You probably should not have killed that fish...\n\nThe End', style);
   	text.anchor.setTo(0.5);
   	rectangle.addChild(text);
}
