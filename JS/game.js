class Game {
    constructor() {
      this.startScreen = document.getElementById('game-intro')
      this.gameContainer = document.getElementById ('game-container')
      this.gameScreen = document.getElementById('game-screen')
      this.gameEndScreen = document.getElementById('game-end')
      this.gameWinScreen = document.getElementById('game-win')//game win
      //this.gameWinScreen = new Audio('game-win')
      this.height = 300
      this.width = 800
      this.player = new Player(this.gameScreen, 1, 260, 94, 102)
      this.obstacles = []
      this.treats = []
      this.animateId = 0
      this.score = 0
      this.lives = 3
      this.gameOver = false
      this.gameWin = false //game win
      this.gameOverMusicPlayed = false;
      this.gameMusic = document.getElementById ('bgMusic');
      this.gameMusicStopped = false;
      this.gameWinMusicPlayed = false;

      //this.audioDog = 
      //this.soundEffectButton = 
    }
    start() {
      this.startScreen.style.display = 'none'
      this.gameContainer.style.display = 'flex'
      this.gameEndScreen.style.display = 'none'
      this.gameWinScreen.style.display = 'none' //game win
      this.gameScreen.style.display = 'block'
      this.gameMusic.play()
  
      this.gameScreen.style.height = `${this.height}px`
      this.gameScreen.style.width = `${this.width}px`
  
      this.gameLoop()
    } 
    gameLoop() {
      this.update()
  
      if (this.animateId % 100 === 0) {
        this.obstacles.push(
          new Obstacle(
            this.gameScreen,
            750,
            250,
            70,
            50
          )
        )
      }
      //added for treats
     if (this.animateId % 250 === 0) {
        this.treats.push(
          new Treat(
            this.gameScreen,
            750,
            260,
            46,
            48
          )
        )
      }

      document.getElementById('score').innerText = this.score
      document.getElementById('lives').innerText = this.lives
  
      if (this.lives < 1) {
        this.gameOver = true
      }

      else if (this.score >=3){
        this.gameWin = true
      }
  
      if (this.gameOver) {
        this.gameScreen.style.display = 'none'
        this.gameContainer.style.display = 'none'
        this.gameEndScreen.style.display = 'block'
        this.gameWinScreen.style.display = 'none'//<--to check game win
        const gameOverMusic = document.getElementById('goMusic');
        this.gameMusic.pause();
        console.log(gameOverMusic)
        gameOverMusic.play();

      } 
      
      else if (this.gameWin) {
        this.gameScreen.style.display = 'none'
        this.gameContainer.style.display = 'none'
        this.gameEndScreen.style.display = 'none'
        this.gameWinScreen.style.display = 'block'//<--to check game win
        const gameWinMusic = document.getElementById('gwMusic');
        this.gameMusic.pause();
        //this.gameOverMusic.pause();
        console.log(gameWinMusic);
        this.gameWinMusic.play();
      }
      
      else {
        this.animateId = requestAnimationFrame(() => this.gameLoop())
      }
    }

    update() {
      this.player.move()
      //console.log(this.obstacles)
      const nextObstacles = []
      this.obstacles.forEach(obstacle => {
        obstacle.move()
        if (this.player.didCollide(obstacle)) {
          this.lives -= 1
          obstacle.element.remove()
        } else if (obstacle.top > this.gameScreen.clientHeight) {
          this.score += 1
          obstacle.element.remove()
        } else {
          nextObstacles.push(obstacle)
        }
      })
      this.obstacles = nextObstacles

         //added for treats
    
    this.player.move()
     const nextTreats = []
      this.treats.forEach(treat => {
        treat.move()
        if (this.player.didCollide(treat)) {
          this.score += 1
          treat.element.remove()
        } else if (treat.top > this.gameScreen.clientHeight) {
          this.score += 0
          treat.element.remove()
        } else {
          nextTreats.push(treat)
        }
      })
      this.treats = nextTreats
    }

    //audio - when start button clicked
    audio (){
    this.audioDog = document.getElementById('dogBarking');
    this.soundEffectButton = document.getElementById('start-button');
    this.soundEffectButton.addEventListener('click', () => {
    this.audio.play(); 
    });  
    }
    //when collidision happens ..?
}
