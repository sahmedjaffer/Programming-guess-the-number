// Initializing the DOM elements
const inputNumber = document.querySelector("input"),
  guessNumber = document.querySelector(".guess"),
  checkButton = document.querySelector("button"),
  remainChances = document.querySelector(".chances");
// Generating a random number between 0 and 99
let randomNum = Math.floor(Math.random() * 100);
// Initializing guessing chances
let chance = 10;
// Make the starting focus on the input field
inputNumber.focus();
//Reseting the game function
const resetGame = () => {
  randomNum = Math.floor(Math.random() * 100); // Generating a new random number for every game reset
  chance = 10; // Reseting the guess chances
  inputNumber.disabled = false; // Enabling the input field
  remainChances.textContent = chance; // Updating the guess chances display
  guessNumber.textContent = ""; // Clearing the guess chances display
  guessNumber.style.color = rgb(51, 51, 51); // Reset guess text color
  inputNumber.value = ""; // Clearing the input field
  checkButton.textContent = "Check"; // Change the button text
};

// Adding a click event listener to the check button
checkButton.addEventListener("click", () => {
  if (inputNumber.disabled) {
    // If the input is disabled, reset the game
    resetGame();
    return;
  }
  chance--; // Decreaseing the guess chances by 1 on each click on the button
  let inputValue = inputNumber.value; // save the guess value from the input field to the variable
  if (inputValue == randomNum) { // Making the logic if the guess is correct
    [guessNumber.textContent, inputNumber.disabled] = ["Contgrats! You found the number.", true];
    [checkButton.textContent, guessNumber.style.color] = ["Replay", rgba(39, 174, 96, 1)];
  } else if (inputValue > randomNum && inputValue < 100) { // Check the guess if it is too high
    [guessNumber.textContent, remainChances.textContent] = ["Your guess is high", chance];
    guessNumber.style.color = rgba(51, 51, 51, 1);
  } else if (inputValue < randomNum && inputValue > 0) { // Check the guess if it is too low
    [guessNumber.textContent, remainChances.textContent] = ["Your guess is low", chance];
    guessNumber.style.color = rgba(51, 51, 51, 1);
  } else { // Check if the input is not in the range between 1-99
    [guessNumber.textContent, remainChances.textContent] = ["Your number is invalid", chance];
    guessNumber.style.color = rgba(231, 76, 60, 1);
  }
  if (chance == 0) { // If there is no guess chances left, game over
    [checkButton.textContent, inputNumber.disabled, inputValue] = ["Replay", true, ""];
    [guessNumber.textContent, guessNumber.style.color] = ["You lost the game", rgba(231, 76, 60, 1)];
  }
});