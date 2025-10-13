let currentPlayer = "X";
let arr = Array(9).fill(null);

function checkWinner(){
    if(
        (arr[0] !== null && arr[0] === arr[1] && arr[1] === arr[2]) ||
        (arr[3] !== null && arr[3] === arr[4] && arr[4] === arr[5]) ||
        (arr[6] !== null && arr[6] === arr[7] && arr[7] === arr[8]) ||
        (arr[0] !== null && arr[0] === arr[3] && arr[3] === arr[6]) ||
        (arr[1] !== null && arr[1] === arr[4] && arr[4] === arr[7]) ||
        (arr[2] !== null && arr[2] === arr[5] && arr[5] === arr[8]) ||
        (arr[0] !== null && arr[0] === arr[4] && arr[4] === arr[8]) ||
        (arr[2] !== null && arr[2] === arr[4] && arr[4] === arr[6]) 
    ){
    //    document.write(`The winner is ${currentPlayer}`) 
    const container = document.querySelector('.container');
    const newDiv = document.createElement('div');
    newDiv.className = "resetDiv";
    const newP = document.createElement('p');
    const restartButton = document.createElement('button');
    restartButton.textContent = "Restart Game";
    restartButton.addEventListener('click', restartGame);
    newP.textContent = `The Winner is ${currentPlayer}`
    newDiv.appendChild(newP);
    newDiv.appendChild(restartButton);
    container.insertAdjacentElement('afterend', newDiv);
    const gameWrapper = document.querySelector('.game-wrapper');
    gameWrapper.appendChild(newDiv);

    
    }
    
}

function handleClick(el){
    const id = Number(el.id);
    arr[id] = currentPlayer;
    el.innerText = currentPlayer;
    checkWinner();
    checkDraw();
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    
   
}

function restartGame(){
 arr = Array(9).fill(null);
 const toResetColumns = document.querySelectorAll('.col');
 for (let i = 0; i < toResetColumns.length; i++) {
    const element = toResetColumns[i];
   element.innerHTML = "";

 }
 const resetDiv = document.querySelector('.resetDiv');
 resetDiv.remove();
}

function checkDraw(){
     if( !(
        (arr[0] !== null && arr[0] === arr[1] && arr[1] === arr[2]) ||
        (arr[3] !== null && arr[3] === arr[4] && arr[4] === arr[5]) ||
        (arr[6] !== null && arr[6] === arr[7] && arr[7] === arr[8]) ||
        (arr[0] !== null && arr[0] === arr[3] && arr[3] === arr[6]) ||
        (arr[1] !== null && arr[1] === arr[4] && arr[4] === arr[7]) ||
        (arr[2] !== null && arr[2] === arr[5] && arr[5] === arr[8]) ||
        (arr[0] !== null && arr[0] === arr[4] && arr[4] === arr[8]) ||
        (arr[2] !== null && arr[2] === arr[4] && arr[4] === arr[6]) ) &&
        (arr.every((element)=> {
            return element !== null;
         }))
       
    ){
         const container = document.querySelector('.container');
         const newDiv = document.createElement('div');
        newDiv.className = "resetDiv";
        const newP = document.createElement('p');
        const restartButton = document.createElement('button');
        restartButton.textContent = "Restart Game";
        restartButton.addEventListener('click', restartGame);
        newP.textContent = `Draw!`
        newDiv.appendChild(newP);
        newDiv.appendChild(restartButton);
        container.insertAdjacentElement('afterend', newDiv);
        const gameWrapper = document.querySelector('.game-wrapper');
        gameWrapper.appendChild(newDiv);

    
    }
}