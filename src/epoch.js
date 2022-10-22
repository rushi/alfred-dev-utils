import alfy from "alfy";
import * as chrono from "chrono-node";
import dayjs from "dayjs";

const epoch = (input) => {
    const date = formatToDayjs(input);
    if (Number(input)) {
        const output = [
            { title: date.format(), subtitle: "ISO8601, without fraction seconds" },
            {
                title: date.format("YYYY-MM-DD HH:mm:ss Z"),
                subtitle: "Your timezone",
            },
            {
                title: date.format("dddd, D MMMM YYYY h:mm:ss A Z"),
                subtitle: "Your timezone",
            },
        ];
        alfy.output(output);
    } else {
        const output = [
            { title: date.unix(), subtitle: "Unix Epoch (seconds)" },
            { title: date.valueOf(), subtitle: "Unix Epoch (milliseconds)" },
        ];
        alfy.output(output);
    }
};

export const formatToDayjs = (input) => {
    if (Number(input)) {
        const inputNum = Number(input);
        return input.length > 10 ? dayjs(inputNum) : dayjs.unix(inputNum);
    } else {
        const date = chrono.parseDate(input);
        return dayjs(date);
    }
};

export default epoch;
