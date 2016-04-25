/// JavaScript source code
/**@file This is the javascript for the etch-a-sketch game.
* The four arrow keys cause the drawer to move, leaving a "sketch" behind it.
* The space bar starts the game. The letter r resets the canvas to blank.
* The user plays until he/she wants to stop (presses r).*/

/**Game canvas (square the game is displayed on on the HTML page)*/
var canvas = document.getElementById("myCanvas3");
var ctx = canvas.getContext("2d");
var space = false;

var spaceStop = false;
var downPressed = false;
var upPressed = false;
var rightPressed = false;
var leftPressed = false;
var Reset = false;
var Erase = false;

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

/**Listening for user key strokes*/
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

/**See which, if any, keys have been pressed.
* Only dealing with arrow keys, space bar, and the letter r.*/
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
    if (e.keyCode == 69) {
        Erase = true;
    }
}

/**See which, if any, keys have been released.
* Only dealing with arrow keys, space bar, and the letter r.*/
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
    if (e.keyCode == 69) {
        Erase = false;
    }
}

/**When the space bar is pressed, start the game (allow user to move drawer).*/
function spaceBar() {
    if (spaceStop == false) {
        setTimeout(spaceBar, 50);
        clearInterval(timer1)
        return;
    }
    START = false;
    timer1 = setInterval(draw, 40);
}

/**when the game is lost, wait 50ms instead of 10ms and then check for space bar, 
when space is pressed load function GameOver*/
function finalWait() {
    if (spaceStop == false) {
        setTimeout(finalWait, 50);
        clearInterval(timer1)
        return;
    }
    timer1 = setInterval(GameOver, 10);
}

/**When the game is over, reload the game canvas.*/
function GameOver() {
    document.location.reload();
}


/**Drawing the "sketch" following the user's drawer? NEED ZACH*/
function cursor() {
    
    ctx.beginPath();
    ctx.rect(SnakeButts[0].x, SnakeButts[0].y, snakeButtSize, snakeButtSize);
    ctx.fillStyle = "#000000";
    ctx.fill();
    ctx.closePath();
    
}

/**Checks all the 5x5 pixels in 2D array Pixels and if true shows them on the canvas */
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

/**Refresh the game canvas, called when the user presses 'r'.*/
function refresh() {
    for (k = 0; k < 88; k++) {
        for (l = 0; l < 88; l++) {
            Pixels[l][k].showPixel = false;

        }
    }
}

/**Main function that controls canvas visuals. 
* Shows the Starting instructions and the controls. 
* Refreshes page if Reset == true. 
* Looks for the direction variables and moves 5 pixels accordingly.
* Initiates the cursor and drawSketch functions. 
* Takes the position of the cursor and makes the corresponding 5x5 pixel .showPixel == true*/
function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    if (START == true) {
        ctx.font = "55px Impact";
        ctx.fillText("Start Game", 480 / 2 - 125, 480 / 2);
        ctx.font = "20px Impact";
        ctx.fillText("by pressing SPACEBAR", 480 / 2 - 90, 480 / 2 + 30);
    }
    
    if (Reset == true){
        refresh();
    }
    if (spaceStop == false) {
        spaceBar();
    }
    
    
    drawSketch();
    cursor();
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
    if (Erase == true) {
        Pixels[newX][newY].showPixel = false;
    }
    else {
        Pixels[newX][newY].showPixel = true;
    }
    

    
    
}
//** Re-runs the function draw() every 40 ms*/
var timer1 = setInterval(draw, 40);
