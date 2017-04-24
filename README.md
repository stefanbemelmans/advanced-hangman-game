### Setup
Fork, Clone, yarn install, yarn start

### Do
* yarn add the package "random-words"
* Google this this package to learn how to use it
* Use random-words to initialize the state wordToGuess with a random word
* Fill the correctGuesses array with "_" for however many letters the wordToGuess has
* Add a change listener to the textbox
* Assign value of textbox to state property guess
* Make sure only one letter is allowed to be typed in
* Add a click listener to the button
  * Determine if the guess is in the wordToGuess
  * Increment the strike value if the guess is not in the wordToGuess
  * If the guess is in the wordToGuess then add the letter to the correctGuesses array in the correct index
  * Check if there are any "_" in the correctGuesses array, if not then the game is won, change the className variable to "gamewon"
  * if there are 6 strikes then the game is lost, change the className variable to "gameover"
  * set guess back to ""
* Map the correctGuesses array to create spans for each entry 
* There are a few bugs in the specs, try to figure out what they are and how to fix them.