

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
    const notes = document.getElementById("wk2Notes_section");
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
    const exercises = document.getElementById("wk2Exercises_section");
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
    const questions = document.getElementById("wk2Questions_section");
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
    