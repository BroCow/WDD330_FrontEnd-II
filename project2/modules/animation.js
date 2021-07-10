
const the = document.querySelector('.the');
const movieMonster = document.getElementById('movieMonster');

export function animateTitle(){
    window.setTimeout( 
        ()=>transformTitle(),
        3000
    ); 
    console.log(the);
}

function transformTitle(){
    movieMonster.setAttribute('class', 'transform_movieMonster');
    the.setAttribute('id', 'transform_the');  
}