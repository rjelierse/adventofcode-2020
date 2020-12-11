import parser from './parser.js';
import SeatingGrid from './grid.js';

const grid = await parser(process.argv[2]);
const countOccupied = (count, cell) => cell === '#' ? count + 1 : count;

const arrangeFor1 = (current) => {
    const next = new SeatingGrid();

    for (let x = 0; x < current.width; x++) {
        for (let y = 0; y < current.height; y++) {
            const occupiedCount = current.getSurroundings(x, y).reduce(countOccupied, 0);

            if (current.isEmptySeat(x, y) && occupiedCount === 0) {
                next.markAsOccupiedSeat(x, y);
            } else if (current.isOccupiedSeat(x, y) && occupiedCount >= 4) {
                next.markAsEmptySeat(x, y);
            } else {
                next.set(x, y, current.get(x, y))
            }
        }
    }

    return next;
}

const solveFor1 = (current) => {
    let next;
    for (let round = 1;; round++) {
        next = arrangeFor1(current);

        if (current.equals(next)) {
            console.log(`Choas subsided after ${round} rounds`)
            return current;
        }

        current = next;
    }
}

const solution1 = solveFor1(grid).toArray().reduce((count, cell) => cell === '#' ? count + 1 : count, 0);

console.log(`Occupied seats after chaos dies down: ${solution1}`);

const arrangeFor2 = (current) => {
    const next = new SeatingGrid();

    for (let x = 0; x < current.width; x++) {
        for (let y = 0; y < current.height; y++) {
            const occupiedCount = current.getVisibleSeats(x, y).reduce(countOccupied, 0);

            if (current.isEmptySeat(x, y) && occupiedCount === 0) {
                next.markAsOccupiedSeat(x, y);
            } else if (current.isOccupiedSeat(x, y) && occupiedCount >= 5) {
                next.markAsEmptySeat(x, y);
            } else {
                next.set(x, y, current.get(x, y))
            }
        }
    }

    return next;
}

const solveFor2 = (current) => {
    let next;
    for (let round = 1;; round++) {
        next = arrangeFor2(current);

        if (current.equals(next)) {
            console.log(`Choas subsided after ${round} rounds`)
            return current;
        }

        current = next;
    }
}

const solution2 = solveFor2(grid).toArray().reduce(countOccupied, 0);

console.log(`Occupied seats after chaos dies down: ${solution2}`);
