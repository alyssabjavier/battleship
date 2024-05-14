class Ship {
    constructor(type, length) {
        this.type = type;
        this.length = length;
        this.hitCount = 0;
        this.sunkStatus = this.isSunk();
        this.isPlaced = false;
    };

    hit() {
        this.hitCount++;
        this.sunkStatus = this.isSunk(); // update object's sunk status
        console.log(`sunkStatus:${this.sunkStatus}`);
        console.log(`hitCount:${this.hitCount}`);
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

    isOverlapping(shipObject, row, column, direction) {
        const length = shipObject.length;
        if (direction === 'horizontal') {
            for (let i = 0; i < length; i++) {
                if (this.grid[row][column + i] != null) {
                    return true;
                }
            }
        } else if (direction === 'vertical') {
            for (let i = 0; i < length; i++) {
                if (this.grid[row + i][column] != null) {
                    return true;
                }
            }
        }
        return false;
    }

    placeShip(shipObject, row, column, direction) {
        // column = column - 1;
        // row = row - 1;
        const length = shipObject.length;

        // check for out of bounds
        if (direction === 'horizontal' && column + length > 10 || direction === 'vertical' && row + length > 10) {
            return 'error - ship cannot be placed outside of bounds of the gameboard';
        }

        // check for overlap
        if (this.isOverlapping(shipObject, row, column, direction)) {
            return 'error - ship overlaps with another ship';
        }

        for (let i = 0; i < length; i++) {
            if (direction === 'horizontal') {
                this.grid[row][column + i] = shipObject;
            } else if (direction === 'vertical') {
                this.grid[row + i][column] = shipObject;
            }
        }

        shipObject.isPlaced = true;

        return this.grid;
    }

    receiveAttack(row, column) {
        if (this.grid[row][column] == 'M' || this.grid[row][column] == 'H') { // if already hit or missed
            return 'error - coordinate already marked'
        }
        
        else if (this.grid[row][column] == null) {
            this.grid[row][column] = 'M'; // M = miss
        } 

        else {
            this.grid[row][column].hit();
            this.grid[row][column] = 'H'; // H = hit
            this.areShipsSunk();
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
        console.log(`counter:${counter}`);
        console.log(`areShipsSunk:${counter == this.ships.length}`)
        return counter == this.ships.length;
    }

}

class Player {
    constructor(type) {
        this.type = type;
        this.board = new Gameboard;
    }

    randomPlaceShip(shipObject) {
        function randomInt() {
            return Math.floor(Math.random() * 10);
        }
        function randomDirection() {
            const directions = ['horizontal', 'vertical'];
            return directions[Math.floor(Math.random() * directions.length)];
        }
        this.board.placeShip(shipObject, randomInt(), randomInt(), randomDirection());
    }

    AIPlaceShips() {
        this.board.ships.forEach((shipObject) => {
            while (!shipObject.isPlaced) {
                this.randomPlaceShip(shipObject)
            }
        })
    }
}


export { Ship, Gameboard, Player }