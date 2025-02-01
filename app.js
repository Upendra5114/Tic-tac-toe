let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let winner = document.querySelector(".winner");

var turnO = true;
winner.innerHTML = "Start!";
var win = 0;
var start = 1;

const winpatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        var audio = new Audio("bclick.wav");
        audio.play();
        if(turnO){
            winner.innerHTML = "Player X turn";
            box.innerHTML = "O";
            turnO = false;
        }
        else{
            winner.innerHTML = "Player O turn";
            box.innerHTML = "X";
            turnO = true;
        }
        start++;
        box.disabled = true;

        checkWinner();
    });
});

function checkWinner(){
    for(let pattern of winpatterns){
        let pos1 = boxes[pattern[0]].innerHTML;
        let pos2 = boxes[pattern[1]].innerHTML;
        let pos3 = boxes[pattern[2]].innerHTML;
        if(pos1 == pos2 && pos2 == pos3 && pos1!=""){
            winner.innerHTML = `Winner is ${pos1}`;
            win = 1;
            setTimeout(reset, 3000);            
        }
    }
    if(win == 0 && start == 10){
        winner.innerHTML = "Draw!";
        setTimeout(reset,3000);          
    }
}

function reset(){
    turnO = true;
    winner.innerHTML = "Start!";
    win = 0;
    start = 1;
    boxes.forEach((box)=>{
        box.innerHTML="";
        box.disabled = false;
    });
}
