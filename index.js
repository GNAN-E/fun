
function mainProgram(){
    let randomNum = Math.random();
    console.log(randomNum)
    
    if(randomNum>0.5){
         computerMove="tails";
    }
    else{
        computerMove="heads";
    }
    
    return computerMove;
    
}


function exe1(){
    let x="heads";
    
    mainProgram();
    if (x==computerMove)
        result="you win"
    else
        result="you lose"
    alert(`you choose ${x}. computer picked ${computerMove}.${result}`)
}

function exe2(){
    let y="tails";
    mainProgram();
    if (y==computerMove)
        result="you win"
    else
        result="you lose"
        alert(`you choose ${y}. computer picked ${computerMove}.${result}`)
}

