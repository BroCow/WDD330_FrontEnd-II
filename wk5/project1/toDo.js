
'use strict';

const form = document.forms[0];
console.log(form);

// const toDoList = [];
// console.log(toDoList);



//const storedToDoList = saveTask();
//console.log(storedToDoList);

// let taskCount = storedToDoList.length;
// console.log(taskCount);
// let taskCountString = taskCount.toString();
// console.log(taskCountString);

// const tasksLeft = document.getElementById('tasksLeft');
// tasksLeft.innerHTML = taskCount + " tasks left";


const checkboxInput = document.getElementsByTagName('input');
console.log(checkboxInput);
const checkboxLabel = document.getElementsByTagName('label');
console.log(checkboxLabel);
const checkboxSpan = document.getElementsByTagName('span');
console.log(checkboxSpan);

const completedTaskArray = [];
 
/*** Model ***/ 

class Task {
    constructor(taskName){
        this.id = new Date();
        this.taskName = taskName;
        this.completed = Boolean; 
    }
};

  
function markComplete(){
    console.log('checkbox change');
    
    for(let i=0; i<checkboxInput.length; i++){
        console.log(checkboxInput[i].checked);
        let toDoList = saveTask();
        toDoList.pop();
        
        if(checkboxInput[i].checked){
            checkboxLabel[i].style.textDecoration = 'line-through';
            checkboxSpan[i].style.display = 'block';  
            console.log(checkboxInput[i].value);
            let checkedTask = checkboxInput[i].value;

            for(let i=0; i < toDoList.length; i++){
                if(toDoList[i].taskName === checkedTask){
                    console.log("found a match");
                    console.log(toDoList[i].taskName);
                    toDoList[i].completed = true;
                    console.log(toDoList[i].completed);

                    completedTaskArray.push(toDoList[i]);
                    console.log(completedTaskArray);  
                }
            }
        }
    }
}


function showCompletedTasks(){
    // let toDoList = saveTask();
    // toDoList.pop();

    taskList.innerHTML = " ";  // Clear any tasks that were added before showing complete list

    for(let i=0; i < completedTaskArray.length; i++){
        
        console.log("found a completed task");
        console.log(completedTaskArray[i].taskName);
        console.log(completedTaskArray[i].completed);

        const taskList = document.getElementById('taskList');
        

        const checkbox = document.createElement('input');
        const checkboxLabel = document.createElement('label');

        const taskComplete = document.createElement('span');

        const nextLine = document.createElement('br');

        checkbox.setAttribute('type', 'checkbox');
        checkbox.setAttribute('id', completedTaskArray[i].taskName);
        checkbox.setAttribute('value', completedTaskArray[i].taskName);
        checkbox.checked = true;
        
        taskList.appendChild(checkbox);


        checkboxLabel.setAttribute('for', completedTaskArray[i].taskName);
        checkboxLabel.innerHTML = completedTaskArray[i].taskName;
        checkboxLabel.style.textDecoration = 'line-through';
        taskList.appendChild(checkboxLabel);

        taskComplete.setAttribute('class', 'taskComplete');
        taskComplete.innerHTML = 'Remove task';
        taskComplete.style.color = 'red';
        taskComplete.style.display = 'block';
        taskList.appendChild(taskComplete);
        
        taskList.appendChild(nextLine); 
        
    }
}



/*** Controller ***/
console.log(form.elements.all);
const allTaskBtn = form.elements.all;

console.log(form.elements.completed);
const completedTaskBtn = form.elements.completed;

console.log(form.elements.add);
const addTaskBtn = form.elements.add;


console.log(form.elements.taskName);
const taskInput = form.elements.taskName;


addTaskBtn.addEventListener('click', (trigger) => {
    trigger.preventDefault();
    console.log('add button clicked');
    console.log(form.taskName.value);
    
    this.add(taskInput.value);
}, false);


allTaskBtn.addEventListener('click', (trigger) => {
    trigger.preventDefault();
    console.log('all button clicked');
    let toDoList = saveTask();
    toDoList.pop();
    //console.log(toDoList);

    for(let i = 0; i < toDoList.length; i++){
        if(toDoList[i] === null){
            toDoList.splice([i], 1);
        }
    }
    //console.log(toDoList.length);
    
    taskList.innerHTML = " ";  // Clear any tasks that were added before showing complete list

    for(let i = 0; i < toDoList.length; i++){
        if(toDoList[i] === null){
            toDoList.splice([i], 1);
        }
        if(toDoList[i] != null){
            const taskList = document.getElementById('taskList');
            
    
            const checkbox = document.createElement('input');
            const checkboxLabel = document.createElement('label');
    
            const taskComplete = document.createElement('span');
    
            const nextLine = document.createElement('br');
    
            checkbox.setAttribute('type', 'checkbox');
            
            checkbox.setAttribute('id', toDoList[i].taskName);

            checkbox.setAttribute('value', toDoList[i].taskName);
            
            taskList.appendChild(checkbox);
    
            checkbox.addEventListener('change', markComplete);
    
            checkboxLabel.setAttribute('for', toDoList[i].taskName);
            checkboxLabel.innerHTML = toDoList[i].taskName;
            taskList.appendChild(checkboxLabel);
    
            taskComplete.setAttribute('class', 'taskComplete');
            taskComplete.innerHTML = 'Remove task';
            taskComplete.style.color = 'red';
            taskComplete.style.display = 'none';
            taskList.appendChild(taskComplete);
            
            taskList.appendChild(nextLine); 
        }  
    }
}, false);  

