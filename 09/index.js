import parser from './parser.js';
import {sum as sumList} from '../x/math.js';

const list = await parser(process.argv[2]);
const preamble = parseInt(process.argv[3], 10);

const findInvalidSum = (list, preamble) => list
    .find((value, index) => {
        if (index < preamble) return false;

        const window = list.slice(index - preamble, index);

        return !hasSum(value, window);
    })

const hasSum = (value, values) => values.some(x => values.some(y => x !== y && x + y === value));

const missingSum = findInvalidSum(list, preamble);

console.log(`First number that is not a sum of the previous ${preamble} numbers: ${missingSum}`);

const findSet = (list, sum) => {
    for (let i = 0; i < list.length; i++) {
        for (let j = 2; j < (list.length - i); j++) {
            const batch = list.slice(i, i + j);
            const value = sumList(...batch);

            if (value === sum) {
                batch.sort((a, b) => b - a);
                return batch[0] + batch[batch.length-1];
            }
            if (value > sum) break;
        }
    }
};

console.log(`Encryption weakness: ${findSet(list, missingSum)}`);
