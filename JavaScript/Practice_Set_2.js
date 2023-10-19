// Question 1).  Check The Age Lies Between 10 to 20 Or Not.
let age;
age = prompt("Enter Your Age");
age = parseInt(age);
if(age>10 && age<20){
    alert("Your Age Lies Between 10 to 20");    
}
else{
    alert("Your Age Not Lies Between 10 to 20");
}


// Question 2). How We Can Use Switch Case?
let choice;
choice = prompt("1). Addition \n 2). Subtraction \n 3). Multiplication \n 4). Division\n Enter Your Chice[1-4]:");

choice = parseInt(choice);

let num1, num2;
num1 = prompt("Enter The First Number: ");
num2 = prompt("Enter The Second Number: ");

num1 = parseInt(num1);
num2 = parseInt(num2);


switch(choice){
    case 1:
        alert("Your Resut Is: "+num1+num2);
        break;
    
    case 2:
        alert("Your Resut Is: "+num1-num2);
        break;
    
    case 3:
        alert("Your Result Is: "+num1*num2);
        break;

    case 4:
        alert("Your Result Is: "+num1/num2);
        break;

    default:
        alert("Invalid Input!!!");
}



// Question 3). Wheather The Number Is Divisible By 2 or 3.
let num;
num = prompt("Enter The Number: ");
num = parseInt(num);

(num%2==0 || num%3==0)? alert("The Number Is Divisible by 2 And 3"):alert("Not Divisible by 2 And 3");


// // Question 4). Wheather The Number Is Divisible By 2 and 3. 
if(num%2==0 && num%3==0)
    alert("Number Is Divisible By 2 And 3");
else
    alert("Number Is Not Divisible by 2 And 3");


// Question 5). Find that a person can drive or not By Ternary Operator.
let age_for_drive;
age_for_drive = prompt("Enter Your Age:");
age_for_drive = parseInt(age_for_drive);

age_for_drive>=18 ? alert("You Can Drive") : alert("You Can Not Drive");
