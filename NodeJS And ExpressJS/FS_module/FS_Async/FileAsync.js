const fs = require("fs");
// // Step 1, Creating New Directory
// fs.mkdir("FS_Async", (err)=>{
//     if(err){
//         console.log("There is some error while creating the directory");
//         return;
//     }
//     console.log("Directory is created")
// })

// // Step 2, Moving the file to the above directory.
// fs.rename("FileAsync.js", "./FS_Async/FileAsync.js", (err)=>{
//     if(err){
//         console.log("There is some error while renaming the file name");
//         return;
//     }
//     console.log("File is successfully renamed");
// });

// // Step 3, Creating a new text file.
// fs.writeFile("TextAsync.txt", "This is a Asynchronusly auto generated Text File.", (err)=>{
//     if(err){
//         console.log("There is some error while creating the text file");
//         return;
//     }
//     console.log("Text File is successfully generated");
// });

// // Step 4, Adding more data inside the text file.
// fs.appendFile("TextAsync.txt", "\nThis is another text which is append by using appendFile() function.", (err)=>{
//     if(err){
//         console.log("There is some error while appending the data inside the text file.");
//         return;
//     }
//     console.log("Data is appended Successfully");
// });

// // Step 5, Reading the text data.
// fs.readFile("TextAsync.txt", "utf-8", (err, data)=>{
//     if(err){
//         console.log("There is some error while reading the text file data");
//         return;
//     }
//     console.log(data);
// })