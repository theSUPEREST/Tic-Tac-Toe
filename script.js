
    // store player moves
    // render player moves
    // restart game, clear all cells
const gameboard = (() => {
    const boardPositions = ['X',null,'X','O','X','O','X','O','X'];
    const render = function() {
        for (let i = 0; i < boardPositions.length; i++) {
        const cell = document.getElementById(`${i}`);
        cell.textContent = boardPositions[i]; 
        }
    }

    return {render};
})();



const Player = () => {
    // enter their name
    // pick x or o as their piece
    // click a square and add their piece
}

// game logic
// if 3 in a row, game over. player that has letter which is 3 in a row wins
// if all cells are filled, and no 3 in a row, draw game
// alternates players turns, first X then O alternating. (or O then X)
// cannot select a cell that already has a value