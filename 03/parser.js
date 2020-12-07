import reader from '../x/reader.js';
import Grid from '../x/grid.js';

export default async path => reader(path)
    .then(data => data
        .split('\n')
        .map(line => line.split(''))
    )
    .then(data => new Grid(data));
