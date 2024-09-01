let gridContainer = document.getElementById("grid-container");
const Xscore_display = document.querySelector(".Xscore_display");
const Oscore_display = document.querySelector(".Oscore_display");
const replay = document.querySelector(".replay");
let gridMatrix = Array(20).fill(null).map(() => Array(20).fill(null));
let currentPlayer = "X";
let Xscore = parseInt(sessionStorage.getItem('Xscore')) || 0;
let Oscore =parseInt(sessionStorage.getItem('Oscore')) || 0;

// stocking the scores in session 

Xscore_display.textContent = Xscore;
Oscore_display.textContent = Oscore;

sessionStorage.setItem('Xscore',Xscore);
sessionStorage.setItem('Oscore',Oscore);


// Loop to create the game board

for (let i = 0; i < 400; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  gridContainer.appendChild(square);
  let row = Math.floor(i / 20);
  let col = Math.floor(i % 20);

  switchTurns(row, col, square);
  
}

// function to follow each player turn

function switchTurns(row, col, square) {
  square.addEventListener("click", () => {
    if (gridMatrix[row][col] == null) {
      gridMatrix[row][col] = currentPlayer;
      currentPlayer == "X" ? (square.style.color="#007bff") : (square.style.color="#00a86b");
      square.textContent = currentPlayer;
      checkWin(row, col, currentPlayer);
      checkDraw(gridMatrix);
      currentPlayer == "X" ? (currentPlayer = "O") : (currentPlayer = "X");
    }
  });
}

//emptying the board after clicking replay

replay.addEventListener("click",empty);

function empty(row,col){
    
    gridMatrix = Array(20).fill(null).map(()=>Array(20).fill(null));

    const squares =gridContainer.children;

    for(let square of squares){
        square.textContent = "";
    }

    currentPlayer = "X";
  
}


// function to check win conditions

function checkWin(row, col, currentPlayer) {
  let hcounter = 0, vcounter = 0, dcounter1 = 0, dcounter2 = 0;

  for (let i = 1; i < 5; i++) {
    if (col-i<0 || gridMatrix[row][col] != gridMatrix[row][col - i]) {
      break;
    }
    hcounter++;   
  }
  
  for (let i = 1; i < 5; i++) {
    if (col+i>19 || gridMatrix[row][col] != gridMatrix[row][col + i]) {
      break;
    }
    hcounter++;
  }
  
  for(let i=1;i<5;i++){
    if( row-i< 0 || gridMatrix[row][col] != gridMatrix[row-i][col]){
        break;
    }
    vcounter++;
  }
  
  for(let i=1;i<5;i++){
    if( row+i > 19 ||gridMatrix[row][col] != gridMatrix[row+i][col]){
        break;
    }
    vcounter ++;
  }

  for(let i=1;i<5;i++){
    if(row - i < 0 || col-i < 0 ||gridMatrix[row][col] != gridMatrix[row-i][col-i]){
        break;
    }
    dcounter1 ++;
  }

  for(let i=1;i<5;i++){
    if(row+i> 19 || col+i> 19 ||gridMatrix[row][col] != gridMatrix[row+i][col+i]){
        break;
    }
    dcounter1 ++;
  }

  for(let i=1;i<5;i++){
    if(row-i < 0 || col+i>19 ||gridMatrix[row][col] != gridMatrix[row-i][col+i]){
        break;
    }
    dcounter2 ++;
  }

  for(let i=1;i<5;i++){
    if(row+i>19|| col-i<0||gridMatrix[row][col] != gridMatrix[row+i][col-i]){
        break;
    }
    dcounter2 ++;
  }


  if (hcounter == 4 || vcounter == 4 || dcounter1 == 4 || dcounter2 == 4) {
    currentPlayer == "X" ? sessionStorage.setItem('Xscore',++Xscore) : sessionStorage.setItem('Oscore',++Oscore);
    alert(currentPlayer + " has won !");
    location.reload();
  }

}

//function to check for a draw

function checkDraw(gridMatrix){
    for(let row of gridMatrix){
        for(let col of row){
            if( col == null){
                return false;
            }      
        }
    }
    alert("Draw !!");
    return true;
}


