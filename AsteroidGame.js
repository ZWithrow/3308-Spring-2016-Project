// JavaScript source code
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = canvas.width / 2;
var y = canvas.height - 30;
var space = false;
var spaceStop = false;
var rightPressed = false;
var leftPressed = false;
var shipHeight = 60;
var shipWidth = 12;
var shipPlacementX = (canvas.width - shipWidth) / 16;
var shipPlacementY = (canvas.height - shipHeight) / 2;
var laserX = shipPlacementX + 50;
var laserY = shipPlacementY + 28;


document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function drawShip() {
    ctx.beginPath();
    ctx.rect(shipPlacementX, shipPlacementY, shipWidth, shipHeight);
    ctx.rect(shipPlacementX, shipPlacementY+8, 3 + shipWidth, (shipHeight - 15));
    ctx.rect(shipPlacementX, shipPlacementY+24, shipHeight - 13, shipWidth);
    ctx.rect(shipPlacementX - 6, shipPlacementY + 15, 30, 5);
    ctx.rect(shipPlacementX - 6, shipPlacementY + 40, 30, 5);
    ctx.fillStyle = "#696969";
    ctx.fill();
    ctx.closePath();
}
function drawLaser() {
    ctx.beginPath();
    ctx.rect(laserX, laserY, 8, 5);
    ctx.fillStyle = "#FF6347";
    ctx.fill();
    ctx.closePath();
}

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
    timer1 = setInterval(draw, 10);
}
function fireLaser() {
    if (space == true) {
        drawLaser();
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    if (spaceStop == false) {
        spaceBar();
    }
    drawShip();
    fireLaser();
    if (downPressed && shipPlacementY < canvas.height - shipHeight) {
        shipPlacementY += 3;
    }
    else if (upPressed && shipPlacementY > 0) {
        shipPlacementY -= 3;
    }
    laserX += 1;
}
var timer1 = setInterval(draw, 10);