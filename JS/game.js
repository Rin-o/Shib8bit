class Game {
    constructor() {
      this.startScreen = document.getElementById('game-intro')
      this.gameScreen = document.getElementById('game-screen')
      this.gameEndScreen = document.getElementById('game-end')
      this.height = 300
      this.width = 800
      this.player = new Player(this.gameScreen, 1, 260, 94, 102)
      this.obstacles = []
      //this.treats = [] //added
      this.animateId = 0
      this.score = 0
      this.lives = 3
      this.gameOver = false
      this.audioDog
      this.soundEffectButton
    }
  
    start() {
      this.startScreen.style.display = 'none'
      this.gameEndScreen.style.display = 'none'
      this.gameScreen.style.display = 'block'
  
      this.gameScreen.style.height = `${this.height}px`
      this.gameScreen.style.width = `${this.width}px`
  
      this.gameLoop()
    }
  
    gameLoop() {
      this.update()
  
      if (this.animateId % 500 === 0) {
        this.obstacles.push(
          new Obstacle(
            this.gameScreen,
            //Math.random() * (this.gameScreen.clientWidth - 40 - 100) + 50,
            750,
            240,
            80,
            40
          )
        )
      }
  
     /* if (this.animateId % 500 === 0) {
        this.treats.push(
          new Treats(
            this.gameScreen,
            //Math.random() * (this.gameScreen.clientWidth - 40 - 100) + 50,
            750,
            240,
            80,
            40
          )
        )
      }*/
  

      document.getElementById('score').innerText = this.score
      document.getElementById('lives').innerText = this.lives
  
      if (this.lives < 1) {
        this.gameOver = true
      }
  
      if (this.gameOver) {
        this.gameScreen.style.display = 'none'
        this.gameEndScreen.style.display = 'block'
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
    }
     /*added for treats
      const nextTreats = []
      this.treats.forEach(treat => {
        treat.move()
        if (this.player.didCollide(treat)) {
          this.lives += 1
          treat.element.remove() //should this be kept?
        } else if (treat.top > this.gameScreen.clientHeight) {
          this.score += 0
          treat.element.remove()
        } else {
          nexTreats.push(treat)
        }
      })
      this.treats = nextTreats
    }*/


    //audio
    //when start button clicked
    audio (){
    this.audioDog = document.getElementById('dogBarking');
    //const soundEffect2 = document.getElementById('soundEffect2');
  
    // Get a reference to the button
   this.soundEffectButton = document.getElementById('start-button');
  
    // Add a click event listener to the button
    this.soundEffectButton.addEventListener('click', () => {
      // Play the desired sound effect
      this.audio.play(); // You can change this to play soundEffect2 for a different sound
    });  
    //when collidision happens ..?


  }

}