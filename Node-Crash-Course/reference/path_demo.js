const path = require('path');
console.log(__filename);
console.log(__dirname);
// Base file name
console.log(path.basename(__filename));
//File extension
console.log(path.extname(__filename));
//Create path object
console.log(path.parse(__filename));
//Concatenate paths
console.log(path.join(__dirname,'test','index.html'))