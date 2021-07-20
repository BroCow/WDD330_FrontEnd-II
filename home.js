// Dynamic table of contents
const links = [
    {label:"Week 1", link: "https://brocow.github.io/WDD330_FrontEnd-II/wk1/"},
    {label:"Week 2", link: "https://brocow.github.io/WDD330_FrontEnd-II/wk2/"},
    {label:"Week 3", link: "https://brocow.github.io/WDD330_FrontEnd-II/wk3/"},
    {label:"Week 4", link: "https://brocow.github.io/WDD330_FrontEnd-II/wk4/"},
    {label:"Week 5", link: "https://brocow.github.io/WDD330_FrontEnd-II/wk5/"},
    {label:"Week 6", link: "https://brocow.github.io/WDD330_FrontEnd-II/wk6/"},
    {label:"Week 7", link: "https://brocow.github.io/WDD330_FrontEnd-II/wk7/"},
    {label:"Week 8", link: "https://brocow.github.io/WDD330_FrontEnd-II/wk8/"},
    {label:"Week 9", link: "https://brocow.github.io/WDD330_FrontEnd-II/wk9/"},
    {label:"Week 10", link: "https://brocow.github.io/WDD330_FrontEnd-II/wk10/"},
    {label:"Week 11", link: "https://brocow.github.io/WDD330_FrontEnd-II/wk11/"},
    {label:"Week 12", link: "https://brocow.github.io/WDD330_FrontEnd-II/wk12/"},
    {label:"Week 13", link: "https://brocow.github.io/WDD330_FrontEnd-II/wk13/"},
    {label:"Week 14", link: "https://brocow.github.io/WDD330_FrontEnd-II/wk14/"}
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