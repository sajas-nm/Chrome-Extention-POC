var links=[];
var btn = document.createElement("BUTTON");
var t = document.createTextNode("Click me");
btn.appendChild(t);           
document.querySelector('#topabar').appendChild(btn);


btn.addEventListener('click', () => {
    links.forEach((l, i)=>{
        window.open(links[i])
       
    })
})

var div = document.querySelectorAll('#rso > div > div > div > div > div > div.r');


console.log(div)


const clickHandler = (e) => {
    console.log(e.target);
    var url = e.target.parentElement.querySelector('a').href
    links.push(url)
    console.log(links)
    console.log("clicked")
}



div.forEach((d, i) => {
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox"; 
    checkbox.addEventListener('click', clickHandler)
    console.log(d);
    // d.addEventListener('click', clickHandler)
    d.appendChild(checkbox);
})

 
