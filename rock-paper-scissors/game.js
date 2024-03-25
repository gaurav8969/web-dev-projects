//generate random int between 1 and 100
function generateRandomNum(){
    let fraction = Math.random();
    let max = 100;
    return Math.floor(max*fraction);
}

function getComputerChoice(){
    let randInt = generateRandomNum();
    let remainder = randInt%3;

    switch(remainder){
        case 0:
            return "paper";
        case 1:
            return "rock";
        case 2:
            return "scissors";
    }
}

let rounds = 0;
let playerScore = 0;
let AIscore =  0;

var nodes = document.getElementById("checkbox-div").childNodes;
for(var i=0; i<nodes.length; i++) {
    nodes[i].addEventListener('change', e => {
        rounds++;
        let point = round(e.target.id);
        if(point == 0){
            AIscore++;
        }else if(point == 0.5){
            AIscore += 0.5;
            playerScore += 0.5;
        }else{
            playerScore++;
        }

        if(rounds >= 5){
            if(playerScore > AIscore){
                alert("You won. You have " + playerScore + " points while AI has "+
                AIscore + " points");
            }else if(AIscore < playerScore){
                alert("You lost. You have " + playerScore + " points while AI has "+
                AIscore + " points");
            }else{
                alert("Game Tied. You and AI both have " + playerScore + " points");
            }

            rounds = 0;
            AIscore = 0;
            playerScore = 0;
        }

        document.getElementById("score").innerHTML = "Human \
        <span style=\"padding-right: 35px\"> </span> AI<br>Score:\
        "+playerScore+ "<span style=\"padding-right: 10px\"> </span>-\
        <span style=\"padding-right: 10px\"> </span>" + AIscore;

        if(e.target.checked){
            e.target.checked = false;
        }
    });
}

//conduct one round of rock-paper
function round(id){
    let computerChoice = getComputerChoice();
    if(computerChoice == id){
        alert("Tie");
        return 0.5;
    }

    switch(id){
        case "rock":{
            if(computerChoice == "scissors"){
                alert("Computer chooses Scissors. You have won!");
                return 1;
            }else{
                console.log("Computers choice is " + computerChoice);
                return 0;
            }
            break;
        }
        case "paper":{
                if(computerChoice == "rock"){
                    alert("Computer chooses Rock. You have won!");
                    return 1;
                }else{
                    alert("Computer chooses Scissors. You have lost!");
                    return 0;
                }
            break;
        }
        case "scissors":{
                if(computerChoice == "paper"){
                    alert("Computer chooses Scissors. You have won!");
                    return 1;
                }else{
                    alert("Computer chooses Rock. You have lost!");
                    return 0;
                }
            break;
        }
    }
    
}