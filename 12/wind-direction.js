export class WindDirection {
    static NORTH = 'N';
    static SOUTH = 'S';
    static WEST = 'W';
    static EAST = 'E';

    direction;

    constructor(direction) {
        this.direction = direction;
    }

    is(direction) {
        return this.direction === direction;
    }

    reverse() {
        switch (this.direction) {
            case WindDirection.NORTH:
                return this.direction = WindDirection.SOUTH;
            case WindDirection.SOUTH:
                return this.direction = WindDirection.NORTH;
            case WindDirection.WEST:
                return this.direction = WindDirection.EAST;
            case WindDirection.EAST:
                return this.direction = WindDirection.WEST;
        }
    }

    turnLeft() {
        switch (this.direction) {
            case WindDirection.NORTH:
                return this.direction = WindDirection.WEST;
            case WindDirection.WEST:
                return this.direction = WindDirection.SOUTH;
            case WindDirection.SOUTH:
                return this.direction = WindDirection.EAST;
            case WindDirection.EAST:
                return this.direction = WindDirection.NORTH;
        }
    }

    turnRight() {
        switch (this.direction) {
            case WindDirection.NORTH:
                return this.direction = WindDirection.EAST;
            case WindDirection.EAST:
                return this.direction = WindDirection.SOUTH;
            case WindDirection.SOUTH:
                return this.direction = WindDirection.WEST;
            case WindDirection.WEST:
                return this.direction = WindDirection.NORTH;
        }
    }
}
