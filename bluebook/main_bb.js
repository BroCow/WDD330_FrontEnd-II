
/********** BUILDING OUT THE DOM **********/


// Display day of month headers
displayDaysHeader();

// Array for work process categories
const categoryArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K'];
// Array to store all daily hours inputs
const hoursArray = [];

// Function to display the days of the month at top of the form
function displayDaysHeader(){
    const daysHeader = document.getElementById('daysHeader');
    for(let i = 1; i < 32; i++){
        const thDays = document.createElement('th');
        thDays.setAttribute('id', 'day' + i);
        thDays.setAttribute('class', 'thDay');
        thDays.innerHTML = i;
    
        daysHeader.appendChild(thDays);
    } 
} 

// Create constructor for Entered Hours
function EnteredHours (name, id, value){
    this.name = name;  // name assigned to elements: day1, day2, day3, etc
    this.id = id;   // id assigned to element: A1, B2, C3, etc
    this.value = value; // value entered by user - number of hours worked on that day in that category
}

/* Display daily hours data inputs */
function displayTdInputs(){
   // Loop through each category and set variable 'cat' to be used in creating table data inputs
    for(let x = 0; x<categoryArray.length; x++){
        let cat = categoryArray[x];
        const tableDataInputs = document.getElementById('tableDataInputs_' + cat);

        // For each category, loop through each day of the month and create a table data/input
        for(let i = 1; i < 32; i++){
            const td = document.createElement('td');
            const tdInput = document.createElement('input');

            tdInput.setAttribute('type', 'number');
            tdInput.setAttribute('name', 'day' + i);
            tdInput.setAttribute('class', 'dailyInput');
            tdInput.setAttribute('id', cat + i);
            tdInput.setAttribute('value', ' ');
            tdInput.setAttribute('value', 0);
    
            td.appendChild(tdInput);
            tableDataInputs.appendChild(td);

            let test = new EnteredHours(tdInput.name, tdInput.id, tdInput.value);
            hoursArray.push(test);
        }

    // Create monthly total table data/input as last entry for each category
    const td_total = document.createElement('td');
    const tdInput_total = document.createElement('input');
    tdInput_total.setAttribute('type', 'number');
    tdInput_total.setAttribute('name', cat + '_monthTotal');
    tdInput_total.setAttribute('class', 'monthTotal');
    tdInput_total.setAttribute('id', cat + '_monthTotal');

    td_total.appendChild(tdInput_total);
    tableDataInputs.appendChild(td_total);
    }  
}
// Call function to build out table
displayTdInputs();


/* Display on-the-job hours data inputs */
function displayOnJobHoursInputs(){
    const onJobHours = document.getElementById('onJobHours');

    // Loop through each day of the month and create on-th-job hours total
    for(let i = 1; i < 32; i++){
        const td = document.createElement('td');
        const tdInput = document.createElement('input');

        tdInput.setAttribute('type', 'number');
        tdInput.setAttribute('name', 'dailyOnJobTotal' );
        tdInput.setAttribute('class', 'job_class_hours');
        tdInput.setAttribute('id', 'day' + i + 'onJobTotal');

        td.appendChild(tdInput);
        onJobHours.appendChild(td);
    }

     // Create monthly on-the-job total table data/input as last entry for each category
     const td_total = document.createElement('td');
     const tdInput_total = document.createElement('input');
     tdInput_total.setAttribute('type', 'number');
     tdInput_total.setAttribute('name', 'onJob_monthTotal');
     tdInput_total.setAttribute('class', 'job_class_total');
     tdInput_total.setAttribute('id', 'onJob_monthTotal');
 
     td_total.appendChild(tdInput_total);
     onJobHours.appendChild(td_total);
 }
 // Call function to build out on the job hours inputs
 displayOnJobHoursInputs();


 /* Display in class hours data inputs */
function displayInClassHoursInputs(){
    const inClassHours = document.getElementById('inClassHours');

    // Loop through each day of the month and create on-th-job hours total
    for(let i = 1; i < 32; i++){
        const td = document.createElement('td');
        const tdInput = document.createElement('input');

        tdInput.setAttribute('type', 'number');
        tdInput.setAttribute('name', 'inClassTotal' + i);
        tdInput.setAttribute('class', 'job_class_hours');
        tdInput.setAttribute('id', 'inClassTotal' + i);

        td.appendChild(tdInput);
        inClassHours.appendChild(td);
    }

     // Create monthly on-the-job total table data/input as last entry for each category
     const td_total = document.createElement('td');
     const tdInput_total = document.createElement('input');
     tdInput_total.setAttribute('type', 'number');
     tdInput_total.setAttribute('name', 'inClass_monthTotal');
     tdInput_total.setAttribute('class', 'job_class_total');
     tdInput_total.setAttribute('id', 'inClass_monthTotal');
 
     td_total.appendChild(tdInput_total);
     inClassHours.appendChild(td_total);
 }
 // Call function to build out in class hours inputs
 displayInClassHoursInputs();



/* Loop through all daily hours inputs and assign eventListener to each - create variables from event triggers to pass to calculation function */
for(let x=1; x<32; x++){    // loop through each day of the month
    for(let i=0; i<categoryArray.length; i++){  // use categoryArray length and use categoryArray values to getElementsById
        let dailyCatHours = document.getElementById(categoryArray[i] + x);
        console.log(dailyCatHours);

        dailyCatHours.addEventListener('change', (event)=>{  // add event handler to element listening for a change
            console.log('input changed');
            

            console.log(event.target.name);  // use 'target' to get name of element that changed, store in variable
            const hoursName = event.target.name;
    
            console.log(event.target.id);
            const hoursId = event.target.id;
    
            console.log(event.target.value);
            let hoursValue = parseInt(event.target.value);
            
            const hoursArrayLength = hoursArray.length;
            console.log(hoursArrayLength);
            
            updateArrayValue(hoursId, hoursValue);
            calcDailyTotal(hoursName);
            console.log(hoursArray);
     
            // Set up push to localStorage so that whenever a value changes, it is also updated in localStorage
        }); 
    }
}


/* Function takes day name from event.target.name from eventListener 'change' of input value */
function calcDailyTotal(day){
    console.log('calculate total called');
    // Set dailyTotal variable to initial value of '0'
    let dailyTotal = 0;
    // Loop through hoursArray - if the day name passed to function matches name in array, then add up the values associated with that day name
    for(let i=0; i<hoursArray.length; i++){
        if(hoursArray[i].name === day){
            console.log(day);
            // Create value variable and make sure it is an integer from array value
            let value = parseInt(hoursArray[i].value);
            console.log(value);

            dailyTotal += value;
            console.log(dailyTotal);

            // Get element of on-the-job total by id
            let onJobTotal = document.getElementById(day + 'onJobTotal');
            // Set value of ojt element to sum of values - make sure it is an integer
            onJobTotal.value = parseInt(dailyTotal);
        }
    }
}


function updateArrayValue(id, value){
    for(i=0; i<hoursArray.length; i++){
        if(hoursArray[i].id === id){
            hoursArray[i].value = value;
        }
    }
}