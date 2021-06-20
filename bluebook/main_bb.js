
/********** BUILDING OUT THE DOM **********/


// Display day of month headers
displayDaysHeader();

// Array for work process categories
const categoryArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K'];

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

// Display daily table data inputs
function EnteredHours (name, id, value){
    this.name = name;  // name assigned to elements: day1, day2, day3, etc
    this.id = id;   // id assigned to element: A1, B2, C3, etc
    this.value = value; // value entered by user - number of hours worked on that day in that category
}

const hoursArray = [];

function displayTdInputs(){
   // Loop through each category and set variable 'cat' to be used in creating table data inputs
    for(let x = 0; x<categoryArray.length; x++){
        let cat = categoryArray[x];
        const tableDataInputs = document.getElementById('tableDataInputs_' + cat);
        // For each category, loop through each day of the month and create a table data/input
        for(let i = 1; i < 32; i++){
        
            //const td = document.createElement('td');
            const td = document.createElement('td');
        
            //const tdInput = document.createElement('input');
            const tdInput = document.createElement('input');
            tdInput.setAttribute('type', 'number');
            tdInput.setAttribute('name', 'day' + i);
            tdInput.setAttribute('class', 'dailyInput');
            tdInput.setAttribute('id', cat + i);
            tdInput.setAttribute('value', " ");
    
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


// Display on-the-job hours data inputs
function displayOnJobHoursInputs(){
    const onJobHours = document.getElementById('onJobHours');
    // Loop through each day of the month and create on-th-job hours total
    for(let i = 1; i < 32; i++){
    
        //const td = document.createElement('td');
        const td = document.createElement('td');
    
        //const tdInput = document.createElement('input');
        const tdInput = document.createElement('input');
        tdInput.setAttribute('type', 'number');
        tdInput.setAttribute('name', 'onJobTotal' + i);
        tdInput.setAttribute('class', 'job_class_hours');
        tdInput.setAttribute('id', 'onJobTotal' + i);

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
 displayOnJobHoursInputs();

 // Display in class hours data inputs
function displayInClassHoursInputs(){
    const inClassHours = document.getElementById('inClassHours');
    // Loop through each day of the month and create on-th-job hours total
    for(let i = 1; i < 32; i++){
    
        //const td = document.createElement('td');
        const td = document.createElement('td');
    
        //const tdInput = document.createElement('input');
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
 displayInClassHoursInputs();


/********** Create constructors and event handlers for user inputs **********/

// Constructor for entered hours by user for each daily/category input

// Array to store 'new EnteredHours' objects: name, id, value




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

            //let hours = new EnteredHours(hoursName, hoursId, hoursValue);

            if(hoursArray.length > 0){
                console.log('array exists');
                for(let i=0; i<hoursArray.length; i++){
                    console.log(hoursArray[i].id);
                    if(hoursId === hoursArray[i].id){
                        console.log('duplicate id - replacing value');
                        hoursArray[i].value = hoursValue;
                    } else {
                        createNewHoursEntry(hoursName, hoursId, hoursValue);
                    }
                }
            } else {
                console.log('no array');
                createNewHoursEntry(hoursName, hoursId, hoursValue);
            }
             
            calcDailyTotal();
            console.log(hoursArray);
     
            // Set up push to localStorage so that whenever a value changes, it is also updated in localStorage
        });
        
    }
}

// Need to set daily totals to equal sum of daily values
// Use switch for each day?????
function calcDailyTotal(){
    console.log('calculate total called');
    let day1Total = 0;
    for(let i=0; i<hoursArray.length; i++){
        if(hoursArray[i].name === 'day1'){
            day1Total += hoursArray[i].value;
        }
    }
    console.log(day1Total);
    let onJobTotal = document.getElementById('onJobTotal1');
    //document.getElementById('onJobTotal1').innerText = day1Total;
    //console.log(onJobTotal);
    onJobTotal.value = day1Total;
}

function createNewHoursEntry(hoursName, hoursId, hoursValue){
    console.log('create new hours entry called');
    let hours = new EnteredHours(hoursName, hoursId, hoursValue);  // create new instance of EnteredHours passing target name, id, and value
    console.log(hours); 

    hoursArray.push(hours);  // push new object to hoursArray
    console.log(hoursArray);
}





//if(hoursArrayLength === 0){
    //     //let hours = new EnteredHours(hoursName, hoursId, hoursValue);  // create new instance of EnteredHours passing target name, id, and value
    //     //console.log(hours); 

    //     hoursArray.push(hours);  // push new object to hoursArray
    //     console.log(hoursArray);
    // }
    // // else if(hoursArrayLength > 0){
    // //     for(let i=0; i<hoursArrayLength; i++){
    // //         if(hoursArray[i].id === hoursId){
    // //             hoursArray[i].value = hoursValue;
    // //         }
    // //     }
    // //     console.log(hoursArray[i].value);
    // // }
    
    // for(let i=0; i<hoursArrayLength; i++){
    //     if(hoursArray[i].id === hoursId){
    //         hoursArray[i].value = hoursValue;
    //         //let hours = new EnteredHours(hoursName, hoursId, hoursValue);
    //         // hoursArray.splice(i, 1, hours);
    //         console.log('array element spliced');
    //     }
        
    //     else {
    //         console.log('array exists and new item');
    //         //let hours = new EnteredHours(hoursName, hoursId, hoursValue);  // create new instance of EnteredHours passing target name, id, and value
    //         //console.log(hours); 

    //         hoursArray.push(hours);  // push new object to hoursArray
            
    //         let lastItem = hoursArray[hoursArray.length - 1];
    //         console.log(lastItem);
    //         if(hoursArray[i].id === lastItem.id){
    //             console.log('uh-oh');
    //         }
    //     }
    //     console.log(hoursArray);
    // }