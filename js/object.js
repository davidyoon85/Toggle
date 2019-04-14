class Object {
    constructor(platform) {
      this.pos = platform.pos;
      this.height = platform.height;
      this.width = platform.width;
      this.type = platform.type;
    }
  
    create(object) {
      if (this.type === 'goal') {
        context.strokeStyle = 'black';
        context.strokeRect(this.pos.x, this.pos.y, this.width, this.height);
        context.fillStyle = "#00bfff";
        context.fillRect(this.pos.x, this.pos.y, this.width, this.height);
      } else {
        // context.strokeStyle = 'black';
        // context.strokeRect(this.pos.x, this.pos.y, this.width, this.height);
        context.fillStyle = "#b3f0de";
        context.fillRect(this.pos.x, this.pos.y, this.width, this.height);
          context.shadowOffsetX = 4;
          context.shadowOffsetY = 2;
          context.shadowBlur = 10;
          context.shadowColor = "rgba(0, 0, 0, 0.5)";
      }
    }
  }
  