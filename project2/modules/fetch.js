import { getData } from "./dataDisplay.js";


export const titleInput = document.getElementById('title');
const outputDiv = document.getElementById('output');

export function fetchAPIdata(){
    const searchValue = titleInput.value;
    console.log(searchValue);
    
    //variable for url - insert 'searchValue' into url to retrieve data
    const apiURL = `http://www.omdbapi.com/?t=${searchValue}&apikey=7661efe5`;

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
    .then(response => {
        // Set the type of data response that is provided to JSON and store in 'data' variable
        const data = response.json();
        console.log(data);
        return data;
    })  
    // Pass data to getData function that will display info
    .then(data => getData(data))
    
    .catch(error => console.log('There was an error:', error))
}