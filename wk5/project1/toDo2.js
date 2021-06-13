


const form = document.forms[0];
// console.log(form);
// console.log(document.forms.input);

/** Global HTML Element Variables **/
const checkboxInput = form.taskName;
//console.log(checkboxInput);
const checkboxLabel = document.getElementById('taskLabel');
//console.log(checkboxLabel);
const checkboxSpan = document.getElementById('removeTask');
//console.log(checkboxSpan);
const taskList = document.getElementById('taskList');
//console.log(taskList);
const tasksLeft = document.getElementById('tasksLeft');

const checkboxInputArray = document.getElementsByTagName('input');
//console.log(checkboxInput);
const checkboxLabelArray = document.getElementsByTagName('label');
//console.log(checkboxLabel);
const checkboxSpanArray = document.getElementsByTagName('span');
//console.log(checkboxSpan);

const taskCheckbox = document.querySelector('input[name=checkbox]');

//Button variables
const addBtn = form.add;
//console.log(addBtn);
const allBtn = form.all;
//console.log(allBtn);
const activeBtn = form.active;
//console.log(activeBtn);
const completedBtn = form.completed;
//console.log(completedBtn);

/** Array Variables */
const allTasksArray = [];
const activeTasksArray = [];
const completedTasksArray = [];

let storedTasksArray = null;

/** Event Listeners **/
// Add task button
addBtn.addEventListener('click', (trigger)=>{
    trigger.preventDefault();
    console.log('add clicked');

    const taskEntered = checkboxInput.value;
    console.log(taskEntered);

    add(taskEntered);
});
// Show completed tasks button
completedBtn.addEventListener('click', (trigger)=>{
    trigger.preventDefault();
    console.log('completed clicked');

    showCompletedTasks();
    //getNumberTasksLeft();
});
// All Tasks
allBtn.addEventListener('click', (trigger)=>{
    trigger.preventDefault();
    console.log('all clicked');

    showAllTasks();    
});
// Active Tasks
activeBtn.addEventListener('click', (trigger)=>{
    trigger.preventDefault();
    console.log('active clicked');

    showActiveTasks();
});



function getStoredTasks(){
    let storedArray = JSON.parse(localStorage.getItem("all_tasks"));
    if(storedArray != null){
        storedTasksArray = storedArray;
        //storedTasksArray.push(storedArray);
        console.log(storedTasksArray);

        // let numberTasksLeft = storedTasksArray.length - completedTasksArray.length;
        // tasksLeft.innerHTML = (numberTasksLeft) + ' tasks left!';
    } else {
        console.log('Nothing in local storage');
    }
}
getStoredTasks();



/** Model **/
class Task {
    constructor(taskName){
        this.id = new Date();
        this.taskName = taskName;
        this.completed = false; 

        // Add listen method
        this.listen = function(){
           
            const taskCompleteBox = document.getElementById(this.taskName);
            taskCompleteBox.addEventListener('change', ()=>{
                console.log('this event listener triggered');
                updateAllTasksArray_completed(this.taskName);

                const completeTask = new Task(this.taskName);
                completeTask.completed = true;
                console.log(completeTask);
                completedTasksArray.push(completeTask);
                console.log(completedTasksArray);

                updateCompletedHTML();
            });
        }
        // Add remove method
        this.remove = function(){
            const removeTaskBtn = document.getElementById('remove' + this.taskName);
            console.log(removeTaskBtn);
            removeTaskBtn.addEventListener('click', (trigger)=>{
                trigger.preventDefault();
                console.log('this.remove triggered');
                this.id = null;
                this.taskName = null;
                this.completed = null;
            });
        }
    }
};

