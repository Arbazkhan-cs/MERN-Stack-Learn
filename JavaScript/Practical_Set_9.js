// // Question 1). Load a script into the html file using promises.
// const scriptLoader = (src)=>{
//     return new Promise((resolve, reject)=>{
//         let script = document.createElement("script");
//         script.src = src;
//         document.body.appendChild(script);

//         script.onload = ()=>{
//             resolve(src);
//         }
//         script.onerror = ()=>{
//             reject(new Error("There is an issue on loading the script = "+src))
//         }
//     })
// }

// scriptLoader("https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js").then((value)=>{
//     alert("Your Script is loaded Successfully: script = "+value);
// }, (error)=>{
//     alert(error);
// });









// // ========================================Question 2).=======================================
// // Question 2). Do the previous question with async and await.
// async function scriptLoader(src){
//     return new Promise((resolve, reject)=>{
//         console.log("Panding...");
//         setTimeout(()=>{
//             let script = document.createElement("script");
//             script.src = src;
            
//             script.onload = ()=>{
//                 resolve("Script is loaded. Script = "+src);
//             }
//             script.onerror = ()=>{
//                 reject(new Error("There is some error while loading the script = "+src));
//             }
//             document.body.appendChild(script);
//         }, 3000)
//     })
// }

// const Loader = async ()=>{
//     let script = await scriptLoader("https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js");
//     console.log(script);
//     console.log("Done");
// }
// Loader();






// // =========================================Question 3). ===================================
// // Question 3). Do the previous and use try and catch to handle the Error.
// async function Script(src){
//     return new Promise((resolve, reject)=>{
//         console.log("Loading...");
//         setTimeout(()=>{
//             let script = document.createElement("script");
//             script.src = src;
            
//             script.onload = ()=>{
//                 resolve("Script is loaded. Script = "+src);
//             }
//             script.onerror = ()=>{
//                 reject(new Error("There is some error while loading the script = "+src));
//             }
//             document.head.appendChild(script);
//         }, 3000)
//     })
// }

// async function Loader(){
//     try{
//         let script = await Script("https://cdn.jsdelivree.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js")
//         console.log(script);
//     }
//     catch(error){
//         console.log(error.message)
//     }
//     finally{
//         console.log("Loading End...")
//     }
// }

// Loader();
