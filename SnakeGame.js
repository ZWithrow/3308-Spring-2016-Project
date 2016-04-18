/// JavaScript source code
var canvas = document.getElementById("myCanvas3");
var ctx = canvas.getContext("2d");
var space = false;

var spaceStop = false;
var downPressed = false;
var upPressed = false;
var rightPressed = false;
var leftPressed = false;

var snakeButtSize = 20;
var numOfSnakeButts = 1;
var SnakeButts=[];
var Score = 0;
var START = true;
SnakeButts[0] = {x :20, y:20 , added : true}
for (i = 1; i < 100; i++) {
    SnakeButts[i] = { x: 20, y: 20, added: false }
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if (e.keyCode == 38) {
        upPressed = true;
    }
    else if (e.keyCode == 40) {
        downPressed = true;
    }
    else if (e.keyCode == 32) {
        space = true;
        spaceStop = true;
    }
}
function keyUpHandler(e) {
    if (e.keyCode == 38) {
        upPressed = false;
    }
    else if (e.keyCode == 40) {
        downPressed = false;
    }
    else if (e.keyCode == 32) {
        space = false;

    }
}
function spaceBar() {
    if (spaceStop == false) {
        setTimeout(spaceBar, 50);
        clearInterval(timer1)
        return;
    }
    START = false;
    timer1 = setInterval(draw, 10);
}
function finalWait() {
    if (spaceStop == false) {
        setTimeout(finalWait, 50);
        clearInterval(timer1)
        return;
    }
    timer1 = setInterval(GameOver, 10);
}
function GameOver() {
    document.location.reload();
}
function updateScore() {
    ctx.font = "30px Impact";
    ctx.fillStyle = "black";
    ctx.fillText("Score : " + Score, 25, 25);
}
function drawSnake() {
    var i = 0;
    while (i < numOfSnakeButts) {
        if (SnakeButts[i].added == true) {
            ctx.beginPath();
            ctx.rect(SnakeButts[i].x, SnakeButts[i].y, snakeButtSize, snakeButtSize);
            ctx.fillStyle = "#696969";
            ctx.fill();
            ctx.closePath();
        }
        i++;
    }
}
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    //updateScore();
    //if (START == true) {
    //    ctx.font = "55px Impact";
    //    ctx.fillText("Start Game", 480 / 2 - 125, 480 / 2);
    //    ctx.font = "20px Impact";
    //    ctx.fillText("by pressing SPACEBAR", 480 / 2 - 90, 480 / 2 + 30);
    //}
    if (spaceStop == false) {
        spaceBar();
    }
    drawSnake();
    
}
var timer1 = setInterval(draw, 10);