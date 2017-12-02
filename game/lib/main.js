window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  var game = new Game("canvas");

  document.onkeydown = function(event) {
      switch (event.keyCode) {
        case 38:
          game.dot.state = "up";
          game.moveSlow();
          break;
        case 40:
            game.dot.state = "down";
            game.moveQuick();
          break;
        case 37:
           game.dot.state = "left";
          break;
        case 39:
           game.dot.state = "right";
          break;
        case 17:
            game.dot.state = "stop";
            break;
        default:
      }
    };

  function startGame() {
    setInterval(function() {
      game.drawBackground();
      game.dot.update();
    }, 1000/60);
  }
};
