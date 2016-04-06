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
var asteroids = [];
var asteroidCounter = 0;
var timer = 0;
var timer2 = 0;
var Score = 0;
for (b = 0; b <= 99; b++) {
    Lasers[b] = { x: laserX, y: laserY, hit: false };
    asteroids[b] = { x: 600, y: 600, dx: 1 * Math.floor((Math.random() * 4) + 1), hit: false, Xsize: Math.random() * 20 + 10, Ysize: Math.random() * 20 + 10 };
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

    while (i < 100) {
        if (Lasers[i].hit == false) {
            var laserpx = Lasers[i].x + 2;
            var laserpy = Lasers[i].y;
            Lasers[i].x = laserpx;
            ctx.beginPath();
            ctx.rect(laserpx, laserpy, 8, 5);
            ctx.fillStyle = "#00FF00";
            ctx.fill();
            ctx.closePath();
        }

        i++;
    }

}
function makeAsteroid() {
    if (asteroidCounter == 100) {
        asteroidCounter = 0;
    }
    var lx = 500;
    var ly = Math.floor((Math.random() * 40) + 1) * 12;
    asteroids[asteroidCounter].x = lx;
    asteroids[asteroidCounter].y = ly;
    asteroidCounter++;
    timer2++;
}
function showAsteroids() {
    var i = 0;

    while (i < asteroidCounter) {
        if (asteroids[i].hit == false) {
            var asteroidpx = asteroids[i].x - asteroids[i].dx;
            asteroids[i].x = asteroidpx;
            ctx.beginPath();
            //ctx.arc(asteroidpx, asteroids[i].y, ballRadius, 0, Math.PI * 2);
            ctx.rect(asteroidpx, asteroids[i].y, asteroids[i].Xsize, asteroids[i].Xsize);
            ctx.fillStyle = "#696969";
            ctx.fill();
            ctx.closePath();

        }
        i++;
    }
}

function collisionDetection() {
    for (a = 0; a < 100; a++) {
        for (l = 0; l < 100; l++) {
            var Laser = Lasers[l];
            var Aster = asteroids[a];
            if (Laser.hit == false && Aster.hit == false) {
                if (Laser.y + 5 > Aster.y && Laser.y < Aster.y + Aster.Xsize && Laser.x + 8 > Aster.x && Laser.x < Aster.x + Aster.Xsize) {
                    Laser.hit = true;
                    Aster.hit = true;
                    Score += 10;
                }
            }

        }
    }
}
function updateScore() {
    ctx.font = "30px Arial";
    ctx.fillText("Score : " + Score, 25, 25);
}
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    if (spaceStop == false) {
        spaceBar();
    }
    laserY = shipPlacementY + 28;
    if (timer == 25) {
        timer = 0;
    }
    if (timer2 == 50) {
        timer2 = 0;
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
    if (timer2 == 0) {
        makeAsteroid();
    }
    timer2++;
    if (asteroidCounter != 0) {
        showAsteroids();
    }

    collisionDetection();
    if (downPressed && shipPlacementY < canvas.height - shipHeight) {
        shipPlacementY += 3;
    }
    else if (upPressed && shipPlacementY > 0) {
        shipPlacementY -= 3;
    }
    updateScore();
    laserX += 1;
}
var timer1 = setInterval(draw, 10);