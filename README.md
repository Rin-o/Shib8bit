# Project's name
**Shib8bit** 
[Click here to see deployed game](rin-o.github.io/Shib8bit/)

## Description
It’s a simple, Super Mario Bros Inspired game with 80s-90s Nintendo Famicom vibes. 
The main character here is a shiba-inu, who’s gotten lost in the middle of the city and is trying to find the way home, overcoming obstacles along the way. Once the doggo catches 10 biscuits game clear, if hit by obstacles 3 times game over.


## MVP
_MVP definition here, list of minimum features_
- Game intro page with instructions and start button to start the game
- Looping background with landscape visuals creating an illusion of the dog running around the city
- Looping obstacles/collision to lose lives leading to game over if hit by them 3 times max.
- Looping treats to gain scores to win
- Jumping to avoid the obstacles - done with the space button
- Linking to game over page once hit 3 times by the obstacles, offering an option to restart the game 
- Link to winning page once collecting 10 biscuits
- Add background music for the game screen & game over screen 

## Backlog
_List of features you might implement after the MVP_
- Add more obstacles 
- Create 3 levels of difficulties (level 1 being easiest, slower and less obstacles)
- Add a mute option for those who do not wish to listen to the background music while playing it
- Create a separate instruction page 
- Add a sound effect of a barking dog, triggered when clicking start/restart buttons & when hit by the obstacles 
- Add movement of the character to make it look more like the dog is running



## Data structure
### scripy.js
- window.addEventListener('load')
- startGame()
- startButton.addEventListener('click')
- restartButton.addEventListener('click')
- document.addEventListener('keydown')
- setTimeout()

### game.js
- Class Game
- constructor()
     - this.startScreen 
     - this.gameContainer 
     - this.gameScreen 
     - this.gameEndScreen
     - this.gameWinScreen 
     - this.height
     - this.width
     - this.player
     - this.obstacles 
     - this.treats
     - this.animateId
     - this.score 
     - this.lives 
     - this.gameOver      
     - this.gameWin
     - this.gameOverMusicPlayed 
     - this.gameMusic
     - this.gameMusicStopped
     - this.gameWinMusicPlayed
- start()
- gameLoop()
- update()

### player.js
- class Player 
- constructor()
     - this.gameScreen 
     - this.left 
     - this.top 
     - this.height 
     - this.width
     - this.directionX 
     - this.directionY
     - this.yVelocity
     - this.jumping 
     - this.jumpHeight 
     - this.gravity       
     - this.element
     - this.element.src 
     - this.element.style.position
     - this.element.style.left
     - this.element.style.top
     - this.element.style.height
     - this.element.style.width
     - this.gameScreen.appendChild(this.element)
- jump()
- applyGravity()
- move() 
- updatePosition()
- didCollide(obstacle)

### obstacle.js
- class Obstacle 
    constructor()
    -  this.gameScreen 
    - this.left
    - this.top 
    -  this.height 
    -  this.width 
    -  this.element 
    -  this.element.src
    -  this.element.style.position 
    -  this.element.style.left
    -  this.element.style.top 
    -  this.element.style.height
    -  this.element.style.width 
    -  this.gameScreen.appendChild(this.element)
- move()
- updatePosition()

### treat.js
- class Treat
- constructor() 
     - this.gameScreen
     - this.left
     - this.top
     - this.height
     - this.width
     - this.element
     - this.element.src
     - this.element.style.position
     - this.element.style.left
     - this.element.style.top 
     - this.element.style.height
     - this.element.style.width
     - this.gameScreen.appendChild(this.element)
- move()
- updatePosition()


## States y States Transitions
- Start-intro screen
- Game screen
- Game-over/Losing screen
- Winning screen

## Task
_List of tasks in order of priority_
- Game concept creation 
- Creat an HTML file to create pages and asign IDs and classes
- Add a CSS file to make the game visually attractive
- Add game assets (videos, music and images)
- Add JS files to create interactive game  


## Links

- [Trello Link](NA)
- [Slides Link](https://www.canva.com/design/DAFvFyAnSLc/EgNnOMHCEZmMqHZxa5rtYA/view?utm_content=DAFvFyAnSLc&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink)
- [Github repository Link](https://github.com/Rin-o/Shib8bit)
- [Deployment Link](https://rin-o.github.io/Shib8bit/)