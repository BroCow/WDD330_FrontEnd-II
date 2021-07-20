/** Import Global Array Variables **/
import { wkNumberArray, wkVarNameArray, wkLinkArray, navBtnArray, showNotes, showExercises, showQuestions } from "./js/modules.js";

// Import functions for dynamic nav buttons and links
import { createWkVars_Links, createNavBtns, setNavBtnEventHandler, linkToWeek } from "./js/modules.js";

// Elements by ID
const nav = document.getElementById('nav');

//call imported function to establish variables and links
createWkVars_Links();
console.log(wkVarNameArray);
console.log(wkLinkArray);

// Call imported function to create navigation buttons
createNavBtns();
const homeBtn = document.getElementById('homeBtn');
 
 
/* Function for home button */
function goHome(){
    location.href = "https://brocow.github.io/WDD330_FrontEnd-II/";
}
homeBtn.addEventListener('click', goHome);


console.log(navBtnArray);

// Call imported function to attach event handlers to nav buttons
setNavBtnEventHandler();

/***** Show/Hide Notes, Exercises, Questions Event Handlers *****/
const notesBtn = document.getElementById('notesBtn');
notesBtn.addEventListener('click', showNotes);

const exercisesBtn = document.getElementById('exercisesBtn');
exercisesBtn.addEventListener('click', showExercises);

const questionsBtn = document.getElementById('questionsBtn');
questionsBtn.addEventListener('click', showQuestions);
