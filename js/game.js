const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const music = document.getElementById('bg_music');
const player = new Player(context);

let musicOn = false;
let currentLevel = 0;
let numLives = 5;
let pause = true;
var score = 0;
let tick = 0;
let time = 0;
let platforms = [];
let gameOver = document.getElementById('game_over');
let gameWon = document.getElementById('game_won');
let highScoreInput = document.getElementById('high-score-input');
let nameScore = $('#name');
let scoreList = $("#score-list")



$("#high-score-input").submit(highScoreSubmit);

const yellowSprite = new Image();
    yellowSprite.src = 'assets/images/sprites/yellow_hero.png';
const blueSprite = new Image();
    blueSprite.src = 'assets/images/sprites/blue_hero.png';
const redSprite = new Image();
    redSprite.src = 'assets/images/sprites/red_hero.png';
const pinkSprite = new Image();
    pinkSprite.src = 'assets/images/sprites/pink_hero.png';
const coinImg = new Image();
    coinImg.src = 'assets/images/pellet.png';

document.addEventListener('DOMContentLoaded', ()=> {
    document.addEventListener('keydown', () => {
        const startMenu = document.getElementById('start_menu');
        startMenu.classList.add('hidden');
    });
})

function load() {
    player.gameStart = true;
    checkInput();
    reset();
    render();
};

function reset() {
    if (currentLevel === levels.length) {
        gameWin();
    } else if (player.gameStart) {
        context.fillStyle = "black";
        context.fillRect(0, 0, context.canvas.width, context.canvas.height);
        player.pos = dup(levels[currentLevel].startPos);

        platforms = levels[currentLevel].platforms.filter(platform => !player.collectedPellets.includes(platform.id))
        platforms = platforms.map((platform) => new Object(platform));
    }
};

function gameWin() {
    bg_music.pause(); 
    player.resetPlayerMove();
    resetInput();
    player.gameStart = false;
    gameWon.className = "game_won";
    highScoreInput.className = "";
    clearListeners();
}

function gameLose() {
    bg_music.pause(); 
    player.resetPlayerMove();
    resetInput();
    player.gameStart = false;
    gameOver.className = "game_over";
    highScoreInput.className = "";
    clearListeners();
}

function restart() {
    player.gameStart = true;
    currentLevel = 0;
    numLives = 5;
    player.x_velocity = 0;
    player.y_velocity = 0;
    score = 0;
    time = 0;
    gameOver.className = "hidden";
    gameWon.className = "hidden";
    highScoreInput.className = "hidden";
    input.restart = false;
    bg_music.play(); 
    addListeners();
    load();
}

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

    // context.font = "18px 'Press Start 2P'";
    // context.fillStyle = "white";
    // context.fillText(`Time`, 380, 40)

    // context.font = "18px 'Press Start 2P'";
    // context.fillStyle = "yellow";
    // context.fillText(`${time}`, 410, 70)

    platforms.forEach(platform => {
        player.collisionDetection(platform),
        platform.create()
    });

        checkInput();
    if (player.gameStart) {
        ticker();
        player.create(input.heroColor);
        player.move();
        player.checkBoundary();
        requestAnimationFrame(render);
    }
};

function dup(obj) {
    return JSON.parse(JSON.stringify(obj));
}

function ticker() {
    if (player.gameStart) {
        tick++;
        if (tick % 20 === 0) {
            time++;
        }
    }
}
function highScoreSubmit() {
    let name = $("#inputname").val();

    database.ref().push({
    name: name,
    score: score
    })

    $("#score-list").html(name)
}

const displayHighScores = (highScores) => {
    const scoresTable = document.getElementById('scores-table');
  };

load();