/** Controller **/
// Add task - creates new task and pushes to allTasksArray
function add(taskName){
    const newTask = new Task(taskName);
    console.log(newTask);

    // allTasksArray.push(newTask);
    // console.log(allTasksArray);
    
    // let storedTaskString = localStorage.getItem("all_tasks");
    // let localStorageTaskList = JSON.parse(storedTaskString);

    //let storedTaskString = localStorage.getItem("all_tasks");
    let localStorageTaskList = JSON.parse(localStorage.getItem("all_tasks"));

    //console.log(storedTaskString);
    console.log(localStorageTaskList);
    if(localStorageTaskList === null){
        localStorageTaskList = [];
        console.log(localStorageTaskList);
    }

    localStorageTaskList.push(newTask);

    let localStorageTaskListString = JSON.stringify(localStorageTaskList);
    localStorage.setItem("all_tasks", localStorageTaskListString);
    console.log(localStorageTaskList);

    getStoredTasks();
    // let newStoredTaskList = localStorageTaskList;
    // return newStoredTaskList;

    console.log(storedTasksArray.length - 1);
    const lastItem = storedTasksArray.length - 1;
    const newStoredTask = storedTasksArray[lastItem];
    console.log(newStoredTask);
    //view.render(newTask);

    
    view.render(newStoredTask);
    let c=0;
    for(let i=0; i < storedTasksArray.length; i++){
        if(storedTasksArray[i].completed === false){
            c++;
        }
    }
    tasksLeft.innerHTML = c + ' tasks left!';
        
}
// let storedArray = JSON.parse(localStorage.getItem("all_tasks"));
// console.log(storedArray[0].taskName);
// document.getElementById('test').innerHTML = storedArray[1].taskName;


// Update allTasksArray task 'completed' to 'true' when checkbox checked
function updateAllTasksArray_completed(completeTaskName){
    for(let i=0; i<allTasksArray.length; i++){
        if (allTasksArray[i].taskName === completeTaskName){
            console.log('match');
            allTasksArray[i].completed = true;
            console.log(allTasksArray[i].taskName);
        }
    }
}
// Update HTML for completed task
function updateCompletedHTML(){
    console.log('updateCompletedHTML called');
    //getNumberTasksLeft();
    for(let i=0; i<checkboxInputArray.length; i++){
        if(checkboxInputArray[i].checked){
            checkboxLabelArray[i].style.textDecoration = 'line-through'; 
        }
    }
    // let numberTasksLeft = storedTasksArray.length;
    // tasksLeft.innerHTML = (numberTasksLeft) + ' tasks left!';
}


function getNumberTasksLeft(){
    const testArray = JSON.parse(localStorage.getItem("all_tasks"));

    let activeTasks=0;
    let completeTasks=0;
    //for(let i=0; i<storedTasksArray.length; i++){
    for(let i=0; i<testArray.length; i++){
        //if(storedTasksArray[i].completed = true){
        if(testArray[i].completed = true){
            activeTasks++;
            console.log(activeTasks);
        }
        //if(storedTasksArray[i].completed = false){
        if(testArray[i].completed = false){
            completeTasks++;
            console.log(completeTasks);
        }
    }
    let numberTasksLeft = activeTasks - completeTasks;
    console.log(numberTasksLeft);
    tasksLeft.innerHTML = (numberTasksLeft) + ' tasks left!'; 
}

