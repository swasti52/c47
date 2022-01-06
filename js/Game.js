class Game {
    constructor() {}

    getState() {
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value", function(data) {
          gameState = data.val();
        });
      }
    
      update(state) {
        database.ref("/").update({
          gameState: state
        });
      }
  
    start() {
      form = new Form();
      form.display();
      player = new Player();
      playerCount = player.getCount();
      red = createSprite(width / 2 - 100, height-100);
      red.addImage("car1", redplayer);
      red.scale = 0.5;

    blue = createSprite(width / 2 + 100, height-200);
    blue.addImage("car2", blueplayer);
    blue.scale = 0.7;

    cars = [red, blue];
    }

    play() {
        form.hide();
        this.addButtons();
        Player.getPlayersInfo();
    
        if (allPlayers !== undefined) {
            image(court, 0, 0, width, height+20);
            var index = 0;
            for (var plr in allPlayers) {
              //add 1 to the index for every loop
              index = index + 1;
      
              //use data form the database to display the cars in x and y direction
              var x = allPlayers[plr].positionX;
              var y = allPlayers[plr].positionY;
      
              cars[index - 1].position.x = x;
              cars[index - 1].position.y = y;
            }
           
          drawSprites();
        }
      }

     

     addButtons(){
    var leftArrow = createImg("assets/leftArrow.png");
      var rightArrow = createImg("assets/rightArrow.png");
     leftArrow.position(200,500)
     rightArrow.position(400,500)
     leftArrow.size(80,80)
     rightArrow.size(80,80)
     leftArrow.mousePressed(()=>{player.positionX -= 20;
      player.update();});
      rightArrow.mousePressed(()=>{player.positionX += 20;
        player.update();})

     }
  }