const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const music = document.getElementById('bg_music');
const player = new Player();
let musicOn = false;
let currentLevel = 0;
let platforms = [];

function load() {
  reset();
  render();
};

function reset() {
    context.fillStyle = "white";
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);
    player.pos = dup(levels[currentLevel].startPos);
    player.x_velocity = 0;
    player.y_velocity = 0;

    platforms = levels[currentLevel].platforms.map(platform => new Object(platform));
};

function render() {
    context.fillStyle = "white";
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);

    context.font = "30px Arial";
    context.strokeText(`Stage ${currentLevel + 1}`, 20, 50)

    platforms.forEach(platform => {
        player.collisionDetection(platform),
        platform.create()
    });
    
    collectInput();
    player.create();
    player.move();
    player.checkBoundary();

    requestAnimationFrame(render);
};

function dup(obj) {
    return JSON.parse(JSON.stringify(obj));
}

load();
