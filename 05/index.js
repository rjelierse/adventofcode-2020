import parser from './parser.js';

const boardingPasses = await parser(process.argv[2]);
const sortNumeric = (a, b) => a === b ? 0 : a < b ? -1 : 1;

console.log(boardingPasses);

boardingPasses.sort((a, b) => sortNumeric(a.seatId, b.seatId));

console.log(`Boarding pass with highest seat ID: ${boardingPasses[boardingPasses.length - 1].seatId}`);

for (let i = 0; i < boardingPasses.length - 1; i++) {
    const a = boardingPasses[i], b = boardingPasses[i + 1];

    if (a.seatId + 1 === b.seatId) continue;

    console.log(`Missing boarding pass has seat ID ${a.seatId + 1}`);

    break;
}
