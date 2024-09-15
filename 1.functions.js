//1. Create a block of code that you can use several times. 

// function greetUser(name){
//     console.log("hello " + name + "!");
//     greeting.innerHTML = "Hello " + name + "!"
//     // document.querySelector("#greeting").innerHTML = "hello " + name + "!"
// }

// // Call the function multiple times
// greetUser("Abdullah");
// greetUser("Ali");
// greetUser("Saylani");



// 2. Write a function that displays current date & time in your browser.
// not studied yet



// 3. Write a function that takes first & last name and then it greets the user using his full name.
// var firstName = prompt("Enter your First Name")
// var lastName = prompt("Enter Your Last Name")
// function greetUser(firstName,lastName){
//     console.log(`Hello ${firstName} ${lastName}`);
// }
// greetUser(firstName,lastName)




// 4.	Write a function that adds two numbers (input by user) and returns the sum of two numbers.
// var num1 = +prompt("Enter Number 1 for ADDITION");
// var num2 = +prompt("Enter other Number for ADDITION");
// function sumAll(){
//     console.log(`The sum of ${num1} and ${num2} is ${num1 + num2}`);
// }
// sumAll();

// var output = document.querySelector("#para"); 
// output.innerHTML= `The sum of ${num1} and ${num2} is ${num1 + num2}`
// //Query: how to call function in the innerHTML



// 5. Calculator:  Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser.
// var num1 = +prompt("Enter a number")
// var num2 = +prompt("Enter other Number")
// var operator = prompt("Enter Desired opeators (+, -, *, /)")

// function calculateValues(){
//     var result;
//     if(operator == '*' ){
//         result = num1 * num2;
//     }
//     else if(operator == '+'){
//         result = num1+ num2
//     }
//     else if(operator == '-'){
//         result = num1-num2
//     }
//     else if(operator == '/'){
//         result = num1/ num2
//     }
//     else{
//         result = "Wrong inputs"
//     }

//     console.log(`The result of ${num1} ${operator} ${num2} = ${result}`);
    
// }
// calculateValues();




// 6. Write a function that squares its argument.
// var num = +prompt("Enter Any Number to get SQUARE")
// var result = num * num;

// function squareNum(){
//     console.log(`${num}² = ${result} `);
// }
// squareNum();




// 7. Write a function that computes factorial of a number
// var num = +prompt("Enter Any Number to get FACTORIAL")


// function squareNum(){
//     // checking if number is negative
//     if (num < 0) {
//         console.log('Error! Factorial for negative number does not exist.');
//     }

//     // if number is 0
//     else if (num === 0) {
//         console.log(`The factorial of ${number} is 1.`);
//     }

//     // if number is positive
//     else {
//         var fact = 1;
//         for (i = 1; i <= num; i++) {
//             fact *= i;
//         }
//         console.log(`The factorial of ${num} is ${fact}.`);
//     }
    
// }
// squareNum();



// 8.	Write a function that take start and end number as inputs & display counting in your browser.
// alert("Let's Perform Counting")
// var start = +prompt("Wirte The Starting Number");
// var end = +prompt("Write The Ending Number");

// function countNum(start, end){
//     // var final = 1;
//     var final = '';
//     for(var i=start; i<= end; i++ ){
//         final  += i + ` `; 
//     }
//     console.log(final);
//     var para = document.querySelector("#para") 
//     para.innerHTML = `<h1>Counting: from ${start} to ${end} </h1> ${final}`
    
// }
// countNum(start, end);



/*9.	Write a nested function that computes hypotenuse of a right angle triangle. 
Hypotenuse2 = Base2 + Perpendicular2
Take base and perpendicular as inputs.
Outer function : calculateHypotenuse()
Inner function: calculateSquare()*/

// var base = +prompt("Enter the Base");
// var perp = +prompt("Enter the Perpendicular");

// function calculateHypotenuse(){
//     var base2 = base * base;
//     var perp2 = perp * perp;
    
//     function calculateSquare(){
//         var hyp2 = base2 * perp2
//        var hyp = Math.sqrt(hyp2)
//         console.log(`The Hypotenuse is ${hyp}`);
//     }
//     calculateSquare();
// }

// calculateHypotenuse();



// 10.	Write a function that writes variable length arguments list in your browser.

