class Player {
    constructor() {
        this.height = 32;
        this.width = 32;
        this.pos = { x: 0, y: 0 };
        this.onGround = false;
        this.gravity = 0.75;
        this.x_velocity = 0;
        this.y_velocity = 0;
        this.x_velocityMax = 10;
        this.y_velocityMax = 18;
        this.x_acceleration = 0.6;
        this.y_acceleration = 0.6;
    };
  
    create() {
        context.fillStyle = 'yellow';
        context.fillRect(this.pos.x, this.pos.y, this.width, this.height);
    };
    
    move() {
        this.x_velocity += (input.right ? this.x_acceleration : -(this.x_acceleration)) + (input.left ? (-(this.x_acceleration)) : this.x_acceleration);
        if((!input.right && !input.left) || (input.right && input.left)) {
            if(this.x_velocity < this.x_acceleration && this.x_velocity > -(this.x_acceleration)) { this.x_velocity = 0 };
            if(this.x_velocity < 0) { this.x_velocity += this.x_acceleration/1.8 };
            if(this.x_velocity > 0) { this.x_velocity -= this.x_acceleration/1.8 };
        };
        if(this.x_velocity > this.x_velocityMax) {this.x_velocity = this.x_velocityMax};
        if(this.x_velocity < -(this.x_velocityMax)) {this.x_velocity = -(this.x_velocityMax)};
    
        this.y_velocity += this.gravity;
    
        if(this.y_velocity > this.y_velocityMax) {this.y_velocity = this.y_velocityMax};
        if(this.y_velocity < -(this.y_velocityMax)) {this.y_velocity = -(this.y_velocityMax)};
    };

    checkBoundary() {
        this.pos.x += this.x_velocity;
        this.pos.y += this.y_velocity;
        this.onGround = false;
    
        if ( ((this.pos.x) < 0) || (this.pos.x > (levels[currentLevel].width - this.width)) ) { 
            this.x_velocity = 0; 
        } else if ( ((this.pos.y) < 0) || (this.pos.y > (levels[currentLevel].height - this.height)) ) { 
            this.y_velocity = 0; }
    
        if (this.pos.x < 0) { 
            this.pos.x = 0; 
        } else if ((this.pos.x + this.width) > levels[currentLevel].width) 
            { this.pos.x = levels[currentLevel].width - this.width; }

        if (this.pos.y < 0) { 
            this.pos.y = 0; 
        } else if ((this.pos.y + this.height) > levels[currentLevel].height) {
            reset();
        }
    };
  
  
    collisionDetection(obj) {
        if (this.pos.x < obj.pos.x + obj.width && this.pos.x + this.width > obj.pos.x &&
            this.pos.y < obj.pos.y + obj.height && this.pos.y + this.height > obj.pos.y) {
        switch(obj.type) {
          case 'platform':
                this.collision(obj);
            break;
          case 'goal':
                obj.stageNum ? (currentLevel = obj.stageNum) : currentLevel++;
            reset();
            break;
        }
      }
    };
  
    collision(obj) {
        let delta = false;
        if ((this.pos.y + this.height < obj.pos.y + this.y_velocityMax + 1) && this.y_velocity >= 0) {
            this.pos.y = obj.pos.y - this.height;
            this.y_velocity = 0;
            this.onGround = true;
            delta = true;
        } else if ((this.pos.y > obj.pos.y + obj.height - this.y_velocityMax - 1) && this.y_velocity <= 0) {
            this.pos.y = obj.pos.y + obj.height;
            this.y_velocity = 0;
        }
    
        if ((this.pos.x + this.width < obj.pos.x + this.x_velocityMax + 1) && this.x_velocity >= 0 && !delta) {
            this.pos.x = obj.pos.x - this.width;
            this.x_velocity = 0;
        } else if ((this.pos.x > obj.pos.x + obj.width - this.x_velocityMax - 1) && this.x_velocity <= 0 && !delta) {
            this.pos.x = obj.pos.x + obj.width;
            this.x_velocity = 0;
      }
    };
  };
