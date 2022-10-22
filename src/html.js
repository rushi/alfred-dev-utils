import alfy from "alfy";
import { decode, encode } from "html-entities";

export const htmlEncode = (input) => {
    const output = [{ title: encode(input, { mode: "nonAsciiPrintable" }), subtitle: `${input}` }];
    alfy.output(output);
};

export const htmlDecode = (input) => {
    const output = [{ title: decode(input), subtitle: "HTML decode" }];
    alfy.output(output);
};
