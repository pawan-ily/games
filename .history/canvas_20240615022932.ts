const canvas: HTMLCanvasElement | null = document.querySelector('canvas');
if (!canvas) {
    throw new Error("Canvas cannot be created");
}

const c = canvas.getContext('2d');
if (!c) {
    throw new Error("2D rendering context is not supported");
}

canvas.width = 1024;
canvas.height = 574;
c.fillStyle = 'white';
c.fillRect(0, 0, canvas.width, canvas.height);

let y = 100;

function animate() {
    window.requestAnimationFrame(animate);
    c.fillStyle = 'red';
    c.fillRect(200, y, 100, 100);
    y++;
}

animate();
