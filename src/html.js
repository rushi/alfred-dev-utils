import alfy from "alfy";
import { decode, encode } from "html-entities";
import { line } from "./utils.js";

export const htmlEncode = (input) => {
    const output = [line(encode(input, { mode: "nonAsciiPrintable" }), input)];
    alfy.output(output);
};

export const htmlDecode = (input) => {
    const output = [line(decode(input), "HTML decode")];
    alfy.output(output);
};
