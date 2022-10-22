import alfy from "alfy";

const showHelp = (commands, useAlfy = true) => {
    const outputs = commands.map((command) => {
        const help = command.helpInformation().replace("Usage: app ", "");
        return {
            title: help,
            subtitle: command.description(),
        };
    });

    if (useAlfy) {
        alfy.output(outputs);
    } else {
        return commands.map((command) => command.name()).join(", ");
    }
};

export default showHelp;
