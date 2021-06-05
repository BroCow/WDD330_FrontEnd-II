// function goHome(){
//     location.href = "https://brocow.github.io/WDD330_FrontEnd-II/";
// }

// function goWk1(){
//     location.href = "https://brocow.github.io/WDD330_FrontEnd-II/wk1/";
// }

// function goWk2(){
//     location.href = "https://brocow.github.io/WDD330_FrontEnd-II/wk2/";
// }

// function goWk3(){
//     location.href = "https://brocow.github.io/WDD330_FrontEnd-II/wk3/";
// }

// function goWk4(){
//     location.href = "https://brocow.github.io/WDD330_FrontEnd-II/wk4/";
// }

// function goWk5(){
//     location.href = "https://brocow.github.io/WDD330_FrontEnd-II/wk5/";
// }

// function goWk6(){
//     location.href = "https://brocow.github.io/WDD330_FrontEnd-II/wk6/";
// }

/* Toggle notes section */
function showNotes(){
    const notes = document.getElementById("wk4Notes_section");
    const notesBtn = document.getElementById("notesBtn");
    const exercisesBtn = document.getElementById("exercisesBtn");
    const questionsBtn = document.getElementById("questionsBtn");
    
    if(notes.style.display === "none"){
        notes.style.display = "block";
        notesBtn.innerHTML = "Hide Notes";
        notesBtn.style.boxShadow = "0px 0px 5px yellow";
    } 
    else {
        notes.style.display = "none";
        notesBtn.innerHTML = "View Notes";
        notesBtn.style.boxShadow = "0px 0px 5px black";
    }  
}

// /* Toggle exercises section */
function showExercises(){
    const exercises = document.getElementById("wk4Exercises_section");
    if(exercises.style.display === "none"){
        exercises.style.display = "block";
        exercisesBtn.innerHTML = "Hide Exercises";
        exercisesBtn.style.boxShadow = "0px 0px 5px yellow";
    } 
    else {
        exercises.style.display = "none";
        exercisesBtn.innerHTML = "View Notes";
        exercisesBtn.style.boxShadow = "0px 0px 5px black";
    }  
}


// /* Toggle questions section */
function showQuestions(){
    const questions = document.getElementById("wk4Questions_section");
    if(questions.style.display === "none"){
        questions.style.display = "block";
        questionsBtn.innerHTML = "Hide Notes";
        questionsBtn.style.boxShadow = "0px 0px 5px yellow";
    } 
    else {
        questions.style.display = "none";
        questionsBtn.innerHTML = "View Notes";
        questionsBtn.style.boxShadow = "0px 0px 5px black";
    }  
}

/*** Search Example JS ***/
// get form from html document
//const form = document.forms[0]; 
    // could also use the name attribute instead of the index
    // const form = document.forms.["search"];
// can use elements method to get all elements in a form
//const [input, button] = form.elements;
// can access control elements using name attribute
//const input = form['searchInput'];
const inputTest = document.getElementById("inputTest");

// Focus example
inputTest.addEventListener("focus", focusMessage);
function focusMessage(){
    const focusMessage = document.getElementById('focusMessage');
    focusMessage.innerHTML = "You just triggered the focus event listener!!! This occurs if you move the cursor into the input field.";
    focusMessage.style.color = "red";
}
// Blur example
inputTest.addEventListener("blur", blurMessage);
function blurMessage(){
    const blurMessage = document.getElementById('blurMessage');
    blurMessage.innerHTML = "You just triggered the blur event listener!!! This occurs if you move the cursor away from the input field without changing anything.";
    blurMessage.style.color = "blue";
}
// Change example
inputTest.addEventListener("change", changeMessage);
function changeMessage(){
    const changeMessage = document.getElementById('changeMessage');
    changeMessage.innerHTML = "You just triggered the change event listener!!! This occurs if the input field is changed and then you move the cursor away.";
    changeMessage.style.color = "green";
}

/*** Superhero build ***/ 
// Assign form to variable
const form = document.forms; 
console.log(form);
const heroForm = document.forms['heroForm'];
console.log(heroForm);

heroForm.addEventListener("submit", makeHero, false);

