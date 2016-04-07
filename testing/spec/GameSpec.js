describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

   it("should set rightPressed to true if the right arrow key is pressed", function() {
    game.keyDownHandler(39);
    expect(game.rightPressed).toBeTruthy();
   }); 

   it("should set leftPressed to true if the left arrow key is pressed", function() {
    game.keyDownHandler(37);
    expect(game.leftPressed).toBeTruthy();
   });

   it("should set space to true if the space bar is pressed", function() {
    game.keyDownHandler(32);
    expect(game.space).toBeTruthy();
   });

   it("should set rightPressed to false if the right arrow is released", function() {
    game.keyUpHandler(39);
    expect(game.rightPressed).toBeFalsy();
   });

   it("should set leftPressed to false is the left arrow is released", function() {
    game.keyUpHandler(37);
    expect(game.leftPressed).toBeFalsy();
   });

});