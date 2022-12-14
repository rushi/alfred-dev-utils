import { program } from "commander";
import epoch from "./src/epoch.js";
import showHelp from "./src/help.js";
import { htmlDecode, htmlEncode } from "./src/html.js";
import objectId from "./src/objectid.js";
import { decode as urlDecode, encode as urlEncode } from "./src/url.js";

program
    .command("epoch [input]")
    .description("Convert one date format into epoch time or vice-versa")
    .action((input) => epoch(input));

program
    .command("objectid [input]")
    .description("Convert a date into an ObjectId (MongoDB) and vice-versa")
    .action((input) => objectId(input));

program
    .command("url")
    .argument("<type>", "encode|decode")
    .argument("<input...>", "String to encode or decode")
    .description("URL encode/decode a string")
    .action((type, input) => {
        if (type === "encode") {
            urlEncode(input.join(" "));
        } else {
            urlDecode(input.join(" "));
        }
    });

program
    .command("html")
    .argument("<type>", "encode|decode")
    .argument("<input...>", "String to encode or decode")
    .description("HTML encode/decode a string")
    .action((type, input) => {
        if (type === "encode") {
            htmlEncode(input.join(" "));
        } else {
            htmlDecode(input.join(" "));
        }
    });

if (process.env.alfred_version) {
    program.command("help").action(() => {
        showHelp(program.commands, true);
    });
}

program.parse();

export const options = program.opts();
export const args = program.args;