completedTaskBtn.addEventListener('click', (trigger) => {
    trigger.preventDefault();
    console.log('completed button clicked');
    console.log(trigger.target);
    showCompletedTasks();
});

    

function add(taskName){
        const task = new Task(taskName);
        console.log(task);
        saveTask(task);
        view.render(task);
}




/*** View ***/
const view = {
    render(task){
        // const storedToDoList = saveTask();
        // console.log(storedToDoList);

        // let taskCount = storedToDoList.length;
        // console.log(taskCount);
        // let taskCountString = taskCount.toString();
        // console.log(taskCountString);
        
        // const tasksLeft = document.getElementById('tasksLeft');
        // console.log(taskCountString);
        // tasksLeft.innerHTML = taskCount + " tasks left";

        const taskList = document.getElementById('taskList');

        const checkbox = document.createElement('input');
        const checkboxLabel = document.createElement('label');

        const taskComplete = document.createElement('span');

        const nextLine = document.createElement('br');

        checkbox.setAttribute('type', 'checkbox');
        console.log(task.taskName);
        checkbox.setAttribute('id', task.taskName);
        //checkbox.setAttribute('value', task.taskName);
        taskList.appendChild(checkbox);

        checkbox.addEventListener('change', markComplete);

        checkboxLabel.setAttribute('for', task.taskName);
        checkboxLabel.innerHTML = task.taskName;
        taskList.appendChild(checkboxLabel);

        taskComplete.setAttribute('class', 'taskComplete');
        taskComplete.innerHTML = 'X';
        taskComplete.style.color = 'red';
        taskComplete.style.display = 'none';
        taskList.appendChild(taskComplete);
        
        taskList.appendChild(nextLine);  
        
        
        //tasksLeft.innerHTML = taskCount + " tasks left";
    
        form.taskName.value = '';
    }
};



/*** Save Task to LocalStorage ***/
function saveTask(task){
    let setTask = task;
    //console.log('setTask is ' + setTask);

    var storedTaskString = localStorage.getItem("all_tasks");
    var toDoList = JSON.parse(storedTaskString);

    // If there are no stored tasks in the toDoList variable, create an array to store them
    if(toDoList == null){
        toDoList = [];
    }

    toDoList.push(setTask);
    

    if(toDoList[0] == null){
        toDoList.shift();
    }

    for(let i = 0; i < toDoList.length; i++){
        if(toDoList[i] === null){
            toDoList.splice([i], 1);
        }
    }

    var toDoListString = JSON.stringify(toDoList); // Convert everything in allNotes array to string so localStorage can store it
    localStorage.setItem("all_tasks", toDoListString); // Store allNotesString using the key 'all_notes'

    //let toDoListCount = toDoList.length;
    //return taskCount;
    return toDoList;
}


// function getToDoListCount(){
//     let toDoListCount = toDoList.length;
//     return toDoListCount;
// }
// console.log(getToDoListCount());


// function showNumberTasksLeft(){
//     let numberTasksLeft = taskCountString;
//     tasksLeft.innerHTML = numberTasksLeft + ' tasks left';
// }

function clearTasks(){
    localStorage.clear();
}








// const controller = {
//     watch(addTaskBtn){
//         addTaskBtn.addEventListener('submit', (trigger) => {
//             trigger.preventDefault();
//             console.log(form.taskName.value);
//             this.add(taskInput.value);
//         }, false);
//     },

//     add(taskName){
//         const task = new Task(taskName);
//         console.log(task);
        
//         saveTask(task);
        
//         view.render(task); 
//     }
// };
// controller.watch(form);



// const controller = {
//     watch(allTaskBtn){
//         allTaskBtn.addEventListener('click', (trigger) => {
//             trigger.preventDefault();
//             console.log('all button clicked');
//         }, false);  
//     },

//     watch(addTaskBtn){
//         addTaskBtn.addEventListener('click', (trigger) => {
//             trigger.preventDefault();
//             console.log('add button clicked');
//         }, false);
//     }

//     // watch(addTaskBtn){
//     //     addTaskBtn.addEventListener('submit', (trigger) => {
//     //         trigger.preventDefault();
//     //         console.log('add button clicked');
//     //         // console.log(form.taskName.value);
//     //         // this.add(taskInput.value);
//     //     }, false);
//     // }
// }
// controller.watch(addTaskBtn);
// controller.watch(allTaskBtn);