import {Point} from './point.js';

export class Waypoint extends Point {
    reverse() {
        this.x = -this.x;
        this.y = -this.y;
    }

    rotateLeft() {
        const {x, y} = this;

        this.x = y;
        this.y = -x;
    }

    rotateRight() {
        const {x, y} = this;

        this.x = -y;
        this.y = x;
    }
}
