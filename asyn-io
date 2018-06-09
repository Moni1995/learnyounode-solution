var fs = require('fs');

var path = process.argv[2];
fs.readFile(path, (err, file) => {
if (err) throw err;
console.log(file.toString().split('\n').length-1);
});

