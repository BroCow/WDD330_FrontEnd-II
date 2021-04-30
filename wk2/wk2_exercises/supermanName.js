// Chapter 2 Quiz Ninja Project
const question = "What is Superman's real name?";
const answer = prompt(question); // Allows user to type in a response to question
alert(`You answered ${answer}`);

// Chapter 3 Quiz Ninja Project
const quiz = [
    ["What is Superman's real name?", "Clark Kent"],
    ["What is Wonderwoman's real name?", "Diana Prince"],
    ["What is Batman's real name?", "Bruce Wayne"]
];

let score = 0; //initialize score

/* Loop through array using for-of, assigning variables question and answer to each key/value pair in map */
for(const [question, answer] of quiz){
    const response = prompt(question);
    // If-else checks if answer is right or wrong
    if(response === answer){
        alert("Correct!");
        score++;
    } else{
        alert(`Wrong! The correct answer was ${answer}`);
    }
}

// At the end of the game, report the player's score
alert(`Game over, you scored ${score} point${score !== 1 ? 's' : ''}`);




