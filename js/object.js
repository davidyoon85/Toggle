class Object {
    constructor(platform) {
        this.x = platform.x;
        this.y = platform.y;
        this.h = platform.h;
        this.w = platform.w;
        this.type = platform.type;
    }

    create(platform) {
        if (this.type === 'platform') {
            context.fillRect(
                this.x,
                this.y,
                this.w,
                this.h
            )
        } else {
            context.fillRect(
                this.x -  20,
                this.y - 20,
                this.w + 40,
                this.h + 40
            )
        }
    }
}