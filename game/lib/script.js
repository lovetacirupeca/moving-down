window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
    var game = new Game("canvas");
    setInterval(function() {
      game.draw();
    }, 20);
  };

  function startGame() {}
};
