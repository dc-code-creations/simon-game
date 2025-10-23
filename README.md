

## To-Do
- add event listener to document that listens for key presses to start the game
    - make sure to only trigger a new game if we hear a key press and we are starting a brand new game or we are currently in the end game state (meaning a previous game has ended)
    - if clicking before game starts, (choose one): 
        - don't add listener to buttons until game has actively started (effectively ignoring any clicks)
        - add the listener before the game starts and trigger an automatic game over when any button is clicked
    - if key is pressed, start the game
- start game
    - optional (depending): add listener to buttons now
    - show the first button in the sequence and store for comparison
        - play sound and animation
    - on button click:
        - play sound and button animation
        - check which button was clicked
        - compare to button at current index
            - if they match:
                - increase index
                - check if we are at the end of the master pattern
                    - if at end, done with this round; go back to show button in sequence
                        - update title to reflect level number (same as master pattern list length)
                - if not at end of master pattern, done for now; listen for another button click
            - if they don't match:
                - game over
                - play game over sound
                - play game over animation
                - change title text
                - listen for a key press to start a new game