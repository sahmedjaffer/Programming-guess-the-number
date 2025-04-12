// Initializing the DOM elements
const input = document.querySelector("input"),
  guess = document.querySelector(".guess"),
  checkButton = document.querySelector("button"),
  remainChances = document.querySelector(".chances");
// Generating a random number between 0 and 99
let randomNum = Math.floor(Math.random() * 100);
// Initializing guessing chances
let chance = 10;
// Make the starting focus on the input field
input.focus();
//Reseting the game function
const resetGame = () => {
  randomNum = Math.floor(Math.random() * 100); // Generating a new random number for every game reset
  chance = 10; // Reseting the guess chances
  input.disabled = false; // Enabling the input field
  remainChances.textContent = chance; // Updating the guess chances display
  guess.textContent = ""; // Clearing the guess chances display
  guess.style.color = rgb(51, 51, 51); // Reset guess text color
  input.value = ""; // Clearing the input field
  checkButton.textContent = "Check"; // Change the button text
};

// Adding a click event listener to the check button
checkButton.addEventListener("click", () => {
  if (input.disabled) {
    // If the input is disabled, reset the game
    resetGame();
    return;
  }
  chance--; // Decreaseing the guess chances by 1 on each click on the button
  let inputValue = input.value; // save the guess value from the input field to the variable
  if (inputValue == randomNum) { // Making the logic if the guess is correct
    [guess.textContent, input.disabled] = ["Contgrats! You found the number.", true];
    [checkButton.textContent, guess.style.color] = ["Replay", rgba(39, 174, 96, 1)];
  } else if (inputValue > randomNum && inputValue < 100) { // Check the guess if it is too high
    [guess.textContent, remainChances.textContent] = ["Your guess is high", chance];
    guess.style.color = rgba(51, 51, 51, 1);
  } else if (inputValue < randomNum && inputValue > 0) { // Check the guess if it is too low
    [guess.textContent, remainChances.textContent] = ["Your guess is low", chance];
    guess.style.color = rgba(51, 51, 51, 1);
  } else { // Check if the input is not in the range between 1-99
    [guess.textContent, remainChances.textContent] = ["Your number is invalid", chance];
    guess.style.color = rgba(231, 76, 60, 1);
  }
  if (chance == 0) { // If there is no guess chances left, game over
    [checkButton.textContent, input.disabled, inputValue] = ["Replay", true, ""];
    [guess.textContent, guess.style.color] = ["You lost the game", rgba(231, 76, 60, 1)];
  }
});