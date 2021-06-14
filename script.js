
    // store player moves
    // render player moves
    // restart game, clear all cells
const gameboard = (() => {
    let boardPositions = [null, null, null, null, null, null, null, null, null];
    
    const render = function() {
        for (let i = 0; i < boardPositions.length; i++) {
        const cell = document.getElementById(`${i}`);
        cell.textContent = gameboard.boardPositions[i]; 
        }
    }
    
    const reset = () => {
        gameboard.boardPositions = boardPositions.map(item => item = null);
        render();
    }
    
    return {render, boardPositions, reset};
})();


const Player = (name, mark) => {
    return {name, mark}
}

const player1 = Player('P1', 'X');
const player2 = Player('P2', 'O');


// game logic
const game = (() => {
    // if 3 in a row, game over. player that has letter which is 3 in a row wins
    const win = () => {
        if (gameboard.boardPositions[0] === gameboard.boardPositions[1] && gameboard.boardPositions[0] === gameboard.boardPositions[2]) {
            console.log("3 in a row")
        }
    }

    //Change turns (default P1 goes first)

    let turnPlayer = player1;

    const changeTurn = () => {
        if (turnPlayer === player1) {
            turnPlayer = player2
        } else {
            turnPlayer = player1
        }
    }
        
    const cells = document.querySelectorAll('div.cell');
    //cells.forEach(item => {
    //    if (!item) {
    //        item.addEventListener('click', event => {
    //            console.log(event.target.id);
    //        })
    //    }
    //})
    
    cells.forEach(item => item.addEventListener('click', event => {
        if (gameboard.boardPositions[event.target.id]) {
            return;
        }
        gameboard.boardPositions[event.target.id] = turnPlayer.mark;
        changeTurn();
        gameboard.render()
    }))

    return {win, changeTurn}
})();
// if all cells are filled, and no 3 in a row, draw game
// alternates players turns, first X then O alternating. (or O then X)
// cannot select a cell that already has a value