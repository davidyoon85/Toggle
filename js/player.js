class Player {
    constructor() {
        this.height = 49;
        this.width = 49;

        this.pos = { x: 0, y: 0 };
        this.x_velocity = 0;
        this.y_velocity = 0;
        this.x_velocityMax = 10;
        this.y_velocityMax = 18;
        this.x_acceleration = 0.6;
        this.y_acceleration = 0.6;
        this.onGround = false;
        this.gravity = 0.75;
        this.collectedPellets = [];
    };

    create() {
        const scale = 3.5;
        const spriteWidth = 14;
        const spriteHeight = 14;
        const scaledWidth = scale * spriteWidth;
        const scaledHeight = scale * spriteHeight;

        if (input.rightActive) {
            context.drawImage(spriteImg, 40, 0, 14, 14, this.pos.x, this.pos.y, scaledWidth, scaledHeight);    
        }  else {
            context.drawImage(spriteImg, 0, 0, 14, 14, this.pos.x, this.pos.y, scaledWidth, scaledHeight);    
        }
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
                this.x_velocity += this.x_acceleration/1.8
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
                    case 'collectible':
                        if (!this.collectedPellets.includes(obj.id)) {
                            this.collectedPellets.push(obj.id)
                            obj.width = 0;
                            obj.height = 0;
                            score += 10;
                        }
                    break;
                    case 'goal':
                        currentLevel++;
                        this.collectedPellets = [];
                        reset();
                    break;
                }
            }
        };
        
        collision(obj) {
            if ((this.pos.x + this.width < obj.pos.x + this.x_velocity + 1)) {
                this.x_velocity = 0;
                this.pos.x = obj.pos.x - this.width;
            } else if ((this.pos.x > obj.pos.x + obj.width - this.x_velocity - 1)) {
                this.x_velocity = 0;
                this.pos.x = obj.pos.x + obj.width;
            }

            if ((this.pos.y + this.height) < (obj.pos.y + this.y_velocity + 1)) {
                this.y_velocity = 0;
                this.pos.y = obj.pos.y - this.height;
                this.onGround = true;
            } else if ((this.pos.y > obj.pos.y) + (obj.height - this.y_velocity - 1)) {
                this.y_velocity = 0;
                this.pos.y = obj.pos.y + obj.height;
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
            }
            
            if ((this.pos.y + this.height) > levels[currentLevel].height) {
                if (numLives === 1) {
                    numLives--;
                    // numLives = 0;
                    bg_music.pause();
                    gameOver.className = "game_over";
                } else {
                    numLives--;
                    reset();
                }
            }
        };
    };
