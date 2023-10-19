// GUESS THE NUMBER
let num = Math.floor(Math.random()*100);
console.log(num);
let input, guesses=0;
do{
    input = prompt("Enter The Number:");
    input = Number.parseInt(input);

    
    if(input==num)
    alert("\"You Guess The Correct Answer\" Your Final Score Is = "+(100-guesses));
    else if(input>num)
    alert("The Number Is Smaller!!!")
    else 
    alert("The Number Is Greater!!!");
    
    guesses += 1;
        
}while(num!=input);



// let btn = document.getElementById('btn');
// console.log(btn);

// let content = document.getElementsByClassName("content");
// content[0].style.textAlign = "center";

// const hacker = ()=>{
//     let btn = document.getElementById('btn');
//     btn.innerHTML = "You Are Hacked";
// }