const MAX = 400
let container = document.getElementById("draw")

class Shape {
    constructor(x,y){
        this.div = document.createElement('div');
        this.div.classList.add('square')
        this.div.style.left = `${x}px`;
        this.div.style.top = `${y}px`;
        this.updateColor();
        container.appendChild(this.div)
    }



    updateColor(){
        let randmColor = `rgb(${randomVal(0,255)},${randomVal(0,255)}, ${randomVal(0,255)}`
        this.div.style.backgroundColor = randmColor;
    }
}


function insertSquare(){
    let xVal = randomVal(0,MAX)
    let yVal = randomVal(0,MAX)
    let oh = new Shape(xVal,yVal)
   
}


function randomVal (min,max){
    return Math.floor(Math.random() * (max-min) + min)
}

//Event Handlers


document.getElementById("rec").addEventListener("click", function () {
    
    let t = document.createTextNode(`${"This is a rectangle"}`)
    document.getElementById("side").appendChild(t)
});

document.getElementById("sq").addEventListener("click", function () {   
    insertSquare()
    let t = document.createTextNode(`${"This is a square"}`)
    document.getElementById("side").appendChild(t)
});



document.getElementById("circ").addEventListener("click", function () {
    let t = document.createTextNode(`${"This is a circle"}`)
    document.getElementById("side").appendChild(t)
   
});


document.getElementById("tri").addEventListener("click", function () {
    let t = document.createTextNode(`${"This is a triangle"}`)
    document.getElementById("side").appendChild(t)    
});







