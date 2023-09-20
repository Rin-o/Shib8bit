class Game {
    constructor() {
      this.startScreen = document.getElementById('game-intro')
      this.gameScreen = document.getElementById('game-screen')
      this.gameEndScreen = document.getElementById('game-end')
      this.height = 300
      this.width = 800
      this.player = new Player(this.gameScreen, 1, 260, 94, 102)
      this.obstacles = []
      this.treats = [] ////added for treats
      this.animateId = 0
      this.score = 0
      this.lives = 3
      this.gameOver = false
      this.audioDog = 
      this.soundEffectButton = 
      this.gameMusic = new Audio('bgMusic')
    }
    start() {
      this.startScreen.style.display = 'none'
      this.gameEndScreen.style.display = 'none'
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
            //Math.random() * (this.gameScreen.clientWidth - 40 - 100) + 50,
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
            //Math.random() * (this.gameScreen.clientWidth - 40 - 100) + 50,
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
  
      if (this.gameOver) {
        this.gameScreen.style.display = 'none'
        this.gameEndScreen.style.display = 'block'
        this.gameMusic.pause()


      } else {
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
