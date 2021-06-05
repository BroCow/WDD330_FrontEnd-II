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
    const notes = document.getElementById("wk5Notes_section");
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
    const exercises = document.getElementById("wk5Exercises_section");
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
    const questions = document.getElementById("wk5Questions_section");
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

// Throw error
const seeResult = document.getElementById('seeResult');
const seeResult2 = document.getElementById('seeResult2');
const seeError = document.getElementById('seeError');
const userNumber = document.getElementById('userNumber');
const userNumber2 = document.getElementById('userNumber2');

userNumber.addEventListener("focus", clear, false);
function clear(){
    console.log("clear called");
    seeResult.innerHTML = " ";
    seeError.innerHTML = " ";
}
 
userNumber2.addEventListener("focus", clear2, false);
function clear2(){
    console.log("clear called");
    seeResult2.innerHTML = " ";
   // seeError2.innerHTML = " ";
}

function sqRootUserNumber(){
    console.log(userNumber.value);
    
    if(userNumber.value < 0){
        console.log("It is negative");
        seeError.innerHTML = "Uncaught RangeError thrown.  Check console for details.";
        seeError.style.color = "red";
    }
    let result = squareRoot(userNumber.value);
    seeResult.innerHTML = "The square root of the number entered is " + result + ".";
    seeResult.style.color = "red";  
}

function sqRootErrorCatch(){
    console.log(userNumber2.value);

    try {
        let result = squareRoot(userNumber2.value);
        seeResult2.innerHTML = "The square root of the number entered is " + result + ".";
        seeResult2.style.color = "red";  
    } catch(error) {
        let result = squareRoot(-userNumber2.value) + 'i';
        seeResult2.innerHTML = "Error caught. The square root of the number entered is " + result + ".";
        seeResult2.style.color = "red"; 
    }  
    finally {
        document.getElementById('seeError2').innerHTML = "This is the \"Finally\" output!";
    }  
}

function squareRoot(number) {
    'use strict';
    if (number < 0) {
        throw new RangeError('You cannot find the square root of negative numbers');
    }
    return Math.sqrt(number);
}

