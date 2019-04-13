const controller = {
    left: false,
    right: false,
    up: false,
    keyListener:function(event) {
        const key_state = (event.type === "keydown") ? true : false;

        switch(event.keyCode) {
            case 37:
                controller.left = key_state;
            break;
            case 38:
                controller.up = key_state;
            break;
            case 39:
                controller.right = key_state;
            break;
        }
    }
}

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

window.addEventListener("keydown", controller.keyListener)
window.addEventListener("keyup", controller.keyListener)
