var canvas = document.querySelector('canvas');
if (!canvas) {
    throw new Error("cnavas cannot be created");
}
var c = canvas.getContext('2d');
if (!c) {
    throw new Error("context rendering is not possible");
}class Player(){
    const
}
canvas.width = 1024;
canvas.height = 574;
function animate() {
    window.requestAnimationFrame(animate);
    c.fillStyle = 'white';
    c.fillRect(0, 0, canvas.width, canvas.height);
}
animate();
