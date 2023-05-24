# Minesweeper

[Classic Minesweeper game](https://en.wikipedia.org/wiki/Minesweeper_(video_game))

#### In the game, mines are scattered throughout a board, which is divided into cells. Cells have three states: unopened, opened and flagged. An unopened cell is blank and clickable, while an opened cell is exposed. Flagged cells are unopened cells marked by the player to indicate a potential mine location; some implementations make flagged cells inoperable to reduce the risk of uncovering a suspected mine. A player selects a cell to open it. If a player opens a mined cell, the game ends in a loss. Otherwise, the opened cell displays either a number, indicating the number of mines diagonally and/or adjacent to it, or a blank tile (or "0"), and all adjacent non-mined cells will automatically be opened. Players can also flag a cell, visualized by a flag being put on the location, to denote that they believe a mine to be in that place.

![image](https://github.com/Twitty97/minesweeper/assets/126764655/7556cd96-1147-43e1-8627-9cc48ee37a4a)
![image](https://github.com/Twitty97/minesweeper/assets/126764655/39a5675a-6809-4fc0-a51f-4916d68d9f79)

#### Game specifications:
- The default size of the frame is 10x10 with 10 mines (difficulty level: easy). For "medium", the boardsize is set to 15x15 with 15 mines and for "hard" the boardsize is set to 25x25 with 25 mines respectively.
- User can check the latest 10 results by pressing the "Results Table" button
- User can change between day/night theme
- The mines are placed after the first move, so that user cannot lose the game on the first move
- When user opens a square that does not touch any mines, it will be empty and the adjacent squares will automatically open in all directions until reaching squares that contain numbers
- When the page is reloaded, a player can continue from where he left off since the data is saved to LocalStorage
- To create a new game, a user should press "reset button"
- The game includes sound effects for events such as revealing a cell, flagging a cell, and game over (win and lose).
- The user is able to flag cells to indicate that they suspect a mine is present
