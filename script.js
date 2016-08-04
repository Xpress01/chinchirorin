var user_roll = [];
var pc_roll = [];
var user_score = [];
var pc_score = []; 
var storm = [1, 2, 3];
var tripleOne = [1,1,1];
var winRoll = [4,5,6];

//1. Roll dice 
    function rollDice(x) {
        x = Math.floor((Math.random() * 6) + 1); 
        return x;
    }
//2. User rolls 3 dices
    function userRoll () {
    //2b. Clears previous scores
        user_score = [];
        pc_score = [];
    //2c. Continues dice roll
        user_roll = [];
        user_roll.push(rollDice());
        user_roll.push(rollDice());
        user_roll.push(rollDice());
        user_roll.sort();
        console.log("This is the players score: " + user_roll);

//3. Computer rolls 3 dice
        pc_roll = [];
        pc_roll.push(rollDice());
        pc_roll.push(rollDice());
        pc_roll.push(rollDice());
        pc_roll.sort();
        console.log("This is the pc score: " + pc_roll);
        
    //3.a Get scores
    function getScores(x, y) {
                    for (var i=0; i < x.length - 1; i++) {
                        if(x[i+1] == x[i]) {
                            y.push(x[i]);
                        }
                    }
                }

//4. Dices are compared between User and Computer
    //4.a If user rolls a [1,2,3] or [1,1,1] automatic loss
        function checkWin(x) {
            x = x.toString();
            storm = storm.toString();
            tripleOne = tripleOne.toString();
            winRoll = winRoll.toString();
            if (x === storm || x === tripleOne) {
                console.log("You lose");
                
    //4.b If user rolls a [4,5,6] automatic win
            } else if (x === winRoll) {
                console.log("You win 2x");
    //4.c Get scores for user and pc. 
            } else {getScores(user_roll, user_score);
                    getScores(pc_roll, pc_score);
                    //4.d If user and compueter do not roll doubles, it is a draw.
                    if (user_score.toString() === pc_score.toString()) {
                        console.log("It's a draw")
                    } else if (user_score.length === 2 && user_roll !== storm) {
                        console.log("You win 3x");
                    //4.e If user rolls doubles, and computer rolls nothing, user wins
                    //4.f If user rolls doubles, and computer rolls doubles that is lower, user wins. 
                    } else if (user_score.toString() > pc_score.toString()){
                        console.log("You win")
                    //4.g If user rolls nothing, and computer rolls doubles, computer wins. 
                    } else {
                        console.log("You lose")
                    }
                    
            }
        }
        
        checkWin(user_roll);


    }