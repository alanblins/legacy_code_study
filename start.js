require('./game.js');

module.exports = {
    start: function(dyces1,dyces2){
        var notAWinner = false;
        var game = new Game();

        game.add('Chet');
        game.add('Pat');
        game.add('Sue');

        do{

        game.roll(dyces1.shift());

        if(dyces2.shift() == 7){
            notAWinner = game.wrongAnswer();
        }else{
            notAWinner = game.wasCorrectlyAnswered();
        }

        }while(notAWinner && dyces1.length);
}
}