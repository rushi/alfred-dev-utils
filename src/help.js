import alfy from "alfy";

const showHelp = (commands, useAlfy = true) => {
    const outputs = commands
        .map((command) => {
            if (command.name() === "help") {
                return null;
            }

            const help = command.helpInformation().replace("Usage: app ", "");
            return {
                title: help,
                arg: command.name(),
                subtitle: command.description(),
            };
        })
        .filter(Boolean);

    if (useAlfy) {
        alfy.output(outputs);
    } else {
        return commands.map((command) => command.name()).join(", ");
    }
};

export default showHelp;
