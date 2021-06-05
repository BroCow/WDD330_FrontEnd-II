

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


// Script for Notes
function saveNote(){
    var dateTime = new Date();
    var noteDesc = document.getElementById("noteDesc");
    var noteText = document.getElementById("noteText");
    var completeNote = dateTime.toLocaleString() + "--" + noteDesc.value; //toLocaleString converts time to local time zone, daylight savings, ect.

    completeNote += "<p>" + noteText.value + "</p>"; // Apends the note into paragraph below the time-stamped note description

    //document.getElementById("test").innerHTML = completeNote;

    var storedNotesString = localStorage.getItem("all_notes");
    var allNotes = JSON.parse(storedNotesString);

    if(allNotes == null){
        allNotes = [];
    }

    allNotes.push(completeNote);
    var allNotesString = JSON.stringify(allNotes); // Convert everything in allNotes array to string so localStorage can store it
    localStorage.setItem("all_notes", allNotesString); // Store allNotesString using the key 'all_notes'

    showAllNotes();
    noteDesc.value = null;
    noteText.value = null;
}


function showAllNotes(){
    var storedNotesString = localStorage.getItem("all_notes");
    var allNotes = JSON.parse(storedNotesString);

    if(allNotes != null){
        var noteDisplayer = document.getElementById("displayNotes"); // Faster to store in variable than make program go find the id over and over
        noteDisplayer.innerHTML = null;  // Clears the screen if an existing note is there
        
        var numberOfNotes = allNotes.length;
        for(var i = 0; i < numberOfNotes; i++){
            var note = allNotes[i];
            noteDisplayer.innerHTML += "<hr><p>" + note + "</p>";
        }
    }
}


function deleteNote(){
    
    var storedNotesString = localStorage.getItem("all_notes");
    var allNotes = JSON.parse(storedNotesString);

    //document.getElementById("message").innerHTML = allNotes[0];

    if(allNotes == null){
        document.getElementById("message").innerHTML = "Array empty";
    }
    else{
        localStorage.removeItem("all_notes");
        document.getElementById("message").innerHTML = "Note deleted";
    }
    
}

function hideAllNotes(){
    var displayNotes = document.getElementById("displayNotes");
    if(displayNotes.innerHTML != null){
        displayNotes.innerHTML = null;
    }
}