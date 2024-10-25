//canvas=========================
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext('2d');

//キャンバスのサイズ
canvas.width = 640;
canvas.height = 480;

//キャンバスの初期値はFalse
let drawing = false;


function startDrawing(e){
    drawing = true;
    x = e.offsetX; //X座標
    y = e.offsetY; //Y座標
}

function stopDrawing(){
    drawing = false;
}

function draw(e){
    if (!drawing) return;
    ctx.beginPath();
    ctx.lineWidth = 30; //
    ctx.lineCap = "round";
    ctx.moveTo(x,y);
    x = e.offsetX;
    y = e.offsetY;
    ctx.lineTo(x,y);
    ctx.stroke();
}

canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener("mouseout", stopDrawing);
canvas.addEventListener("mousemove", draw);
//=========================