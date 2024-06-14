var canvas = document.querySelector('canvas');
canvas.wd
if (!canvas) {
    throw new Error("Canvas element not found");
}
var c = canvas.getContext('2d');
if (!c) {
    throw new Error("canvas 2d context cnat be rendererde");
}
c.fillStyle='white'
c.fillRect(10,10,50,50)
console.log(c);
