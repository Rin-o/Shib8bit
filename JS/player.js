class Player {
    constructor(gameScreen, left, top, height, width, yVelocity, jumping, jumpHeight, gravity) {
      this.gameScreen = gameScreen
      this.left = left
      this.top = top
      this.height = height
      this.width = width
      this.directionX = 0
      this.directionY = 0
      this.yVelocity = 0;
      this.jumping = false;
      this.jumpHeight = -3;
      this.gravity = 0.5;      
      
      this.element = document.createElement('img')
  
      this.element.src = 'images/shiba2.png'
  
      this.element.style.position = 'absolute'
      this.element.style.left = `${this.left}px`
      this.element.style.top = `${this.top}px`
      this.element.style.height = `${this.height}px`
      this.element.style.width = `${this.width}px`
  
      this.gameScreen.appendChild(this.element)
    }
  
    jump() {
        if (!this.jumping) {
          this.directionY = this.jumpHeight;
          this.jumping = true;
        }
      }
  
    applyGravity() {
        this.yVelocity += this.gravity;
        this.top += this.yVelocity;
      }

    move() {
      this.updatePosition()
      this.element.style.left = `${this.left}px`
      this.element.style.top = `${this.top}px`
    }
  
    updatePosition() {
      if (this.left < 50) {
        this.left = 50
      } else if (this.left > this.gameScreen.clientWidth - 50 - this.width) {
        this.left = this.gameScreen.clientWidth - 50 - this.width
      } else {
        this.left += this.directionX
      }
  
      if (this.top < 20) {
        this.top = 20
      } else if (this.top > this.gameScreen.clientHeight - 20 - this.height) {
        this.top = this.gameScreen.clientHeight - 20 - this.height
      } else {
        this.top += this.directionY
      }

      if(this.jumping) {
        this.top -= 3
      } else if (this.jumping === false && this.top <= 300) {
        this.top += 3
      }
    }

  
    didCollide(obstacle) {
      const playerRect = this.element.getBoundingClientRect()
      const obstacleRect = obstacle.element.getBoundingClientRect()

      if (
        playerRect.left < obstacleRect.right &&
        playerRect.right > obstacleRect.left &&
        playerRect.top < obstacleRect.bottom &&
        playerRect.bottom > obstacleRect.top
      ) {
        return true
      } else {
        return false
      }
    }
    
}
