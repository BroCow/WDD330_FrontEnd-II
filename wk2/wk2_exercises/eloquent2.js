// Loop triangle function
function loopTriangle(){
    // Variable to set how many # will make up the base
    const triangleResult = document.getElementById('triangleResult');
    // Weird for loop 
    for(let line = '#'; line.length<8; line+='#'){
        triangleResult.innerHTML += "<p>" + line + "</p>"; 
    }  
}


// Fizz Buzz
function fizzBuzz(){
    // Create variable for result element
    const fizzBuzzResult = document.getElementById('fizzBuzzResult');
    // Use for loop to run through numbers 1 - 100
    for(let number = 0; number < 101; number++){
        // If statement uses modulas to determine if number is divisible by 3 and not divisible by 5
        if(number%3 === 0 && number%5 != 0){
            // Creates paragraph "FIZZ" if divisible by 3 but not 5
            fizzBuzzResult.innerHTML += "<p>FIZZ</p>";
        } 
        // Else-if uses modulas to determine if number divisible by 5 but not 3
        else if(number%5 === 0 && number%3 != 0){
            // Creates paragraph "BUZZ" if divisible by 5 but not 3
            fizzBuzzResult.innerHTML += "<p>BUZZ</p>";
        // Else-if uses modulas to determine if number divisible by 3 and 5
        } else if(number%3 === 0 && number%5 === 0){
            // Creates paragraph "FizzBuzz" if divisible by 3 and 5
            fizzBuzzResult.innerHTML += "<p>FizzBuzz</p>";
        }
        // Else statement creates paragraph of number if the above are not true
        else {
            fizzBuzzResult.innerHTML += "<p>" + number + "</p>";
        }  
    }
}



