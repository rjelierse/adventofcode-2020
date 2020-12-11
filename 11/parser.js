import reader from '../x/reader.js';
import SeatingGrid from './grid.js';

export default async path => reader(path)
    .then(data => data
        .split('\n')
        .map(line => line.split(''))
    )
    .then(data => new SeatingGrid(data))
;
