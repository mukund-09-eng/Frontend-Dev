let marks = [88, 76, 92, 81, 70];

let total = marks[0] + marks[1] + marks[2] + marks[3] + marks[4];
let average = total / marks.length;
let percentage = (total / 500) * 100;

let detained = marks.some(m => m < 35);

if (detained) {
    console.log("Detained");
} else if (percentage >= 85) {
    console.log("Promoted with Distinction");
} else if (percentage >= 50 && percentage < 85) {
    console.log("Promoted");
} else {
    console.log("Detained");
}

console.log("Average:", average.toFixed(2));
console.log("Percentage:", percentage.toFixed(2) + "%");
