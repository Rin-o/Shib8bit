window.addEventListener('load', () => {
    const startButton = document.getElementById('start-button')
    const restartButton = document.getElementById('restart-button')
  
    let game
  
    function startGame() {
      console.log('start game')
      game = new Game()
      game.start()
      const gameMusic = document.getElementById('bgMusic')
      gameMusic.play()
      
      game.onGameOver = () => {
        gameMusic.onpause();
        gameOverMusic.play();
      }
    }
  
    startButton.addEventListener('click', function () {
      startGame()
    })
  
    restartButton.addEventListener('click', function () {
        location.reload()
    })
  
    document.addEventListener('keydown', event => {
      console.log('down', event)
  
     // if (event.code === 'Space' || event.code === 'ArrowUp') { 
       // game.player.directionY = -1
      //}
      if (event.code === 'Space'){
        game.player.jumping = true;
        setTimeout(()=>{game.player.jumping = false;}, 800)
      } 
    })
  
    /*document.addEventListener('keyup', event => {
      console.log('up', event)
      //if (
        //event.code === 'Space' || event.code === 'ArrowUp')
        game.player.directionY = 0

    if (event.code === 'Space'){
        game.player.jumping = false;
        }
    })*/
  })