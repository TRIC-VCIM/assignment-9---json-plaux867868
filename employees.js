var employeeInput = document.getElementById("employee-number");

var clockButton = document.getElementById("clock-in");
var viewButton = document.getElementById("view-all");

var today= new Date();

// NOTE - I tried putting in the new staff variable, but it broke everything I had done so far and I couldn't get it to work out.

var staff = {
  "employees": [{
      "id": 1,
      "firstName": "Cookie",
      "lastName": "Monster",
      "photo": "images/employee-1.jpg",
      "position": "baker"
    },
    {
      "id": 2,
      "firstName": "Kermit",
      "lastName": "Frog",
      "photo": "images/employee-2.jpg",
      "position": "store manager"
    },
    {
      "id": 3,
      "firstName": "Big",
      "lastName": "Bird",
      "photo": "images/employee-3.jpg",
      "position": "produce stocker"
    }
  ]
};


clockButton.addEventListener('click', ()=>{
  console.log("Clock-In clicked.")
  for(let i = 0; i < staff.employees.length; i++) {
    if (staff.employees[i].id === parseInt(employeeInput.value)){
      console.log("The if statement ran.");
      staff.employees[i].clockIn = today;
      console.log(staff.employees);
    }
  }
  employeeInput.value = "";
});


// viewButton.addEventListener('click', ()=>{
//   console.log("View clicked.")
//   for (const [key, value] of Object.entries(staff.employees)) {
//   console.log(`${key}: ${value}`);
// }
// });

viewButton.addEventListener('click', ()=>{
  console.log("View clicked.")
  for (p in staff.employees) {
    var employeeData = (p, staff.employees[p]);
  }
  document.querySelector("div").innerHTML = employeeData;
});

