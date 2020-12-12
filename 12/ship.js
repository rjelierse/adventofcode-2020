import {Point} from './point.js';
import {Waypoint} from './waypoint.js';
import {WindDirection} from './wind-direction.js';

export class Ship {
    position;
    waypoint;

    /**
     * @param {Waypoint} waypoint
     * @param {Point} position
     */
    constructor(waypoint, position = new Point(0, 0)) {
        this.position = position;
        this.waypoint = waypoint;
    }

    navigate(...instructions) {
        instructions.forEach(i => this.apply(i));

        return this;
    }

    /**
     * @param {Instruction} instruction
     * @returns {*}
     */
    apply(instruction) {
        switch (instruction.action) {
            case 'N':
            case 'E':
            case 'S':
            case 'W':
                return this.applyDirection(new WindDirection(instruction.action), instruction.value);

            case 'F':
                return this.position.moveVector(this.waypoint, instruction.value);

            case 'L':
            case 'R':
                return this.turn(instruction.action, instruction.value);
        }
    }

    /**
     * @param {WindDirection} direction
     * @param {number} places
     */
    applyDirection(direction, places) {}

    turn(direction, angle) {
        switch (angle) {
            case 180:
                return this.waypoint.reverse();
            case 270:
                direction = direction === 'L' ? 'R' : 'L';
            case 90:
                return direction === 'L' ? this.waypoint.rotateLeft() : this.waypoint.rotateRight();
            default:
                throw new Error(`Unsupported angle: ${angle}`);
        }
    }

    distance() {
        return this.position.distance();
    }
}
