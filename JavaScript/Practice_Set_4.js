// // let marks = [
// //     [20, 30, 40, 50],
// //     [65, 60, 70, 80],
// //     [84, 75, 99, 96]
// // ];

// // for(let i=0; i<marks.length; i++){
// //     for(let j=0; j<marks[i].length; j++)
// //         console.log(marks[i][j]);
// // }

// let arr = [8754, 857, 875, 785, 34094]
// // For Each Loop
// arr.forEach(Element =>{
//     console.log(Element);
// });

// // For in loop: for in loop prints the keys of an object. But in the case of array it prints the index values.
// for(let i in arr){
//     console.log(i);
// }

// // For of loop: for of loop prints the values of the array. But in the case of object it prints the iterable items only
// for(let items of arr){
//     console.log(items);
// }


// let str = "Arbaz";
// let arr_str = Array.from(str) // This is a way to convert any object or string to an array. Mostly use to convert html tags to an array as html tags form an object.
// console.log(arr_str);



// map Function is use to make an array based on previous array values or Index or Array.
let arr = [839, 928, 845, 873, 992];
let arr2 = arr.map((values, Index, Array)=>{
    console.log(values, Index, Array);
    return values;
})
console.log(arr2);

// filter function is use to return those values base on a criteria.
let arr3 = arr.filter((values)=>{
    return values>=873;  // values>=873 is are criteria.
})
console.log(arr3);

// reduce function is used to compare more than two values and then we can do different types of operations.
let sum = arr.reduce((num1, num2)=>{
    return num1+num2;
})
console.log("Sum of the array element =",sum);
