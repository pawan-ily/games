const canvas:HTMLCanvasElement =document.querySelector('canvas')
if(!canvas){
    throw new Error

}
const  c :html= canvas.getContext('2d');
console.log(c)