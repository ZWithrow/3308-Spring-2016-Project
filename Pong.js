/**@file This is the javascript for the pong game (ball destroying blocks).
* The space bar starts the game.
* The left and right arrow keys move the paddle around the bottom of the canvas.
* When the user destroys all the bricks, the canvas resets with new bricks, but with 
* the ball going the same speed (the ball speeds up as the user plays).
* The user plays until the ball does not hit the paddle controlled by the user. */

/**Game canvas (square the game is displayed on on the HTML page)*/
var canvas = document.getElementById("myCanvas2");
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
 /**Listening for user key strokes*/
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);    

/**Draw the ball.*/
function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "#696969";
    ctx.fill();
    ctx.closePath();
}

/**Draw the paddle.*/
function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "696969";
    ctx.fill();
    ctx.closePath();

}

/**Update the score.*/
function updateScore() {
    ctx.font = "30px Impact";
    ctx.fillStyle = "black";
    ctx.fillText("Score : " + Score, 30, 40);
}


/**Seeing which, if any, keys are pressed.
* Only dealing with right & left arrows and space bar.*/
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


/**Seeing which, if any, keys are released.
* Only dealing with left & right arrows.*/
function keyUpHandler(e) {
    if (e.keyCode == 39) {
        rightPressed = false;
    }
    else if (e.keyCode == 37) {
        leftPressed = false;
    }

}

/**Drawing the bricks that the ball destroys.*/
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

/**Detecting if the ball collides with a brick.
* If there is a collision, delete the brick.*/
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

/**When all the bricks are gone, reset the canvas with new bricks.*/
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
    
/**When the space bar is pressed, start the game (start moving the ball).*/
function spaceBar() {
    if (space == false) {
        setTimeout(spaceBar, 50);
        clearInterval(timer1)
        return;
    }
    START = false;
    timer1 = setInterval(draw, 10);
    

}

/**when the game is lost, wait 50ms instead of 10ms and then check for space bar, 
when space is pressed load function GameOver*/
function finalWait() {
    if (space == false) {
        setTimeout(finalWait, 50);
        clearInterval(timer1)
        return;
    }
    timer1 = setInterval(GameOver, 10);
}

/**When game is over, reload the game canvas.*/
function GameOver() {
    document.location.reload();
}

/**Main function that controls canvas visuals. 
* Controls the Starting and GameOver instructions. 
* Runs the scoreboard, the ball, the paddle, and the bricks. 
* Checks for the number of bricks and the collisions. 
* Changes the velocity of the ball When it hits the paddle or a border.
* Speeds up the ball and paddle as the game progresses*/
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
//** Re-runs the function draw() every 10 ms*/
var timer1 = setInterval(draw, 10);
