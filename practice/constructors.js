const result = document.getElementById('result');

function Task (timeStamp, name, details, dueDate){
    this.timeStamp = timeStamp;
    this.name = name;
    this.details = details;
    this.dueDate = dueDate;
}
 
const timeStamp = new Date();
let homework = new Task(timeStamp, 'Homework', 'WDD330 Project', '6/25/21');

// add property to homework
homework.difficulty = 'hard';

// add method to homework
homework.display = function (){
    console.log('display called');
    result.innerHTML = 'display called';
}
 
// delete value of property method
const deleteBtn = document.getElementById('delete');
deleteBtn.addEventListener('click', remove);
function remove(){
    console.log('delete clicked');
    homework.difficulty = null;
}

homework.delete = function (){
    console.log('delete clicked');
    homework.difficulty = null;
}


homework.display();
console.log(homework);
// result.innerHTML = homework.display();

