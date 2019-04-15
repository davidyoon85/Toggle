class Player {
    constructor() {
        //player display
        this.height = 42;
        this.width = 42;


        //player movement
        this.pos = { x: 0, y: 0 };
        this.x_velocity = 0;
        this.y_velocity = 0;
        this.x_velocityMax = 10;
        this.y_velocityMax = 18;
        this.x_acceleration = 0.6;
        this.y_acceleration = 0.6;
        this.onGround = false;
        this.gravity = 0.75;
    };

    create() {
        debugger
        // context.fillStyle = 'yellow';
        // context.fillRect(this.pos.x, this.pos.y, this.width, this.height);
        context.drawImage(img, 0, 0, 14, 74, this.pos.x, this.pos.y, 42, 222);
    };
    
    move() {
        this.y_velocity += this.gravity;

        if (this.x_velocity > this.x_velocityMax) {
            this.x_velocity = this.x_velocityMax
        } else if (this.x_velocity < -(this.x_velocityMax)) { 
            this.x_velocity = -(this.x_velocityMax); 
        }
        
        if (this.y_velocity > this.y_velocityMax) {
            this.y_velocity = this.y_velocityMax;
        } else if (this.y_velocity < -(this.y_velocityMax)) {
            this.y_velocity = -(this.y_velocityMax);
        }

        this.x_velocity += 
            (input.left ? (-(this.x_acceleration)) : this.x_acceleration) + (input.right ? this.x_acceleration : -(this.x_acceleration)) 
        if ((!input.right && !input.left) || (input.right && input.left)) {
            if (this.x_velocity < this.x_acceleration && this.x_velocity > -(this.x_acceleration)) { 
                this.x_velocity = 0 
            } else if (this.x_velocity < 0) { 
                this.x_velocity += this.x_acceleration/1.85 
            } else if (this.x_velocity > 0) { 
                this.x_velocity -= this.x_acceleration/1.85 
            };
        };
    };

    collisionDetection(obj) {
        if (this.pos.x < obj.pos.x + obj.width && 
            this.pos.x + this.width > obj.pos.x && 
            this.pos.y < obj.pos.y + obj.height && 
            this.pos.y + this.height > obj.pos.y) {
                switch(obj.type) {
                    case 'platform':
                        this.collision(obj);
                    break;
                    case 'goal':
                        currentLevel++;
                        reset();
                    break;
                }
            }
        };
        
        collision(obj) {
            if ((this.pos.y + this.height) < (obj.pos.y + this.y_velocity + 1)) {
                this.y_velocity = 0;
                this.pos.y = obj.pos.y - this.height;
                this.onGround = true;
            } else if ((this.pos.y > obj.pos.y) + (obj.height - this.y_velocity - 1)) {
                this.y_velocity = 0;
                this.pos.y = obj.pos.y + obj.height;
            }
            
            if ((this.pos.x + this.width < obj.pos.x + this.x_velocity+ 1)) {
                this.x_velocity = 0;
                this.pos.x = obj.pos.x - this.width;
            } else if ((this.pos.x > obj.pos.x + obj.width - this.x_velocity - 1)) {
                this.x_velocity = 0;
                this.pos.x = obj.pos.x + obj.width;
            }
        };

        checkBoundary() {
            this.pos.x += this.x_velocity;
            this.pos.y += this.y_velocity;
        
            if (this.pos.x < 0) { 
                this.x_velocity = 0; 
                this.pos.x = 0; 
            } else if ((this.pos.x + this.width) > levels[currentLevel].width) { 
                this.x_velocity = 0; 
                this.pos.x = levels[currentLevel].width - this.width; 
                this.y_velocity = 0; 
            } else if ((this.pos.y < 0) || (this.pos.y > (levels[currentLevel].height - this.height))) { 
            }
        
            if (this.pos.y < 0) { 
                this.pos.y = 0; 
            } else if ((this.pos.y + this.height) > levels[currentLevel].height) {
                numDeaths++;
                reset();
            }
        };
    };


