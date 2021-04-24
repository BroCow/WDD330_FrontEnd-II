

function loadStory(){
    let storyName = document.getElementById("storyName").value;
    // The code below DOES NOT populate the saved text within textarea with id "storyText"
    document.getElementById("storyText").value = localStorage.getItem(storyName);
    // The code below DOES populate the saved text within a <p> element with id "showStoryText"
    document.getElementById("showStoryText").innerHTML = localStorage.getItem(storyName);
}

function saveStory(){
    let storyName = document.getElementById("storyName").value;
    let storyText = document.getElementById("storyText").value;
    localStorage.setItem(storyName, storyText);
}

function displayStory(){
    var storyHTML = document.getElementById("storyText").value;
    document.getElementById("story_display").innerHTML = storyHTML;
}