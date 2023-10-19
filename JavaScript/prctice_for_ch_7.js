// These Are Methods TO Access Nodes 
let a = document.documentElement; // document.documentElement is used to select html ElementNode.
console.log(a);

let b = document.body; // It is used to select body ElementNode.
console.log(b);

let c = document.head;  // It will select the head ElementNode.
console.log(c);

let d = document.title; // It is used to acces the title textNode, It will return a string.
console.log(d);


// Accessing Children
let fChild = document.body.firstChild;
let lChild = document.body.lastChild;
