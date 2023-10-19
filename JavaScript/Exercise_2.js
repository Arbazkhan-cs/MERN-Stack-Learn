// Snake Water Gun
let choose = "swg"
let computer_wins=0, user_wins=0;
let ask = true;

let count=0;
while(ask){
    let computer = choose.charAt(Math.random()*choose.length)
    let user = prompt("Enter [s-\"Snake\", w-\"Water\", g-\"Gun\"]")
    
    if(computer==user)
        alert("Match Draw")
    
    else if(computer=="s" && user=="w"){
        alert("Computer Wins")
        computer_wins+=1
    }
    else if(computer=="w" && user=="g"){
        alert("Computer Wins")
        computer_wins+=1
    }
    else if(computer=="g" && user=="s"){
        alert("Computer Wins")
        computer_wins+=1
    }    
    else if(user=="s" && computer=="w"){
        alert("You Win")
        user_wins+=1
    }
    else if(user=="w" && computer=="g"){
        alert("You Win")
        user_wins+=1
    }
    else if(user=="g" && computer=="s"){
        alert("You Win")
        user_wins+=1
    }
    else
        alert("You Entered A Wrong Choice")
    
    count+=1
    
    if(count==10){
        ask = confirm("Do You Want To Play Again")
        count = 0
    }
}
alert("Computer Scores = "+computer_wins+" Your Score = "+user_wins)
