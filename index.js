const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

//let box = new EmptyBox(100, 100)

let circleX = 100;
let circleY = 100;

let lastTime;
let requiredElapsed = 1500 / 66.666; // desired interval is 10fps

function setup(){
    circleX = canvas.width / 1000;
    circleY = canvas.height / 1000;

    draw();
}

function draw (now){
    requestAnimationFrame(draw);

    if (!lastTime) {
        lastTime = now;
    }

    const elapsedTime = now - lastTime;
    if (elapsedTime > requiredElapsed) {

        context.fillStyle = "lightblue";
        context.fillRect(0, 0, canvas.width, canvas.height);
    
        circleX += 2;
        circleY += 2;
    
        
        context.fillStyle = "red";
        context.beginPath();
        context.arc(circleX, circleY, 80, 0, Math.PI*2);
        context.fill();

        lastTime = now;

    }
    
}

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

window.addEventListener("load", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    setup();
});



