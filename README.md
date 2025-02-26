# Browser-Based-Game-Project

 In this project user have to guess the number that the computer has generated as shown in the pictures below

 ![Screenshot 2024-05-09 125203](https://github.com/user-attachments/assets/9670314d-8d9e-465e-9b91-d57df545d2e4)


User Stories

As a user, I want a web-based game that randomly generates a number between 1 and 100 for me to guess.

As a user, I want to see a landing page on the website to confirm that I’m in the right place.

As a user, I want to see a clearly labeled button, an input text box, a message, and a guess counter on the landing page, so I instantly understand my options for gameplay.

As a user, I want to enter my guessed number in a text box and click a button to check my guess.

As a user, I want to see a message after I submit my guess, indicating whether it is correct or not. If it is incorrect, I would like to know if my guess is close to the number or far from it, so I can keep track of how many guesses I have left.

As a user, I want to receive a clear message indicating whether I win the game.

As a user, I want to play another round to improve my record.



Pseudocode

1. Define constants and variables.
define arandom number and user input and guess counter

2. Define the app’s state variables, but don’t assign values to them.
Define a variable for game message
Define a variable remaining chances



3. Select and save (cache) elements in variables that need to be accessed in the JavaScript code more than once.

Select the message desplay element
Select the button element

4. Add event listeners - use delegated event listeners to listen to multiple elements with a single listener.
 Add an event listener on button click
5. Invoke the init function used to initialize all state variables.
Using the event listeners set up, assign the user's input to the variable for the user's input

6. Invoke the primary render function that transfers all state variables to the DOM.
Render the game message to the DOM

7. Wait for the user to click on the button.
// Compare the user's guess to the randomly generated num

// IF the user's guess is the same as the randomly generated num
    // THEN the user wins
// ELSE IF the user's guess is bigger than the random number and less than 100 
  // THEN message the user geuss is high
// ELSE IF the user's guess is less than the random number and bigger than 0 
    // THEN message the user geuss is low
// ELSE IF the user's guess times has finish
    // THEN message the user no chance left game over
// ELSE
    // THEN your number is invalid

// Render the game message to the DOM

10. Wait for the user to click the “Play Again” button.

 Select the play again button element and add an event listener. On click:
     Reset the user's guess to nothing
     Reset the guess chances to 10
     Reset the game message to nothing
	 generate a new random number
