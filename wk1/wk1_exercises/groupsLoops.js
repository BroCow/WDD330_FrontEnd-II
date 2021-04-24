// Show value of index in array
var someNumbers = [23, 46, -6, 7, "This isn't a number", 3, 108, 85, 32, 6, 5];
function showArrayIndex(){
    var indexEntered = document.getElementById("arrayIndexInput").value;
    var indexValue = someNumbers[indexEntered];
    document.getElementById("displayIndexValue").innerHTML = "The value of index " + indexEntered + " is " + indexValue + "!";
}

// Even or Odd Looping
function checkNumber(){
    for(var i = 0; i<10; i++){
        var someNumbers = [23, 46, -6, 7, "This isn't a number", 3, 108, 85, 32, 6, 5];

        var numberEntered = someNumbers[i];
        var numberVerified = parseInt(numberEntered);
    
        if(numberEntered != "" && !isNaN(numberVerified)){
            var remainder = Math.abs(numberVerified % 2);
            if(numberEntered != 0 && remainder == 0){
                document.getElementById("result").innerHTML += "<p>The number " + numberEntered + " is even!</p>";
            } 
            else if(numberEntered != 0 && remainder == 1){
                document.getElementById("result").innerHTML += "<p>The number " + numberEntered + " is odd!</p>";
            }
            else{
                document.getElementById("result").innerHTML += "<p>The number entered is 0, so it is neither even or odd!</p>";
            }
        }
        else{
            document.getElementById("result").innerHTML += "<p>Please enter a number!</p>";
        }
    }
    
} 
