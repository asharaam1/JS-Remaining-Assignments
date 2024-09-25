// 1. Write a program to display the message “Hello World” 5 times in your browser using for loop.
// for(var i=0; i<5; i++){
// console.log("Hello World");
// }



// 2.Write a program to print numeric counting from 1 to 10.
// for(var i=1; i<=10; i++){
//     console.log(i);
// }



// 3. Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.
// var num = +prompt("Enter a number to print its multiplication table");
// var Length = +prompt("Enter length of multiplication table")
// for(i=15; i<=Length; i++){
//     console.log(`${num} * ${i} = ${num * i} `);
// }



// 4. You have an array A = [“Nokia”, “Samsung”, “Apple”, “Sony”, “Huawei”] Write each element on new line with the help of for loop.

// var A = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"] ;
// for(i=0; i<A.length; i++){
//     console.log(A[i]);
// }



// Write a program to print items of the following array using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for(i=0; i<fruits.length; i++){
//     console.log(fruits[i]);
// }
// console.log(" ");
// for(i=0; i<fruits.length; i++){
//     console.log(`Element at index ${i} is ${fruits[i]}`);
// }



// Write a program to initialize an array of N items by using
// prompt. Where N is number of items as entered by the user.

// var arr=[]
// var num = +prompt("Enter Number of items");

// for(i=0; i<num; i++){
//     var values = prompt(`Enter number of index ${i}: `)
//     arr.push(values);
// }
// console.log(`Number of items: ${num} 
//     Items:`);
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }



// 7. Generate the following series in your browser. See example
// output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// var para = document.querySelector("#para");
// var counting =''
// for( i=1; i<=15; i++){
//     // counting+=`${i} ,`;
//     counting += i + (i !== 15 ? ', ' : '') // using ternary operator or conditional operator 
//     // console.log(counting);    
// }
// console.log(counting);    
// para.innerHTML+=`<h1>Counting</h1> ${counting} `

// var countingRev =""
// for( i=10; i>=1; i--){
//     counting=i;
//     console.log(counting);    
// }

// var countingEven = "";
// for(i=0; i<=20; i+=2){
//     countingEven=i;
//     console.log(countingEven);
// }

// var countingOdd = "";
// for(i=1; i<=19; i+=2){
//     countingOdd=i;
//     console.log(countingOdd);
// }

// var series = "";
// for(i=2; i<=20; i+=2){
//     series=i+"k";
//     console.log(series);
// }



// 8. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. Example:

// var para = document.querySelector("#para");
// var arrA=["cake", "apple pie", "cookie", "chips", "patties"];
// var user = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?")
// function itemFound(){
//     if(arrA.indexOf(user.toLowerCase()) === -1){
//         console.log(`We are sorry. ${user} is not avaliable in our bakery`);
//     }else{  
//         console.log(`${user} is avaliable at index 2 in our bakery`);
//     }
// }
// itemFound();



//9. Write a program to identify the largest number in the given array. A = [24, 53, 78, 91, 12]
// var arrA =[24, 53, 78, 91, 12];
// var largest = arrA[0];
// console.log("Array items: 24, 53, 78, 91, 12");
// for(i=1; i< arrA.length; i++){
//     if(arrA[i] > largest){
//         largest = arrA[i];    
//     }
// }
// console.log("The largest number is " + largest);



// 10. Write a program to identify the smallest number in the given array. A = [24, 53, 78, 91, 12]
// var arrA =[24, 53, 78, 91, 12];
// var smallest = arrA[0];
// console.log("Array items: 24, 53, 78, 91, 12");
// for(i=1; i< arrA.length; i++){
//     if(arrA[i] < smallest){
//         smallest = arrA[i];    
//     }
// }
// console.log("The smallest number is " + smallest);



//11. Write a program to identify the largest & the smallest number in the given array. A = [24, 53, 78, 91, 12]
// var arrA =[24, 53, 78, 91, 12];
// var largest = arrA[0];
// var smallest = arrA[0];
// console.log("Array items: 24, 53, 78, 91, 12");
// for(i=1; i< arrA.length; i++){
//     if(arrA[i] > largest){
//         largest = arrA[i];    
//     }else if(arrA[i] < smallest){
//         smallest = arrA[i];
//     }
// }
// console.log("The largest number is " + largest);
// console.log("The smallest number is " + smallest);



