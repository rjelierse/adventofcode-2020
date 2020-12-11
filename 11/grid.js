import Grid from '../x/grid.js';

const GROUND = '.', EMPTY_SEAT = 'L', OCCUPIED_SEAT = '#';

export default class SeatingGrid extends Grid {
    isEmptySeat(x, y) {
        return this.get(x, y, GROUND) === EMPTY_SEAT;
    }

    isOccupiedSeat(x, y) {
        return this.get(x, y, GROUND) === OCCUPIED_SEAT;
    }

    markAsEmptySeat(x, y) {
        this.set(x, y, EMPTY_SEAT);
    }

    markAsOccupiedSeat(x, y) {
        this.set(x, y, OCCUPIED_SEAT);
    }

    getSurroundings(x, y) {
        return [
            this.get(x - 1, y - 1, GROUND),
            this.get(x, y - 1, GROUND),
            this.get(x + 1, y - 1, GROUND),
            this.get(x - 1, y, GROUND),
            this.get(x + 1, y, GROUND),
            this.get(x - 1, y + 1, GROUND),
            this.get(x, y + 1, GROUND),
            this.get(x + 1, y + 1, GROUND),
        ]
    }

    getVisibleSeats(x, y) {
        return [
            this.firstSeat(x, y, -1, -1),
            this.firstSeat(x, y, 0, -1),
            this.firstSeat(x, y, 1, -1),
            this.firstSeat(x, y, -1, 0),
            this.firstSeat(x, y, 1, 0),
            this.firstSeat(x, y, -1, 1),
            this.firstSeat(x, y, 0, 1),
            this.firstSeat(x, y, 1, 1),
        ];
    }

    firstSeat(x, y, right, down) {
        for (x += right, y += down; x >= 0 && x < this.width && y >= 0 && y < this.height; x += right, y += down) {
            const seat = this.get(x, y, GROUND);

            if (seat !== GROUND) return seat;
        }

        return GROUND;
    }
}
