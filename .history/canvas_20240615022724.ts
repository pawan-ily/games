const canvas:HTMLCanvasElement | null = document.querySelector('canvas')
if (!canvas) {
     throw new Error("cnavas cannot be created")

    }
    const c =canvas.getContext('2d');
    if (!c) {
        throw new Error("context rendering is not possible")
        
    }
canvas.width=1024;
canvas.height=574;
c.fillStyle='white'
c.fillRect(0,0,canvas.width,canvas.height)

function animate(){
    window.requestAnimationFrame(animate);
    c.fillStyle='red';
c.fillRect(200,0100,100)
}
animate()