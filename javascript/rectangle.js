class DrawingRectangle extends PaintFunction{
    constructor(contextReal, contextDraft){
      super();
      this.contextReal = contextReal;
      this.contextDraft = contextDraft;
    }
    onMouseDown(coord, e){
      this.contextReal.fillStyle = "green";
      this.origX = coord[0];
      this.origY = coord[1];
    }
    onDragging(coord, e){
      this.contextDraft.fillStyle = "green";
      this.contextDraft.clearRect( 0, 0, canvasDraft.width, canvasDraft.height);
      this.contextDraft.fillRect(
        this.origX,
        this.origY,
        coord[0] - this.origX,
        coord[1] - this.origY
      );
    }
    onMouseMove() {}
    onMouseUp(coord){
      this.contextDraft.clearRect( 0, 0, canvasDraft.width, canvasDraft.height );
      this.contextReal.fillRect(
        this.origX,
        this.origY,
        coord[0] - this.origX,
        coord[1] - this.origY
      );
    }
    onMouseLeave() {}
    onMouseEnter() {}
  }
  