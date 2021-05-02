
// Function for step 1
function readInput(){
    let userInput = document.getElementById("userInput").value;
    let result = document.getElementById("result");

    result.innerHTML = userInput;
}

// Function for step 2
/* Function gets user input, make sure it is valid number, sums all 
numbers up to the number provided */
function sumNumbers(numberInput){
    let numberVerified = parseInt(numberInput);

    if(!isNaN(numberVerified)){
        let sum = 0;
        for(let i = 1; i <= numberInput; i++){
            let result = document.getElementById("result");
            sum += i;
            result.innerHTML = sum;  
        }
    }
    else{
        alert("You must enter a number.");
    }
}
 

// Function for step 3
/* Function takes numbers from each input, adds them together, and outputs result */
let numberInput1 = document.getElementById("numberInput1").value;
let numberInput2 = document.getElementById("numberInput2").value;

function addMachine(number1, number2){
    // let number1 = document.getElementById("numberInput1").value;
    // let number2 = document.getElementById("numberInput2").value;

    let number1Verified = parseInt(number1);
    let number2Verified = parseInt(number2);

    if(!isNaN(number1Verified) || !isNaN(number2Verified)){
        const result = document.getElementById("result");
        let sum = Number(number1Verified) + Number(number2Verified);

        result.innerHTML = Number(sum);
    }
    else{
        alert("Please enter a number!");
    }
}