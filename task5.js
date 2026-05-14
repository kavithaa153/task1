// Task 1 — Student Registration Form
// Create a program using:
// prompt()
// variables (let, const)
// console.log()
// Requirements:
// Ask student name
// Ask department
// Ask age
// Print all details using template string
// Example Output:
// Welcome Naveen
// Department: CSE
// Age: 20


function registrationForm() {

    let studentName = prompt("Enter Your Name");

    let department = prompt("Enter Your Department");

    let age = Number(prompt("Enter Your Age"));

    console.log(`Welcome ${studentName}`);

    console.log(`Department : ${department}`);

    console.log(`Age : ${age}`);

}

// registrationForm()


//================================================================================================================


// Task 2 — ATM Withdrawal System
// Use:
// if else
// comparison operators
// logical operators
// Requirements:
// User balance = 10000
// Ask withdrawal amount
// If amount <= balance → "Transaction Successful"
// Else → "Insufficient Balance"
// Bonus:
// Minimum withdrawal = 100

// Task 2 — ATM Withdrawal System

function atmWithdrawalSystem() {

    let userBalance = 10000;

    let amount = Number(prompt("Enter Withdrawal Amount"));

    if (amount >= 100 && amount <= userBalance) {

        console.log("Transaction Successful");

        let remainingBalance = userBalance - amount;

        console.log(`Remaining Balance : ${remainingBalance}`);

    } else if (amount < 100) {

        console.log("Minimum Withdrawal Amount is 100");

    } else {

        console.log("Insufficient Balance");

    }

}

// atmWithdrawalSystem()


//=========================================================================================================


// Task 3 — Swiggy Discount Checker
// Use:
// ternary operator
// Requirements:
// If order amount > 499
// Show:
// "Free Delivery Available"
// Else:
// "Delivery Charges Applied"

function swiggyDiscount(){

     let amount=Number(prompt("Enter amount"))

     amount>499 ? console.log("Free Delivery Available"):console.log("Delivery Charges Applied");
    
    
}

// swiggyDiscount() 

//=====================================================================================================================

// Task 4 — Instagram Login System
// Use:
// nested if
// Requirements:
// Correct username = "admin"
// Correct password = "1234"
// Conditions:
// If username correct → ask password
// If password correct → Login Success
// Else → Wrong Password
// Else → Invalid Username

 

function instagramLoginSystem() {

    let username = prompt("Enter Username");

    let password = prompt("Enter Password");

    if (username == "admin") {

        if (password == "1234") {

            console.log("Login Success");

        } else {

            console.log("Wrong Password");

        }

    } else {

        console.log("Invalid Username");

    }

}

// instagramLoginSystem();


//===========================================================================================================



// Task 5 — Traffic Signal System
// Use:
// switch statement
// Requirements:
// Input:
// red / yellow / green
// Output:
// STOP
// READY
// GO

function traffic(){

    let trafficSystem="red";

    switch(trafficSystem){
        case "red":
                 
        console.log("STOP");

        break;
        case "yellow":
                 
        console.log("READY");
        
        break;
        case "green":
                 
        console.log("GO");
        
        break;

       default:

            console.log("Invalid Signal");

    }

    
}
traffic()

//=================================================================================================================

// Task 6 — Employee Salary Calculator
// Use:
// function
// parameters
// return
// Requirements:
// Create function salaryCalculation
// Basic salary + bonus
// Return total salary
// Example:
// salaryCalculation(25000,5000)
// Output:
// 30000

function salaryCalculation(salary,bonus){

    return salary+bonus

}
console.log(salaryCalculation(25000,5000));


//===============================================================================================

// Task 7 — E-Commerce Cart Total
// Use:
// Array
// for loop
// Requirements:
// Store product prices inside array:
// [100,200,300,400]
// Find:
// Total price
// Average price
// Task 7 — E-Commerce Cart Total
// Use:
// Array
// for loop
// Requirements:
// Store product prices inside array:
// [100,200,300,400]
// Find:
// Total price
// Average price

// Task 7 — E-Commerce Cart Total

function ecommerceCart() {

    let arr = [100, 200, 300, 400];

    let total = 0;

    for (let price of arr) {

        total = total + price;

    }

    let average = total / arr.length;

    console.log(`Total Price : ${total}`);

    console.log(`Average Price : ${average}`);

}

ecommerceCart();

//================================================================================

// Task 8 — WhatsApp Contact Book
// Use:
// Object
// for in loop
// Requirements:
// Store:
// name
// phone
// status
// Print all details dynamically.

// Task 8 — WhatsApp Contact Book

function whatsappContact() {

    let object = {

        name: "Kavitha",

        phone: "9876453456",

        status: "Online"

    };

    for (let key in object) {

        console.log(`${key} : ${object[key]}`);

    }

}

whatsappContact();

//=======================================================================================

// Task 9 — Movie Ticket Booking
// Use:
// function
// callback function
// Requirements:
// Create:
// bookTicket()
// payment()
// After booking complete,
// callback payment function automatically.

// Task 9 — Movie Ticket Booking

function payment() {

    console.log("Payment Successful");

}

function bookTicket(callback) {

    console.log("Ticket Booking Completed");

    callback();

}

bookTicket(payment);

//============================================================

//  Task 10 — Food Delivery Time Tracker
// Use:
// Generator Function
// Requirements:
// Show order stages one by one:
// Order Confirmed
// Preparing Food
// Out for Delivery
// Delivered


function* foodDelivery() {

    yield "Order Confirmed";

    yield "Preparing Food";

    yield "Out for Delivery";

    yield "Delivered";

}

let order = foodDelivery();

console.log(order.next().value);

console.log(order.next().value);

console.log(order.next().value);

console.log(order.next().value);