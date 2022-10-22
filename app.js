import { program } from "commander";
import epoch from "./src/epoch.js";
import showHelp from "./src/help.js";
import { htmlDecode, htmlEncode } from "./src/html.js";
import objectId from "./src/objectid.js";
import { decode as urlDecode, encode as urlEncode } from "./src/url.js";

program
    .command("epoch <input>")
    .description("Convert one date format into epoch time or vice-versa")
    .action((input) => epoch(input));

program
    .command("objectid <input>")
    .description("Convert a date into an ObjectId (MongoDB) and vice-versa")
    .action((input) => objectId(input));

program
    .command("url")
    .argument("<type>", "encode|decode")
    .argument("<input>", "String to encode or decode")
    .description("URL encode/decode a string")
    .action((type) => {
        const input = process.argv.slice(4).join(" ");
        if (type === "encode") {
            urlEncode(input);
        } else {
            urlDecode(input);
        }
    });

program
    .command("html")
    .argument("<type>", "encode|decode")
    .argument("<input>", "String to encode or decode")
    .description("HTML encode/decode a string")
    .action((type) => {
        const input = process.argv.slice(4).join(" ");
        if (type === "encode") {
            htmlEncode(input);
        } else {
            htmlDecode(input);
        }
    });

if (process.env.alfred_version) {
    program.command("help").action(() => {
        showHelp(program.commands);
    });

    program.configureHelp({
        formatHelp() {
            return showHelp(program.commands, false);
        },
    });
}

program.parse();

export const options = program.opts();
export const args = program.args;
