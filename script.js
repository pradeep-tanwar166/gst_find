let boxes=document.querySelectorAll('.box');
let Resetbtn=document.querySelector('#Reset-btn');
let newGamebtn=document.querySelector('#new-btn');
let msgcontainer=document.querySelector('.msg-container');
let msg=document.querySelector('#msg');


let turnO = true;  // playerX , playerY

const winPatterns= [// These are our winning number and these are written in the form of 2d-array
   [0,1,2],
   [0,3,6],
   [0,4,8],
   [1,4,7],
   [2,4,6],
   [3,4,5],
   [6,7,8],
];

// reset btn

const resetGame=()=>{// This button is used to reset all of this 
    turnO=true;
    enableBoxes();
    msgcontainer.classList.add('hide');
}

boxes.forEach((box) => {// here we are using foreach to access all the button 
    box.addEventListener('click', () =>{
        if(turnO==true){// PlayerO
            box.innerText='O';
            turnO=false;
        }
        else{// PlayerX
            box.innerText='X';
            turnO=true;
        }
        box.disabled=true;// It is used to disabled any button 

        checkWinner();
    })
});

const disableBoxes=()=>{// This box is used for the disable box 
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableBoxes=()=>{// This box is used for the enable box
    for(let box of boxes){
        box.disabled=false;
        box.innerText='';
    }
}

const showWinner= (winner) =>{
    msg.innerText=`congratulation ,Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner=() =>{
    for( let pattern of winPatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val !="" && pos2val !="" && pos3val !=""){
            if(pos1val === pos2val && pos2val === pos3val){
                showWinner(pos1val);
            }
        }
    }
};

newGamebtn.addEventListener("click",resetGame);
Resetbtn.addEventListener("click",resetGame);
