const canva = document.querySelector('canvas')
canva.width=500
    canva.height=500


function draw(deparX, departY, arriveeX, arriveeY){
    let ctx = canva.getContext("2d")
    ctx.beginPath();
    ctx.moveTo(deparX+50, departY-50);
    ctx.quadraticCurveTo(((deparX+arriveeX)/2)-1, ((departY+arriveeY)/2)+1, arriveeX+50, arriveeY-50);
    ctx.quadraticCurveTo(arriveeX-50, arriveeY+50, arriveeX-50, arriveeY+50);
    ctx.quadraticCurveTo(((deparX+arriveeX)/2)+1, ((departY+arriveeY)/2)-1, deparX-50, departY+50);
    ctx.fill();
}
draw(200,200,400,400)
