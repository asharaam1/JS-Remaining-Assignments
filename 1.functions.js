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

//Another Way
// function sum(a,b){
//     return a+b;
// }
// const value = sum(5,5);
// console.log(value);

//Another Way
// var num1 = +prompt("Enter Number 1 for ADDITION");
// var num2 = +prompt("Enter other Number for ADDITION");
// function sumAll(){
//     return num1 + num2;
// }
// const sum = `The sum of ${num1} and ${num2} = ${sumAll(num1,num2)}`
// console.log(sum);

// var output = document.querySelector("#para"); 
// output.innerHTML= sum;



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
// function arg(a,b,c){
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// arg(5,10,15);

// Searching 
// var para = document.querySelector("#para");
// function writeToBrowser() {
    
//     for (let i = 0; i < arguments.length; i++) {
        
//         console.log(arguments[i] + "<br>");
        
//         // document.write(arguments[i] + "<br>"); // Writes each argument with a line break
//     }
// }
// // Example usage
// writeToBrowser("Hello", "World", 123, true, "Simple Code");


// 11.	Write a function that accepts any number of arguments & find largest of the number.
// function findLargestNum() {
//     let largest = arguments[0]; // Start with the first argument as the largest
//     for (let i = 1; i < arguments.length; i++) {
//         if (arguments[i] > largest) {
//             largest = arguments[i]; // Update largest if current argument is bigger
//         }
//     }
//     console.log("The largest number is: " + largest); // Log the largest number to the console
// }
// // Example usage
// findLargestNum(10, 45, 3, 29, 89, 2,);



/*12.	Write a function that calculates the area of a rectangle.
A = width * height
Pass width and height in following manner:
a.	Arguments as values
b.	Arguments as variables*/
// alert("To Calcute Area of the Rectangle")
// function areaCalc(width, height){
//     var a;
//     a= width * height;
//     console.log(`Area of the Rectange is:  ${a}`)
// }
// // a
// areaCalc(20,5); 
// //b
// var width=5;
// var height=2;
// areaCalc(width,height);



//13. Write a function that receives an array & returns the sorted array.
var para = document.querySelector("#para");
var arry = [];

function arrReceive(){
    var val = prompt("Write the value of array")
    arry.push(val);
    // console.log(arry);
    // or
    return arry;
    
}

arrReceive()


