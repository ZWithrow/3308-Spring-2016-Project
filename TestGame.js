// JavaScript source code
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = canvas.width / 2;
var y = canvas.height - 30;
var dx = (Math.random() < 0.5 ? -1 : 1)*Math.floor((Math.random()*2) + 2);
var dy = (Math.random() < 0.5 ? -1 : 1)*Math.floor((Math.random()*2) + 2);
var ballRadius = 10;
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width - paddleWidth) / 2;
var rightPressed = false;
var leftPressed = false;
var brickRowCount = 3;
var brickColumnCount = 5;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 60;
var brickOffsetLeft = 30;
var bricks = [];
var space = false;
var Score = 0;
var START = true;
var paddleAcceleration = 0;
for (c = 0; c < brickColumnCount; c++) {
    bricks[c] = [];
    for (r = 0; r < brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1 };
    }
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
//fdsafdsa


function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "#696969";
    ctx.fill();
    ctx.closePath();
}
function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "696969";
    ctx.fill();
    ctx.closePath();

}
function updateScore() {
    ctx.font = "30px Impact";
    ctx.fillStyle = "black";
    ctx.fillText("Score : " + Score, 30, 40);
}
function keyDownHandler(e) {
    if (e.keyCode == 39) {
        rightPressed = true;
    }
    else if (e.keyCode == 37) {
        leftPressed = true;
    }
    else if (e.keyCode == 32) {
        space = true;
    }
}

function keyUpHandler(e) {
    if (e.keyCode == 39) {
        rightPressed = false;
    }
    else if (e.keyCode == 37) {
        leftPressed = false;
    }

}
function drawBricks() {
    for (c = 0; c < brickColumnCount; c++) {
        for (r = 0; r < brickRowCount; r++) {
            if (bricks[c][r].status == 1) {
                var brickX = (c * (brickWidth + brickPadding)) + brickOffsetLeft;
                var brickY = (r * (brickHeight + brickPadding)) + brickOffsetTop;
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;
                ctx.beginPath();
                ctx.rect(brickX, brickY, brickWidth, brickHeight);
                ctx.fillStyle = "#696969";
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}
function collisionDetection() {
    for (c = 0; c < brickColumnCount; c++) {
        for (r = 0; r < brickRowCount; r++) {
            var b = bricks[c][r];
            if (b.status == 1) {
                if (x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {
                    dy = -dy;
                    b.status = 0;
                    Score += 10;
                }
            }
        }
    }
}
function AllBricksGone() {
    for (c = 0; c < brickColumnCount; c++) {
        for (r = 0; r < brickRowCount; r++) {
            var b = bricks[c][r];
            if (b.status == 1) {
                    return
                }
            }
        }
    for (A = 0; A < brickColumnCount; A++) {
        for (B = 0; B < brickRowCount; B++) {
            bricks[A][B].status = 1;
            
            }
        }
    }
    

function spaceBar() {
    if (space == false) {
        setTimeout(spaceBar, 50);
        clearInterval(timer1)
        return;
    }
    START = false;
    timer1 = setInterval(draw, 10);
    

}
function finalWait() {
    if (space == false) {
        setTimeout(finalWait, 50);
        clearInterval(timer1)
        return;
    }
    timer1 = setInterval(GameOver, 10);
}
function GameOver() {
    document.location.reload();
}
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    if (START == true) {
        ctx.font = "55px Impact";
        ctx.fillText("Start Game", 480 / 2 - 125, 480 / 2);
        ctx.font = "20px Impact";
        ctx.fillText("by pressing SPACEBAR", 480 / 2 - 90, 480 / 2 + 30);
    }
    if (space == false) {
        spaceBar();
    }
    updateScore();
    drawBall();
    drawPaddle();
    AllBricksGone();
    drawBricks();
    collisionDetection();
    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if (y + dy < ballRadius) {
        dy = -dy;
    }
    else if (y + dy > canvas.height - ballRadius) {
        if (x > paddleX && x < paddleX + paddleWidth) {
            dy = -(dy)-0.5;
            if (paddleX + (paddleWidth / 2) >= x) {
                dx -= (x / (paddleX + (paddleWidth / 2))) * 0.5;
            }
            else {
                dx += ((x - 2(x - (paddleX + (paddleWidth / 2)))) / (paddleX + (paddleWidth / 2))) * 0.5;
            }
            paddleAcceleration += 0.25;
            
        }
        else {
            ctx.font = "55px Impact";
            ctx.fillStyle = "black";
            ctx.fillText("GAME OVER", 480 / 2 - 125, 480 / 2);
            ctx.font = "20px Impact";
            ctx.fillText("by pressing SPACEBAR", 480 / 2 - 90, 480 / 2 + 30);
            space = false;
            if (space == false) {
                finalWait();
            }
        }
        
    }

    if (rightPressed && paddleX < canvas.width - paddleWidth) {
        paddleX += 5 + paddleAcceleration;
    }
    else if (leftPressed && paddleX > 0) {
        paddleX -= 5 + paddleAcceleration;
    }
    x += dx;
    y += dy;
    
}
var timer1 = setInterval(draw, 10);