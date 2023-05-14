export default function cleanText(text) {
    console.log("cleanText: " + text);

    if (!text) {
        return text;
    }

    text = text
        .replace("\n\n", "")
        .replace("---", "");

    const startCleanupRegex = /(.*?)Observations:/im;
    const match = text.match(startCleanupRegex);
    if (match) {
        const allTheTextBeforeObservation = match[1]; // regex group capturing
        console.log(
            `All the text before observations is "${allTheTextBeforeObservation}"`
        );
        text = text.replace(allTheTextBeforeObservation, "");
    }

    console.log(`text without the start \n\n`, text);
    return text;

    // Clean code for the regex - but currently not working.
    //
    // if (data.result) {
    //     data.result = data.result
    //     .replace("\n\n", '')
    //     .replace("---", '');

    //     const startCleanupRegex = /.*?(Observations:.*)/im;
    //     const match = data.result.match(startCleanupRegex);
    //     if (match) {
    //         data.result = match[1]; // regex group capturing
    //     }
    // }
}
