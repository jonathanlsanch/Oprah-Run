var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

// oprah character
var oprah = {
  x: 210,
  y: 300
}

function draw(oprah) {
  var img = new Image();
  img.onload = function() { 
     ctx.drawImage(img, oprah.x, oprah.y, 155, 100); 
  }
  img.src = "./images/Oprah_main_photo.png";

  // params for width of canvas
  if (oprah.x <= 0) {
    oprah.x = (canvas.width + oprah.x);
  }
  if (oprah.x >= canvas.width) {
    oprah.x = (canvas.width - oprah.x);
  }
}

// money



//control oprah
document.onkeydown = function(e) {
  switch (e.keyCode) {
    case 37: 
      // move left  
      oprah.x -= 25;
      console.log('left',  oprah); 
      break;
    case 39: 
      // move right 
      console.log('right', oprah); 
      oprah.x += 25;
      break;
  }
  updateCanvas();
}


function updateCanvas() {
  ctx.clearRect(0,0,1500,1700);
  draw(oprah)
}

updateCanvas();

// add falling money
