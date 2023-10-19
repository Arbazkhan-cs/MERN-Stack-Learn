// // Synchronus  Action:
//         // These Action are those action which executes the statement line by line. Example:
// let name = prompt("Enter Your Name");
// let age = Number.parseInt(prompt("Enter Your Age"));
// console.log("Your Name is", name, "and you are", age, "years old");
// // So in above Example All Statements are executing line by line and in the same sequence.



// // Asynchronus Action:
//         //  These Action are those action where the statement will execute but they don't have a fixed time to execute. Example: the best example of it is our setTimeout() function.
// console.log("Start");
// setTimeout(()=>{
//     console.log("this statement will execute after the 3 seconds");
// }, 3000);
// console.log("End");
// // So in above Example the first statement will execute and then it will go to the next statement to execute but because of setTimeout function it will send the program at backend and then executes the next statement of it. Then after the 3 second it will execute that function.



// function scriptadder(src, callback){
//     let script = document.createElement("script");
//     script.src = src;
//     script.onload = ()=>{
//         callback(null, src);
//     }
//     script.onerror = ()=>{
//         success(new Error, src);
//     }
//     document.body.appendChild(script);
// }

// function success(error, src){
//     if(error){
//         console.log("You got an error", src);
//         return
//     }
//     console.log("Your script is successfuly loaded");
// }


// scriptadder("https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js", success);



// // ===============================================================================================================
//  Promises
// console.log("start")
// // Promise are used to execute promises parallel
// let promise1 = new Promise((resolve, reject)=>{
//     console.log("Pandding...")
//     setTimeout(()=>{
//         // console.log("Your order is placed")
//         resolve("done");  // If it is resolve than it will retuen a value.

//     }, 5000)
// })

// let promise2 = new Promise((resolve, reject)=>{
//     console.log("Pandding...")
//     setTimeout(()=>{
//         // console.log("Your order is rejected");
//         reject(new Error("you are rejected"))  // If it is reject than it will through an Error.
//     }, 5000)
// })

// // console.log(promise1)
// // console.log(promise2)
// // So in above example both promises are executing parellely...



// =============================================================================================================
// .then and .catch function()
// // suppose we want to use function when our code is rejected or resolved.
// // in promise there is a state option which can eithir "fulfilled" or "rejected"
// promise1.then((value)=>{  //.then is used for resolve
//     console.log("the value return by the resolve is: "+value);
// })

// promise2.catch((error)=>{  //.catch is used for reject
//     console.log("Some error occured in promise2: "+error)
// })

// // In .than function we can also catch the error
// let promise3 = new Promise((resolve, reject)=>{
//     console.log("Panding...")
//     setTimeout(()=>{
//         reject(new Error("This is an promise3 error catched by .then function"))
//     })
// })
// // If promise3 is resolved than it will execute first function else if it is a reject than it will execute the second function inside the .than function to fatch the error.
// promise3.then((value)=>{  
//     console.log(value);
// }, (error)=>{
//     console.log("Error using \"+\": "+error)  // If you use + operator then it will not show the statatement of the reject.

//     console.log("Error using \",\":", error);  // It will also show the reject statement line.
// })




// =============================================================================================================
// // promise chain
// let script = document.createElement("script")
// let network = new Promise((resolve, reject)=>{
//     console.log("Request Panding...")
//     setTimeout(()=>{
//         script.src = "https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js";
//         document.body.appendChild(script)
//         script.onload = ()=>{
//             resolve(script);
//         }
//         script.onerror = ()=>{
//             reject(new Error("your request is rejected"))
//         }
//     }, 5000)
// })
    
// network.then((script)=>{
//     console.log("Your Script is loaded...", script);
//     return new Promise((resolve, reject)=>{
//         let script2 = document.createElement("script");
//         script2.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js"
//         document.body.appendChild(script2);
//         script2.onload = ()=>{
//             resolve(script2);
//         }
//         script2.onerror = ()=>{
//             reject(new Error("this is an error on script2"));
//         }
//     })
// }).then((script2)=>{
//     console.log("Your Second Script is also loaded...", script2);
// }).catch((error)=>{
//     console.log(error);
// })




