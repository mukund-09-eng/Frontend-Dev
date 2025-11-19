let userName = "Mukund";
let age = 20;
let isActive = true;
let hobbies = ["coding", "music"];
let profile = { city: "Delhi", id: 101 };
let emptyValue = null;
let notAssigned;

let report = [
    { label: "userName", value: userName, type: typeof userName },
    { label: "age", value: age, type: typeof age },
    { label: "isActive", value: isActive, type: typeof isActive },
    { label: "hobbies", value: hobbies, type: Array.isArray(hobbies) ? "array" : typeof hobbies },
    { label: "profile", value: profile, type: typeof profile },
    { label: "emptyValue", value: emptyValue, type: "null" },
    { label: "notAssigned", value: notAssigned, type: typeof notAssigned }
];

console.table(report);
