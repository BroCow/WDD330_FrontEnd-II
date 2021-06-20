
// User Agent demo
const userAgentBtn = document.getElementById('userAgent');
const userAgentResult = document.getElementById('userAgentResult');

function showUserAgentInfo(){
    const userAgentInfo = window.navigator.userAgent;
    userAgentResult.innerHTML = userAgentInfo;
    userAgentResult.style.color = 'red';
}
userAgentBtn.addEventListener('click', showUserAgentInfo);


// Location.href demo
const locationHrefBtn = document.getElementById('locationHref');

function gotoLocation(){
    window.location.href = 'https://disneyland.disney.go.com/';
}
locationHrefBtn.addEventListener('click', gotoLocation);


// Timeout demo
const timeoutBtn = document.getElementById('timeout');
const timeoutResult = document.getElementById('timeoutResult');

function showTimeoutMessage(){
    timeoutResult.style.color = 'red';
    window.setTimeout( 
        ()=>timeoutResult.innerHTML = 'This message was worth the wait, right!',
        5000
    ); 
}
timeoutBtn.addEventListener('click', showTimeoutMessage)


// setInterval Animation demo
const square = document.getElementById('square');
const animateBtn = document.getElementById('animate');
const intervalMessage = document.getElementById('intervalMessage');

let angle = 0;
function animateSquare(){
    intervalMessage.innerHTML = 'This is done using setInterval';
    square.innerHTML = '<p>Amazing right!!!</p>';
    setInterval( ()=> {
        angle = (angle + 2) % 360;  // use the setInterval() method to increase the value of angle by 2 (we also use the % operator so that it resets to 0 at 360)
        square.style.transform = `rotate(${angle}deg)`  // set the transform CSS3 property to rotate that number of degrees
    }, 1000/60);  // equates to a frame speed of 60 frames per second
}
animateBtn.addEventListener('click', animateSquare);


// requestAnimationFrame demo
const square2 = document.getElementById('square2');
const animate2Btn = document.getElementById('animate2');
const requestAnimationMessage = document.getElementById('requestAnimationMessage');

let angle = 0;
function rotate(){
    angle = (angle +2) % 360;
    square2.style.transform = `rotate(${angle}deg)`
}

