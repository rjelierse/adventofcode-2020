import reader from '../x/reader.js';
import {CMD_SET_MASK, CMD_SET_VALUE} from './program.js';

const maskPattern = /^mask = ([01X]+)$/;
const memPattern = /^mem\[(\d+)] = (\d+)$/;

export default async path => reader(path)
    .then(data => data
        .split('\n')
        .map(line => {
            let result;

            if ((result = maskPattern.exec(line)) !== null)
                return {cmd: CMD_SET_MASK, mask: result[1]};
            if ((result = memPattern.exec(line)) !== null)
                return {cmd: CMD_SET_VALUE, addr: parseInt(result[1], 10), value: parseInt(result[2], 10)}

            throw new Error(`Unexpected line format: ${line}`);
        })
    )
