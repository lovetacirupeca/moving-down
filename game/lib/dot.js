function Dot(canvasId, game) {
  this.canvas = document.getElementById(canvasId);
  this.ctx = this.canvas.getContext('2d');
  this.img = new Image();
  this.img.src = './img/player1.png';
  this.speed = 0.5;
  this.img.isReady = false;
  this.img.onload = (function() {
    this.img.isReady = true;
  }).bind(this);
  this.x = 140;
  this.y = 70;
  this.KEY_UP = 38;
  this.KEY_DOWN = 40;
  this.KEY_LEFT = 37;
  this.KEY_RIGHT = 39;
}

Dot.prototype.draw = function() {
  this.ctx.drawImage(this.img, this.x, this.y, 20, 20);
};

Dot.prototype.update = function() {
  this.draw();
};

Dot.prototype.moveUp = function(){
  this.y -= 1;
};

Dot.prototype.moveRight = function(){
  this.x += 1;
};

Dot.prototype.moveDown = function(){
  this.y += 1;
};

Dot.prototype.moveLeft = function(){
  this.x -= 1;
};