/** View **/
// Need function to display added task
const view = {
    render(newStoredTask){
        // Create elements and store in variables

        const taskLineDiv = document.createElement('div');
        taskLineDiv.setAttribute('id', 'taskLineDiv');
        taskList.appendChild(taskLineDiv);
        taskLineDiv.innerHTML = 'Task Added: ' + newStoredTask.taskName;

        // const checkbox = document.createElement('input');
        // const checkboxLabel = document.createElement('label');

        // const removeTask = document.createElement('span');

        const nextLine = document.createElement('br');
        // Checkbox input and attributes
        // checkbox.setAttribute('type', 'checkbox');
        // console.log(newStoredTask.taskName);
        // checkbox.setAttribute('id', newStoredTask.taskName);
        // checkbox.setAttribute('name', 'checkbox');
        // checkbox.setAttribute('value', newStoredTask.taskName);

        // taskLineDiv.appendChild(checkbox);

        // document.getElementById(newStoredTask.taskName).addEventListener('change', ()=>{
        // console.log(newStoredTask.taskName + ' event listener triggered');
        // newStoredTask.completed = true;
        // console.log(newStoredTask.completed);
        // console.log(newStoredTask);
        // updateCompletedHTML();
        // });

        // //newStoredTask.listen();

        // // Checkbox label attributes and innerHTML
        // checkboxLabel.setAttribute('for', newStoredTask.taskName);
        // checkboxLabel.setAttribute('name', newStoredTask.taskName);
        // checkboxLabel.innerHTML = newStoredTask.taskName;

        // taskLineDiv.appendChild(checkboxLabel);

        // removeTask.setAttribute('class', 'removeTask');
        // removeTask.setAttribute('id', 'remove' + newStoredTask.taskName);
        // removeTask.innerHTML = 'Remove task';
        // removeTask.style.color = 'red';

        // taskLineDiv.appendChild(removeTask);
        //newStoredTask.remove();
        
        
        taskList.appendChild(nextLine); 
        taskList.appendChild(nextLine); 
    
        checkboxInput.value = '';
    }
};


function showCompletedTasks(){
    taskList.innerHTML = " ";  // Clear any tasks that were added before showing complete list

    console.log('showCompletedTasks called');
    console.log(storedTasksArray.length);
    console.log(storedTasksArray);
    //getNumberTasksLeft();
    
    for(let i=0; i < storedTasksArray.length; i++){
        if(storedTasksArray[i].completed === true){
        console.log('completed task found');
        // console.log(storedTasksArray[i].taskName);
        // console.log(storedTasksArray[i].completed);
        const taskLineDiv = document.createElement('div');
        taskLineDiv.setAttribute('id', 'taskLineDiv');
        taskList.appendChild(taskLineDiv);

        const checkbox = document.createElement('input');
        const checkboxLabel = document.createElement('label');

        const removeTask = document.createElement('span');

        const nextLine = document.createElement('br');

        checkbox.setAttribute('type', 'checkbox');
        checkbox.setAttribute('id', storedTasksArray[i].taskName);
        checkbox.setAttribute('name', 'checkbox');
        checkbox.setAttribute('value', storedTasksArray[i].taskName);
        checkbox.checked = true;
        
        taskLineDiv.appendChild(checkbox);

        checkboxLabel.setAttribute('for', storedTasksArray[i].taskName);
        checkboxLabel.setAttribute('name', storedTasksArray[i].taskName);
        checkboxLabel.innerHTML = storedTasksArray[i].taskName;
        
        checkboxLabel.style.textDecoration = 'line-through';
        taskLineDiv.appendChild(checkboxLabel);

        removeTask.setAttribute('class', 'removeTask');
        removeTask.setAttribute('id', 'remove' + storedTasksArray[i].taskName);
        removeTask.innerHTML = 'Remove task';
        removeTask.style.color = 'red';
        //taskComplete.style.display = 'block';
        taskLineDiv.appendChild(removeTask);

        /** THIS COULD BE A FUNCTION - PASS IN "storedTasksArray[i].taskname" **/
        document.getElementById('remove' + storedTasksArray[i].taskName).addEventListener('click', ()=>{
            console.log('remove' + storedTasksArray[i].taskName + ' event listener triggered');
            storedTasksArray.splice(i, 1);
            JSON.parse(localStorage.getItem("all_tasks")).splice(i, 1);
            removeTask.innerHTML = "Task Removed"
            removeTask.style.color = 'black';
            console.log('item removed');
        });
        
        taskList.appendChild(nextLine); 
        taskList.appendChild(nextLine); 
        }
    }
    //getNumberTasksLeft();
    // let numberTasksLeft = storedTasksArray.length;
    let c=0;
    for(let i=0; i < storedTasksArray.length; i++){
        if(storedTasksArray[i].completed === false){
            c++;
        }
    }
    tasksLeft.innerHTML = c + ' tasks left!';
}

