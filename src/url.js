import alfy from "alfy";
import { line } from "./utils.js";

export const encode = (input) => {
    const output = [line(encodeURIComponent(input), "URL encode"), line(encodeURI(input), "URL encode (unsafe)")];

    try {
        output.push(line(btoa(input), "Base64 encode"));
    } catch {}

    alfy.output(output);
};

export const decode = (input) => {
    const output = [line(decodeURIComponent(input), "URL decode"), line(decodeURI(input), "URL decode (unsafe)")];

    try {
        output.push(line(atob(input), "Base64 decode"));
    } catch {}

    alfy.output(output);
};
