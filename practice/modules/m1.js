import { ul } from "./m2.js";

export function m1(){
    let p1 = document.createElement('p');
    p1.innerHTML = 'This is p1 from m1';

    output.appendChild(p1);

    ul(p1);
}
