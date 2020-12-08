export default class Command {
    instruction;
    argument;

    constructor(instruction, argument) {
        this.instruction = instruction;
        this.argument = parseInt(argument, 10);
    }
}
