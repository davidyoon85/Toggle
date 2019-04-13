const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width  = canvas.scrollWidth;
canvas.height = canvas.scrollHeight;

const platform = [
    {
        x: 0, 
        y: 700, 
        h: 100,
        w: 300, 
    },
    {
        x: 300, 
        y: 600,
        h: 100, 
        w: 300
    },
    {
        x: 600, 
        y: 500,
        h: 100, 
        w: 300
    },
    {
        x: 900, 
        y: 400,
        h: 100, 
        w: 300
    },
    {
        x: 1200, 
        y: 300,
        h: 100, 
        w: 300
    },
];

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

const rectangle = {
    h: 32,
    jumping: true,
    w: 32,
    x: 50,
    xv: 0,
    y: 0,
    yv: 0,
};

function keydown(e) {
    const key = keyMap[e.keyCode]
    state.pressedKeys[key] = true
}

function keyup(e) {
    const key = keyMap[e.keyCode]
    state.pressedKeys[key] = false
}

function isColliding (platform) {
    if ((rectangle.x > platform.x + platform.w) || 
        (rectangle.x + rectangle.w < platform.x) ||
        (rectangle.y > platform.y + platform.h) ||
        (rectangle.y + rectangle.h < platform.y)
    ) {
        return false;
    } else {
        return true;
    }
}

const loop = function() {
    if (controller.up && rectangle.jumping == false) {
        rectangle.yv -= 40;
        rectangle.jumping = true;
    }

    if (controller.left) {
        rectangle.xv -= 0.5;
    }

    if (controller.right) {
        rectangle.xv += 0.5;
    }

    if (rectangle.jumping) {
        rectangle.yv += 1; //gravity
    } else {
        rectangle.yv = 0;
    }
    rectangle.x += rectangle.xv;
    rectangle.y += rectangle.yv;
    rectangle.xv *= 0.9;
    rectangle.yv *= 0.9;

    // if (rectangle.y > 700 - 32) {
    //     rectangle.jumping = false;
    //     rectangle.y = 700 - 32;
    //     rectangle.yv = 0;
    // }

    // if (rectangle.x < -32) {
    //     rectangle.x = 1600;
    // } else if (rectangle.x > 1600) {
    //     rectangle.x = -32;
    // }

    //background color
    context.fillStyle = "white";
    context.fillRect(0, 0, context.canvas.width, context.canvas.height);

    //main object
    context.fillStyle = "#ff0000";
    context.beginPath();
    context.fillRect(rectangle.x, rectangle.y, rectangle.w, rectangle.h);
    // context.fillRect(rectangle.px-5,rectangle.py-20,10,20);
    // context.fill();

    //collison
    rectangle.jumping = true;
    platform.forEach (platform => {
       
        if(rectangle.x > platform.x && rectangle.x< (platform.x + platform.w) && 
            rectangle.y > platform.y && rectangle.y < (platform.y + platform.h)) {
                rectangle.jumping = false;
                rectangle.yv = 0;
                rectangle.y = (platform.y - 80);
            } 
            
        });
    
    //platform
    platform.forEach (platform => {
        context.fillStyle = "ff0000";
        context.fillRect(platform.x, platform.y, platform.w, platform.h);
    });

    //footer
    // context.fillStyle = "#000000";
    // context.fillRect(0, 700, 1600, 100);

    //port
    context.strokeStyle = "blue";
    context.lineWidth   = 10;
    context.strokeRect(1500, 600, 50, 50);

    
    window.requestAnimationFrame(loop);
};

window.addEventListener("keydown", controller.keyListener)
window.addEventListener("keyup", controller.keyListener)
window.requestAnimationFrame(loop);
