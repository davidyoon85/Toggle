const controller = {
    SPACEBAR: false,
    W: false,
    D: false,
    keyListener: function(e) {
        const key_state = (e.type === 'keydown') ? true : false;

        switch(e.keyCode) {
            case 32:
                controller.SPACEBAR = key_state;
            break;
            case 37:
                controller.W = key_state;
            break;
            case 39:
                controller.D = key_state;
                break;
        }
    }
 }

window.addEventListener('keydown', controller.keyListener)
window.addEventListener('keyup', controller.keyListener)