// 12. Write a program to print multiples of 5 ranging 1 to 100
// var multiple;
// for(i=5; i<=100; i++){
//     if(i%5 === 0){
//     console.log(i);
//     }
// }



// 13. You have given the following arrays: var students = ["Ali", "Sami", "Taha", "Inam"]; var scores = [58, 73, 89, 90]; Write a program to generate the following HTML table in your browser using JS.

var students = ["Ali", "Sami", "Taha", "Inam", ];
var scores = [58, 73, 89, 90, ];
var para = document.querySelector("#para");
var table = `<table border='1'><tr><th>Student</th><th>Score</th></tr>`
for(i=0; i<students.length; i++){
    table += `<tr><td>${students[i]}</td><td>${scores[i]}</td></tr>`
}
para.innerHTML = table;



// 14. Write a program that prints number from start of the array to desired stop value. Given array: var scores = [12, 45, 3, 22, 34, 50]; (Hint: take stop value from user) E.g. if user gives 3 as input value print 12, 45, 3 if user gives 34 as input value print 12, 45, 3, 22, 34
// var scores = [12, 45, 3, 22, 34, 50];
// var stopValue = +prompt("Enter the stop value:");
// console.log("values in arry: " + scores);

// for(i=0; i<scores.length; i++){
//     console.log(scores[i]);

//     if(scores[i] === stopValue){
//         break;
//     }
// }



// 15. You have an array A = [ [1,2,3] , [4,5,6] , [7,8,9] ] Write each element on new line with the help of nested for loops.
// var A = [[1,2,3] , [4,5,6] , [7,8,9]];
// for(i=0; i<A.length; i++){
//     var row = "";
//     for(j=0; j<A[i].length; j++){
//         row += A[i][j] + " "
//     }
//     console.log(row);
// }



// 16. Write a program to repeatedly print the value of the variable num which is input by user. Value should be decreasing by 0.5 each time, as long as x Value remains positive.

// var A = [+prompt("Enter a number")];
// for(i=A; i>0; i-=0.5){
//     console.log(i);
// }



// 17. The even/odd reporter Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").
// var A=[];
// for(i=0; i<=20; i++){
//     if(i%2 === 0){
//         console.log(i + " is even.");
//     }else{
//         console.log(i + " is odd.");
//     }
// }



// 18. Write a program to calculate the product of the odd integers from 1 to 7.
var int = 1; 
for(i=1; i<=7; i+=2){
    // var int = 1;
    int *= i;
    // console.log("The product of odd integers from 1 to 7 is" + int);
    // if(i%2 !== 0){
    //     // console.log(i*i);
    //     int *= i;
    //     console.log("The product of odd integers from 1 to 7 is" + int);
        
    // }else{
    //     // console.log(i + " is odd.");
    // }
    // // console.log("The product of odd integers from 1 to 7 is" + int);
}
console.log("The product of odd integers from 1 to 7 is" + int);



// 19. Write a program that will write out a wedge of stars. The user will enter the initial number of stars, and the program will write out lines of stars where each line has one few star than the previous line. Initial number of stars: 7

// var work = document.querySelector(".work")
// var num=7;
// for(i=0; i<=num; i++){
//     for(j=1; j<=i; j++){
//         // console.log("* ");
//         work.innerHTML += "* "
//     }
//     // console.log(" ");
//     work.innerHTML += `<br/>`
// }


// 20. Write a program to create the following patterns in your browser. Take number of lines as an input.
var work = document.querySelector(".work")
var Num = document.querySelector("#num")
function patternValue(){
    work.innerHTML=""
  
    for(i=0; i<=Num.value; i++){
        for(j=i; j<=i; j++){
            // console.log("* ");
            work.innerHTML += "* "
        }
        // console.log(" ");
        work.innerHTML += `<br/>`
    }

for(i=0; i<=Num.value; i++){
    for(j=1; j<=i; j++){
        // console.log("* ");
        work.innerHTML += "* "
    }
    // console.log(" ");
    work.innerHTML += `<br/>`
}

for(i=Num.value; i>=0; i--){
    for(j=1; j<=i; j++){
        // console.log("* ");
        work.innerHTML += "* "
    }
    // console.log(" ");
    work.innerHTML += `<br/>`
}
  Num.value = ""
}
