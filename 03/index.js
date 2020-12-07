import parser from './parser.js';
import {product} from '../x/math.js';

const grid = await parser(process.argv[2]);

const vectors = [[1, 1], [3, 1], [5, 1], [7, 1], [1, 2]];

const counts = vectors.map(
    ([right, down]) => Array.from(grid.traverse(right, down))
        .filter(value => value === '#')
        .length
);

console.log(`Trees encountered on first run: ${counts[1]}`)
console.log(`Tree product: ${product(...counts)}`)
