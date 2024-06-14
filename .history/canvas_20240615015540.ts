const canvas:HTMLCanvasElement =document.querySelector('canvas')
if(!canvas){
    throw new Error("Canvas element not found");

}
const  c :html= canvas.getContext('2d');
console.log(c)