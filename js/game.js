const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const player = new Player();
let stage = [];
let currentStage = 0;

function game() {
    resetGame();
    render();
};

function resetGame() {
    player.xv = player.yv = 0;
    stage = stages[currentStage].platforms.map(platform => new Object(platform));
    player.pos = stages[currentStage].startPos
};

function render() {
    context.fillStyle = "#00ff80";
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);
    player.draw();
    checkInput();
    player.updateMovement();
    player.updatePosition();

    stage.forEach(obj => {
        player.collisionCheck(obj)
    });

    requestAnimationFrame(render);
};

game();
