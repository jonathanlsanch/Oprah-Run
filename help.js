var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

// oprah character
var oprah = {
  x: 210,
  y: 300,
  moveLeft:  function() { this.x -= 25 },
  moveRight: function() { this.x += 25 },
}

function draw(oprah) {
  var img = new Image();
  img.onload = function() { 
     ctx.drawImage(img, oprah.x, oprah.y, 155, 100); 
  }
  img.src = "./images/Oprah_main_photo.png";
}

//control oprah
document.onkeydown = function(e) {
  switch (e.keyCode) {
    case 37: oprah.moveLeft();  console.log('left',  oprah); break;
    case 39: oprah.moveRight(); console.log('right', oprah); break;
  }
  updateCanvas();
}

function updateCanvas() {
  ctx.clearRect(0,0,1500,1700);
  draw(oprah)
}

updateCanvas()