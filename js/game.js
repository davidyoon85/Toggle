const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const music = document.getElementById('bg_music');
const player = new Player(context);
let musicOn = false;
let currentLevel = 0;
let numDeaths = 0;
let platforms = [];
let gameOver = document.getElementById('game_over');

const img = new Image();
img.src = 'assets/images/sprites/sprite_v2.png';

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
        music.pause();
        gameOver.className = "game_over";
    } else {
        context.fillStyle = "#FFFFFF";
        context.fillRect(0, 0, context.canvas.width, context.canvas.height);
        player.pos = dup(levels[currentLevel].startPos);
        player.x_velocity = 0;
        player.y_velocity = 0;
        
        platforms = levels[currentLevel].platforms.map(platform => new Object(platform));
    }
};

function render() {
    context.fillStyle = "#FFFFFF";
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);
    
    context.font = "30px 'Press Start 2P'";
    context.fillStyle = "#000000";
    context.fillText(`Stage ${currentLevel + 1}`, 40, 70)

    context.font = "20px 'Press Start 2P'";
    context.fillStyle = "#000000";
    context.fillText(`Deaths: ${numDeaths}`, 40, 120)

    platforms.forEach(platform => {
        player.collisionDetection(platform),
        platform.create()
    });

    checkInput();
    player.create();
    player.move();
    player.checkBoundary();

    requestAnimationFrame(render);
};

function dup(obj) {
    return JSON.parse(JSON.stringify(obj));
}

load();