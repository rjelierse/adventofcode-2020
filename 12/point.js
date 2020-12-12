import {WindDirection} from './wind-direction.js';

export class Point {
    x;
    y;

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    moveLateral(direction, places) {
        if (direction.is(WindDirection.NORTH)) this.y -= places;
        if (direction.is(WindDirection.SOUTH)) this.y += places;
        if (direction.is(WindDirection.WEST)) this.x -= places;
        if (direction.is(WindDirection.EAST)) this.x += places;
    }

    moveVector(point, count) {
        this.x += point.x * count;
        this.y += point.y * count;
    }

    distance() {
        return Math.abs(this.x) + Math.abs(this.y);
    }
}
