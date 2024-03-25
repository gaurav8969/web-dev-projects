var slider = document.getElementsByClassName("slider-control");

update();
//update the grid
function update(){
    let side = slider[0].value;
    let dimensions = 500/side;
    console.log("Sides are " + side + " and dimensions are " + dimensions);

    let grid = document.getElementById("grid");
    grid.replaceChildren();

    for(i = 0; i < side; i++){
        for(j = 0; j < side; j++){
            let gridBox = document.createElement("div");
            gridBox.style.boxSizing = "border-box";
            gridBox.style.width = dimensions + "px";
            gridBox.style.height = dimensions + "px";
            gridBox.style.border = "1px solid red";
            gridBox.style.padding = 0;
            gridBox.style.margin = 0;
            grid.appendChild(gridBox);
        }
        let lineBreak = document.createElement('div');
        lineBreak.className = "line-break";
        grid.appendChild(lineBreak);
    }    
}

slider[0].addEventListener('input', update);