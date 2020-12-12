import parser from './parser.js';
import {Ship} from './ship.js';
import {Waypoint} from './waypoint.js';

const instructions = await parser(process.argv[2]);

const ship1 = new class extends Ship {
    applyDirection(direction, places) {
        this.position.moveLateral(direction, places);
    }
}(new Waypoint(1, 0));

console.log(`Ship is ${ship1.navigate(...instructions).distance()} points away from starting position`);

const ship2 = new class extends Ship {
    applyDirection(direction, places) {
        this.waypoint.moveLateral(direction, places);
    }
}(new Waypoint(10, -1));

console.log(`Ship is ${ship2.navigate(...instructions).distance()} points away from starting position`);
