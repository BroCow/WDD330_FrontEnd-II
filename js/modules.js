
/** Global Variables **/
// Arrays
export const wkNumberArray = [1,2,3,4,5,6,7,8];   //just add a number to this array to make the magic happen!
export const wkVarNameArray = [];
export const wkLinkArray = [];

//create array of buttons with the 'navBtn' class to be used for setting links
export const navBtnArray = document.getElementsByClassName('navBtn');


//Function for creating dynamic variables/links for each week
export function createWkVars_Links(){
    for(let i=0; i<wkNumberArray.length; i++){
        let wkVarName = "wk" + wkNumberArray[i] + "_href";
        wkVarNameArray.push(wkVarName);
    
        let wkLink = "https://brocow.github.io/WDD330_FrontEnd-II/wk" + wkNumberArray[i] + "/";
        wkLinkArray.push(wkLink);
    }
}

/* Function for creating dynamic nav buttons */
export function createNavBtns(){
    let homeBtnId = "homeBtn";
    let homeBtnOnclick = "goHome()";
    let homeBtnHTML = "Home";
    let btn = document.createElement('button');

    btn.setAttribute("class", "navBtn");
    btn.setAttribute("id", homeBtnId);
    btn.setAttribute("onclick", homeBtnOnclick);
    btn.innerHTML = homeBtnHTML;

    nav.appendChild(btn); 

    for(let i=0; i<wkNumberArray.length; i++){
        let wkBtnId = "week" + wkNumberArray[i] + "Btn";
        let wkBtnHTML = "Week " + wkNumberArray[i];
        let btn = document.createElement('button');
        let btnValue = wkLinkArray[i];
        console.log(btnValue);

        btn.setAttribute("class", "navBtn");
        btn.setAttribute("id", wkBtnId);
        btn.setAttribute("value", btnValue)
        btn.innerHTML = wkBtnHTML;

        console.log(btn);
    
        nav.appendChild(btn);
    }
}

//Function to be used with setNavBtnEventHandler function to pair href's with 'click' events
export function linkToWeek(value){
    console.log("linkToWeek function called");
    console.log(value);
    location.href = value;
}

//Function to dynamically create eventListeners for each navBtn from array
export function setNavBtnEventHandler(){
    for(let i=1; i<navBtnArray.length; i++){
        navBtnArray[i].addEventListener('click', function(){
            linkToWeek(navBtnArray[i].value)}
        );
    }
}




/********** Week Pages - Show notes, exercises, questions button functions ***********/
/* Toggle notes section */
export function showNotes(){
    const localHomeURL = "http://localhost/wd330/";
    const githubHomeURL = "https://brocow.github.io/WDD330_FrontEnd-II/";
    if(location.href === localHomeURL || location.href === githubHomeURL){
        console.log(location.href);    
        console.log('home page');
        } else {
            console.log('Must be a week page');

            const notes = document.getElementById("notesSection");
            const notesBtn = document.getElementById("notesBtn");
            
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
}
 

/* Toggle exercises section */
export function showExercises(){
    const localHomeURL = "http://localhost/wd330/";
    const githubHomeURL = "https://brocow.github.io/WDD330_FrontEnd-II/";
    if(location.href === localHomeURL || location.href === githubHomeURL){
        console.log(location.href);    
        console.log('home page');
        } else {
            const exercises = document.getElementById("exercisesSection");
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
}


/* Toggle questions section */
export function showQuestions(){
    const localHomeURL = "http://localhost/wd330/";
    const githubHomeURL = "https://brocow.github.io/WDD330_FrontEnd-II/";
    if(location.href === localHomeURL || location.href === githubHomeURL){
        console.log(location.href);    
        console.log('home page');
        } else {
            const questions = document.getElementById("questionsSection");
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
}