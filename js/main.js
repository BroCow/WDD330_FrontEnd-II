

function goHome(){
    location.href = "https://brocow.github.io/WDD330_FrontEnd-II/";
}

function goWk1(){
    location.href = "https://brocow.github.io/WDD330_FrontEnd-II/wk1/";
}

function goWk2(){
    location.href = "https://brocow.github.io/WDD330_FrontEnd-II/wk2/";
}

// Dynamic table of contents
const links = [
    {label:"Week 1", link: "https://brocow.github.io/WDD330_FrontEnd-II/wk1/"},
    {label:"Week 2", link: "https://brocow.github.io/WDD330_FrontEnd-II/wk2/"}
];

for(let i = 0; i < links.length; i++){
    var label = links[i].label;
    var link = links[i].link;
    
    // Create "li" element, append it to "ol" element by id, and set id
    var li = document.createElement("LI");
    document.getElementById("tableOfContents").appendChild(li); 
    document.getElementsByTagName("li")[i].setAttribute("id", "w1link");

    var a = document.createElement("A");
    document.getElementsByTagName("li")[i].appendChild(a); 
    a.setAttribute("href", link);
    a.setAttribute("id", label);

    document.getElementById(label).innerHTML = label;
}









//document.getElementById("w1href").innerHTML = links.label;
