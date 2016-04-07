beforeEach(function () {
  jasmine.addMatchers({
    toBePlaying: function () {
      return {
        compare: function (actual, expected) {
          var game = actual;

          return {
            pass: game.rightPressed === expected || game.leftPressed === expected || game.space === expected
          };
        }
      };
    }
  });
});
