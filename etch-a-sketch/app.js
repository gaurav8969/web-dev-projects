let grid = document.getElementById("grid");
let grids = true;
var slider = document.getElementsByClassName("slider-control");
//global variable for the colour in the colourpicker
let colourPicker = document.querySelector(".colour-picker input");
let clearButton = document.querySelector(".buttons .clear");
let toggleButton = document.querySelector(".buttons .toggle");

//update the grid
function update(){
    let side = slider[0].value;
    let dimensions = 500/side;

    grid.replaceChildren();
    for(i = 0; i < side; i++){
        for(j = 0; j < side; j++){
            let gridBox = document.createElement("div");
            gridBox.style.boxSizing = "border-box";
            gridBox.style.width = dimensions + "px";
            gridBox.style.height = dimensions + "px";
            gridBox.style.border = "1px solid grey";
            gridBox.style.padding = 0;
            gridBox.style.margin = 0;
            gridBox.addEventListener("mouseover", (e)=>{
                e.target.style.background = colourPicker.value;
            });
            grid.appendChild(gridBox);
        }
        let lineBreak = document.createElement('div');
        lineBreak.className = "line-break";
        grid.appendChild(lineBreak);
    }
}

function toggle(){
    gridItems = grid.children;
    gridArray = Array.from(gridItems);
    for(gridbox of gridArray){
        gridbox.style.boxSizing = "border-box";
        if(grids){
            gridbox.style.border = 0;
        }else if(!gridbox.classList.contains("line-break")){
            gridbox.style.border = "1px solid grey";
        }
    }
    grids = !grids;
}

slider[0].addEventListener('input', update);
clearButton.addEventListener('click',update);
toggleButton.addEventListener('click', toggle);