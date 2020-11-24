var mouseEvent ="";
var canvas =document.getElementById('myCanvas');
var ctx =canvas.getContext("2d");

   var color="";
   var radius="";
   var width="";

canvas.addEventListener("mousedown",myMousedown);
function myMousedown(e){
    mouseEvent ="mouseDown";
    color= document.getElementById("input_color").value;
    radius= document.getElementById("input_radius").value;
    width= document.getElementById("input_width").value;
}

canvas.addEventListener("mousemove",myMousemove);
function myMousemove(e){
    currentX = e.clientX - canvas.offsetLeft;
    currentY = e.clientY - canvas.offsetTop;
    if(mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        ctx.arc(currentX.currentY,radius,0,2*Math.PI)
        ctx.stroke();
    }
}

canvas.addEventListener("mouseup",myMouseup);
function myMouseup(e){
    mouseEvent ="mouseUP";
}

canvas.addEventListener("mouseleave",myMouseleave);
function myMouseleave(e){
    mouseEvent ="mouseLeave";
}
    