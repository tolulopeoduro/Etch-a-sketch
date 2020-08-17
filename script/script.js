const container = document.getElementById("container");




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

