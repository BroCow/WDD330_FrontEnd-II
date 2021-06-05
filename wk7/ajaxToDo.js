

const form = document.forms['todo'];
form.addEventListener('submit', addTask, false);

function addTask(event) {
    event.preventDefault();             //prevent form submission when button clicked
    const number = form.task.value;     //uses "name" of input ("task") to get input value
    console.log(number);     
    const task = {                      //create task object with TITLE property that will be what is entered by user
        userId: 1,
        title: form.task.value,
        completed: false
    }
    const data = JSON.stringify(task);  //transform to JSON string and assign to variable 'data'
    const url = 'https://jsonplaceholder.typicode.com/todos';

    const headers = new Headers({           //build Header object
        'Accept': 'application/json',       //sending JSON, so need to add this
        'Content-Type': 'application/json'
    });

    const request = new Request(url,
        {
            method: 'POST',             //sending data, so method set to POST
            header: headers,            // from variable storing new Header object   
            body: data                  // MOST IMPORTANT - where data sent is placed; data variable will send to server
        }
    )

    fetch(request)                      //use fetch method to send the request and deal with response
    .then(response => response.json())  //creates promise that resolves to JSON object, so us json() method to create another promise
                                        //that resolves to JS object
    .then(task => console.log(`Task saved with an id of ${task.id}`)) //id value is fake, simulating saving to database
    .catch(error => console.log('There was an error:', error))
}