function showAllTasks(){
    taskList.innerHTML = " ";  // Clear any tasks that were added before showing complete list

    for(let i=0; i<storedTasksArray.length; i++){
    // for(let i=0; i<storedArray.length; i++){
        if(storedTasksArray[i].completed === false){
        // if(storedArray[i].completed === false){
            const taskLineDiv = document.createElement('div');
            taskLineDiv.setAttribute('id', 'taskLineDiv');
            taskList.appendChild(taskLineDiv);

            const checkbox = document.createElement('input');
            const checkboxLabel = document.createElement('label');

            const removeTask = document.createElement('span');

            const nextLine = document.createElement('br');
            // Checkbox input and attributes
            checkbox.setAttribute('type', 'checkbox');
            console.log(storedTasksArray[i].taskName);
            checkbox.setAttribute('id', storedTasksArray[i].taskName);
            checkbox.setAttribute('name', 'checkbox');
            checkbox.setAttribute('value', storedTasksArray[i].taskName);

            //checkbox.setAttribute('value', task.taskName);
            taskLineDiv.appendChild(checkbox);

            document.getElementById(storedTasksArray[i].taskName).addEventListener('change', ()=>{
                console.log(storedTasksArray[i].taskName + ' event listener triggered');
                storedTasksArray[i].completed = true;
                console.log(storedTasksArray[i].completed);

                updateCompletedHTML();
            });
            

            // Checkbox label attributes and innerHTML
            checkboxLabel.setAttribute('for', storedTasksArray[i].taskName);
            checkboxLabel.setAttribute('name', storedTasksArray[i].taskName);
            checkboxLabel.innerHTML = storedTasksArray[i].taskName;

            taskLineDiv.appendChild(checkboxLabel);

            // "Remove Task" Button attributes and innerHTML
            removeTask.setAttribute('class', 'removeTask');
            removeTask.setAttribute('id', 'remove' + storedTasksArray[i].taskName);
            removeTask.innerHTML = 'Remove task';
            removeTask.style.color = 'red';

            taskLineDiv.appendChild(removeTask);

            document.getElementById('remove' + storedTasksArray[i].taskName).addEventListener('click', ()=>{
                console.log('remove' + storedTasksArray[i].taskName + ' event listener triggered');
                storedTasksArray.splice(i, 1);
                JSON.parse(localStorage.getItem("all_tasks")).splice(i, 1);
                removeTask.innerHTML = "Task Removed"
                removeTask.style.color = 'black';
                // localStorage.setItem("all_tasks", JSON.stringify(localStorage.getItem("all_tasks"))[i]);
                
                console.log('item removed');
            });
            
            taskList.appendChild(nextLine);
            taskList.appendChild(nextLine);

        } else if (storedTasksArray[i].completed = true){
                const taskLineDiv = document.createElement('div');
                taskLineDiv.setAttribute('id', 'taskLineDiv');
                taskList.appendChild(taskLineDiv);
                
                const checkbox = document.createElement('input');
                const checkboxLabel = document.createElement('label');
        
                const removeTask = document.createElement('span');
        
                const nextLine = document.createElement('br');
        
                checkbox.setAttribute('type', 'checkbox');
                checkbox.setAttribute('id', storedTasksArray[i].taskName);
                checkbox.setAttribute('name', 'checkbox');
                checkbox.setAttribute('value', storedTasksArray[i].taskName);
                checkbox.checked = true;
                
                taskLineDiv.appendChild(checkbox);
        
                checkboxLabel.setAttribute('for', storedTasksArray[i].taskName);
                checkboxLabel.setAttribute('name', storedTasksArray[i].taskName);
                checkboxLabel.innerHTML = storedTasksArray[i].taskName;

                checkboxLabel.style.textDecoration = 'line-through';

                taskLineDiv.appendChild(checkboxLabel);
        
                removeTask.setAttribute('class', 'removeTask');
                removeTask.setAttribute('id', 'remove' + storedTasksArray[i].taskName);
                removeTask.innerHTML = 'Remove task';
                removeTask.style.color = 'red';
                taskLineDiv.appendChild(removeTask);

                document.getElementById('remove' + storedTasksArray[i].taskName).addEventListener('click', ()=>{
                    console.log('remove' + storedTasksArray[i].taskName + ' event listener triggered');
                    storedTasksArray.splice(i, 1);
                    JSON.parse(localStorage.getItem("all_tasks")).splice(i, 1);
                    removeTask.innerHTML = "Task Removed"
                    removeTask.style.color = 'black';
                    
                    console.log('item removed');
                });
                    
                    taskList.appendChild(nextLine); 
                    taskList.appendChild(nextLine);
        }
    }
    let c=0;
    for(let i=0; i < storedTasksArray.length; i++){
        if(storedTasksArray[i].completed === false){
            c++;
        }
    }
    tasksLeft.innerHTML = c + ' tasks left!';
}

