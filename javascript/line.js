class DrawingLine extends PaintFunction{
    constructor(contextReal) {
      super();
      this.context = contextReal;
    }
    onMouseDown(coord, e){
      this.context.strokeStyle = "blue";
      this.context.lineJoin = "round";
      this.context.lineWidth = 4;
      this.context.beginPath();
      this.context.moveTo(coord[0], coord[1]);
    }
    onDragging(coord, e){
      this.draw(coord[0], coord[1]);
    }
    onMouseMove() {}
    onMouseUp() {}
    onMouseLeave() {}
    onMouseEnter() {}
    draw(x, y) {
      this.context.lineTo(x, y);
      this.context.stroke();
    }
  }
  