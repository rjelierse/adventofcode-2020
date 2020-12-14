import parser from './parser.js';

const [[currentTime], busLines] = await parser(process.argv[2]);

const departure = (currentTime, line) => {
    const offset = currentTime % line;

    if (offset === 0) return 0;

    return line - offset;
}

const {line, departsIn} = busLines
    .filter(line => line !== 'x')
    .map(line => ({line, departsIn: departure(currentTime, line)}))
    .reduce((line, table) => line !== null && line.departsIn < table.departsIn ? line : table, null)

console.log(`Bus ${line} will departs in ${departsIn} minutes: ${line * departsIn}`)
