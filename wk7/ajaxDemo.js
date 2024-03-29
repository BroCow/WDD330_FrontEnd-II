/*** AJAX ***/
//Ajax demo page code

//variables for buttons & div output
const textButton = document.getElementById('number');
const apiButton = document.getElementById('chuck');
const outputDiv = document.getElementById('output');
const responseP = document.getElementById('response');

//variables for urls
const textURL = 'http://numbersapi.com/random';
const apiURL = 'https://api.chucknorris.io/jokes/random';


//event handlers for buttons
textButton.addEventListener('click', () => {
    fetch(textURL)
    .then(response => {
        outputDiv.innerHTML = 'Waiting for response...';
        if(response.ok){
            console.log(response);
            return response;
        }
        throw Error(response.statusText);
    })
    
    .then(response => response.text())
    .then( text => outputDiv.innerText = text)
    .catch( error => console.log('There was an error:', error))
},false);


apiButton.addEventListener('click', () => {
    fetch(apiURL)
    .then(response => {
        outputDiv.innerHTML = 'Waiting for a response...';
        if(response.ok){
            console.log(response);
            return response;
        }
        throw Error(response.statusText);
    })
    .then(response => response.json())
    .then(data =>outputDiv.innerText = data.value)
    .catch(error => console.log('There was an error:', error))
},false);