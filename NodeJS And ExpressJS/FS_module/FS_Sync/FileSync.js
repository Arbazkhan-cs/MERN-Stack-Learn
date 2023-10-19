// const fs = require('fs');

// // Step 1, Creating the folder
// fs.mkdirSync("FS_module");

// // Step 2, copying the JS file to the above folder.
// fs.renameSync("FileSync.js", "./FS_module/FS_Sync/FileSync.js");

// // Step 3, removing the file which we now don't want to use.
// fs.unlinkSync("FileSync.js");

// // Step 4, Creating a new text file and writing some data init.
// fs.writeFileSync("TextSync.txt", "This is a Synchronusly auto generated Text File.");

// // Step 5, adding more text in the text file.
// fs.appendFileSync("TextSync.txt", "\nThis is another text which is append by using appendFileSync() function.");

// Step 6, reading the text file data.
// const read = fs.readFileSync("TextSync.txt", "utf-8");
// console.log(read);
