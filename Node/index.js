const fs = require("fs");
const superheros = require("superheroes");
fs.copyFileSync("file1.txt", "file2.txt");

// for (var i = 0; i < 10; i++) {
//   console.log(superheros.random());
// }

const supervillains = require("supervillains");

console.log(supervillains.random());
