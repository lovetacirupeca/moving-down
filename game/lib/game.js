function Game(canvasId) {
  this.canvas = document.getElementById(canvasId);
  this.canvas.width = 300;
  this.canvas.height = 534;
  this.ctx = this.canvas.getContext('2d');
  this.background = new Image();
  this.background.src = './img/background.png';
  this.background.yPosition = 0;
  this.background.onload = (function() {
    this.background.isReady = true;
  });
}

Game.prototype.clearBackground = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

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
};

Game.prototype.draw = function () {
  this.drawBackground();
};
