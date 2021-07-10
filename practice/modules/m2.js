
export function ul(element){
    let ul = document.createElement('ul');
    let li = document.createElement('li');

    li.innerHTML = 'List item from m2, passed to m1, to main';
    ul.appendChild(li);

    element.appendChild(ul);
}