import alfy from "alfy";
import * as chrono from "chrono-node";
import dayjs from "dayjs";
import { line } from "./utils.js";

const epoch = (input = dayjs().valueOf()) => {
    const date = formatToDayjs(input);
    if (Number(input)) {
        const output = [
            line(date.format(), "ISO8601, without fraction seconds"),
            line(date.format("YYYY-MM-DD HH:mm:ss Z"), "Your timezone"),
            line(date.format("dddd, D MMMM YYYY h:mm:ss A Z"), "Your timezone"),
        ];
        alfy.output(output);
    } else {
        const output = [line(date.unix(), "Unix Epoch (seconds)"), line(date.valueOf(), "Unix Epoch (milliseconds)")];
        alfy.output(output);
    }
};

export const formatToDayjs = (input) => {
    if (Number(input)) {
        const inputNum = Number(input);
        return String(input).length > 10 ? dayjs(inputNum) : dayjs.unix(inputNum);
    } else {
        const date = chrono.parseDate(input);
        return dayjs(date);
    }
};

export default epoch;
