

function goHome(){
    location.href = "https://brocow.github.io/WDD330_FrontEnd-II/";
}

function goWk1(){
    location.href = "https://brocow.github.io/WDD330_FrontEnd-II/wk1/";
}

function goWk2(){
    location.href = "https://brocow.github.io/WDD330_FrontEnd-II/wk2/";
}

function goWk3(){
    location.href = "https://brocow.github.io/WDD330_FrontEnd-II/wk3/";
}

/* Toggle notes section */
function showNotes(){
    const notes = document.getElementById("wk3Notes_section");
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

/* Toggle exercises section */
function showExercises(){
    const exercises = document.getElementById("wk3Exercises_section");
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


/* Toggle questions section */
function showQuestions(){
    const questions = document.getElementById("wk3Questions_section");
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


/***** Novice to Ninja Ch5 Objects Code Examples *****/
// Object literal - Man of Steel
const superman = {
    heroName: 'Superman', 
    'real name': 'Clark Kent',  // Property needs to be quoted because it doesn't follow rules for naming variables
    height: 75,
    weight: 235,
    hero: true,
    villian: false,
    allies: ['Batman', 'Supergirl', 'Superboy'],

    fly() {  // Method
        return 'Up, up and away!';
    }
};

// Property key = variable name - use ES6 shorthand to create object
const heroName = 'Iron Man';
const realName = 'Tony Stark';
const ironMan = {heroName, realName};
    // Better than long way
        // const ironMan = {heroName: heroName, realName: realName};

// Can use JS within [] to create property name
const hulk = {heroName: 'Hulk', ['catch' + 'phrase']: 'Hulk Smash!'};

// Check if property exists in object
'city' in superman;
    // returns false

// Find all properties of an object with for in loop
for(const key in superman){
    console.log(key + ": " + superman[key]);
}
function showSupermanKeys(){
    const result = document.getElementById('supermanKeys');
    for(const key in superman){
        result.innerHTML += "<p>" + key + ": " + superman[key] + "</p>";
    }
}

// Objects as parameters to functions
function greeting({greet, firstName, course}){
    const result = document.getElementById("greeting");
    result.innerHTML = `${greet} My name is ${firstName} and I am taking ${course}.`;
}

// JSON stuff
    // Variable with JSON data
    const familyJSON = '{"Dad": "Chris", "Mom": "Renee", "Daughter": "Autumn", "Son1": "Carter", "Son2": "Sean"}';
    // Parse variable to create Javascript object
    JSON.parse(familyJSON)
    // Variable with OBJECT data
    const familyOBJECT = {Dad: "Chris", Mom: "Renee", Daughter: "Autumn", Son1: "Carter", Son2: "Sean"};
    // Stringify to create JSON string of data
    JSON.stringify(familyOBJECT);

    function showParseFamily(){
        let parseFamily = JSON.parse(familyJSON);
        console.log(parseFamily);
    }
    function showStringifyFamily(){
        const displayJSONFamily = document.getElementById("displayJSONFamily");
        let stringifyFamily = JSON.stringify(familyOBJECT);
        displayJSONFamily.innerHTML = stringifyFamily;
    }
// Math stuff
    function showNumberBetween(){
        const number1 = Number(document.getElementById("number1").value);
        const number2 = Number(document.getElementById("number2").value);
        const displayResult = document.getElementById("numberBetweenResult");

        let numberBetween =  number1 + (Math.floor(number2 * Math.random()));
        displayResult.innerHTML = numberBetween;
    }

// Date stuff
    // Create select drop-down for birth year
    function getDayOfWeek(){
        const year = document.getElementById("year").value;
        const month = document.getElementById("month").value;
        const day = document.getElementById("day").value;
        const dayOfWeekResult = document.getElementById("dayOfWeek_result");

        let bDay = new Date(year, month, day);
        let dayOfWeek = bDay.getDay();
        
        switch(dayOfWeek){
            case 0:
                dayOfWeek = "Sunday";
                break;
            case 1:
                dayOfWeek = "Monday";
                break;
            case 2:
                dayOfWeek = "Tuesday";
                break;
            case 3:
                dayOfWeek = "Wednesday";
                break;
            case 4:
                dayOfWeek = "Thursday";
                break;
            case 5:
                dayOfWeek = "Friday";
                break;
            case 6:
                dayOfWeek = "Saturday";
                break;
        }
        console.log(dayOfWeek);
        dayOfWeekResult.innerHTML = "<p>You were born on a " + dayOfWeek + "!</p>";
    }

/**** Novice to Ninja Chapter 6 DOM ****/
//const body = document.body;

const links = document.links; // all elements with href
// for (const i = 0; i < document.links.length; i++){  // Can loop through all to apply something
//     // Some code to do something to all the links in the document
// }
//const linksArray = [...document.links];  // use spread to turn DOM elements into actual array

    // Long way of adding element with text
        // const flash = document.createElement("li"); // creates empty element
        // const flashText = document.createTextNode("Flash");  // creates text that can be put into a node
        // flash.appendChild(flashText);  // links flashText to flash li element

    // Better way of adding element with text
    const heroes = document.getElementById("roster");

    function addFlash(){
        const flash = document.createElement("li");
        flash.textContent = "Flash";
        heroes.appendChild(flash);
    }
    function changetoSuicideSquad(){
        document.getElementById("title").innerHTML = "Suicide Squad";
        heroes.innerHTML = "<li>Harley Quinn</li><li>Dead Shot</li><li>Killer Croc</li><li>Enchantress</li><li>Captain Boomerant</li><li>Katana</li><li>Slipknot</li>";
    }
    function makeSuicideSquadRed(){
        const ssTitle = document.getElementById("title");
        ssTitle.style.color = "red";
    }

/**** Novice to Ninja Chapter 7 Events ****/
const p = document.getElementById("eventListenerP");

function eventListenerExample1(event){
    p.innerHTML = "You just activated an event listener that changed the content of this paragraph! The event type and target may be viewed in the console.";
    console.log(event.type);
    console.log(event.target);
}
// Changes text of paragraph in document
p.addEventListener("click", eventListenerExample1);

function keydownExample(){
    const pKeyDown = document.getElementById("keydown");
    pKeyDown.style.backgroundColor = "yellow";
}
pKeyDown.addEventListener("keydown", keydownExample);

const preventDefault = document.getElementById("preventDefault");
preventDefault.addEventListener("click", (event) =>{
    event.preventDefault();
    console.log("Link prevented");
});


    
    
    

    

    