const body = document.getElementById("body");
const set = document.getElementById("set");
const size = document.getElementById("size");
const set16 = document.getElementById("set-to-16");
const reset = document.getElementById("reset");


function create(size){
    const container = document.createElement("div");
    container.setAttribute("id" , "container");
    body.appendChild(container);




    for (i = 0; i < size * size ; i++) {
        const divs = document.createElement("div");
        divs.classList.add("pixel");
        function draw(){
        divs.classList.add("board")
        }
        container.style.gridTemplateColumns = `repeat(${size},1fr)`
        container.style.gridTemplateRows = `repeat(${size},1fr)`
        divs.setAttribute("id" , i);
        divs.addEventListener("mouseover" , draw)
        container.appendChild(divs);



    }

};

size.value = 16;
create(16);



let recreate=()=>{
    body.removeChild(container);
    create(size.value);
    set16.onclick = st16;
}

let st16=()=>{
    size.value = 16;
    body.removeChild(container);
    create(size.value);
}


set.onclick = recreate;

reset.onclick = recreate;
