window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  var game = new Game("canvas");
  var dot = new Dot("canvas");
  var obstacle = new Obstacle("canvas");
  var timeCreateNewObstacle = 2.5 * 1000;

  document.onkeydown = function(event) {
      switch (event.keyCode) {
        case 38:
          dot.state = "up";
          game.moveSlow();
          break;
        case 40:
            dot.state = "down";
            game.moveQuick();
          break;
        case 37:
           dot.state = "left";
          break;
        case 39:
           dot.state = "right";
          break;
        case 17:
            dot.state = "stop";
            break;
        default:
      }
    };

  function startGame() {
    var obstacleIntervalId = setInterval(function() {
      //console.log('Entro en el intervalo y añado un nuevo objeto');
      game.addNewObstacle();
    }, 2000);

    var drawIntervalId = setInterval(function() {
      game.drawBackground();
      dot.update();

      if (game.dotCollision(dot)) {
        clearInterval(drawIntervalId);
        clearInterval(drawIntervalId);
      }
      // checkObstacleLength();
    }, sec/fps);
  }

  // function checkObstacleLength() {
  //   if (game.obstacleList.length > 5 ) {
  //     return timeCreateNewObstacle = 500;
  //   }
  // }

};
