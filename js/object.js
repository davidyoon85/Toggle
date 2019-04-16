class Object {
    constructor(platform) {
      this.pos = platform.pos;
      this.height = platform.height;
      this.width = platform.width;
      this.type = platform.type;
      this.tick = 0;
    }
  
    create(object) {
      if (this.type === 'goal') {
        // context.strokeStyle = 'blue';
        // context.lineWidth = 4;
        // context.strokeRect(this.pos.x, this.pos.y, this.width, this.height);
        context.fillStyle = "white";
        context.fillRect(this.pos.x, this.pos.y, this.width, this.height);
      } else {
        context.strokeStyle = 'blue';
        context.lineWidth = 4;
        context.strokeRect(this.pos.x, this.pos.y, this.width, this.height);
        // context.fillStyle = "blue";
        // context.fillRect(this.pos.x, this.pos.y, this.width, this.height);
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