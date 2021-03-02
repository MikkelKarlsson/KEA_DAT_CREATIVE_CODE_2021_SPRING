const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

var canvas = document.querySelector("#myCanvas");
var context = canvas.getContext("2d");
 
function update() {
context.beginPath();
context.arc(100, 100, 50, 0, 2 * Math.PI, true);
context.fillStyle = "#FF6A6A";
context.fill();
}
update();

//function draw () {

//}

//draw();

//window.addEventListener("mousemove", (event) => {
    //console.log(event);
//});

/*window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

window.addEventListener("load", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});*/