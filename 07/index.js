import parser from './parser.js';

const definitions = await parser(process.argv[2])
    .then(bags => {
        const map = new Map();

        bags.forEach(bag => map.set(bag.color, bag));

        return map;
    });

const getBag = color => definitions.get(color);

const canContain = (bag, color) => {
    if (bag.isEmpty) return false;
    if (bag.contains.some(v => v === color)) return true;

    return bag.contains.some(v => canContain(getBag(v), color));
};

const some = Array.from(definitions.values()).reduce((sum, bag) => {
    return canContain(bag, 'shiny gold') ? sum + 1 : sum;
}, 0);

console.log(`${some} bags can contain a shiny gold bag`);

const contains = (bag) => {
    if (bag.isEmpty) return 0;

    return bag.contains.reduce((sum, color) => {
        const count = bag.contents.get(color);

        return sum + count + count * contains(getBag(color));
    }, 0);
}

console.log(`A shiny gold bag contains ${contains(getBag('shiny gold'))} bags`);
