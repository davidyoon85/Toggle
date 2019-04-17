class Object {
    constructor(platform) {
      this.pos = platform.pos;
      this.height = platform.height;
      this.width = platform.width;
      this.type = platform.type;
      // this.tick = 0;
      this.id = platform.id;
      this.width = platform.width;
      this.height = platform.height;
    }
  
    create(object) {
      if (this.type === 'goal') {
        context.fillStyle = "#FFFF00";
        context.fillRect(this.pos.x, this.pos.y, this.width, this.height);
      } else if (this.type === 'collectible') {
        context.drawImage(coinImg, this.pos.x, this.pos.y, this.width, this.height);
      } else {
        context.strokeStyle = '#1919A6';
        context.lineWidth = 4;
        context.strokeRect(this.pos.x, this.pos.y, this.width, this.height);

        context.shadowOffsetX = 10;
        context.shadowOffsetY = 2;
        context.shadowBlur = 10;
        context.shadowColor = "rgba(0, 0, 0, 0.5)";
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