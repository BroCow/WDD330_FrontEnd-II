
// "This in Javascript" example
function Human(age){
    this.age = age;
}

let greg = new Human(22);
let thomas = new Human(24);

console.log(greg);
console.log(thomas);


// My experiment - Expand on example above using "this" to create a new user from html input
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const password = document.getElementById("password");
const result = document.getElementById("result");

function createUser(){
    const firstNameInput = firstName.value;
    const lastNameInput = lastName.value;
    const passwordInput = password.value;

    let user = new newUser(firstNameInput, lastNameInput, passwordInput);
    console.log(user);
    result.innerHTML = "<p>" + JSON.stringify(user) + "</p>";
}

function newUser(firstName, lastName, password){
    this.firstName = firstName;
    this.lastName = lastName;
    this.password = password;
}