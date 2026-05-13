// Task 1 — Basic Function
// Create a function called welcomeUser.
// Requirements:
// Accept name
// Print:
// Welcome Naveen
// Example:
// welcomeUser("Naveen")

function welcomeUser(name) {

    console.log("Welcome " + name);

}

welcomeUser("Naveen"); // Output : Welcome Naveen

//===========================================================================================================

// Task 2 — Parameter + Return
// Create a function squareNumber.
// Requirements:
// Accept one number
// Return square value
// Example:
// squareNumber(5)
// Output:
// 25

function squareNumber(num) {

    return num * num;

}

console.log(squareNumber(5)); // Output : 25

//=============================================================================================================

// Task 3 — Object Function
// Create an object:
// {
//    name : "Rahul",
//    salary : 50000
// }
// Requirements:
// Create a function:
// employeeBonus(bonus)
// Output:
// Rahul
// 55000

function employeeBonus(bonus) {

    let employee = {

        name: "Rahul",
        salary: 50000

    };

    console.log(employee.name); // Output : Rahul

    console.log(employee.salary + bonus); // Output : 55000

}

employeeBonus(5000);

//=================================================================================

// Task 4 — Scope Checking
// Inside a function:
// Create var
// Create let
// Create const
// Requirements:
// Try accessing them outside block
// Observe which works and which gives error

function scopeCheck() {

    if (true) {

        var a = "I am var variable";

        let b = "I am let variable";

        const c = "I am const variable";

        console.log(a); // Output : I am var variable

        console.log(b); // Output : I am let variable

        console.log(c); // Output : I am const variable

    }

    // var works outside block
    console.log(a); // Output : I am var variable

    // let gives error outside block
    // console.log(b);

    // const gives error outside block
    // console.log(c);

}

scopeCheck();

//======================================================================================================

// Task 5 — Arrow Function
// Convert this into arrow function:
// function add(a,b){
//    console.log(a+b);
// }

const add = (a, b) => {

    console.log(a + b);

};

add(10, 20); // Output : 30

//==================================================================================================

// Task 6 — Callback Function
// Create:
// multiply
// calculator
// Requirements:
// calculator should accept:
// callback function
// two numbers
// Example:
// calculator(multiply,5,2)
// Output:
// 10

function multiply(a, b) {

    console.log(a * b);

}

function calculator(callback, num1, num2) {

    callback(num1, num2);

}

calculator(multiply, 5, 2); // Output : 10

//=======================================================================================

// Task 7 — Generator Function
// Create generator function offers.
// Requirements:
// Yield:
// "50% OFF"
// "Free Delivery"
// "Cashback"
// Use:
// next()
// to print values one by one.

function* offers() {

    yield "50% OFF";

    yield "Free Delivery";

    yield "Cashback";

}

let offerResult = offers();

console.log(offerResult.next().value); // Output : 50% OFF

console.log(offerResult.next().value); // Output : Free Delivery

console.log(offerResult.next().value); // Output : Cashback

//=======================================================================

// Task 8 — Default Parameter
// Create:
// student(name,course="JavaScript")
// Requirements:
// If course not passed,
// default should become "JavaScript".

function student(name, course = "JavaScript") {

    console.log("Name : " + name);

    console.log("Course : " + course);

}

student("Naveen"); 
// Output :
// Name : Naveen
// Course : JavaScript

student("Rahul", "Python");
// Output :
// Name : Rahul
// Course : Python

//=========================================================================================

// Task 9 — Currying
// Create currying function for multiplication.
// Example:
// multi(2)(3)(4)
// Output:
// 24

function multi(m1) {

    return function(m2) {

        return function(m3) {

            return m1 * m2 * m3;

        };

    };

}

console.log(multi(2)(3)(4)); // Output : 24

//========================================================================================

// Task 10 — Spread Operator
// Merge these arrays:
// [1,2,3]
// [4,5,6]
// Final Output:
// [1,2,3,4,5,6]

let arr1 = [1, 2, 3];

let arr2 = [4, 5, 6];

let mergedArray = [...arr1, ...arr2];

console.log(mergedArray); // Output : [1,2,3,4,5,6]

//================================================================================================

// Task 11 — Object Spread
// Merge two objects:
// {name:"Navi"}
// {role:"Developer"}
// Final Output:
// {
//   name:"Navi",
//   role:"Developer"
// }

let obj1 = {

    name: "Navi"

};

let obj2 = {

    role: "Developer"

};

let mergedObject = {

    ...obj1,
    ...obj2

};

console.log(mergedObject);
// Output :
// {
//   name:"Navi",
//   role:"Developer"
// }

//===============================================================================

// Task 12 — Rest Operator
// Create function:
// numbers(...num)
// Requirements:
// Print all numbers
// Print total sum
// Example:
// numbers(1,2,3,4)
// Output:
// [1,2,3,4]
// 10

function numbers(...num) {

    console.log(num);

    let sum = 0;

    for (let i = 0; i < num.length; i++) {

        sum = sum + num[i];

    }

    console.log(sum);

}

numbers(1, 2, 3, 4);
// Output :
// [1,2,3,4]
// 10

//===============================================================================================================

// Mini Challenge 🔥
// Create one small Student Management System using:
// function
// callback
// object
// array
// spread operator
// rest operator
// Features:
// Add student
// Print students
// Calculate marks
// Add bonus marks

// Array to store students

let students = [];

// Function to add student

function addStudent(name, marks) {

    let student = {

        name: name,
        marks: marks

    };

    // Spread operator

    students = [...students, student];

}

// Callback function to calculate bonus marks

function bonusMarks(mark) {

    return mark + 5;

}

// Function using callback

function calculateMarks(callback) {

    for (let i = 0; i < students.length; i++) {

        let total = callback(students[i].marks);

        console.log("Name : " + students[i].name);

        console.log("Marks : " + total);

    }

}

// Rest operator function

function printStudents(...data) {

    console.log(data);

}

// Add students

addStudent("Ramya", 90);

addStudent("Kavitha", 85);

addStudent("Naveen", 95);

// Print students

console.log(students);

// Calculate bonus marks

calculateMarks(bonusMarks);

// Rest operator

printStudents("Ramya", "Kavitha", "Naveen");

// Output :
// Students Added Successfully
// Bonus Marks Added
// Student Names Printed