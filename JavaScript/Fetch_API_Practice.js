// fetch(url, {optional}): here optional area is used to set, get, request header, etc. If you are not using optional then it will asumme as a request or get api.
let x = fetch("https://goweather.herokuapp.com/weather/india")
x.then((response)=>{
    console.log(response.status)
    console.log(response.ok)
    return response.json()  // it return a promise with the value from the jason script.
}).then((value)=>{
    console.log(value);
})

// let x = fetch("https://goweather.herokuapp.com/weather/india/delhi")   // Error Handling.
// x.then((response)=>{
//     console.log(response.status)
//     console.log(response.ok)
//     return response.json()
// }).then((value)=>{
//     console.log(value);
// }, (error)=>{
//     console.log("There is a problem while fectching the wheather", error)
// })