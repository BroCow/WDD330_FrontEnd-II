

//variables for buttons & div output
const apiButton = document.getElementById('ships');
const outputDiv = document.getElementById('output');
const nextButton = document.getElementById('nextBtn');
const prevButton = document.getElementById('prevBtn');


//variable for url
const apiURL = "https://swapi.dev/api/starships/";

//event handlers for button
apiButton.addEventListener('click', () => {
    console.log('event click');
    fetch(apiURL)
    .then(response => {
        outputDiv.innerHTML = 'Waiting for a response...';
        if(response.ok){
            console.log(response);
            return response;
        }
        throw Error(response.statusText);
    })
    
    /*** Deal with the response ***/
    .then(response => response.json())  // Set the type of data response that is provided to JSON
    //.then(data =>outputDiv.innerText = JSON.stringify(data))
    //.then(data =>outputDiv.innerText = data.results[0].name)
    
    //.then(data =>showShipData(data.results))
    .then(data =>data.results.forEach(showShipData))    // Call forEach function to display data results

    //.then(data => outputDiv.innerText = data.next)
    .catch(error => console.log('There was an error:', error))
},false);


/*** Display data results ***/
function showShipData(dataResults){
    const results = dataResults;
    const shipDataList = document.getElementById('shipDataList');

    const shipNameUL = document.createElement('ul');
    shipNameUL.setAttribute('id', results.name);
    shipNameUL.innerHTML = results.name;
    shipDataList.appendChild(shipNameUL);

    const shipNameById = document.getElementById(results.name);

    const manufacturerLI = document.createElement('li');
    manufacturerLI.innerHTML = results.manufacturer;
    shipNameById.appendChild(manufacturerLI);

    const lengthLI = document.createElement('li');
    lengthLI.innerHTML = results.length;
    shipNameById.appendChild(lengthLI);
}


function showNextPrev(){
    nextButton.style.display = "block";
    prevButton.style.display = "block";
}


/** Event listeners and functions for "Next" and "Previous" buttons */
nextButton.addEventListener('click', ()=>{
    location.href = "http://swapi.dev/api/starships/?page=2";
});