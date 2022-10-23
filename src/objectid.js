import alfy from "alfy";
import ObjectID from "bson-objectid";
import dayjs from "dayjs";
import { formatToDayjs } from "./epoch.js";
import { line } from "./utils.js";

const re = /^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i;

const objectId = (input = dayjs().valueOf()) => {
    let output;
    if (re.test(input)) {
        const timestamp = ObjectID.createFromHexString(input).getTimestamp();
        output = [
            line(timestamp, "ISO8601, without fraction seconds"),
            line(dayjs(timestamp).unix(), "Unix Epoch (seconds)"),
            line(dayjs(timestamp).valueOf(), "Unix Epoch (milliseconds)"),
            line(dayjs(timestamp).format("YYYY-MM-DD HH:mm:ss Z"), "Your timezone"),
        ];
    } else {
        const hex = ObjectID.createFromTime(input).toHexString();
        const date = formatToDayjs(input);
        output = [
            line(hex, "Hexadecimal"),
            line(`ObjectId("${hex}")`, "MongoDB Format"),
            line(date.format("YYYY-MM-DD HH:mm:ss Z"), "Your timezone"),
        ];
    }

    const currentID = ObjectID();
    output.push(
        line(currentID, "Hexadecimal for current time"),
        line(`ObjectId("${currentID}")`, "ObjectID for current time"),
    );
    alfy.output(output);
};

export default objectId;
