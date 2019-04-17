const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const music = document.getElementById('bg_music');
const player = new Player(context);
let musicOn = false;
let currentLevel = 0;
let numLives = 5;
var score = 0;
let platforms = [];
let gameOver = document.getElementById('game_over');
let gameWon = document.getElementById('game_won');

const spriteImg = new Image();
spriteImg.src = 'assets/images/sprites/sprite_v2.png';

const coinImg = new Image();
coinImg.src = 'assets/images/pellet.png';

document.addEventListener('DOMContentLoaded', ()=> {
    document.addEventListener('keydown', () => {
        const startMenu = document.getElementById('start_menu');
        startMenu.classList.add('hidden');
    });
})

function load() {
    reset();
    render();
};

function reset() {
    if (currentLevel === levels.length) {
        bg_music.pause(); 
        gameWon.className = "game_won";
    } else {
        context.fillStyle = "black";
        context.fillRect(0, 0, context.canvas.width, context.canvas.height);
        player.pos = dup(levels[currentLevel].startPos);
        player.x_velocity = 0;
        player.y_velocity = 0;

        platforms = levels[currentLevel].platforms.filter(platform => !player.collectedPellets.includes(platform.id))
        platforms = platforms.map((platform) => new Object(platform));
    }
};

function render() {
    context.fillStyle = "black";
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);
    
    context.font = "18px 'Press Start 2P'";
    context.fillStyle = "white";
    context.fillText(`Stage`, 20, 40)

    context.font = "18px 'Press Start 2P'";
    context.fillStyle = "yellow";
    context.fillText(`${currentLevel + 1}`, 55, 70)

    context.font = "18px 'Press Start 2P'";
    context.fillStyle = "white";
    context.fillText(`Lives`, 140, 40)

    context.font = "18px 'Press Start 2P'";
    context.fillStyle = "yellow";
    if (numLives < 0) {
        numLives = 0;
    };
    context.fillText(`${numLives}`, 180, 70)

    context.font = "18px 'Press Start 2P'";
    context.fillStyle = "white";
    context.fillText(`Score`, 260, 40)

    context.font = "18px 'Press Start 2P'";
    context.fillStyle = "yellow";
    context.fillText(`${score}`, 290, 70)

    platforms.forEach(platform => {
        player.collisionDetection(platform),
        platform.create()
    });

    checkInput();
    player.create();
    player.move();
    player.checkBoundary();

    // platforms[platforms.length-1].goalUpdate();

    requestAnimationFrame(render);
};

function dup(obj) {
    return JSON.parse(JSON.stringify(obj));
}

load();