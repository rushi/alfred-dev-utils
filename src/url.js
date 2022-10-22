import alfy from "alfy";

export const encode = (input) => {
    const output = [
        { title: encodeURIComponent(input), subtitle: "URL encode" },
        { title: encodeURI(input), subtitle: "URL encode (unsafe)" },
    ];

    try {
        output.push({ title: btoa(input), subtitle: "Base64 encode" });
    } catch {}

    alfy.output(output);
};

export const decode = (input) => {
    const output = [
        { title: decodeURIComponent(input), subtitle: "URL decode" },
        { title: decodeURI(input), subtitle: "URL decode (unsafe)" },
    ];

    try {
        output.push({ title: atob(input), subtitle: "Base64 decode" });
    } catch {}

    alfy.output(output);
};
