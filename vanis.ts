const canvas: HTMLCanvasElement | null = document.querySelector('canvas');
if (!canvas) {
    throw new Error("Canvas element not found");
}

const c = canvas.getContext('2d');
if (!c) {
    throw new Error("2D context not supported");
}

canvas.width = 1024;
canvas.height = 574;
const gravity = 0.5;
const scaledCanvas  ={
    width:canvas.width/4,
    height:canvas.height/4}
class Sprite{
    position  :{ 
        x:number,y:number
    };
    image:HTMLImageElement
    constructor({position,imageSrc})
    {
        this.position=position;
        this.image= new Image();
        this.image.src = imageSrc
    }
    draw(){
        if (!this.image) return
        c?.drawImage(this.image,this.position.x,this.position.y)
    }
    update(){
        this.draw()
    }
}
class Player {
    position: { x: number, y: number };
    velocity: { x: number, y: number }; 
    height:number;
    constructor(position: { x: number, y: number }) {
        this.position = position;
        this.velocity = { x: 0, y: 0 }; 
        this.height=100
    }

    draw() {
        c.fillStyle = 'red';
        c.fillRect(this.position.x, this.position.y, 100,this.height); 
    }

    update() {
        this.draw();
        this.position.x+=this.velocity.x;
        this.position.y += this.velocity.y;
        if(this.position.y+this.height + this.velocity.y < canvas.height){
            this.velocity.y+=gravity
        }
        else{
        this.velocity.y =0;
        }
    }
}    

const background  =  new  Sprite({
    position:{
    x:0,
    y:0
},
imageSrc:'./img/background.png'

})
const player1 = new Player({ x: 0, y: 0 });
const player2 = new Player({ x: 300, y: 100 });
const keys={
    d:{
        pressed:false
    },
    a:{
        pressed:false
    }
}
function animate() {
    window.requestAnimationFrame(animate);
    c.fillStyle = 'white';
    c.fillRect(0, 0, canvas.width, canvas.height);
    c?.save()
    c?.scale(4,4)
    c?.translate(0,-background.image.height+scaledCanvas.height)
    background.update()
    c?.restore()
    player1.update();
    player2.update();
    player1.velocity.x=0;
    if (keys.d.pressed) {
        player1.velocity.x=1;
    }
    else if(keys.a.pressed){
player1.velocity.x=-1;
    }
}
animate();
window.addEventListener('keydown',(event)=>{
    switch (event.key) {
        case 'd':
            keys.d.pressed=true;
            player1.velocity.x=1;
            break;
        
        case 'a':
            keys.a.pressed=true
            player1.velocity.x=-1;
            break;
            case 'w':
                player1.velocity.y=-20;
                }
})
window.addEventListener('keyup',(event)=>{
    switch(event.key){
        case 'd':
            keys.d.pressed=false;break
            case 'a':
                keys.a.pressed=false  
            break;  }
})