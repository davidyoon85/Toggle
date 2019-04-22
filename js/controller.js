const input = {
  up: false,
  left: false,
  right: false,
  rightActive: true,
  restart: false,
  heroColor: 0
};
  
const keyDown = e => {
  e.preventDefault();
  if (!musicOn) {
    musicOn = true;
    pause = false;
    music.play();
  }
  const key = e.keyCode;
    switch(key) {
      case 13: 
        input.heroColor ++;
      break;   
      case 32: 
        input.up = true;
      break; 
      case 87: 
        input.up = true;
      break;    
      case 65: 
        input.left = true; 
        input.rightActive = false; 
      break;   
      case 68: 
        input.right = true; 
        input.rightActive = true; 
      break;
      case 77: 
        input.music = true; 
      break;     
      case 82: 
        input.restart = true; 
        checkInput();
      break;
    }
  }
  document.addEventListener('keydown', keyDown);

const keyUp = e => {
  const key = e.keyCode;
    switch(key) {
      case 32: 
        input.up = false;
      break;  
      case 87: 
        input.up = false;
      break;   
      case 65: 
        input.left = false; 
      break;  
      case 68: 
        input.right = false;
      break;   
      case 77: 
        input.music = false; 
      break; 
  }
}

document.addEventListener('keyup', keyUp);

function checkInput() {
  if (input.music) {
    input.music = false;
    player.gameStart = true
    music.paused ? music.play() : music.pause();
  }

  if (input.restart) {
    input.restart = false;
    restart();
  }

  if (player.onGround && input.up) {
    player.onGround = false;
    input.up = false;
    player.y_velocity = -(player.y_velocityMax);
  } else if (!player.onGround && input.up) {
    const platforms = levels[currentLevel].platforms.filter(obj => {
      return (
        !(player.pos.y >= (obj.pos.y + obj.height) || (player.pos.y + player.height) <= obj.pos.y)
      );
    });

    if (platforms.some(obj => obj.pos.x + obj.width === player.pos.x)) {
      player.x_velocity = player.x_velocityMax;
      player.y_velocity = -(player.y_velocityMax);
    } else if (platforms.some(obj => obj.pos.x === player.pos.x + player.width)) {
      player.y_velocity = -(player.y_velocityMax);
      player.x_velocity = -(player.x_velocityMax);
    } 
    
    input.up = false;
  }
}

function resetInput() {
  input.up = false,
  input.left = false,
  input.right = false,
  input.rightActive = true,
  input.restart = false,
  input.heroColor = 0
}

function clearListeners() {
  document.removeEventListener("keyup", keyUp)
  document.removeEventListener("keydown", keyDown)
}

function addListeners() {
  document.addEventListener("keyup", keyUp)
  document.addEventListener("keydown", keyDown)
}
