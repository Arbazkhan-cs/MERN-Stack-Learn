// Question 1). Write a program to show differefnt alerts when different buttons are click.
// Question 2). Write a website which is capable of storing bookmarks of your favorite websites using href.
// Question 3). Repeat Question 2 Using event listeners
let google = document.getElementById("google").addEventListener("click", ()=>{
    location.href = "https://google.com"
})
let fb = document.getElementById("fb").addEventListener("click", ()=>{
    location.href = "https://facebook.com"
})
let yt = document.getElementById("yt").addEventListener("click", ()=>{
    location.href = "https://youtube.com"
})

// Question 5). Write a javascript program to keep fetching contents of a website(Every 5 Seconds)
setInterval(async function() {
    let urlId = 'http://127.0.0.1:5500/Practce%20Set%208/Practice_Set_8_Ques.html'
    console.log(await fetch(urlId))
}, 5000)


// Question 6).
let on_off = document.getElementsByClassName("on")[0]
const bulb_off = ()=>{
    on_off.classList.toggle("off")
}
