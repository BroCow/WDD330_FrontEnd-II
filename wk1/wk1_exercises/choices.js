

function checkNumber(){
    var numberEntered = document.getElementById("number").value;
    var remainder = numberEntered % 2;
    if(remainder == 0){
        document.getElementById("result").innerHTML = "The number " + numberEntered + " is even!";
    } else {
        document.getElementById("result").innerHTML = "The number " + numberEntered + " is odd!";
    }
}