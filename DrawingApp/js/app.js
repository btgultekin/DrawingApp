///////////////////////////////////////////////////////////////////////////////////////
//	This project is a simple drawing application.
//  It was designed and coded by Batuhan Gültekin.
//  Date-Time: 22/12/2023 03:35
//  https://github.com/btgultekin
///////////////////////////////////////////////////////////////////////////////////////
var penThickness=1;
var penColor;
var drawing=false;
var code="";
function getPenProp(){
    penThickness = document.getElementById("penThickness").value;
    penColor = document.getElementById("penColor").value
    document.getElementById("penThicknessValue").innerHTML=penThickness;
    document.getElementById("penColorValue").innerHTML=penColor;
}
function canvasClear(){
    canvas.innerHTML="";
    code="";
}
function draw(eid){
    var e = window.event;
    var locX=e.clientX;
    var locY=e.clientY;
    switch(eid){
        case 1: // event id : 1 -> onmousedown
            drawing =true;
            break;
        case 2: // event id : 2 -> onmousemove
            if(drawing){
                code+="<div style=\"position:absolute;top:"+locY+"px;"+"left:"+locX+"px;";
                code+="background-color:"+penColor+";width:"+penThickness+"px;height:"+penThickness+"px; border-radius:50%;\">";
                code+="</div>";
                document.getElementById("canvas").innerHTML=code;
            }
            break;
        case 3: // event id : 3 -> onmouseup
            drawing=false;
            break;
    }// end of switch
}// end of draw()
