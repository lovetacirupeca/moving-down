function Obstacle(width, y) {
  this.canvas = canvas;
  this.ctx = ctx;
  this.x = this.randomX();
	this.y = y;
	// this.vy = vy;
  this.height = 5;
	this.width = width;
	// this.color = red;
}

Obstacle.prototype.draw = function () {
  this.ctx.save();
  this.ctx.fillStyle = "#9B7E9B";
	this.ctx.fillRect(this.x, this.y, this.width, this.height);
  // this.x -= 5;
  this.y -= obstacleSpeed;
  this.ctx.restore();
};

Obstacle.prototype.randomX = function() {
  var random = Math.floor(Math.random() * 300);
  return random;
}

///

Obstacle.prototype.collide = function(element) {
  return !(this.x + this.width < element.x ||
    element.x + element.width < this.x ||
    this.y + this.height < element.y ||
    element.y + element.height < this.y);
}
