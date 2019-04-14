const input = {
  up: false,
  left: false,
  right: false,
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
      break;    
      case 65: 
        input.left = true; 
      break;  
      case 68: 
        input.right = true; 
      break;    
  }
});

document.addEventListener('keyup', e => {
  const key = e.keyCode;
    switch(key) {
      case 32: 
        input.up = false; 
      break;   
      case 65: 
        input.left = false; 
      break;  
      case 68: 
        input.right = false; 
      break;    
  }
});

function collectInput() {
  if (player.onGround && input.up) {
    player.onGround = false;
    player.y_velocity = -(player.y_velocityMax);
    input.up = false;
  }

  if (!player.onGround && input.up) {
    const filteredObjects = levels[currentLevel].platforms.filter(obj => {
      return (
        !(player.pos.y >= obj.pos.y + obj.height || player.pos.y + player.height <= obj.pos.y)
      );
    });

    if (filteredObjects.some(obj => obj.pos.x + obj.width === player.pos.x)) {
      player.y_velocity = player.y_velocityMax * -1;
      player.x_velocity = player.x_velocityMax * 1;
    } else if (filteredObjects.some(obj => obj.pos.x === player.pos.x + player.width)) {
      player.y_velocity = player.y_velocityMax * -1;
      player.x_velocity = player.x_velocityMax * -1;
    } else if (player.doubleJumps) {
      player.y_velocity = -(player.y_velocityMax) * player.doubleJumpMod;
      player.doubleJumps--;
    }
    input.up = false;
  }
}

