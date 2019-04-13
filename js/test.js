// - Canvas Context -
const cnv = document.getElementById('canvas');
const ctx = cnv.getContext('2d');

const player = new Player();

// - Game Info -
let currentStage = 0;
let objArray = [];

// - Functions -
function init() {
  reset();
  frameFunction();
};

function reset() {
  player.pos = dup(stages[currentStage].startingPosition);
  player.vx = 0;
  player.vy = 0;

  objArray = stages[currentStage].objects.map(props => new Object(props));
};

function frameFunction() {
    requestAnimationFrame(frameFunction);
    return;
  }

  coverFrame();

  const off = (Math.floor(Math.random() * 22));
  const r = (Math.floor(Math.random() * ((off>=21)?16:3)) - ((off>=19)?5:2));

  // Draw objects that are the currentColor
  objArray.filter(obj => obj.color === currentColor).forEach(obj => obj.draw(r));

  // Player stuff
  player.updateMovement();
  player.updatePosition();

  // Collisions
  const shownObjects = objArray.filter(obj => obj.color !== currentColor);
  shownObjects.forEach(obj => player.collisionCheck(obj));

  // Draw player
  player.draw();

  // Draw Player Outline
  player.drawOutline();

  // Check for input from the user (e.g. pause, color switch, etc.)
  checkInput();

  // Next Frame
  requestAnimationFrame(frameFunction);
};

function coverFrame() {
  ctx.fillStyle = retro ? 'rgba(0,0,0,0.5)' : colorArray[currentColor];
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

// Dup object
function dup(obj) {
  return JSON.parse(JSON.stringify(obj));
}

// - Go Time -
init();
