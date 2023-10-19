// // Question 1). Using For Loop Print The Marks Of Students In Object.
let marks = {
    "Arbaz" : 99,
    "Imran" : 100,
    "Saif Sir" : 100
};

for(let i=0; i<Object.keys(marks).length; i++){
    console.log("Marks Of", Object.keys(marks)[i], "is =", marks[Object.keys(marks)[i]]);
}


// Question 2). Do the previous question with For in loop

for(let i in marks){  // For in Loop
    console.log("Marks Of",i,"is =",marks[i]);
};

//  Question 3). Make Program to print "try again" until the user enter the right number.
let num = 45;
let i = 0;
while(i!=num){
    i = prompt("Enter The Number: ");
    if(i!=num)
        alert("Try Again");
}
alert("You Entered The Correct Number");


// Question 5). Make A Function to find mean of 5 numbers.
const mean = ()=>{
    let num, m=0;
    for(let i=0; i<5; i++){
        num = prompt("Enter The Next Number");
        num = parseInt(num);
        m = m + num;
    }
    return m/5;
}

alert("Mean Of Five Numbers Is = " + mean());