import { Ship, Gameboard, Player } from "./game-components";

const container = document.querySelector('.container');
const userUI = document.querySelector('.user-ui');
const AIUI = document.querySelector('.ai-ui')
const userBoardDiv = document.querySelector('.user-board-div')
const AIBoardDiv = document.querySelector('.ai-board-div')

const gameUI = {
    
    playerUser: null,
    playerAI: null,
    activePlayer: null,

    initializeGame() {
        this.playerUser = new Player('User');
        this.playerAI = new Player('AI');
        this.generateGameboard(userBoardDiv, this.playerUser);
        this.generateGameboard(AIBoardDiv, this.playerAI);
    },

    generateGridCell(row, column, boardDiv, player) {
        const gridCell = document.createElement('div');
        gridCell.classList.add('grid-cell');
        gridCell.setAttribute('data-player', player.type);
        gridCell.setAttribute('data-row', (row + 1));
        gridCell.setAttribute('data-column', (column + 1));
        gridCell.textContent = '';
        boardDiv.appendChild(gridCell);

        gridCell.addEventListener('click', (event) => this.handleBoardClick(event));
    },

    generateGameboard(boardDiv, player) {
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                this.generateGridCell(i, j, boardDiv, player);
            }
        }
    },

    updateCell(row, column, player) {
        const gridCell = document.querySelector(`.grid-cell[data-player="${player.type}"][data-row="${row}"][data-column="${column}"]`);
        if (player == this.playerUser) {
            if (player.board.grid[row-1][column-1] === null || 
                player.board.grid[row-1][column-1] === 'H' || 
                player.board.grid[row-1][column-1] === 'M') {
                    gridCell.textContent = player.board.grid[row-1][column-1];
                } else {
                    gridCell.textContent = `${player.board.grid[row-1][column-1].type}`;
                }
        }
        if (player == this.playerAI) {
            if (player.board.grid[row-1][column-1] === null || 
                player.board.grid[row-1][column-1] === 'H' || 
                player.board.grid[row-1][column-1] === 'M') {
                    gridCell.textContent = player.board.grid[row-1][column-1];
                } else {
                    gridCell.textContent = null;
                }
        }
    },

    handleBoardClick(event) {
        const row = event.target.getAttribute('data-row');
        const column = event.target.getAttribute('data-column');
        const player = event.target.getAttribute('data-player');
        if (player == 'User') {
            this.playerUser.board.receiveAttack(row, column);
            this.updateCell(row, column, this.playerUser);
            // this.activePlayer = this.playerAI;
        } else if (player == 'AI') {
            this.playerAI.board.receiveAttack(row, column);
            this.updateCell(row, column, this.playerAI);
            // this.activePlayer = this.playerUser;
        } else {
            return null;
        }
    }

}

gameUI.initializeGame();
console.log(gameUI.playerUser);

gameUI.playerUser.board.placeShip(gameUI.playerUser.board.ships[1], 2, 3, 'horizontal');
console.log(gameUI.playerUser.board);

gameUI.updateCell(2, 3, gameUI.playerUser);
gameUI.updateCell(2, 4, gameUI.playerUser);
gameUI.updateCell(2, 5, gameUI.playerUser);

gameUI.playerUser.board.receiveAttack(2, 4);
console.log(gameUI.playerUser.board.grid);
gameUI.updateCell(2, 4, gameUI.playerUser);

gameUI.playerAI.board.placeShip(gameUI.playerUser.board.ships[1], 5, 5, 'horizontal');
gameUI.playerAI.board.receiveAttack(5,5);
gameUI.updateCell(5, 5, gameUI.playerAI);
gameUI.updateCell(5, 6, gameUI.playerAI);

gameUI.playerUser.board.receiveAttack(1,1);
gameUI.updateCell(1, 1, gameUI.playerUser);


export { gameUI }