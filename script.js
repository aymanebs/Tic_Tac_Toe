
let gridContainer = document.getElementById("grid-container");

let gridMatrix = Array(20).fill(null).map(() => Array(20).fill(null));
let currentPlayer ="X";

for(let i=0;i<400;i++){
    const square = document.createElement('div');
    square.classList.add("square");
    gridContainer.appendChild(square);

    let row = Math.floor(i/20);
    let col = Math.floor(i%20);
    
    
    console.log("row:",row);
    square.addEventListener('click',() =>{
        if(gridMatrix[row][col] == null){
            gridMatrix[row][col] = currentPlayer;
            square.textContent = currentPlayer;
        }
        currentPlayer == "X" ? currentPlayer = "O" : currentPlayer ="X";
    })

}




const squares = document.getElementsByClassName("square");

// console.log(squares);


// console.table(gridMatrix);

