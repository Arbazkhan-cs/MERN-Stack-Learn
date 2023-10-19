// Question 1). Use prompt to take age as a input an than display that you can drive or not
let age = prompt("Enter Your Age")
age = Number.parseInt(age)
if(age>=18)
    alert("You Can Drive")
else
    alert("You Can Not Drive!!!")
    

// Question 2). Use Confirm to see prompt again or not.
let again=true;
while(again){
    let age = prompt("Enter Your Age")
    age = Number.parseInt(age)
    
    if(age>=18)
        alert("You Can Drive")
    else
        alert("You Can Not Drive!!!")
    
    again = confirm("Do you want to see the prompt again")
}


// Question 3). If the age is in negative than use display it as a Error
let ask=true;
while(ask){
    let age = prompt("Enter Your Age")
    age = Number.parseInt(age)

    if(age>=18)
        alert("You Can Drive")
    
    else if(age<0)
        console.error("You Entered A Negative Number")
    
    else
        alert("You Can Not Drive!!!")
    
    ask = confirm("Do you want to see the prompt again")
}


// Question 4). WAP to redirect to the google website if the user entered a number greater then 4.
let num = prompt("Enter A Number")
if(num>4)
    location.href = "https://www.google.com"


// Question 5). WAP to change the background color according to the user input.
let color = prompt("Enter A Color For The Background")
document.body.style.backgroundColor = color

