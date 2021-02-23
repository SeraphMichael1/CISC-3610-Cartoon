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
    // Ground
    ctx.fillStyle = 'rgb(50, 105, 50)';
    ctx.fillRect(0, canvas.height - (canvas.height / 3), canvas.width, canvas.height / 3);
    // Stars
    for(let i= 0; i < 40; i++){
    drawStar(Math.floor(Math.random() * 600) + 1,Math.floor(Math.random() * 300) + 1);//I wanted a random positioning of stars each time
    }
    // Moon
    ctx.fillStyle = 'rgb(191, 191, 191)';
    ctx.shadowBlur = 100;
    ctx.shadowColor = 'rgb(191, 191, 191)';
    ctx.beginPath();
    ctx.arc(500, 100, 35, 0, 2 * Math.PI);
    ctx.fill();
    ctx.shadowColor = 'transparent';
    //Trees
    for(let i = 0;i<18;i++){
        drawTree((i*35),375);
    }
    //Tent
    drawTent();
    //Lantern
    drawLantern();
    // Caption
    ctx.fillStyle = 'white';
    ctx.font = '30px serif';
    ctx.fillText('Campsite At Night', (canvas.width / 2), canvas.height- 50);
}
function drawStar(x,y){
    ctx.fillStyle = 'rgb(255, 255, 255)';
    ctx.shadowBlur = 100;
    ctx.shadowColor = 'rgb(255, 255, 255)';
    ctx.beginPath();
    ctx.arc(x, y, 1, 0, 2 * Math.PI);
    ctx.fill();
    ctx.shadowColor = 'transparent';
}
function drawTree(x, y)
{
    let trunkWidth = 10;
    let trunkHeight = 30;
    let base = 25;

    // Trunk
    ctx.fillStyle = 'rgb(117,59,16)';
    ctx.fillRect(x, y, trunkWidth, trunkHeight);

    // Leaves
    for(let i = 0; i < 3; i++)
    {
        ctx.beginPath();
        ctx.moveTo(x, y - (base * i));
        ctx.lineTo(x + base + (base / 4), y - (base * i));
        ctx.lineTo(x + (base / 4) , y - (base * i) - (base * 1.5));
        ctx.lineTo(x - base, y - (base * i));
        ctx.lineTo(x, y - (base * i));
        ctx.closePath();
        ctx.fillStyle = 'rgb(0,100,0)';
        ctx.fill();
    }
}
function drawTent(){
    //Pole
    ctx.beginPath();
    ctx.moveTo(298, 350);
    ctx.lineTo(298, 450);
    ctx.lineTo(302, 450);
    ctx.lineTo(302, 350);
    ctx.fillStyle = 'rgb(72,36,10)';
    ctx.fill();
    //Flaps
    ctx.beginPath();
    ctx.moveTo(299, 350);
    ctx.lineTo(250, 450);
    ctx.lineTo(298, 450);
    ctx.moveTo(301, 350);
    ctx.lineTo(350, 450);
    ctx.lineTo(302, 450);
    ctx.fillStyle = 'rgb(255, 253, 208)';
    ctx.fill();
    //Interior
    ctx.beginPath();
    ctx.moveTo(299, 350);
    ctx.lineTo(275, 450);
    ctx.lineTo(298, 450);
    ctx.moveTo(301, 350);
    ctx.lineTo(325, 450);
    ctx.lineTo(302, 450);
    ctx.fillStyle = 'rgb(128, 127, 104)';
    ctx.fill();
}
function drawLantern(){
    //light source
    ctx.beginPath();
    ctx.moveTo(275, 505);
    ctx.lineTo(275, 475);
    ctx.lineTo(295, 475);
    ctx.lineTo(295, 505);
    ctx.lineTo(274, 505);
    ctx.fillStyle = 'rgb(255, 191, 0)';
    ctx.shadowBlur = 25;
    ctx.shadowColor = 'rgb(255, 191, 0)';
    ctx.fill();
    ctx.shadowColor = 'transparent';
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'rgb(0,0,0)';
    ctx.stroke();
    //Bars
    ctx.beginPath();
    ctx.moveTo(285,505);
    ctx.lineTo(285,475);
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'rgb(0,0,0)';
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(275,490);
    ctx.lineTo(295,490);
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'rgb(0,0,0)';
    ctx.stroke();
    //Handle
    ctx.beginPath();
    ctx.arc(285,470, 5, 0, 2 * Math.PI);
    ctx.fillStyle = 'rgb(50, 105, 50)';
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'rgb(0,0,0)';
    ctx.stroke();
}
init();