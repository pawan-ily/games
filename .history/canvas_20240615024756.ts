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
    constructor(postion){
        this.position  = position;
        

    }
    read(){

    }
}
function animate(){
    window.requestAnimationFrame(animate);
    c.fillStyle='white'

}
animate()