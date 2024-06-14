const canvas:HTMLCanvasElement|  null =document.querySelector('canvas')
if(!canvas){
    throw new Error("Canvas element not found");

}
const  c :CanvasRenderingContext2D | null= canvas.getContext('2d');
if (!c) {
    throw new Error()
    
}
console.log(c)