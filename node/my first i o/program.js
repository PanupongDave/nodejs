var fs = require('fs');

var filename = process.argv[2];

var file = fs.readFileSync(filename);

var contents = file.toString();

var stdout =  contents.split('\n').length -1;

console.log(contents);
