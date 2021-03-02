
class EmptyBox extends Rectangle { 
    constructor(x, y, width, height, fillStyle) {
        super();
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.fillStyle = fillStyle;
    }
    draw(ctx) {
        // define draw the empty box at x and y coordinates with width and height
        // then call it in your game loop
        ctx.fillStyle = this.fillStyle;
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.stroke();
        ctx.fill();
    }
}