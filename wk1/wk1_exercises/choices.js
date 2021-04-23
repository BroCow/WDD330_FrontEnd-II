

function checkNumber(){
    var numberEntered = document.getElementById("number").value;
    var numberVerified = parseInt(numberEntered);

    if(numberEntered != "" && !isNaN(numberVerified)){
        var remainder = Math.abs(numberVerified % 2);
        if(numberEntered != 0 && remainder == 0){
            document.getElementById("result").innerHTML = "The number " + numberEntered + " is even!";
        } 
        else if(numberEntered != 0 && remainder == 1){
            document.getElementById("result").innerHTML = "The number " + numberEntered + " is odd!";
        }
        else{
            document.getElementById("result").innerHTML = "The number entered is 0, so it is neither even or odd!";
        }
    }
    else{
        document.getElementById("result").innerHTML = "Please enter a number!";
    }

} 