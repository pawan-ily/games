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
class Player(){
    constructor(position){
        this.position  = position;}
    read(){
        c.fillStyle='red'
        c.fillRect(this.position.x,this.postion.y,100,100)
    }
}
function animate(){
    window.requestAnimationFrame(animate);
    c.fillStyle='white'
c?.fillRect()
}
animate()