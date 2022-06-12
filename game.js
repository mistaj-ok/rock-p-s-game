const moves = ["ROCK", "PAPER", "SCISSORS"];


function computerPlay() {
    let move = getRandom(0,3);
    return moves[move];
}

function playerPlay() {
    let input = prompt("player move: ");
    input = input.toLocaleUpperCase();
    console.log(input);
    
    for (let i=0; i<moves.length;i++) {
        if (input.localeCompare(moves[i]) == 0) {
            return input;
        } else if (i == moves.length -1) {
            return null;     
        }   
    }
}

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.ceil(max);   
    return Math.floor(Math.random() * (max - min) + min);
}

function playround( playerSelection, computerSelection) {
    if ( playerSelection == null )
        return "invalid player entry";
    if ( (playerSelection.localeCompare(computerSelection) )== 0) 
        return "draw";   
    var result; 
    switch(playerSelection) {
        case "ROCK": 
            if (computerSelection == moves[2]) {
                result = "you win, rock beats scizzor" 
            } else if (computerSelection == moves[1]) {            
                result = "you lose, paper beats rock";
            }
           break;
        case "PAPER":
            if (computerSelection == moves[0]) {
                result = "you win, " + playerSelection + " beats "+ moves[0]; 
            } else if (computerSelection == moves[2]) {            
                result = "you lose, " + moves[2] + " beats " + playerSelection;
            }
            break;
        case "SCISSORS":
            if (computerSelection == moves[1]) {
                result = "you win, " + playerSelection + " beats "+ moves[1]; 
            } else if (computerSelection == moves[0]) {            
                result = "you lose, " + moves[0] + " beats " + playerSelection;
            }
            break;  
    }
    return result;
}
/**
 * 
 * @param {*} roundStr 
 * @returns -1: draw, 0: player score,  1: computer score.
 */
function getRoundResult(roundStr) {
    if (roundStr == null || roundStr == undefined) {
        return;
    }
    roundStr = roundStr.toString();
    let upCaseStr = roundStr.toLocaleUpperCase();
    if (upCaseStr.includes("DRAW")) 
        return -1;
    else 
       return  (upCaseStr.includes("WIN") ? 0 : 1);    
}

function game () {
    let games = [0,0];
    for (var i=0; i<5;i++) {
        let input = playerPlay();
        let roundResult = playround(input, computerPlay());
        let point = getRoundResult(roundResult);
        if (point == -1) 
          ;
        else 
            games[point]++;

    }
    if (games[0] == games[1]) {
        return "its a draw, your score: " + games[0] + " comp score: " + games[1];
    }
    return (games[0] > games[1] ? "You Win!" : " Computer won. womp womp");
}

console.log(game());

