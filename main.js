/** Import Global Array Variables **/
import { wkNumberArray, wkVarNameArray, wkLinkArray, navBtnArray } from "./js/modules.js";

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

const localHomeURL = "http://localhost/wd330/";
const githubHomeURL = "https://brocow.github.io/WDD330_FrontEnd-II/";
if(location.href === localHomeURL){
console.log(location.href);    
console.log('localhost home page');
} else if(location.href === githubHomeURL){
    console.log('GitHub home page');
} else {
    console.log('Must be a week page');
}

if(location.href === localHomeURL || location.href === githubHomeURL){
    console.log(location.href);    
    console.log('home page');
    } else {
        console.log('Must be a week page');
}