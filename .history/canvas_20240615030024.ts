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
class Player{
    position: { x: number; y: number };
    constructor(position : { x: number, y: number }){
        this.position  = position;
    read(){
        c.fillStyle='red'
        c.fillRect(this.position.x,this.position.y,100,100)
    }
    update(){
        this.read();
        this.position.y++;
    }
}
}
const player1  =  Player({
    x:0,
    y:0
})
const player2  =  Player({
    x:300
    y:100
})
function animate(){
    window.requestAnimationFrame(animate);
    c.fillStyle='white'
c?.fillRect(0,0,canvas.width,canvas.height)
player1.update();
player2.update()

}
animate()