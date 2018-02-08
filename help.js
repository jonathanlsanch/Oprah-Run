// Play music on start page

var canvas = document.getElementById('canvasmain');
var gameSFX = new Audio('./audio/themesongedit.mp3');

gameSFX.loop = true;
gameSFX.play();

//Game Page Canvas
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");
var moneySFX = new Audio('./audio/thatsgood.mp3');
var gameSFX = new Audio('./audio/themesongedit.mp3');

gameSFX.loop = true;
gameSFX.play();

//Background
var background = false;
var backgroundImage = new Image();
backgroundImage.onload = function () {
  background = true;
};
backgroundImage.src = "./images/background.png";

// Oprah
var oprahDraw = false;
var oprahImage = new Image();
  oprahImage.onload = function () {
    oprahDraw = true;
};
  oprahImage.src = "./images/oprahplayer.png";

// Coins
var coinDraw = false;
var coinImage = new Image();
coinImage.onload = function () {
  coinDraw = true;
};
  coinImage.src = "./images/swag.png";
  
// Controls and Speed
var oprah = {
  speed: 400,
  x: 240,
  y: 380
};
var vanilla = {};
var coins = {};
var coinsCaught = 0;
// Handle keyboard controls
var keysDown = {};
// Check for keys pressed where key represents the keycode captured
addEventListener("keydown", function (key) {
  keysDown[key.keyCode] = true;
}, false);
addEventListener("keyup", function (key) {
  delete keysDown[key.keyCode];
}, false);

// Sets Oprah's location and coins random placement
var reset = function () {
  coins.x = 32 + (Math.random() * (canvas.width - 70)); //subtract from canvas height so coins dont leave canvas
  coins.y = 32 + (Math.random() * (canvas.height - 70));
  vanilla.x = (Math.random() * (canvas.width - 70));
  vanilla.y = (Math.random() * (canvas.height - 70));
};

// Controls
var update = function (modifier) {
  if (38 in keysDown) { 
    oprah.y -= oprah.speed * modifier;
    if (oprah.y < 0) {
      oprah.y = 0;
      }
  }
  if (40 in keysDown) { 
    oprah.y += oprah.speed * modifier;
    if (oprah.y > 380) {
      oprah.y = 380;
      }
  }
  if (37 in keysDown) { 
    oprah.x -= oprah.speed * modifier;
    if (oprah.x <= 0) {
      oprah.x = 0;
      }
  }
  if (39 in keysDown) { 
    oprah.x += oprah.speed * modifier;
    if (oprah.x >= 600) {
      oprah.x = (canvas.width-oprah.x);
      }
  }

  // Check if oprah and coins collide
  if (
    oprah.x <= (coins.x + 32)
    && coins.x <= (oprah.x + 50)
    && oprah.y <= (coins.y + 50)
    && coins.y <= (oprah.y + 120)
  ) {
    moneySFX.play();
    ++coinsCaught;
    reset();
  }

};

//Make baguettes
var baguette = new Image();
baguette.src = './images/baguette.png';

function Bread (x, y, image, isLoaded, width, height) {
  this.x = x
  this.y = y
  this.image = image;
  this.isLoaded = false;
  this.width = width;
  this.height = height;
  this.angle = 0;
  
  
}

Bread.prototype.draw = function () {
  ctx.save();
  // ctx.rotate(this.angle += .01);
  ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  ctx.restore();
};

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var myBread = [
  new Bread (getRandom(0, 600), ((Math.random() * canvas.height - 410)), baguette, false, 50, 50),
  new Bread (getRandom(0, 600), ((Math.random() * canvas.height - 410)), baguette, false, 50, 50),
  new Bread (getRandom(0, 600), ((Math.random() * canvas.height - 410)), baguette, false, 50, 50),
  new Bread (getRandom(0, 600), ((Math.random() * canvas.height - 410)), baguette, false, 50, 50),
];

function makeBaguette() {
  for (var i=0; i < 1; i++ ) {
  myBread.push(new Bread(getRandom(0, 600), ((Math.random() * canvas.height - 410)), baguette, false, 40, 40));
  // console.log(i)
  }

  }

function drawBaguette(){
  myBread.forEach(function (onePuppy) {
    onePuppy.y += 1;
    onePuppy.draw();
  
    if (
      oprah.x <= (onePuppy.x + 32)
      && onePuppy.x <= (oprah.x + 50)
      && oprah.y+60<= (onePuppy.y + 50)
      && onePuppy.y <= (oprah.y + 120)
    ) {
      console.log("COLLISION");
    }
      // collision detection for catching box
      // if (oprah.x < onePuppy.x + onePuppy.width 
      //   &&
      //   oprah.x + oprah.width > onePuppy.x 
      //   // &&
      //   // oprah.y < onePuppy.y + onePuppy.height &&
      //   // oprah.height + oprah.y > onePuppy.y
      // ) {
      //   console.log("=========================")
      //     // points += 1;
      //     console.log("oprah.x: ", oprah.x);
      //     // console.log("oprah.y", oprah.y)
      //     console.log("onePuppy.x: ", onePuppy.x);
      //     console.log("onePuppy.width",onePuppy.width);
      //     // console.log("onePuppy.y: ", onePuppy.y);
      //     // console.log("onePuppy.height", onePuppy.height)
      //     //removes puppy from canvas without compromising score
      //     console.log("COLLISION")
      //     console.log("=========================")

      //     // onePuppy.y += NaN;

      //     // puppiesSaved.empty();
      //     // puppiesSaved.append(points);
      //     // caughtSFX.play();
      //   }
  })
}
  // while (oprah.x < oneBread.x + oneBread.width &&
  //   oprah.x + oprah.width > oneBread.x &&
  //   oprah.y < oneBread.y + oneBread.height &&
  //   oprah.height + oprah.y > oneBread.y) {
  //     points += 1;
  //     //removes puppy from canvas without compromising score
  //     oneBread.y += NaN;
  //   }
  

