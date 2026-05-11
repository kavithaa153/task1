//  JavaScript Tasks – Type Casting & Flow Control
// Task 1 – Predict the Output

 


// Write the output and datatype for below:

console.log("10" + 5)   //105-String
console.log(10 + true)  // 11-number
console.log(false + null) //0-number
console.log("Hello" + undefined) //Helloundefined-String
console.log([1,2] + 5) //1,25-String

 

//================================================================================================

// Task 2 – Implicit Type Casting

// Create examples for:

// String + Number
console.log(typeof("kavi"+15));  //String

// Boolean + Number
console.log(typeof(true+2)) //number

// Array + String

console.log(typeof([1,2,3] + "kavitha"));  // String 


// Object + Number

console.log(typeof({k:"ramya"}+90)); //string


// Null + Number

console.log(typeof(null+9)); //number


// Print datatype using typeof.




// Task 3 – Explicit Type Casting

// Convert the following into Number:

console.log(Number("500")); //500

// true
console.log(Number(true)); //1

// false
console.log(Number(false)); //0

// null
console.log(Number(null)); //0

// "abc"
console.log(Number("abc")); //NaN

// [100]
console.log(Number([100])); //100
// Print the outputs.


//===================================================================================================================

// Task 4 – Boolean Constructor
// Check whether below values are true or false using Boolean().
// ""
console.log(Boolean("")); //false


// "javascript"
console.log(Boolean("javascript")); //true

// 0
console.log(Boolean(0)); //false

// 1
console.log(Boolean(1)); //true

// null
console.log(Boolean(null)); //false

// undefined
console.log(Boolean(undefined)); //false

// []
console.log(Boolean([])); //true

// {}
console.log(Boolean({})); //true
 
//==================================================================================================

// Task 5 – Student Pass or Fail
// Take one variable:
// let mark = 45
// Condition:
// Above 35 → Pass
// Below 35 → Fail
// Use if else.

let mark = 45

if(mark>=35){
    console.log("You will pass");
    
}else{
    console.log("You will fail");
    
}

//==========================================================================

// Task 6 – Voting Eligibility
// Create a variable:
// let age = 20
// Conditions:
// 18 and above → Eligible
// Otherwise → Not Eligible

let age = 20

if(age>=18){
    console.log("You are Eligible");
    
} else{
    console.log("You are not Eligible");
}

//===========================================================================================

// Task 7 – Greatest Number
// Find greatest among 3 numbers using if else if.
// Example:
// let a = 50
// let b = 80
// let c = 30

let a = 50
let b = 80
let c = 30

if(a > b && a > c){
    console.log("a is greatest");
}
else if(b > a && b > c){
    console.log("b is greatest");
}
else{
    console.log("c is greatest");
}
 
// Task 8 – Traffic Light System
// Using switch statement:
// red → stop
// yellow → ready
// green → go

// let Traffic ="red"
// let Traffic ="yellow"

let Traffic = "green"
 

 switch(Traffic){
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Ready");
        break;
    case "green":
        console.log("Go");
        break;

    default:
        console.log("Invalid Signal");
 }

//============================================================================
 
// Task 9 – Login System
// Create variables:
// let username = "admin"
// let password = "1234"
// Conditions:
// Both correct → Login Success
// Otherwise → Invalid Login
// Use nested if.

let username = "admin"
let password = "1234"

if(username == "admin"){
    if(password == "1234"){
        console.log("Login Success");
        
    } else{
        console.log("Invalid Login");
    }
}
else{
    console.log("Invalid Username");
}

//===============================================================================

// Task 10 – Session Finder
// Take hour value:
// let hour = 14
// Conditions:
// 1–12 → Morning
// 13–15 → Afternoon
// 16–19 → Evening
// 20–24 → Night
// Use else if.

let hour = 14

if(hour >= 1 && hour <= 12){
    console.log("Good Morning");
}

else if(hour >= 13 && hour <= 15){
    console.log("Good Afternoon");
}

else if(hour >= 16 && hour <= 19){
    console.log("Good Evening");
}

else if(hour >= 20 && hour <= 24){
    console.log("Good Night");
}

else{
    console.log("Invalid Time");
}

//===========================================================================

// Bonus Challenge 🔥
// Predict outputs without running:
console.log(true + true)  //2
console.log("5" - 2)      //3
console.log("5" + 2)      //52
console.log(null + 1)     //1
console.log(undefined + 1) // NaN
console.log(Boolean(" "))    //true
console.log(Number(true))  //1