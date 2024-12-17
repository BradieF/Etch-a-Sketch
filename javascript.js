const btn = document.createElement('button');
  btn.textContent = "Adjust Grid Size";
  document.body.appendChild(btn);

let gridSize = 16;
btn.addEventListener("click", () => {
  gridSize = prompt("Enter size of next grid")
  if (gridSize < 100 && gridSize > 0){
    main.innerHTML = ''
    createGrid();
    allCells = document.querySelectorAll('.columns');
      mouseOverCells(allCells);
  }
  else {
    alert("ERROR: Enter an integer between 0 and 100")
  }
})
  
const main = document.querySelector('.main-container');
createGrid();
let allCells = document.querySelectorAll('.columns')
mouseOverCells(allCells);

function createGrid(){
  for (i=0; i < gridSize; i++){
    const rows = document.createElement('div');
      main.appendChild(rows)
      rows.className = 'rows cells'

    for (n=0; n < gridSize; n++){
      const columns = document.createElement('div');
      rows.appendChild(columns);
      columns.className = 'columns cells'
    }
  }
}


function mouseOverCells(allCells){
  allCells.forEach(function(cell) {
    cell.addEventListener("mouseover", () => {
      cell.style.backgroundColor = randomizeColor();

  })
})
}

function randomizeColor(){
  const red = Math.floor(Math.random() * 256); 
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`; //BACK TICKS NEEDED if you use ${red}
}


