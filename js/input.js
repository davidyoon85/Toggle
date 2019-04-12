const state = {
    pressedKeys: {
        a: false,
        w: false,
        s: false,
        d: false,
        m: false,
        enter: false,
        spacebar: false
    }
}

const keyMap = {
    13: 'enter',
    32: 'spacebar',
    65: 'a',
    68: 'd',
    77: 'm',
    83: 'down',
    87: 'w'
};

function keydown(e) {
    const key = keyMap[e.keyCode]
    state.pressedKeys[key] = true
    console.log(e.keyCode)
}

function keyup(e) {
    const key = keyMap[e.keyCode]
    state.pressedKeys[key] = false
    console.log(e.keyCode)
}

window.addEventListener("keydown", keydown, false)
window.addEventListener("leyup", keyup, false)
