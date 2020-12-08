export default class Program {
    accumulator = 0;
    steps = new Set();
    commands;

    constructor(commands) {
        this.commands = commands;
    }

    run() {
        // Reset state
        this.accumulator = 0;
        this.steps.clear();

        let iter = 0;

        while (true) {
            let command;

            try {
                command = this.getCommand(iter);
            } catch {
                return this.accumulator;
            }

            let next = 0;

            this.steps.add(iter);

            switch (command.instruction) {
                case 'acc':
                    this.accumulator += command.argument;
                    next = iter + 1;
                    break;

                case 'nop':
                    next = iter + 1;
                    break;

                case 'jmp':
                    next = iter + command.argument;
                    break;

                default:
                    throw new Error(`Unknown command: ${command.instruction}`);
            }

            if (this.steps.has(next)) {
                throw new Error(`Infinite loop triggered at line ${iter}`);
            }

            iter = next;
        }
    }

    getCommand(index) {
        if (this.commands[index]) return this.commands[index];

        throw new RangeError(`No command exists at ${index}`);
    }
}
