class Ship {
    constructor(type, length) {
        this.type = type;
        this.length = length;
        this.hitCount = 0;
        this.sunkStatus = this.isSunk();
    };

    hit() {
        this.hitCount++;
        this.sunkStatus = this.isSunk(); // update object's sunk status
    }

    isSunk() {
        return this.hitCount >= this.length;
    }
}

class Gameboard { // 10x10 grid
    constructor() {
        this.grid = this.initializeGrid();
        this.ships = this.initializeShips();
    }

    initializeGrid() {
        const size = 10;
        const grid = new Array(size);
        for (let i = 0; i < size; i++) {
            grid[i] = new Array(size);
            for (let j = 0; j < size; j++) {
                grid[i][j] = null;
            }
        } 
        return grid;
    }

    initializeShips() {
        const ships = [];

        const kayak = new Ship('kayak', 2); // [0]
        const sailboat = new Ship('sailboat', 3); // [1]
        const pontoon = new Ship('pontoon', 3); // [2]
        const yacht = new Ship('yacht', 4); // [3]
        const cruise = new Ship('cruise', 5); // [4]

        ships.push(kayak);
        ships.push(sailboat);
        ships.push(pontoon);
        ships.push(yacht);
        ships.push(cruise);

        return ships;
    }

    placeShip(shipObject, row, column, direction) {
        column = column - 1;
        row = row - 1;
        const length = shipObject.length;
        this.ships.push(shipObject);

        if (direction == 'horizontal') {
            if (column + length > 10) {
                return 'error - ship cannot be placed outside of bounds of the gameboard';
            } else {
                this.grid[row][column] = shipObject;
                for (let i = 0; i < length; i++) {
                    this.grid[row][column + i] = shipObject;
                }
            }
        } 
        
        else if (direction == 'vertical') {
            if (row + length > 10) {
                return 'error - ship cannot be placed outside of bounds of the gameboard';
            } else {
                this.grid[row][column] = shipObject;
                for (let i = 0; i < length; i++) {
                    this.grid[row + i][column] = shipObject;
                }
            }
        }

        return this.grid;
    }

    receiveAttack(row, column) {
        column = column - 1;
        row = row - 1;

        if (this.grid[row][column] == 'M' || this.grid[row][column] == 'H') { // if already hit or missed
            return 'error - coordinate already marked'
        }
        
        else if (this.grid[row][column] == null) {
            this.grid[row][column] = 'M'; // M = miss
        } 

        else {
            this.grid[row][column].hit();
            this.grid[row][column] = 'H'; // H = hit
        }
        
        return this.grid;
    }

    areShipsSunk() {
        let counter = 0;
        this.ships.forEach((ship) => {
            if (ship.sunkStatus) {
                counter++;
            }
        })
        return counter == this.ships.length;
    }
}

class Player {
    constructor(type) {
        this.type = type;
        this.board = new Gameboard;
    }
}

export { Ship, Gameboard, Player }