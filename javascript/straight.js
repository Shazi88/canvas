class DrawingStraight extends PaintFunction{
    constructor(contextReal, contextDraft){
      super();
      this.contextReal = contextReal;
      this.contextDraft = contextDraft;
    }
    onMouseDown(coord, e){
      this.contextDraft.strokeStyle = "red";
      this.contextDraft.lineJoin = "round";
      this.contextDraft.lineWidth = 5;
      this.origX = coord[0];
      this.origY = coord[1];
      }
    onDragging(coord, e){
      this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
      this.contextDraft.beginPath();
      this.contextDraft.moveTo(this.origX, this.origY);
      this.contextDraft.lineTo(coord[0], coord[1]);
      this.contextDraft.stroke();  
      }
    onMouseMove() {}
    onMouseUp(coord){
      this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height );
      this.contextReal.strokeStyle = "red";
      this.contextReal.lineJoin = "round";
      this.contextReal.lineWidth = 5;
      this.contextReal.beginPath();
      this.contextReal.moveTo(this.origX, this.origY);
      this.contextReal.lineTo(coord[0], coord[1]);
      this.contextReal.stroke(); 
      }
    onMouseLeave() {}
    onMouseEnter() {}
    draw(x, y) {
      this.context.lineTo(x, y);
      this.context.stroke();
    }
}