# Tic Tac Toe Web Application

This project is a web-based Tic Tac Toe game implemented using HTML, CSS, and JavaScript. The game allows two players to play against each other, keeping track of the score for each player and providing a replay option to start a new game.

## Features

- **20x20 Game Board**: A larger grid than the traditional Tic Tac Toe game, providing a unique challenge.
- **Player Turns**: Alternates turns between "X" and "O".
- **Win Detection**: Detects wins based on horizontal, vertical, and diagonal alignments.
- **Draw Detection**: Identifies a draw if all spaces are filled without a winner.
- **Score Tracking**: Uses session storage to keep track of scores for both players, even when the page is reloaded.
- **Replay Functionality**: Allows players to reset the board and start a new game while retaining the current score.

## How to Use

1. **Start the Game**: Open the app in your web browser. The game board will be displayed, and the first player (X) can begin by clicking on a square.
   
2. **Take Turns**: Players alternate turns by clicking on an empty square. The current player is indicated by the color of the "X" (blue) or "O" (green).

3. **Winning the Game**: The game automatically detects when a player has aligned 5 of their symbols horizontally, vertically, or diagonally and announces the winner.

4. **Draw Condition**: If the entire grid is filled without any player winning, the game announces a draw.

5. **Replay the Game**: Click the "Replay" button to clear the board and start a new game. The scores will be retained.

## Code Overview

### HTML

- The HTML file defines the structure of the game board, score displays, and the replay button.

### CSS

- The CSS file (`style.css`) is used for styling the game board, squares, score display, and other elements.

### JavaScript

- The JavaScript file (`script.js`) contains the logic for game mechanics, score tracking, and board management.

## How to Run Locally

1. **Clone the Repository**: 
   ```bash
   git clone https://github.com/your-username/tic-tac-toe.git
   ```
   
2. **Open the HTML File**: 
   Navigate to the directory where the repository is cloned and open the `index.html` file in a web browser.

## Browser Compatibility

This game is designed to work on modern web browsers that support HTML5, CSS3, and JavaScript.

## Future Enhancements

- Adding more customization options for the game board size.
- Improving the UI/UX for a better user experience.

