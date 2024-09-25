//1. Write a program to check whether the given input number is divisible by 3 or else shows a message (number is not divisible by 3)
// var num = prompt("enter a number");
//     if(num%3==0){  // '%' Modulus (Division Remainder)
//         alert("number is divisible by 3");
//     }
//     else{
//        alert("number is not divisible by 3");
//     }



//2. Write a program to check whether the given input is an odd or even number
// alert("To Check the number either Even or Odd")
// var num = +prompt("Enter a number");
// if(num%2==0){
//     alert("This is an Even Number. ")
// }
// else{
//     alert("This is an ODD Number.")
// }



//3. write an if/else statement with the following condition: If the variable age is greater than 18, output "old enough", otherwise output "Too young".
// var age = prompt("Enter your age:");
// if(age >= 18){
//     console.log("Old Enough!");
// }
// else{
//     console.log("Too Young!");
// }

//4. Write a program that prompts the user for their name, and then displays a special greeting to that person if their name is the same as yours. If the name entered by the user is anything other than your name, your code should not produce any output.
// var name = "Asha";
// var username = prompt("Enter your name {hint: Asha}");
// if(name==username){
//     alert("That's Nice☻! Your name is same as mine.")
// }
// else{
    
// }



//5. Write a program to check whether the given input number is divisible by 3 or not by using Switch Case statements. Show a message “Number is not divisible by 3” or “Number is divisible by 3”.
// var num = +prompt("Enter any number");
//     if(num%3==0){
//         alert("Number is divisible by 3.");
//     }
//     else{
//        alert("Number is not divisible by 3.");
//     }


// 6. Write a program that takes a character(number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122)
// var input = prompt("Enter any number, lowercase letter or uppercase letter")
// var firstAplha = input.slice().toUpperCase()
// var secondAplha = input.slice().toLowerCase()
// if(input>=0){
//     alert("It is a number.")
// }
// else if(input==firstAplha){
//     alert("It is a upper case.")
// }
// else if(input==secondAplha){
//     alert("It is a lower case.")
// }
// else{
//     alert("Wrong Input")
// }


// 7. Write a program to create a calculator for +, -, *, /, % using switch case statements. (number1, number2 and operator will be input)
// alert("This is a Calculator")
// var first =+prompt("Enter first number")
// var second =+prompt("Enter second number")
// var operator =prompt("Enter operator")
// if(operator=="+"){
//     alert(first+second)
// }
// else if(operator=="-"){
//     alert(first-second)
// }
// else if(operator=="*"){
//     alert(first*second)
// }
// else if(operator=="/"){
//     alert(first/second)
// }
// else if(operator=="%"){
//     alert(first%second)
// }
// else {
//     alert("Please enter input")
// }



// Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statements
// var time =prompt("Enter time according to 24 hrs format")
// if(time> 6){
//     alert("Good night")
// }
// else if(time<12){
//     alert("Good Morning")
// }
// else if(time<16){
//     alert("Good afternoon")
// }
// else if(time<19){
//     alert("Good evening")
// }
// else if(time<24){
//     alert("Good night")
// }



// 9. Write a program that takes a calendar year in YYYY format in a variable. Check & notify the user whether it is a leap year or not.
var year = +prompt("Enter year in YYYY format");
var leap = (2024+4)
var lap= leap++
if(year==lap){
    alert("It is a leap year")
}
else if(year==(2028-4)){
    alert("It is a leap year")
}
else{
    alert("It is not a leap year")
}


// Q10
// var password = "asharam";
// var enterPassword = prompt("enter your password");
// if(password == enterPassword){
//     alert("Correct! Password")
// }
// else if(password != enterPassword){
//     alert("incorrect passowrd")
// }
// else{
//     alert("please enter your password")
// }


// Q11
// var firstName = "Ali";
// if (firstName === "Fahad") {
// document.write("Hello Fahad!");
// }
// else{
//     document.write("You are not Fahad")
// }

// Q12
// var hour = 13;
// if (hour < 18) {
// console.log(greeting = "Good day");
// }
// else {
// console.log(greeting = "Good evening");
// }

// Q13
// var num1 = +prompt("Enter a number");
// var num2 = +prompt("Enter a number");
// if(num1>num2){
//     alert(+num1 + "is larger than " +num2)
// }
// else if(num1<num2){
//     alert(+num2 + "is larger than " +num1)
// }
// else{
//     alert("bothe the numbers are equal")
// }


// Q14
// var num1 = +prompt("enter a number");
// if(num1>0){
//     alert("the number is positive")
// }
// else if(num1<0){
//     alert("the number is negative");
// }
// else{
//     alert("the number is zero")
// }


// Q15
// var hour = +prompt("What the current hour is? (Write in 24 hours clock format)");

// if(hour>=6 && hour<=9){
//     alert("breakfast is served.")
// }
// else if(hour>=11 && hour<=13){
//     alert("Time for lunch.")
// }
// else if(hour>=17 && hour<=20){
//     alert("Its dinner time")
// }
// else{
//     alert("Sorry, you'll have to wait, or go get a snack.")
// }

// Q16
// var enter =prompt("Enter")
// if(enter>=0){
//     alert("number")
// }
// else if(enter=="true" || enter=="false"){
//     alert("boolean")
// }
// else {
//     alert("string")
// }

// Q17
// var enter = prompt("enter a letter");
// if(enter== "a"){
//     alert("True! its a wovel");
// }
// else if(enter== "e"){
//     alert("True! its a wovel");
// }
// else if(enter== "i"){
//     alert("True! its a wovel");
// }
// else if(enter== "o"){
//     alert("True! its a wovel");
// }
// else if(enter== "u"){
//     alert("True! its a wovel");
// }
// else{
//     alert("false! not a wovel");
// }

// Q18
// if(10!=8){
//     alert("true")
// }

// Q19
// var month =+prompt("Number of month")
// if(month==1){
//      alert("January")
// }
// else if(month==2){
//     alert("Feburary")
// }
// else if(month==3){
//     alert("March")
// }
// else if(month==4){
//     alert("April")
// }
// else if(month==5){
//     alert("May")
// }
// else if(month==6){
//     alert("June")
// }
// else if(month==7){
//     alert("July")
// }
// else if(month==8){
//     alert("August")
// }
// else if(month==9){
//     alert("September")
// }
// else if(month==10){
//     alert("October")
// }
// else if(month==11){
//     alert("November")
// }
// else if(month==12){
//     alert("December")
// }
// else{
//     alert("Invalid month no.")
// }



// Q20

// var age = +prompt("enter your age");


// if(age<18){
//     alert("Too young")
// }
// else{
//     alert("old enough")
// }
