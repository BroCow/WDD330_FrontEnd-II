

//variables for buttons & div output
const searchBtn = document.getElementById('search');
const newSearchBtn = document.getElementById('newSearchBtn');
const cut = document.getElementById('cut');

const outputDiv = document.getElementById('output');
const basicInfoDiv = document.getElementById('basicInfoDiv');
const body = document.getElementById('body');
const poster = document.getElementById('poster');
const searchField = document.getElementById('searchField');

const titleInput = document.getElementById('title');

//event handlers for button
searchBtn.addEventListener('click', () => {
    console.log('event click');
    // Store user input into 'searchValue' variable
    const searchValue = titleInput.value;
    console.log(searchValue);

    toggleSearchField();
    
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
},false);

let movieData;
// Receives data from response and displays
function getData(result){
    console.log(result);
    movieData = result;
    
    showPoster();
    showBasicInfo();
    
    titleInput.value = " ";
}

function toggleSearchField(){
    if(titleInput.style.display === 'block'){
        titleInput.style.display = 'none';
        searchBtn.style.display = 'none';
        cut.style.display = 'none';
        newSearchBtn.style.display = 'block';
    }
    else if(titleInput.style.display === 'none'){
        titleInput.style.display = 'block';
        searchBtn.style.display = 'block';
        // cut.style.display = 'block';
        newSearchBtn.style.display = 'none';
    }
    
}
newSearchBtn.addEventListener('click', toggleSearchField);


function showPoster(){
    console.log(movieData.Poster);
    poster.setAttribute('src', movieData.Poster);
}

const the = document.querySelector('.the');
const movieMonster = document.getElementById('movieMonster');

function animateTitle(){
    window.setTimeout( 
        ()=>transformTitle(),
        3000
    ); 
    console.log(the);
}

function transformTitle(){
    movieMonster.setAttribute('class', 'transform_movieMonster');
    the.setAttribute('id', 'transform_the');
     
}

function showBasicInfo(){
    console.log('show basic info called');
    //removeBasicInfoDivInfo();

    let title = movieData.Title;
    console.log(movieData.Title);
    let year = movieData.Year;
    let rated = movieData.Rated;
    let released = movieData.Released;
    let runtime = movieData.Runtime;

    basicInfoDiv.setAttribute('class', 'infoDiv');

    let removeH3 = document.querySelector('.infoHeader');
    if(removeH3 != null){
        removeH3.remove();
    }

    let basicInfoHeader = document.createElement('h3');
    basicInfoHeader.setAttribute('class', 'infoHeader');
    basicInfoHeader.innerHTML = 'General Information';
    basicInfoDiv.appendChild(basicInfoHeader);

    let removeTitle = document.getElementById('movieTitle');
    if(removeTitle != null){
        removeTitle.remove();
    }
    let p_title = document.createElement('p');
    p_title.setAttribute('class', 'basicInfo');
    p_title.setAttribute('id', 'movieTitle');
    p_title.innerHTML = 'Title: ' + title;
    basicInfoDiv.appendChild(p_title);

    let removeYear = document.getElementById('year');
    if(removeYear != null){
        removeYear.remove();
    }
    let p_year = document.createElement('p');
    p_year.setAttribute('class', 'basicInfo');
    p_year.setAttribute('id', 'year');
    p_year.innerHTML = 'Year: ' + year;
    basicInfoDiv.appendChild(p_year);

    let removeRated = document.getElementById('rated');
    if(removeRated != null){
        removeRated.remove();
    }
    let p_rated = document.createElement('p');
    p_rated.setAttribute('class', 'basicInfo');
    p_rated.setAttribute('id', 'rated');
    p_rated.innerHTML = 'Rated: ' + rated;
    basicInfoDiv.appendChild(p_rated);

    let removeReleased = document.getElementById('released');
    if(removeReleased != null){
        removeReleased.remove();
    }
    let p_released = document.createElement('p');
    p_released.setAttribute('class', 'basicInfo');
    p_released.setAttribute('id', 'released');
    p_released.innerHTML = 'Released: ' + released;
    basicInfoDiv.appendChild(p_released);

    let removeRuntime = document.getElementById('runtime');
    if(removeRuntime != null){
        removeRuntime.remove();
    }
    let p_runtime = document.createElement('p');
    p_runtime.setAttribute('class', 'basicInfo');
    p_runtime.setAttribute('id', 'runtime');
    p_runtime.innerHTML = 'Runtime: ' + runtime;
    basicInfoDiv.appendChild(p_runtime);
}

// function removeBasicInfoDivInfo(){
//     let h3 = document.querySelector('.infoHeader');
//     if(h3 != null){
//         // h3.remove();
//         // p_title.remove();
//         // p_year.remove();
//         // p_rated.remove();
//         // p_released.remove
//     }
    
//     let p_children = document.getElementsByClassName('basicInfo');
//     console.log(p_children);
//     for(let i=0; i<p_children.length; i++){
//         p_children[i].remove();
//         console.log('removed ' + p_children[i]);
//     }
// }

















// function showMovieData(dataResults){
//     const results = dataResults;
//     console.log(results);
    // const movieDataList = document.getElementById('movieDataList');

    // const shipNameUL = document.createElement('ul');
    // shipNameUL.setAttribute('id', results.name);
    // shipNameUL.innerHTML = results.name;
    // shipDataList.appendChild(shipNameUL);

    // const shipNameById = document.getElementById(results.name);

    // const manufacturerLI = document.createElement('li');
    // manufacturerLI.innerHTML = results.manufacturer;
    // shipNameById.appendChild(manufacturerLI);

    // const lengthLI = document.createElement('li');
    // lengthLI.innerHTML = results.length;
    // shipNameById.appendChild(lengthLI);
//}

// /*** Display data results ***/
// function showMovieData(dataResults){
//     const results = dataResults;
//     const shipDataList = document.getElementById('shipDataList');

//     const shipNameUL = document.createElement('ul');
//     shipNameUL.setAttribute('id', results.name);
//     shipNameUL.innerHTML = results.name;
//     shipDataList.appendChild(shipNameUL);

//     const shipNameById = document.getElementById(results.name);

//     const manufacturerLI = document.createElement('li');
//     manufacturerLI.innerHTML = results.manufacturer;
//     shipNameById.appendChild(manufacturerLI);

//     const lengthLI = document.createElement('li');
//     lengthLI.innerHTML = results.length;
//     shipNameById.appendChild(lengthLI);
// }
