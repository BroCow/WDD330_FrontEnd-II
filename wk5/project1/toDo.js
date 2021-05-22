
'use strict';

const form = document.forms[0];
console.log(form);

const toDoList = [];
console.log(toDoList);

/*** Model ***/ 
class Task {
    constructor(taskName){
        this.id = new Date();
        this.taskName = taskName;
        this.completed = Boolean;
    }  
};



/*** Controller ***/
const controller = {
    watch(form){
        form.addEventListener('submit', (trigger) => {
            trigger.preventDefault();
            this.add(form.taskName.value);
        }, false);

        // add event listener for box checked - trigger completed functions
    },

    add(taskName){
        const task = new Task(taskName);
        console.log(task);
        toDoList.push(task);
        view.render(task);
    },
};


/*** View ***/
const view = {
    render(task){
       
        const taskList = document.getElementById('taskList');

        const checkbox = document.createElement('input');
        const checkboxLabel = document.createElement('label');

        const taskComplete = document.createElement('span');

        const nextLine = document.createElement('br');
        

        //const taskComplete = document.getElementById('taskComplete');

        checkbox.setAttribute('type', 'checkbox');
        console.log(task.taskName);
        checkbox.setAttribute('id', task.taskName);
        checkbox.setAttribute('value', task.taskName);
        taskList.appendChild(checkbox);

        checkboxLabel.setAttribute('for', task.taskName);
        checkboxLabel.innerHTML = task.taskName;
        taskList.appendChild(checkboxLabel);

        taskComplete.setAttribute('class', 'taskComplete');
        taskComplete.innerHTML = 'X';
        taskComplete.style.color = 'red';
        taskList.appendChild(taskComplete);

        taskList.appendChild(nextLine);        

        form.taskName.value = '';
    }

    // render(completedTask)
};

controller.watch(form);