/* Call & Apply Methods */

//Call
function descJS(){
    return `JavaScript is ${this.term}`;
}

const cool = {term: 'cool'};
const hard = {term: 'hard'};
const challenging = {term: 'challenging'};
const fun = {term: 'fun'};

function descOpinionJS(opinion='I think'){
    return `${opinion} javaScript is ${this.term}`;
}

// Initialization Code
const welcome = document.getElementById('initializationWelcome');
{
    const name = "Brother Baer";
    const days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ];

    const date = new Date(),
    today = days[date.getDay()];

    console.log(`Welcome to my Week 7 page, ${name}! I hope your ${today} is going well.`);
    let message = `Welcome to my Week 7 page, ${name}!<br> I hope your ${today} is going well.`;

    welcome.innerHTML = message;
    welcome.style.color = 'red';
}

//Callback example



// Function fun

function familyAge(member, age){
    let age20years = age + 20;
    let in20YearsMessage = member + ' will be ' + age20years;
    console.log(in20YearsMessage);
}






