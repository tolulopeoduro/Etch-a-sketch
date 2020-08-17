const body = document.querySelector("body");
const set = document.getElementById("set");
function create(){
    const container = document.createElement("div");
    container.setAttribute("id" , "container");
    body.appendChild(container);




    for (i = 0; i < 256 ; i++) {
        const divs = document.createElement("div");
        divs.classList.add("pixel");
        function draw(){
        divs.classList.add("board")
        }
        divs.setAttribute("id" , i);
        divs.addEventListener("mouseover" , draw)
        container.appendChild(divs);



    }

};

create();

let recreate=()=>{
    body.removeChild(container);
    create();
}

set.onclick = recreate;