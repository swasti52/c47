var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player,gameState;
var allPlayers;
var playerCount;
var cars;

function preload() {
  backgroundImage = loadImage("./assets/background.png");
  redplayer = loadImage("assets/basketball1.png");
  blueplayer = loadImage("assets/bb1.png");
  court = loadImage("assets/court.jpg")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
