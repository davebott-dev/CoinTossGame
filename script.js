function getUserChoice() {
    let userChoice = prompt("Heads or Tails?").toLowerCase();
    if (userChoice === "heads") {
        userChoice = "heads";
        console.log("User selected Heads");
    } else if (userChoice === "tails") {
        userChoice = "tails";
        console.log("User selected Tails");
    } else {
        console.log("invalid choice");
    }
    return userChoice;
}

function coinToss() {
    let randomInt = Math.floor(Math.random()*2+1);
    if (randomInt===1){
        randomInt = "heads"
        console.log("The coin landed on heads")
    } else {
        randomInt = "tails"
        console.log("The coin landed on tails")
    }
return randomInt

}

function playRound(userSelection,coinValue){
    if (userSelection === coinValue) {
        return "You guessed correct!"
    } else {
        return "You guessed incorrect!"
    }
}

cguess = 0;
iguess = 0;



function playGame(x){


    for(let i=0; i<x;i++) {
    const userSelection =getUserChoice();
    const coinValue = coinToss();

    decision = playRound(userSelection,coinValue);
    console.log(playRound(userSelection,coinValue));
    
    if (decision === "You guessed correct!") {
        cguess++;
    } else {
        iguess++
    }
    if (cguess>iguess) {
        console.log("User wins!")
    } else if (iguess>cguess) {
        console.log("User loses!")
    } else {
        console.log ("It's a tie!")
    }

    console.log("Correct Guesses: " + cguess);
    console.log("Incorrect Guesses: " + iguess);
}
}

playGame(5);