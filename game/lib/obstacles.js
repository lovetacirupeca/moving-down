function Obstacles(canvasId, game, width, height, x, y) {
  this.canvas = document.getElementById(canvasId);
  this.ctx = this.canvas.getContext('2d');
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
}


/*
function Component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    ctx = myGameArea.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
}

var myObstacles = [];

var myGameArea = {
    ........
    frames: 0,
}

myGameArea.frames +=1;
if (myGameArea.frames % 120 === 0) {
  x = myGameArea.canvas.width;
  minHeight = 20;
  maxHeight = 200;
  height = Math.floor(Math.random()*(maxHeight-minHeight+1)+minHeight);
  minGap = 50;
  maxGap = 200;
  gap = Math.floor(Math.random()*(maxGap-minGap+1)+minGap);
  myObstacles.push(new component(10, height, "green", x, 0));
  myObstacles.push(new component(10, x - height - gap, "green", x, height + gap));
}

for (i = 0; i < myObstacles.length; i += 1) {
  myObstacles[i].x += -1;
  myObstacles[i].update();
}

*/
