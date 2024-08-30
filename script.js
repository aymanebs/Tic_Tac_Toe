let gridContainer = document.getElementById("grid-container");

let gridMatrix = Array(20)
  .fill(null)
  .map(() => Array(20).fill(null));
let currentPlayer = "X";

for (let i = 0; i < 400; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  gridContainer.appendChild(square);

  let row = Math.floor(i / 20);
  let col = Math.floor(i % 20);

  switchTurns(row, col, square);
}

function switchTurns(row, col, square) {
  square.addEventListener("click", () => {
    if (gridMatrix[row][col] == null) {
      gridMatrix[row][col] = currentPlayer;
      square.textContent = currentPlayer;
      checkWin(row, col, currentPlayer);
      currentPlayer == "X" ? (currentPlayer = "O") : (currentPlayer = "X");
    }
  });
}



function checkWin(row, col, currentPlayer) {
  let hcounter = 0,vcounter = 0,dcounter = 0;

  for (let i = 1; i < 5; i++) {
    if (col ==0 || gridMatrix[row][col] != gridMatrix[row][col - i]) {
      break;
    }
    hcounter++;   
  }
  
  for (let i = 1; i < 5; i++) {
    if (col ==19 || gridMatrix[row][col] != gridMatrix[row][col + i]) {
      break;
    }
    hcounter++;
  }
  
  for(let i=1;i<5;i++){
    if( row == 0 || gridMatrix[row][col] != gridMatrix[row-i][col]){
        break;
    }
    vcounter++;
  }
  
  for(let i=1;i<5;i++){
    if( row == 19 ||gridMatrix[row][col] != gridMatrix[row+i][col]){
        break;
    }
    vcounter ++;
  }

  for(let i=1;i<5;i++){
    if(row == 0 || col == 0 ||gridMatrix[row][col] != gridMatrix[row-i][col-i]){
        break;
    }
    dcounter ++;
  }

  for(let i=1;i<5;i++){
    if(row == 19 || col == 19 ||gridMatrix[row][col] != gridMatrix[row+i][col+i]){
        break;
    }
    dcounter ++;
  }

  for(let i=1;i<5;i++){
    if(row == 0 || col==19 ||gridMatrix[row][col] != gridMatrix[row-i][col+i]){
        break;
    }
    dcounter ++;
  }

  for(let i=1;i<5;i++){
    if(row==19|| col ==0||gridMatrix[row][col] != gridMatrix[row+i][col-i]){
        break;
    }
    dcounter++;
  }


  if (hcounter == 4 || vcounter == 4 || dcounter == 4) {
    alert(currentPlayer + " has won !");
  }
}

const squares = document.getElementsByClassName("square");

// console.log(squares);

// console.table(gridMatrix);