function makeHero(event){
    event.preventDefault(); // prevent form from being submitted
    const hero = {}; // create empty array
    console.log(hero);

    hero.name = heroForm.elements.heroName.value;  // create a name property
    console.log(hero.name);
    hero.realName = heroForm.elements.realName.value;  // create real name property
    console.log(hero.realName);
    hero.category = heroForm.elements.category.value;  // create category property
    console.log(hero.category);
    hero.age = heroForm.elements.age.value; // create age property
    console.log(hero.age);
    hero.city = heroForm.city.value;  // create city property
    console.log(hero.city);
    hero.origin = heroForm.origin.value;  // create origin property
    console.log(hero.origin);

    // Hero powers are checkboxes that can be iterated over to see if they are "checked" (boolean property)
    hero.powers = []; // create "powers" property as empty array to store the powers that are checked
    for(let i=0; i<heroForm.elements.powers.length; i++){ 
        if(heroForm.elements.powers[i].checked){  // reference each power as index in array and see if the checked property is true
            hero.powers.push(heroForm.elements.powers[i].value);  // push the value of the power to the powers array
        }
    }
    heroInfoDisplay.innerHTML = JSON.stringify(hero);
    heroInfoDisplay.style.color = "red";
}

/** Form Validation **/
// notify AFTER submit is pressed by popping up info within a div
heroForm.addEventListener("submit", validate, false);

function validate(event) {
    const firstLetter = heroForm.heroName.value[0];  // for string values, index notation returns the character referenced (0 = first letter)
    const noX = document.getElementById("noX");
    if(firstLetter.toUpperCase() === "X") {
        event.preventDefault();
        noX.innerHTML = "The superhero name cannot begin with an \"X\"!";
        noX.style.color = "red";
    }
}

// notify INSTANTLY when X key is pressed within input field
const label = heroForm.querySelector("label");
const error = document.createElement("div");
error.classList.add("error");
error.textContent = "Your name is not allowed to start with \"X\"!";
label.append(error);

heroForm.heroName.addEventListener("keyup", validateInLine);  // add eventlistener to input for "keyup", call function

function validateInLine(){
    const heroName = this.value.toUpperCase();
    if(heroName.startsWith("X")){
        error.style.display = "block";
        error.style.color = "red";
    } else {
        error.style.display = "none";
    }
}

// disable submit button if a field is empty
heroForm.heroName.addEventListener("keyup", disableSubmit, false);

function disableSubmit(event){
    if(event.target.value === " "){  // .target is a property of "event" that references the object on which the event was dispatched
        document.getElementById("submit").disabled = true;
    } else {
        document.getElementById("submit").disabled = false;
    }
}

/**** Chapter 12 ****/
// Constructor function
const dice = function(sides = 6){
    this.sides = sides;
    this.roll = function(){
        return Math.floor(this.sides * Math.random() + 1)
    }
}

// ES6 Class Declaration
class Dice {
    constructor(sides=6){
        this.sides = sides;
    }

    roll() {
        return Math.floor(this.sides * Math.random() +1);
    }
}
    
    // create instance of Dice class
    const blueDice = new Dice(20);

// Ninja Turtles


class Turtle {
    constructor(name){
        this.name = name;
        this.weapon = 'hands';
    }
    sayHi(){
        return `Hi dude, my name is ${this.name}`;
    }
    attack(){
        return `Feel the power of my ${this.weapon}!!!`;
    }
} 
    // Above code can be used to create a new instance
    const leo = new Turtle('Leonardo');  // variable "leo" points to instance of the Turtle class
    
    // User Turtle greeting
    const turtleName = document.getElementById("turtleName");
    const turtleGreetingDiv = document.getElementById("turtleGreeting");
    
    turtleName.addEventListener("change", turtleGreeting, false);
    function turtleGreeting(event){
        if(event.target.value != " "){
            console.log("Select Ninja Event");
            console.log(event.target.value);
            let selectedTurtleName = event.target.value;
            let userTurtle = new Turtle(selectedTurtleName);
            console.log(userTurtle);
            console.log(userTurtle.name);
            turtleGreetingDiv.innerHTML = userTurtle.sayHi();
            turtleGreetingDiv.style.color = "red";
        } else {
            console.log("No name?");
        }
    }
    
    // User Turtle weapon
    const turtleWeapon = document.getElementById("turtleWeapon");
    const turtleWeaponDiv = document.getElementById("selectedWeapon");

    turtleWeapon.addEventListener("change", selectedWeapon, false);
    function selectedWeapon(event){
        if(event.target.value != " "){
            console.log("Select Weapon Event");
            console.log(event.target.value);
            //console.log(turtleName.value);
            let selectedTurtleName = turtleName.value;
            let selectedTurtleWeapon = event.target.value;
            
            let weaponTurtle = new Turtle(selectedTurtleName);
            weaponTurtle.weapon = selectedTurtleWeapon;
            turtleWeaponDiv.innerHTML = weaponTurtle.attack();
            
            turtleWeaponDiv.style.color = "red";
        } else {
            console.log("No weapon?");
        }
    }
 
