# Above and Beyond

## Extra Features

### 1. Input Validation
My game checks whether the player entered a valid number before accepting a guess. If the input is blank, not a number, or outside the selected range, the game shows a message telling the player to enter a valid guess.

**Where it is in my code:**  
`makeGuess()` function

**Why it improves the game:**  
This prevents errors and makes the game easier to use.

### 2. Auto Focus on the Guess Box
When a round starts, and after a wrong guess, the cursor goes back to the guess input box automatically.

**Where it is in my code:**  
`play()` and `makeGuess()` functions

**Why it improves the game:**  
This makes the game faster and smoother to play.

### 3. Name Formatting
The game asks for the player’s name with `prompt()` and then fixes the capitalization so names look clean. For example, `jOhN` becomes `John`.

**Where it is in my code:**  
At the top of `script.js`, before the game starts

**Why it improves the game:**  
This makes the messages feel more polished and personal.

### 4. Cleaner User Experience
The game disables and enables buttons at the right times so the player cannot start a second round in the middle of a game or keep guessing after the round is over.

**Where it is in my code:**  
`play()`, `reset()`, `makeGuess()`, and `giveUp()` functions

**Why it improves the game:**  
This keeps the game organized and prevents accidental mistakes while playing.