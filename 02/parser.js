import reader from '../x/reader.js';

const pattern = /^([0-9]+)-([0-9]+) ([a-z]): (.+)$/;

export default async path => reader(path)
    .then(data => data
        .split('\n')
        .map(line => pattern.exec(line))
        .filter(result => result !== null)
        .map(matches => [[matches[1], matches[2], matches[3]], matches[4]])
    );
