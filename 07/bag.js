const bagPattern = /^(.+) bags$/;
const contentsPattern = /^([0-9]+) (.+) bags?\.?$/;

export default class Bag {
    color;
    isEmpty = false;
    contents;

    static fromDescription(description) {
        const [bag, contents] = description.split('contain').map(parts => parts.trim());

        return new Bag(bag, contents);
    }

    constructor(bag, contents) {
        [, this.color] = bagPattern.exec(bag);
        this.contents = new Map();

        if (contents === 'no other bags.') this.isEmpty = true;
        else contents
            .split(',')
            .map(part => part.trim())
            .forEach(part => {
                const result = contentsPattern.exec(part);
                if (result === null) return;
                const [, count, color] = result;

                this.contents.set(color, parseInt(count, 10));
            });
    }

    get contains() {
        return Array.from(this.contents.keys());
    }
}
