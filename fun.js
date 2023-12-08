//? functions practise

// 1. Write a function that nds the sum of two numbers
// 2. Write another function that displays this result in a pretty format
// 3. Write another function that takes this sum and prints it in passive tense


//! 1. Write a function that nds the sum of two numbers

// function sum(a,  b){
//     let ans = a+b;
//     return ans;
// }

// console.log(sum(2,3));

//! 2. Write another function that displays this result in a pretty format



function sum(a,  b){
    return a+b;
    // prettyResult(ans);
}
// function prettyResult(ans){
//     var result= "The sum of the numbers is: " + ans;
//     return result;
// }
// console.log(sum(2,3));


//! 3. Write another function that takes this sum and prints it in passive tense

function passiveResult(sum){
    console.log("sum of the number is: " + sum);
}


passiveResult(sum(2,3))