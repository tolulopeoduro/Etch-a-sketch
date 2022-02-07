const body = document.getElementById("body");
const set = document.getElementById("set");
const size = document.getElementById("size");
const set40 = document.getElementById("set-to-40");
const set80 = document.getElementById("set-to-80")
const reset = document.getElementById("reset");
const color = document.getElementById("color")
const backgroundColor = document.getElementById('bg-color')

function create(size){
    console.log(Math.floor(size*0.75))
    const container = document.createElement("div");
    container.setAttribute("id" , "container");
    container.style.backgroundColor
    body.appendChild(container);
    
    container.style.height = "480px"
    container.style.width = "640px"
    container.style.gridTemplateColumns = `repeat(${size},1fr)`
    container.style.gridTemplateRows = `repeat(${Math.floor(size * 0.75)},1fr)`
    
    
    for (i = 0; i < size * Math.floor(size*0.75)  ; i++) {
        const divs = document.createElement("div");
        divs.classList.add("pixel");
        divs.style.backgroundColor = backgroundColor.value
        function draw(e){
            e.preventDefault()
            if (e.ctrlKey) {
                divs.classList.add("board")
                divs.style.backgroundColor = color.value
                divs.style.border = `1px solid ${color.value}`
            } else if (e.altKey) {
                divs.classList.remove("board")
                divs.style.backgroundColor = backgroundColor.value
                divs.style.border = `1px solid ${backgroundColor.value}`
            }
        }
        divs.setAttribute("id" , i);
        divs.addEventListener("mouseover" , (e) => draw(e))
        divs.addEventListener("click" , (e) => draw(e))
        container.appendChild(divs);
        
    }
    
};

create(size.value);



let recreate=()=>{
    body.removeChild(container);
    create(size.value);
}

const st40 = () =>{
    console.log('hjk')
    size.value = 40;
    body.removeChild(container);
    create(size.value);
}

set40.addEventListener("click" , () => st40())
set80.addEventListener("click" , () => {
    size.value = 80;
    recreate()

})


set.onclick = recreate;

reset.onclick = recreate;
