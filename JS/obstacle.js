class Obstacle {
    constructor(gameScreen, left, top, height, width) {
      this.gameScreen = gameScreen
      this.left = left
      this.top = top
      this.height = height
      this.width = width
      this.element = document.createElement('img')
  
      this.element.src = 'images/bonsai1.png'
  
      this.element.style.position = 'absolute'
      this.element.style.left = `${this.left}px`
      this.element.style.top = `${this.top}px`
      this.element.style.height = `${this.height}px`
      this.element.style.width = `${this.width}px`
  
      this.gameScreen.appendChild(this.element)
    }
  
    move() {
      this.updatePosition()
      this.element.style.left = `${this.left}px`
    }
  
    updatePosition() {
      this.left -= 5
    }
  }

  /*class Treat {
    constructor(gameScreen, left, top, height, width) {
      this.gameScreen = gameScreen
      this.left = left
      this.top = top
      this.height = height
      this.width = width
      this.element = document.createElement('img')
  
      this.element.src = 'images/Dog_buiscuit.png'
  
      this.element.style.position = 'absolute'
      this.element.style.left = `${this.left}px`
      this.element.style.top = `${this.top}px`
      this.element.style.height = `${this.height}px`
      this.element.style.width = `${this.width}px`
  
      this.gameScreen.appendChild(this.element)
    }
  
    move() {
      this.updatePosition()
      this.element.style.left = `${this.left}px`
    }
  
    updatePosition() {
      this.left -= 5
    }
  }*/