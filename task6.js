// 1. Student Attendance System
// Create two arrays:
// presentStudents
// absentStudents
// Merge both arrays using spread operator
// Add one new student at last
// Print final array


function StudentAttendance() {

    let presentStudents = ["Ramya", "Sahana", "Anu"];

    let absentStudents = ["Ram", "Nikitha"];

    let finalArray = [...presentStudents, ...absentStudents];

    finalArray.push("Mani");

    console.log(finalArray);

}

StudentAttendance();


//=======================================================================================================================================================


// 2. E-Commerce Cart
// Create object for mobile details
// Create another object for charger details
// Merge both objects using spread operator
// Add deliveryDate property
// Print final object
function ecommerceCart() {

    let mobileDetails = {

        brand: "Samsung",

        price: 25000

    };

    let chargerDetails = {

        chargerType: "Fast Charger",

        warranty: "1 Year"

    };

    let finalObject = {

        ...mobileDetails,

        ...chargerDetails,

        deliveryDate: "25-05-2026"

    };

    console.log(finalObject);

}

ecommerceCart();


//===================================================================================================================================================


// 3. Food Delivery App
// Create function named orderFood()
// Accept multiple food items using rest operator
// Print:
// Total items ordered
// First item
// Last item

function orderFood(...foodItem) {

    console.log(`Total Food : ${foodItem.length}`);

    console.log(`First Item : ${foodItem[0]}`);

    console.log(`Last Item : ${foodItem[foodItem.length - 1]}`);

}

orderFood("Dosa", "Idli", "Chapathi", "Burger");


//===========================================================================================================================


// 4. Employee Salary Filter
// Create array of employee objects
// Filter employees whose salary is above 50000
// Print filtered employees

function employeeSalary(){

    let arr=[{

        name:"Sahana",
        Salary:25000

    },{

        name:"Kavitha",
        Salary:50000
    },{
        name:"Srinivasan",
        Salary:60000
    },
    {
        name:"Senthil",
        Salary:60000
    }]

 let  filteredEmployees = arr.filter((arr)=>{
        return arr.Salary > 50000
    })
    console.log(filteredEmployees);
    
}

employeeSalary()


//==========================================================================================================================

// 5. Online Game Score Board
// Create array of scores
// Use reduce()
// Find total score of all players
// Print final total


function gameScore() {

    let arr2 = [100, 300, 400, 500, 700, 900];

    let totalScore = arr2.reduce((total, score) => {

        return total + score;

    }, 0);

    console.log(`Final Total Score : ${totalScore}`);

}

gameScore();
