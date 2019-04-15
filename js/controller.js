const input = {
  up: false,
  upActive: false,
  left: false,
  leftActive: false,
  right: false,
  rightActive: false,
  restart: false
};
  
document.addEventListener('keydown', e => {
  e.preventDefault();
  if (!musicOn) {
    musicOn = true;
    music.play();
  }
  const key = e.keyCode;
    switch(key) {
      case 32: 
        input.up = true;
        upActive = true; 
      break;    
      case 65: 
        input.left = true; 
        leftActive = true; 
      break;  
      case 68: 
        input.right = true; 
        rightActive = true; 
      break;
      case 77: 
        input.music = true; 
      break;     
      case 82: 
        input.restart = true; 
      break;
  }
});

document.addEventListener('keyup', e => {
  const key = e.keyCode;
    switch(key) {
      case 32: 
        input.up = false;
        upActive = false; 
      break;   
      case 65: 
        input.left = false; 
        leftActive = false; 
      break;  
      case 68: 
        input.right = false;
        rightActive = false; 
      break;   
      case 77: 
        input.music = false; 
      break; 
      case 82: 
        input.restart = false; 
      break;
  }
});

function checkInput() {
  if (input.music) {
    input.music = false;
    music.paused ? music.play() : music.pause();
  }

  if (input.restart) {
    reset();
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

