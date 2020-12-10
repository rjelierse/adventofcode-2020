import parser from './parser.js';

const adapters = await parser(process.argv[2]);

adapters.sort(((a, b) => a - b));

const max = adapters[adapters.length - 1];

adapters.push(max + 3);

console.log(`Using ${adapters.length} adapters to reach output of ${max + 3} jolts`);

const diffs = adapters.map((value, index) => value - (adapters[index - 1] || 0));
const counts = diffs.reduce((counts, value) => ({...counts, [value]: counts[value] + 1 || 1}), {});

console.log(`Product of diffs: ${counts[1] * counts[3]}`);

const permutations = x => {
    switch (x) {
        case 0: return 0;
        case 1: return 1;
        case 2: return 1;
        default: return permutations(x - 1) + permutations(x - 2) + permutations(x - 3);
    }
};

const walk = (list, streak = 1) => {
    if (list.length === 0) return permutations(streak);

    const [diff, ...rest] = list;

    switch (diff) {
        case 1: return walk(rest, streak + 1);
        case 3: return permutations(streak) * walk(rest);
        default: throw new Error(`Unexpected diff ${diff}`);
    }
};

console.log(`Distinct methods for adapter arrangement: ${walk(diffs)}`);
