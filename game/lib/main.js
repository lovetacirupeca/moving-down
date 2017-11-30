window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  var game = new Game("canvas");

  document.onkeydown = function(event) {
      switch (event.keyCode) {
        case 38:
            game.dot.moveUp();
          break;
        case 40:
            game.dot.moveDown();
          break;
        case 37:
           game.dot.moveLeft();
          break;
        case 39:
           game.dot.moveRight();
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