// ==============================================================================================================
// // Attaching Handlers
// let p = new Promise((resolve, reject)=>{
//     console.log("Fatching Data...");
//     setTimeout(()=>{
//         resolve(56);
//     }, 3000)
// })

// p.then(()=>{
//     console.log("Data is fetched");
// })
// p.then((value)=>{
//     console.log("Data Packet no. is", value);
// })
// p.then(()=>{
//     console.log("Data fetching has stoped");
// })
// // Data handlers means that we can use multiple .then function in same promise and these were execute according to their sequecnce.






// // =========================================================================================================
// // Promise API
// let p1 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("p1 is resolved");
//     }, 1000);
// });

// let p2 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("p2 is resoved");
//     }, 2000);
// });

// let p3 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("p3 is resolved");
//     }, 3000);
// });


// p1.then((value)=>{
//     console.log(value);
// })
// p2.then((value)=>{
//     console.log(value);
// })
// p3.then((value)=>{
//     console.log(value);
// })

// // Now in above lines we have just created p1, p2 and p3 promise variables and then we put setTimeout in all the promises and then we are printing the resolve value all of them one by one, as we have done in our previous leraning.
// // Suppose we want to print all the values at the same time then how we will do that? So Here the Promise API comes which provides us different type  of function to print all the values at same time or to print the first executed promise only etc.

// // Promise API Functions Are:
// // 1). Promise.all(array): This function will executes all the values at the same time(If there is any time gap between the promises than it will execute all the promises according to their time in the backend and then all the promises succesfully runed than it will execute all these promises at the same time in the web page.) but all promise have to be resolve because if one of them have any reject than it will not work, It will give the reject. In this function we have to pass a promise array. An last but not the least is that it will return a new Promise.

// let p4 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("p4 is resolved");
//     }, 2000);
// });

// let p5 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("p5 is resoved");
//     }, 3000);
// });

// let p6 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("p6 is resolved");
//     }, 1000);
// });

// let p7 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         reject(new Error("p7 Get some error"));
//     });
// });

// let promise = Promise.all([p4, p5, p6]);  // It will execute successfully as there is no reject.
// promise.then((values)=>{
//     console.log(values);  // It will return the array of the promises resolved values
//     console.log(values[0]);
//     console.log(values[1]);
//     console.log(values[2]);
// })

// let promise2 = Promise.all([p4, p5, p6, p7]);  // Here it will not work as p7 is consist of reject. So it will consist of the reject function only.
// promise2.then((values)=>{
//     console.log(values);
// })

// // So to fix the above problem we can use another Function which is:
// // 2). Promise.allSettled(array): it is same as Promise.all but it acn also take the reject promise also in the array. This will return the array of object.
// let promise2_1 = Promise.allSettled([p4, p5, p6, p7]);
// promise3.then((values)=>{
//     console.log(values);
//     console.log(values[0]);
//     console.log(values[1]);
//     console.log(values[2]);
//     console.log(values[3]);
// })

// // Suppose we want to return that promise which executes first than we have a function:
// // 3). Promise.race(array): It will return that promise which executes first in the backend. But it have same issue like .all function as if in the promise array if there is any reject than it will execute that error when that promise was run before all the others.
// let promise3= Promise.race([p4, p5, p6]);
// promise3.then((values)=>{
//     console.log(values);
// })
// let promise3_1 = Promise.race([p4, p5, p6, p7]);
// promise3_1.then((values)=>{
//     console.log(values);
// })


// // 4). Promise.any(array):  It is same as Promise.any but it will ignore that error and then return first executed value.
// let promise4 = Promise.any([p4, p5, p6, p7]);
// promise4.then((values)=>{
//     console.log(values);  // It will ignore p7 and then it will return first executed value, in this case it is p6.
// })


// // 5). Promise.resolve(value) and Promise.reject(value)
// let promise5 = Promise.resolve("p5 .resolve");  // Promise.resolve([p4, p5, p6, p7]) it will work same as .allSettled
// promise5.then((value)=>{
//     console.log(value);
// })
// let promise6 = Promise.reject("p6 .reject error");
// promise6.then((value)=>{
//     console.log(value);
// })
