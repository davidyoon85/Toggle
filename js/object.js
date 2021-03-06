class Object {
  constructor(platform) {
    this.pos = platform.pos;
    this.height = platform.height;
    this.width = platform.width;
    this.radius = platform.radius
    this.type = platform.type;
    this.id = platform.id;
    this.width = platform.width;
    this.height = platform.height;
  }

  create(object) {
    if (this.type === 'goal') {
      context.drawImage(coinImg, this.pos.x, this.pos.y, this.width, this.height);
    } else if (this.type === 'collectible') {
      context.drawImage(coinImg, this.pos.x, this.pos.y, this.width, this.height);
    } else {
      context.strokeStyle = '#1919A6';
      context.lineWidth = 8;
      context.strokeRect(this.pos.x, this.pos.y, this.width, this.height);
    }
  }
}