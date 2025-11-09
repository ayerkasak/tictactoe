let currentPlayer = localStorage.getItem("currentPlayer") || "X";
let arr = JSON.parse(localStorage.getItem("arr")) || Array(9).fill(null);
let isGameCompleted = JSON.parse(localStorage.getItem("isGameCompleted")) || false;

// Initialize the board when page loads
window.addEventListener('DOMContentLoaded', function() {
    renderBoardFromStorage();
    if (isGameCompleted) {
        showStoredResult();
    }
});

function hasAnyoneWon() {
    let status = (arr[0] !== null && arr[0] === arr[1] && arr[1] === arr[2]) ||
                 (arr[3] !== null && arr[3] === arr[4] && arr[4] === arr[5]) ||
                 (arr[6] !== null && arr[6] === arr[7] && arr[7] === arr[8]) ||
                 (arr[0] !== null && arr[0] === arr[3] && arr[3] === arr[6]) ||
                 (arr[1] !== null && arr[1] === arr[4] && arr[4] === arr[7]) ||
                 (arr[2] !== null && arr[2] === arr[5] && arr[5] === arr[8]) ||
                 (arr[0] !== null && arr[0] === arr[4] && arr[4] === arr[8]) ||
                 (arr[2] !== null && arr[2] === arr[4] && arr[4] === arr[6]);
    return status;
}

function checkWinner() {
    if (hasAnyoneWon()) {
        showResultofTheMatch(`The Winner is ${currentPlayer}`);
        // Update localStorage when game is completed
        localStorage.setItem("isGameCompleted", JSON.stringify(true));
    }
}

function handleClick(el) {
    const id = Number(el.id);
    if (arr[id] || isGameCompleted) {
        return;
    }
    
    arr[id] = currentPlayer;
    el.innerText = currentPlayer;
    
    // Update localStorage after each move
    localStorage.setItem("arr", JSON.stringify(arr));
    
    checkWinner();
    checkDraw();
    
    if (isGameCompleted) {
        return;
    }
    
    // Switch player and update localStorage
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    localStorage.setItem("currentPlayer", currentPlayer);
}

function restartGame() {
    // Reset game state
    arr = Array(9).fill(null);
    currentPlayer = "X";
    isGameCompleted = false;
    
    // Clear localStorage
    localStorage.setItem("arr", JSON.stringify(arr));
    localStorage.setItem("currentPlayer", currentPlayer);
    localStorage.setItem("isGameCompleted", JSON.stringify(false));
    
    // Reset UI
    const toResetColumns = document.querySelectorAll('.col');
    for (let i = 0; i < toResetColumns.length; i++) {
        const element = toResetColumns[i];
        element.innerText = "";
    }
    
    const resetDiv = document.querySelector('.resetDiv');
    if (resetDiv) {
        resetDiv.remove();
    }
}

function checkDraw() {
    const areBoxesFulfilled = arr.every((element) => element !== null);
    if (areBoxesFulfilled && !hasAnyoneWon()) {
        showResultofTheMatch("Draw !");
        // Update localStorage when game is completed
        localStorage.setItem("isGameCompleted", JSON.stringify(true));
    }
}

function showResultofTheMatch(pText) {
    const container = document.querySelector('.container');
    const newDiv = document.createElement('div');
    newDiv.className = "resetDiv";
    const newP = document.createElement('p');
    const restartButton = document.createElement('button');
    
    restartButton.textContent = "Restart Game";
    restartButton.addEventListener('click', restartGame);
    newP.textContent = pText;
    
    newDiv.appendChild(newP);
    newDiv.appendChild(restartButton);
    
    const gameWrapper = document.querySelector('.game-wrapper');
    gameWrapper.appendChild(newDiv);
    
    isGameCompleted = true;
    // Update localStorage when game is completed
    localStorage.setItem("isGameCompleted", JSON.stringify(true));
}

// New function to render board from localStorage when page loads
const fun = (cell, index) => {
console.log(cell, index)
}
// fun("5th", 4)
function renderBoardFromStorage() {
    const cells = document.querySelectorAll('.col');
    // for (let i = 0; i < array.length; i++) {
    //     const element = array[i];

    //     fun()
        
    // }
    
    cells.forEach(()=>{

    })
    cells.forEach((cell, index) => {
        if (arr[index] !== null) {
            cell.innerText = arr[index];
        }
    });
}

// New function to show stored result when page reloads
function showStoredResult() {
    if (hasAnyoneWon()) {
        showResultofTheMatch(`The Winner is ${currentPlayer}`);
    } else {
        // Check if it's a draw (all cells filled but no winner)
        const areBoxesFulfilled = arr.every((element) => element !== null);
        if (areBoxesFulfilled) {
            showResultofTheMatch("Draw !");
        }
    }
}