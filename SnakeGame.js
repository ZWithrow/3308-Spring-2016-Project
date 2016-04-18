/// JavaScript source code
var canvas = document.getElementById("myCanvas3");
var ctx = canvas.getContext("2d");
var space = false;

var spaceStop = false;
var downPressed = false;
var upPressed = false;
var rightPressed = false;
var leftPressed = false;
var Reset = false

var snakeButtSize = 5;
var numOfSnakeButts = 1;
var SnakeButts = [];
//var Pixels = [];
var Score = 0;
var START = true;
var movetimer = 0;
SnakeButts[0] = { x: 20, y: 20, added: true }
var Pixels = new Array()
for (i = 0; i < 88; i++)
    Pixels[i] = new Array()

for (i = 0; i < 88; i++) {
    for (j = 0; j < 88; j++) {
        Pixels[j][i] = {x:5*j+20, y:5*i+20, showPixel : false}
    }  
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
    else if (e.keyCode == 39) {
        rightPressed = true;
    }
    else if (e.keyCode == 37) {
        leftPressed = true;
    }
    if (e.keyCode == 82) {
        Reset = true;
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
    else if (e.keyCode == 39) {
        rightPressed = false;
    }
    else if (e.keyCode == 37) {
        leftPressed = false;
    }
    if (e.keyCode == 82) {
        Reset = false;
    }
}
function spaceBar() {
    if (spaceStop == false) {
        setTimeout(spaceBar, 50);
        clearInterval(timer1)
        return;
    }
    START = false;
    timer1 = setInterval(draw, 40);
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
    
    ctx.beginPath();
    ctx.rect(SnakeButts[0].x, SnakeButts[0].y, snakeButtSize, snakeButtSize);
    ctx.fillStyle = "#000000";
    ctx.fill();
    ctx.closePath();
    
}
function drawSketch() {

    
    for (k = 0; k < 88; k++) {
        for (l = 0; l < 88; l++) {
            if (Pixels[l][k].showPixel == true) {
                ctx.beginPath();
                ctx.rect(Pixels[l][k].x, Pixels[l][k].y, 5, 5);
                ctx.fillStyle = "#696969";
                ctx.fill();
                ctx.closePath();
            }

        }
    }
    
}
function refresh() {
    for (k = 0; k < 88; k++) {
        for (l = 0; l < 88; l++) {
            Pixels[l][k].showPixel = false;

        }
    }
}
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    //updateScore();
    if (START == true) {
        ctx.font = "55px Impact";
        ctx.fillText("Start Game", 480 / 2 - 125, 480 / 2);
        ctx.font = "20px Impact";
        ctx.fillText("by pressing SPACEBAR", 480 / 2 - 90, 480 / 2 + 30);
    }
    else {
        ctx.font = "20px Impact";
        ctx.fillText("Use arrows to move.......Press 'r' to refresh the page", 33, 480 - 5);
    }
    if (Reset == true){
        refresh();
    }
    if (spaceStop == false) {
        spaceBar();
    }
    
    
    drawSketch();
    drawSnake();
    if (downPressed && SnakeButts[0].y < canvas.height - snakeButtSize - 20) {
        SnakeButts[0].y += 5;
    }
    else if (upPressed && SnakeButts[0].y > 20) {
        SnakeButts[0].y -= 5;
    }
    if (rightPressed && SnakeButts[0].x < canvas.width - snakeButtSize - 20) {
        SnakeButts[0].x += 5;
    }
    else if (leftPressed && SnakeButts[0].x > 20) {
        SnakeButts[0].x -= 5;
    }
    var newX = (SnakeButts[0].x - 20) / 5;
    var newY = (SnakeButts[0].y - 20) / 5;
    Pixels[newX][newY].showPixel = true;

    
    
}
var timer1 = setInterval(draw, 40);