//Make ice cream

var iceCream = new Image();
iceCream.src = './images/vanilla.png';

function Vanilla (x, y, image, isLoaded, width, height) {
  this.x = x
  this.y = y
  this.image = image;
  this.isLoaded = false;
  this.width = width;
  this.height = height;
  this.angle = 0;
}

Vanilla.prototype.draw = function () {
  ctx.save();
  ctx.rotate(this.angle += .006);
  ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  ctx.restore();
};

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var myVanilla = [
  new Vanilla (getRandom(0, 800), ((Math.random() * canvas.height - 410)), iceCream, false, 40, 40),
  new Vanilla (getRandom(0, 800), ((Math.random() * canvas.height - 410)), iceCream, false, 40, 40),
  new Vanilla (getRandom(0, 800), ((Math.random() * canvas.height - 410)), iceCream, false, 40, 40),
  new Vanilla (getRandom(0, 800), ((Math.random() * canvas.height - 410)), iceCream, false, 40, 40),
];

function makeVanilla() {
  for (var i=0; i < 1; i++ ) {
  myVanilla.push(new Vanilla(getRandom(0, 800), ((Math.random() * canvas.height - 410)), iceCream, false, 40, 40));
  // console.log(myVanilla);
  }
}

function drawVanilla(){
  myVanilla.forEach(function (oneCone) {
    oneCone.y += 1;
    oneCone.draw();
  })
}
 
// DRAW ON THE CANVAS //

var draw = function () {
  if (background) {
    ctx.drawImage(backgroundImage, 0, 0);
  }
  if (oprahDraw) {
    ctx.drawImage(oprahImage, oprah.x, oprah.y, 60, 120);
  }
  if (coinDraw) {
    ctx.drawImage(coinImage, coins.x, coins.y, 50, 50);
  }
  // if (oneBread) {
  //   ctx.drawImage(baguette, baguette.x, baguette.y, 10, 10);
  // }

  // DISPLAY MONEY BAG AMT AND TIME

  ctx.fillStyle = "black";
  ctx.font = "20px Helvetica";
  ctx.textAlign = "left";
  ctx.textBaseline = "top";
  ctx.fillText("Money Bags: " + coinsCaught, 440, 5);
  ctx.fillText("Remaining Time: " + count, 20, 5);

  // Display game over message when timer finished
  if(finished==true){
    ctx.fillText("TIME'S UP", 250, 250);
    // var linkText="http://stackoverflow.com";
    // var linkX=5;
    // var linkY=15;
    // var linkHeight=10;
    // var linkWidth;
    // var inLink = false;

    // // draw the balls on the canvas
    // function draw(){
    //   canvas = document.getElementById("myCanvas");
    //   // check if supported
    //   if(canvas.getContext){

    //     ctx=canvas.getContext("2d");

    //     //clear canvas
    //     ctx.clearRect(0, 0, canvas.width, canvas.height);

    //     //draw the link
    //     ctx.font='10px sans-serif';
    //     ctx.fillStyle = "#0000ff";
    //     ctx.fillText(linkText,linkX,linkY);
    //     linkWidth=ctx.measureText(linkText).width;

    //     //add mouse listeners
    //     canvas.addEventListener("mousemove", on_mousemove, false);
    //     canvas.addEventListener("click", on_click, false);

    //   }
    // }

//check if the mouse is over the link and change cursor style
function on_mousemove (ev) {
  var x, y;

  // Get the mouse position relative to the canvas element.
  if (ev.layerX || ev.layerX == 0) { //for firefox
    x = ev.layerX;
    y = ev.layerY;
  }
  x-=canvas.offsetLeft;
  y-=canvas.offsetTop;

  //is the mouse over the link?
  if(x>=linkX && x <= (linkX + linkWidth) && y<=linkY && y>= (linkY-linkHeight)){
      document.body.style.cursor = "pointer";
      inLink=true;
  }
  else{
      document.body.style.cursor = "";
      inLink=false;
  }
}

//if the link has been clicked, go to link
function on_click(e) {
  if (inLink)  {
    window.location = linkText;
  }
}
  }
  
};
var count = 30; // seconds
var finished = false;
var counter =function(){
  count=count-1; // countown by 1 every second
  // when count reaches 0 clear the timer, hide oprah and
  // finish the game
    if (count <= 0)
    {
      // stop the timer
       clearInterval(counter);
       // set game to finished
       finished = true;
       count=0;
       coinDraw=false;
       oprahDraw=false;
    }
}

var delay = 2000;
setTimeout(function () {
    delay = 2000
}, 2000);

function timeout() {
    setTimeout(function () {
        timeout();
        makeBaguette();
        makeVanilla();
    }, delay);
};
timeout();

// timer interval is every second (1000ms)
setInterval(counter, 1000);
// The main game loop
var main = function () {
  update(0.02); //you can adjust the speed of oprah
  draw();
  drawBaguette();
  drawVanilla();
  requestAnimationFrame(main);
};

reset();
main();