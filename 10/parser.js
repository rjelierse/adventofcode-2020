import reader from '../x/reader.js';

export default async path => reader(path)
    .then(data => data
        .split('\n')
        .map(line => parseInt(line, 10))
    );
