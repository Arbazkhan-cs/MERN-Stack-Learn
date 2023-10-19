// Question 1). Create a variable of type string and try to add a number to it.
let name = "Arbaz ";
let age  = 18;
console.log(name+age);

// Question 2). Find The Type Of The Above Question.
console.log(typeof name);

// Question 3). Create A Const Object, Can You Change It To Hold A Number Latter 
const data = {
    "Name": "Arbaz Khan",
    "Age": 18
};
console.log(data["Name"]);
data["Name"] = 1234;  // Yesn It Is POssible.
console.log(data.Name); // We can use dot operator to access object Key values.

// Question 4). Try To Add A New Key To The Const Object in Problem 3. Were you able to do it.
data["Email"] = "arbazkhaan.cs@gmail.com";  //Yes It IS Possible
console.log(data);
console.log(data["Email"]);

// Question 5). WAP to create a word-meaning dictionary of 5 words.
const wordMeaning = {
    "Appetite" : "Hunger",
    "Bookish" : "Fond Of Book",
    "Cadre" : "Center",
    "Dacoit" : "The Member Of Robber Band",
    "Edge" : "Border"
};