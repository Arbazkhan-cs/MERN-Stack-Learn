// Question 1). Create a nav bar and change the color of its first element to white.
let nav = document.getElementsByClassName("main-nav")[0]
let nav_First_element = nav.firstElementChild.firstElementChild.firstElementChild;
nav_First_element.style.color = "white";


// Question 2). Create a table without tbody. Now use "view page souce" button to check wheather it has a tbody or not.
// Answer: No it will not show tbody in "view page source" by when you do inspect the brower will atomaticaly add tbody init.


// Question 3). Create an element with 3 children now change the color of first and last element to green.
let food_menu = document.getElementsByClassName("food-menu")[0]
let fchild = food_menu.firstElementChild;
let lchild = food_menu.lastElementChild;
fchild.style.color = "green"
lchild.style.color = "green"

// Question 4). Write a javascript code to change background  of all <li> tags to cyan.
let lists = document.querySelectorAll(".food-menu>li");
lists.forEach((Elements, Index, Array)=>{
    lists[Index].style.backgroundColor = "cyan";
})

