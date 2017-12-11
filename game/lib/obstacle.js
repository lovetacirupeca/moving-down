function Obstacle(width, y) {
  this.canvas = canvas;
  this.ctx = ctx;
  this.x = this.randomX();
	this.y = y;
	// this.vy = vy;
  this.height = 5;
	this.width = this.randomWidth();
	// this.color = red;
}

Obstacle.prototype.draw = function () {
  this.ctx.save();
  this.ctx.fillStyle = "#FFF";
  this.ctx.strokeStyle = "#000";
	this.ctx.fillRect(this.x, this.y, this.width, this.height);
  // this.x -= 5;
  this.y -= obstacleSpeed;
  this.ctx.restore();
};

Obstacle.prototype.randomX = function() {
  var randomX = Math.floor(Math.random() * 300);
  return randomX;
}

Obstacle.prototype.randomWidth = function() {
  var randomWidth = Math.floor(Math.random() * (200 - 20)) + 20;
  return randomWidth;
}

///

Obstacle.prototype.collide = function(element) {
  return !(this.x + this.width < element.x ||
    (element.x - 2) + element.width < this.x ||
    this.y + this.height < element.y ||
    (element.y - 2) + element.height < this.y);
}