function showActiveTasks(){
    taskList.innerHTML = " ";  // Clear any tasks that were added before showing complete list

    for(let i=0; i<storedTasksArray.length; i++){
        if(storedTasksArray[i].completed === false){
            
            const taskLineDiv = document.createElement('div');
            taskLineDiv.setAttribute('id', 'taskLineDiv');
            taskList.appendChild(taskLineDiv);

            const checkbox = document.createElement('input');
            const checkboxLabel = document.createElement('label');

            const removeTask = document.createElement('span');

            const nextLine = document.createElement('br');
            // Checkbox input and attributes
            checkbox.setAttribute('type', 'checkbox');
            console.log(storedTasksArray[i].taskName);
            checkbox.setAttribute('id', storedTasksArray[i].taskName);
            checkbox.setAttribute('name', 'checkbox');
            checkbox.setAttribute('value', storedTasksArray[i].taskName);

            //checkbox.setAttribute('value', task.taskName);
            taskLineDiv.appendChild(checkbox);

            document.getElementById(storedTasksArray[i].taskName).addEventListener('change', ()=>{
                console.log(storedTasksArray[i].taskName + ' event listener triggered');
                storedTasksArray[i].completed = true;
                console.log(storedTasksArray[i].completed);
            });

            // ADD THIS AFTER TEST - checkbox.addEventListener('change', markComplete);

            // Checkbox label attributes and innerHTML
            checkboxLabel.setAttribute('for', storedTasksArray[i].taskName);
            checkboxLabel.setAttribute('name', storedTasksArray[i].taskName);
            checkboxLabel.innerHTML = storedTasksArray[i].taskName;

            taskLineDiv.appendChild(checkboxLabel);

            // "Remove Task" Button attributes and innerHTML
            removeTask.setAttribute('class', 'removeTask');
            removeTask.setAttribute('id', 'remove' + storedTasksArray[i].taskName);
            removeTask.innerHTML = 'Remove task';
            removeTask.style.color = 'red';

            taskLineDiv.appendChild(removeTask);
            
            document.getElementById('remove' + storedTasksArray[i].taskName).addEventListener('click', ()=>{
                console.log('remove' + storedTasksArray[i].taskName + ' event listener triggered');
                storedTasksArray.splice(i, 1);
                JSON.parse(localStorage.getItem("all_tasks")).splice(i, 1);
                
                removeTask.innerHTML = "Task Removed"
                removeTask.style.color = 'black';
                console.log('item removed');
            });
            
            taskList.appendChild(nextLine);
            taskList.appendChild(nextLine);
        }
    }
    let c=0;
    for(let i=0; i < storedTasksArray.length; i++){
        if(storedTasksArray[i].completed === false){
            c++;
        }
    }
    tasksLeft.innerHTML = c + ' tasks left!';
}

console.log(completedTasksArray);



function clearTasks(){
    localStorage.clear();
}
