import reader from '../x/reader.js';

export default async path => reader(path)
    .then(data => data
        .split('\n')
        .map(line => line
            .split(',')
            .map(v => v === 'x' ? v : parseInt(v, 10))
        )
    );
