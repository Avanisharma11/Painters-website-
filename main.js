
var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "red";
    width_of_line = 2;
    width = screen.width;
    width_of_canvas = screen.width - 70;
    height_of_canvas = screen.height - 140;
    if (width < 992) {
    document.getElementById("myCanvas").width= width_of_canvas;
    document.getElementById("myCanvas").height= height_of_canvas;
    document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart", myTouchstart);
function myTouchstart(e)
{
   
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    last_position_of_x=e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_y=e.touches[0].clientY - canvas.offsetTop;
}
canvas.addEventListener("touchmove", myTouchmove);
    function myTouchmove(e)
    {

         current_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_y = e.touches[0].clientY - canvas.offsetTop;

        
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_x + "y = " + current_position_of_y);
        ctx.lineTo(current_position_of_x, current_position_of_y);
        ctx.stroke();
        

        last_position_of_x = current_position_of_x; 
        last_position_of_y = current_position_of_y;
    }

 


    