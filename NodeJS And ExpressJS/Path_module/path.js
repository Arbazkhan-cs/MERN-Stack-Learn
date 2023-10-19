const path = require('path');

const node = "C:/Users/webLearning/JS/path.js";
console.log(node);
console.log("Directory Path = ",path.dirname(node)); // \user\webLearning\JS
console.log("Base name = ", path.basename(node));  // path.js
console.log("Base name without extansion = ", path.basename(node, path.extname(node))); // path
console.log("File Extansion = ",path.extname(node)); // .js

const fname = "path2.js";
const node2 = path.join("/user", "webLearning", "JS", fname);  // \user\webLearning\JS\path2.js
console.log(node2);

console.log(path.resolve("node3.txt"));  //It resolve the path with current working directory: C:\Users\Arbaz Khan\Desktop\NodeJS\node3.txt
console.log(path.resolve("WebLearning", "node3.txt"));  // Now it will also add the folder that we return in the parameter: C:\Users\Arbaz Khan\Desktop\NodeJS\WebLearning\node3.txt
console.log(path.normalize('/users/joe/..//test.txt')); // normalise function will give you the normal path of ypu file: '/users/test.txt'
console.log(path.parse(node));   // it returns the object of root, dir, base, ext, name.