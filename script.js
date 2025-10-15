let currentPlayer = "X";
let arr = Array(9).fill(null);
let isGameCompleted = false; 

function hasAnyoneWon (){
    let status =  (arr[0] !== null && arr[0] === arr[1] && arr[1] === arr[2]) ||
    (arr[3] !== null && arr[3] === arr[4] && arr[4] === arr[5]) ||
    (arr[6] !== null && arr[6] === arr[7] && arr[7] === arr[8]) ||
    (arr[0] !== null && arr[0] === arr[3] && arr[3] === arr[6]) ||
    (arr[1] !== null && arr[1] === arr[4] && arr[4] === arr[7]) ||
    (arr[2] !== null && arr[2] === arr[5] && arr[5] === arr[8]) ||
    (arr[0] !== null && arr[0] === arr[4] && arr[4] === arr[8]) ||
    (arr[2] !== null && arr[2] === arr[4] && arr[4] === arr[6]) 

    return status
} 


function checkWinner(){
    if(
        hasAnyoneWon()
    ){
    showResultofTheMatch(`The Winner is ${currentPlayer}`)
    }
    
}

function handleClick(el){
    const id = Number(el.id);
    if (arr[id] || isGameCompleted){
        return
    }
    arr[id] = currentPlayer;
    el.innerText = currentPlayer;
    checkWinner();
    checkDraw();
    if (isGameCompleted){
        return
    }
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    
   
}

function restartGame(){
 arr = Array(9).fill(null);
//  currentPlayer = "X"
 isGameCompleted = false;
 const toResetColumns = document.querySelectorAll('.col');
 for (let i = 0; i < toResetColumns.length; i++) {
    const element = toResetColumns[i];
   element.innerHTML = "";
   
 }
 const resetDiv = document.querySelector('.resetDiv');
 resetDiv.remove();
}

function checkDraw(){
    const areBoxesFulfilled = arr.every((element)=> {
            return element !== null;
         })
     if( 
        areBoxesFulfilled && !hasAnyoneWon()
    ){
        showResultofTheMatch("Draw !" )
    
    }
}

function showResultofTheMatch(pText){
    const container = document.querySelector('.container');
    const newDiv = document.createElement('div');
    newDiv.className = "resetDiv";
    const newP = document.createElement('p');
    const restartButton = document.createElement('button');
    restartButton.textContent = "Restart Game";
    restartButton.addEventListener('click', restartGame);
    newP.textContent = pText
    // if (hasAnyoneWon()){
    //     newP.textContent = `The Winner is ${currentPlayer}`
    // } else{
    //     newP.textContent = `Draw!`
    //     }

   
    newDiv.appendChild(newP);
    newDiv.appendChild(restartButton);
    container.insertAdjacentElement('afterend', newDiv);
    const gameWrapper = document.querySelector('.game-wrapper');
    gameWrapper.appendChild(newDiv);
    isGameCompleted = true;
}
