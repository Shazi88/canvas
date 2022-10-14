class DrawingCurve extends PaintFunction{

    constructor(contextReal, contextDraft){
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
        this.count = 0;
    }

    onMouseDown(coord,e){
        this.contextDraft.strokeStyle = "purple";
        this.contextDraft.lineJoin = "round";
        this.contextDraft.lineWidth = 5;
        if(this.count === 0){
            this.origX = coord[0];
            this.origY = coord[1];
        }
    }
    onDragging(coord, e){
        if(this.count === 0){
            this.contextDraft.beginPath();
            this.contextDraft.moveTo(this.origX, this.origY); 
            this.sX = coord[0];
            this.sY = coord[1];
            this.contextDraft.lineTo(this.sX,this.sY);
            this.contextDraft.stroke();
        }
        else if(this.count === 1){
            this.contextDraft.beginPath();
            this.contextDraft.moveTo(this.origX,this.origY);
            this.contextDraft.quadraticCurveTo(coord[0],coord[1],this.sX,this.sY);
            this.contextDraft.stroke();
        }
    }
    onMouseMove() {}
    onMouseUp(coord,e){
        this.contextReal.strokeStyle = "purple";
        this.contextReal.lineJoin = "round";
        this.contextReal.lineWidth = 5;
        if(this.count === 0){
            this.count ++
        }
        else if(this.count === 1){
            this.contextReal.beginPath();
            this.contextReal.moveTo(this.origX,this.origY);
            this.contextReal.quadraticCurveTo(coord[0],coord[1],this.sX,this.sY);
            this.contextReal.stroke();
        }
    }
    onMouseLeave() {}
    onMouseEnter() {}
}