window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  var game = new Game("canvas");
  var dot = new Dot("canvas");
  var obstacle = new Obstacle("canvas");

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
    var timeCreateNewObstacle = 2.5 * 1000;

    function obstacleIntervalId() {
      //console.log('Entro en el intervalo y añado un nuevo objeto');
      game.addNewObstacle();
      if(game.checkObstacleLength() === true) {
        changeTimer();
      }
    };
    function changeTimer() {
      timeCreateNewObstacle = 500;
      clearInterval(createObstacles);
      setInterval(obstacleIntervalId, timeCreateNewObstacle)
    }
    var createObstacles = setInterval(obstacleIntervalId, timeCreateNewObstacle)
    var drawIntervalId = setInterval(function() {
      game.drawBackground();
      dot.update();
      game.drawScore();

      if (dot.collide(game.obstacleList)) {
        clearInterval(drawIntervalId);
        clearInterval(drawIntervalId);
      }

    }, sec/fps);
  }

};
