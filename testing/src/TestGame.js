function Game() {}

Game.prototype.keyDownHandler = function(x) {
    if (x == 39) {
        this.rightPressed = true;
    }
    else if (x == 37) {
        this.leftPressed = true;
    }
    else if (x == 32) {
        this.space = true;
    }
};

Game.prototype.keyUpHandler = function(x) {
    if (x == 39) {
        this.rightPressed = false;
    }
    else if (x == 37) {
        this.leftPressed = false;
    }

};
// JavaScript source code
// var canvas = document.getElementById("myCanvas");
// var ctx = canvas.getContext("2d");
// var x = canvas.width / 2;
// var y = canvas.height - 30;
// var dx = (Math.random() < 0.5 ? -1 : 1)*Math.floor((Math.random()*2) + 2);
// var dy = (Math.random() < 0.5 ? -1 : 1)*Math.floor((Math.random()*2) + 2);
// var ballRadius = 10;
// var paddleHeight = 10;
// var paddleWidth = 75;
// var paddleX = (canvas.width - paddleWidth) / 2;
// var rightPressed = false;
// var leftPressed = false;
// var brickRowCount = 3;
// var brickColumnCount = 5;
// var brickWidth = 75;
// var brickHeight = 20;
// var brickPadding = 10;
// var brickOffsetTop = 30;
// var brickOffsetLeft = 30;
// var bricks = [];
// var space = false;
// for (c = 0; c < brickColumnCount; c++) {
//     bricks[c] = [];
//     for (r = 0; r < brickRowCount; r++) {
//         bricks[c][r] = { x: 0, y: 0, status: 1 };
//     }
// }

// document.addEventListener("keydown", keyDownHandler, false);
// document.addEventListener("keyup", keyUpHandler, false);
// //fdsafdsa


// function drawBall() {
//     ctx.beginPath();
//     ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
//     ctx.fillStyle = "#696969";
//     ctx.fill();
//     ctx.closePath();
// }
// function drawPaddle() {
//     ctx.beginPath();
//     ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
//     ctx.fillStyle = "696969";
//     ctx.fill();
//     ctx.closePath();

// }

// function drawBricks() {
//     for (c = 0; c < brickColumnCount; c++) {
//         for (r = 0; r < brickRowCount; r++) {
//             if (bricks[c][r].status == 1) {
//                 var brickX = (c * (brickWidth + brickPadding)) + brickOffsetLeft;
//                 var brickY = (r * (brickHeight + brickPadding)) + brickOffsetTop;
//                 bricks[c][r].x = brickX;
//                 bricks[c][r].y = brickY;
//                 ctx.beginPath();
//                 ctx.rect(brickX, brickY, brickWidth, brickHeight);
//                 ctx.fillStyle = "#696969";
//                 ctx.fill();
//                 ctx.closePath();
//             }
//         }
//     }
// }
// function collisionDetection() {
//     for (c = 0; c < brickColumnCount; c++) {
//         for (r = 0; r < brickRowCount; r++) {
//             var b = bricks[c][r];
//             if (b.status == 1) {
//                 if (x > b.x && x < b.x + brickWidth && y > b.y && y < b.y + brickHeight) {
//                     dy = -dy;
//                     b.status = 0;
//                 }
//             }
//         }
//     }
// }
// function spaceBar() {
//     if (space == false) {
//         setTimeout(spaceBar, 50);
//         clearInterval(timer1)
//         return;
//     }
//     timer1 = setInterval(draw, 10);

// }
// function draw() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height)
//     if (space == false) {
//         spaceBar();
//     }
//     drawBall();
//     drawPaddle();
//     drawBricks();
//     collisionDetection();
//     if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
//         dx = -dx;
//     }
//     if (y + dy < ballRadius) {
//         dy = -dy;
//     }
//     else if (y + dy > canvas.height - ballRadius) {
//         if (x > paddleX && x < paddleX + paddleWidth) {
//             dy = -(dy)-0.5;
//         }
//         else {
//             //alert("Game Over");
//             space = false;
//             document.location.reload();
//         }
        
//     }

//     if (rightPressed && paddleX < canvas.width - paddleWidth) {
//         paddleX += 5;
//     }
//     else if (leftPressed && paddleX > 0) {
//         paddleX -= 5;
//     }
//     x += dx;
//     y += dy;
// }
// var timer1 = setInterval(draw, 10);