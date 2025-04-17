// Initialize DOM elements
const input = document.querySelector("input"),
  guess = document.querySelector(".guess"),
  checkButton = document.querySelector("button"),
  remainChances = document.querySelector(".chances");

// Generate a new random number for the game
let randomNum = Math.floor(Math.random() * 100);

// Set chances limit
let chance = 10;

// Show initial chance count
remainChances.textContent = chance;

// Set initial focus on the input field
input.focus();

// Function to reset the game
const resetGame = () => {
  // Enable input field
  input.disabled = false;
  // Reset chances
  chance = 10;
  // Update chances display
  remainChances.textContent = chance;
  // Clear guess display
  guess.textContent = "";
  // Reset guess text color
  guess.style.color = "rgb(51, 51, 51)";
  // Clear input field
  input.value = "";
  // Reset button text
  checkButton.textContent = "Check";
  // Generate a new number
  randomNum = Math.floor(Math.random() * 100);
};

// Add click event listener to the check button
checkButton.addEventListener("click", () => {
  if (input.disabled) {
    // If the input is disabled, reset the game
    resetGame();
    return;
  }

  // Get the value from the input field
  let inputValue = input.value;

  // Decrease chance by 1 on each click
  chance--;

  // Always update chances display
  remainChances.textContent = chance;

  // Logic of the game

  // If the guess is correct
  if (inputValue == randomNum) {
    [guess.textContent, input.disabled] = ["Contgrats! You found the number.", true];
    [checkButton.textContent, guess.style.color] = ["Replay", "rgb(39, 174, 96)"];
  }
  // If the guess is too high
  else if (inputValue > randomNum && inputValue <= 100) {
    guess.textContent = "Your guess is high";
    guess.style.color = "rgb(51, 51, 51)";
  }
  // If the guess is too low
  else if (inputValue < randomNum && inputValue > 0) {
    guess.textContent = "Your guess is low";
    guess.style.color = "rgb(51, 51, 51)";
  }
  // If the input is invalid (not in the range 0-100 or not a number)
  else {
    guess.textContent = "Your number is invalid";
    guess.style.color = "rgb(231, 76, 60)";
  }

  // No chances left, game over
  if (chance == 0) {
    [checkButton.textContent, input.disabled, input.value] = ["Replay", true, ""];
    [guess.textContent, guess.style.color] = ["You lost the game", "rgb(231, 76, 60)"];
  }
});
