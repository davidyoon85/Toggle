class Object {
    constructor(platform) {
      this.pos = platform.pos;
      this.height = platform.height;
      this.width = platform.width;
      this.radius = platform.radius
      this.type = platform.type;
      // this.tick = 0;
      this.id = platform.id;
      this.width = platform.width;
      this.height = platform.height;
    }
  
    create(object) {
      if (this.type === 'goal') {
        context.drawImage(coinImg, this.pos.x, this.pos.y, this.width, this.height);

        // context.beginPath();
        // context.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI);
        // context.fillStyle = "yellow";
        // context.fill();

        // context.fillStyle = "#FFFF00";
        // context.fillRect(this.pos.x, this.pos.y, this.width, this.height);
      } else if (this.type === 'collectible') {
        context.drawImage(coinImg, this.pos.x, this.pos.y, this.width, this.height);
      } else {
        context.strokeStyle = '#1919A6';
        context.lineWidth = 8;
        context.strokeRect(this.pos.x, this.pos.y, this.width, this.height);

        // context.shadowOffsetX = 4;
        // context.shadowOffsetY = 4;
        // context.shadowBlur = 15;
        // context.shadowColor = "#1919A6";
      }
    }

    // goalUpdate() {
    //   this.tick++;
    //   if (this.tick % 100 === 0) {
    //       context.fillStyle = "white";
    //       context.fillRect(this.pos.x, this.pos.y, this.width, this.height);
    //   } else {
    //     context.fillStyle = "yellow";
    //     context.fillRect(this.pos.x, this.pos.y, this.width, this.height);
    //     }
    //   }
  }