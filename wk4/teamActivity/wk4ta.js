const playerTurn = document.getElementById("playerTurn");
playerTurn.innerHTML = "Player 1";

const ticTacToeTable = document.getElementById("ticTacToeTable");

ticTacToeTable.addEventListener("click", mark);

function mark(event){
    console.log(event.type);
    if(playerTurn.innerHTML == "Player 1"){
        event.target.innerHTML = "X";
        playerTurn.innerHTML = "Player 2";
    } 
    else if (playerTurn.innerHTML == "Player 2"){
        event.target.innerHTML = "O";
        playerTurn.innerHTML = "Player 1";
    }
} 

const td = document.getElementsByTagName("td");
console.log(td);
function clearBoard(){
    for(let i=0; i<td.length; i++){
        if(td[i].innerHTML != " "){
            td1.innerHTML = " ";
        }
    }
}