MDCTicTacToe-client - project README.md

This single page application was built using HTML, CSS, and JavaScript along with a back end API.

All code was pushed to GitHub and this entire repository is available to all!

I began this game by first tackling the authentication processes; sign up, sign in, change password, sign out, etc.  Curl scripts were first used to test the API before I wrote the authentication submit, click, and event handlers.

Although the authentication portion of this project might be considered "easier" than building the actual game logic, I ran into several problems as a result of my lack of experience.  I found that tiny errors, such as a missing '#' in the app.js file, can cost HOURS of time and energy.  My change password form presented this exact problem.

The game logic itself was incredibly difficult for me to write. Finding the winning combinations itself is no Herculean task, but incorporating this information into my game and API procedures proved quite tough.  I spent hours coding along with Scott, Bryan, and Aiden, and I can't thank them enough.  My last bug was caused by not resetting the board variable to blank upon starting a new game, and this final piece of the puzzle is what brought my game to its current level of functionality.

The last step I tackled in this project was to hide form fields and non-functional user facing buttons.  This too, presented an immediate issue when I accidentally hid the message field entirely after a sign out, which prevented my game from working as directed.  This message still persists upon sign out, one of my last remaining bugs.  In future iterations, I would like that message to depopulate from the screen on sign out.

User stories:
- As a user, I don't want to be presented with buttons that don't work yet.
- As a user, I want to be able to see how many games I've played on my account!
- As a user, I want to be able to change my password when necessary
- As a user, I want to be able to sign out of my account when I'm finished playing
- As a user, I want it to clearly state who has won the game or if a tie has occurred!

Wireframe: https://imgur.com/qHC7hLk
