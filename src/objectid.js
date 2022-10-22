import alfy from "alfy";
import ObjectID from "bson-objectid";
import dayjs from "dayjs";
import { formatToDayjs } from "./epoch.js";

const re = /^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i;

const objectId = (input) => {
    let output;
    if (re.test(input)) {
        const timestamp = ObjectID.createFromHexString(input).getTimestamp();
        output = [
            { title: timestamp, subtitle: "ISO8601, without fraction seconds" },
            { title: dayjs(timestamp).unix(), subtitle: "Unix Epoch (seconds)" },
            { title: dayjs(timestamp).valueOf(), subtitle: "Unix Epoch (milliseconds)" },
            {
                title: dayjs(timestamp).format("YYYY-MM-DD HH:mm:ss Z"),
                subtitle: "Your timezone",
            },
        ];
    } else {
        const hex = ObjectID.createFromTime(input).toHexString();
        const date = formatToDayjs(input);
        output = [
            { title: hex, subtitle: "Hexadecimal" },
            { title: `ObjectId("${hex}")`, subtitle: "MongoDB Format" },
            { title: date.format("YYYY-MM-DD HH:mm:ss Z"), subtitle: "Your timezone" },
        ];
    }

    const currentID = ObjectID();
    output.push(
        { title: currentID, subtitle: "Hexadecimal for current time" },
        { title: `ObjectId("${currentID}")`, subtitle: "ObjectID for current time" },
    );
    alfy.output(output);
};

export default objectId;
