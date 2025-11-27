const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

let validNumbers = [];
let invalidNumbers = [];
let report = [];

for (let item of apiData) {
    let numberValue = Number(item);
    let booleanValue = Boolean(item);
    let stringValue = String(item);

    let isValid =
        !isNaN(numberValue) &&
        item !== " " &&
        item !== "100px" &&
        item !== "NaN";

    if (isValid) validNumbers.push(numberValue);
    else invalidNumbers.push(item);

    report.push({
        original: item,
        numberForm: numberValue,
        booleanForm: booleanValue,
        stringForm: stringValue,
        isValidNumber: isValid
    });
}

console.log("===== Detailed Report =====\n");

for (let r of report) {
    console.log(
`Original: ${r.original}
Number: ${r.numberForm}
Boolean: ${r.booleanForm}
String: "${r.stringForm}"
Valid Number: ${r.isValidNumber ? "YES" : "NO"}
-----------------------------------------`
    );
}

console.log("\nValid Numbers:", validNumbers);
console.log("Invalid Numbers:", invalidNumbers);
