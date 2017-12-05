function Game() {
  this.canvas = canvas
  this.canvas.width = 300;
  this.canvas.height = 534;
  this.ctx = ctx;
  this.background = new Image();
  this.background.src = './img/background.png';
  this.background.yPosition = 0;
  this.background.onload = (function() {
    this.background.isReady = true;
  }).bind(this);

  this.KEY_UP = 38;
  this.KEY_DOWN = 40;
  this.obstacleList = [];
}

/*Game.prototype.clearBackground = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};*/

Game.prototype.drawBackground = function() {
  //this.clearBackground();
  if (this.background.yPosition * -1 < this.background.height) {
    this.ctx.drawImage(this.background, 0, this.background.yPosition - 1, this.background.width, this.background.height);
    this.ctx.drawImage(this.background, 0, this.background.yPosition + this.background.height, this.background.width, this.background.height);
    this.background.yPosition -= 1;
  } else {
    this.background.yPosition = 0;
    this.ctx.drawImage(this.background, 0, this.background.yPosition, this.background.width, this.background.height);
  }

  this.updateObstacles();

};

Game.prototype.moveQuick = function() {
  this.background.yPosition -= 20;
}

Game.prototype.moveSlow = function() {
  this.background.yPosition += 2;
}

Game.prototype.addNewObstacle = function() {
  var obstacle = new Obstacle(50, this.canvas.height);
  this.obstacleList.push(obstacle);
}

Game.prototype.updateObstacles = function() {
    for (var i = 0; i < this.obstacleList.length; i++) {
      this.obstacleList[i].draw();
    }

}

Game.prototype.dotCollision = function (dot) {
  return dot.collide(this.obstacleList);
}

///
