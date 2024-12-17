const btn = document.createElement('button');
  btn.textContent = "Adjust Grid Size";
  document.body.appendChild(btn);

let size = 16;
btn.addEventListener("click", () => {
  size = prompt("Enter size of next grid")
  if (size >= 100 || size <= 0){
    alert("ERROR: Enter an integer between 0 and 100")
  }
  main.innerHTML = ''
  createGrid();
  allCells = document.querySelectorAll('.columns');
  mouseOverCells(allCells);
})
  
const main = document.querySelector('.main-container');

createGrid();

function createGrid(){
  for (i=0; i < size; i++){
    const rows = document.createElement('div');
      main.appendChild(rows)
      rows.className = 'rows cells'

    for (n=0; n < size; n++){
      const columns = document.createElement('div');
      rows.appendChild(columns);
      columns.className = 'columns cells'
    }
  }
}

let allCells = document.querySelectorAll('.columns')
mouseOverCells(allCells);

function mouseOverCells(allCells){
  allCells.forEach(function(cell) {
    cell.addEventListener("mouseover", () => {
      cell.style.backgroundColor = "brown";

  })
})
}


