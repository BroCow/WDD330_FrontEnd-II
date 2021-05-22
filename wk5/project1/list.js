/*** In JavaScript, a model is often represented by a class that can create new instances of an object. This will keep track of any properties the list item has, as well as any methods. ***/

// In this example, we’ll create an Item class, and use the constructor function to instantiate an Item object with a name property provided as an argument to the constructor function.

'use strict';  //indicates that code should be executed in "strict mode"

const form = document.forms[0]  //create variable for form - it's the only one, so index '0' works
console.log(form);

// In JS, a model is often represented by a class that can create new instances
class Item {
    constructor(itemName){
        this.itemName = itemName; // item name equals user entry
        console.log(itemName);
    }
}
 
// each new list item created will be an instance of the Item class

// Create controller object
    // This would normally also include methods for editing and deleting instances of model
const controller = {
    watch(form){  //The watch() method watches for event in which a property gets assigned value.
        form.addEventListener('submit', (trigger) => {  // listens for user to add info
            trigger.preventDefault();  // prevent form from being submitted
            this.add(form.itemName.value);  // adds value of user input from form to 'this' object
        }, false);
    },
    
    add(itemName){  // creates new instance of the model and renders updated view
        const item = new Item(itemName); 
        console.log(item);
        view.render(item);  // calls render() method from view object
    }
};

// Create view object with render() method
const view = {
    render(item){
        const list = document.getElementById('list'); // ul from html
        const li = document.createElement('li');  // create new li element
        li.innerHTML = item.itemName;  // add value of itemName to li element
        list.appendChild(li);  // append li to ul

        form.itemName.value = '';  // reset the input field
    }
};

// Call the watch() method of the controller - this keeps an eye on the form and checks when it's submitted
controller.watch(form);



