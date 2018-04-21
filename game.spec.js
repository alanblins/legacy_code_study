var startGame = require('./start.js');
var fs = require('fs');

describe("The test environment", function() {
  xit("should access game", function() {
    expect(Game).toBeDefined();
  });

  xit("players count must be 3", function() {
    var notAWinner = false;

    var game = new Game();
    
    game.add('Chet');
    game.add('Pat');
    game.add('Sue');

    
    expect(game.howManyPlayers()).toBe(3);
  });

  it("teste results 1",function(){
    var lines = fs.readFileSync('./result1.txt',"utf-8").split("\n");
    spyOn(console,"log");

    var dyces = [1,2,3,4,5,6];
    var guessAnswer = dyces.map(function(){
      return 1;
    });
    startGame.start(dyces,guessAnswer);    
    
    for(var i=0;i<lines.length;i++){
      var line = lines[i];
      expect(console.log).toHaveBeenCalledWith(line);
    }
  })

  it("teste results 2",function(){
    var lines = fs.readFileSync('./result2.txt',"utf-8").split("\n");
    var dyces = [1,2,3,4,5,6];
    var guessAnswer = dyces.map(function(){
      return 7;
    });

    testWithResults(dyces,guessAnswer,lines);
  })

  it("teste results 3",function(){
    var lines = fs.readFileSync('./result2.txt',"utf-8").split("\n");
    var dyces = [1,2,3,4,5,6];
    var guessAnswer = dyces.map(function(){
      return 7;
    });

    //testWithResults(dyces,guessAnswer,lines);
    startGame.start(dyces,guessAnswer);
  })


  function testWithResults(dyces,guessAnswer,lines){
    spyOn(console,"log");
    startGame.start(dyces,guessAnswer);      
    for(var i=0;i<lines.length;i++){
      var line = lines[i];
      expect(console.log).toHaveBeenCalledWith(line);
    }
  }
  

});

describe("Your specs...", function() {
  // it ...
});
