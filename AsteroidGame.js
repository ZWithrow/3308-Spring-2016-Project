/// JavaScript source code
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
var Lasers = [];
var LaserCounter = 0;
var timer = 0;
for (b = 0; b <= 99; b++) {
    Lasers[b] = { x: laserX, y: laserY };
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function drawShip() {
    ctx.beginPath();
    ctx.rect(shipPlacementX, shipPlacementY, shipWidth, shipHeight);
    ctx.rect(shipPlacementX, shipPlacementY + 8, 3 + shipWidth, (shipHeight - 15));
    ctx.rect(shipPlacementX, shipPlacementY + 24, shipHeight - 13, shipWidth);
    ctx.rect(shipPlacementX - 6, shipPlacementY + 15, 30, 5);
    ctx.rect(shipPlacementX - 6, shipPlacementY + 40, 30, 5);
    ctx.fillStyle = "#696969";
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
        if (LaserCounter == 100) {
            LaserCounter = 0;
        }
        var lx = shipPlacementX + 50;
        var ly = shipPlacementY + 28;
        Lasers[LaserCounter].x = lx;
        Lasers[LaserCounter].y = ly;
        LaserCounter++;
        timer++;
    }
}
function showLasers() {
    var i = 0;

    while (i < LaserCounter) {
        var laserpx = Lasers[i].x + 2;
        var laserpy = Lasers[i].y;
        Lasers[i].x = laserpx;
        ctx.beginPath();
        ctx.rect(laserpx, laserpy, 8, 5);
        ctx.fillStyle = "#00FF00";
        ctx.fill();
        ctx.closePath();
        i++;
    }

}
function asteroids() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "#696969";
    ctx.fill();
    ctx.closePath();
}
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    //if (spaceStop == false) {
    //    spaceBar();
    //}
    laserY = shipPlacementY + 28;
    if (timer == 25) {
        timer = 0;
    }
    drawShip();
    if (timer == 0) {
        fireLaser();
    }
    if (timer != 0) {
        timer++;
    }

    if (LaserCounter != 0) {
        showLasers();
    }


    if (downPressed && shipPlacementY < canvas.height - shipHeight) {
        shipPlacementY += 3;
    }
    else if (upPressed && shipPlacementY > 0) {
        shipPlacementY -= 3;
    }
    laserX += 1;
}
var timer1 = setInterval(draw, 10);