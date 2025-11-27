"use strict";
function debugPyramid(rows = 5) {
  for (let i = 1; i <= rows; i++) {
    let line = "";
    debugger; // add watch for i, j, line
    for (let j = 1; j <= i; j++) {
      line += "* ";
    }
    console.log(line.trim());
  }
}
debugPyramid(4);
