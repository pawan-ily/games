const canvas:HTMLCanvasElement =document.querySelector('canvas')
if(!canvas){
    throw new Error("Canvas element not found");

}
const  c :CanvasRenderingContext2D= canvas.getContext('2d');
console.log(c)