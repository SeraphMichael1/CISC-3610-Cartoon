const canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
function init()
{
    window.requestAnimationFrame(draw);
}
function draw(){
    ctx.globalCompositeOperation = 'source-over';
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
        // Sky
    ctx.fillStyle = 'rgb(0, 0, 0';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.save();
     // moon
    ctx.fillStyle = 'rgb(191, 191, 191)';
    ctx.beginPath();
    ctx.arc(canvas.width - 100, 100, 25, 0, 2 * Math.PI);
    ctx.fill();
    //
        // Ground
    ctx.fillStyle = 'rgb(50, 205, 50)';
    ctx.fillRect(0, canvas.height - (canvas.height / 3), canvas.width, canvas.height / 3);
}