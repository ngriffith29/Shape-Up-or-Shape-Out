//global variables and functions
const MAX = 400;
let container = document.getElementById("draw");
function randomVal (min,max){
    return Math.floor(Math.random() * (max-min) + min)
};

class Shape {
    constructor(height, width){
        this.height = height;
        this.width = width;
        this.div = document.createElement('div');
        this.div.classList.add('square');        
        this.draw();
        this.div.addEventListener('dblclick', function (){
          this.remove()         
        })
        this.div.addEventListener("click", function (){
            let t = document.createTextNode(`${MAX}`)
            document.getElementById("side").appendChild(t)
        })
    }

    draw() {
        container.appendChild(this.div);
        let x = randomVal(0,MAX);
        let y = randomVal(0,MAX);
        this.div.style.height = `${this.height}px`;
        this.div.style.width = `${this.width}px`;
        this.div.style.left = `${x}px`;
        this.div.style.top = `${y}px`;
       
    }

  
}

class Rectangle extends Shape {
    constructor(height, width,color) {
        super(height, width,color);
        this.div.style.backgroundColor = "green";
    }
    
}

class Square extends Shape {
    constructor(pizza) {
        super(pizza, pizza);
        this.div.style.backgroundColor = "red"
    }
}

class Circle extends Shape {
    constructor(radius){
        super(radius,radius);
        let border = radius/2;
        this.div.style.borderRadius = `${border}px`;
        this.div.style.backgroundColor = "purple"
        
    }
}

class Triangle extends Shape {
    constructor(Height){
        super(0,0);
        let border = Height*Height/2;
        this.div.style.borderBottom = `${border}px solid yellow`;
        this.div.style.borderLeft = `${border}px solid transparent`;
        this.div.style.backgroundColor = `transparent`

    }
}


//RECTANGLE
document.getElementById("rec").addEventListener("click", function () {
    console.log('hi')
    let heighInput = document.getElementById("rec-height");
    let widthInput = document.getElementById("rec-width");

    let height = heighInput.value;
    let width = widthInput.value;

    let rectangle = new Rectangle(height, width);

    //ghetto console log
   
});
//SQUARE
document.getElementById("sq").addEventListener("click", function () {   
    
    let sideInput = document.getElementById("sq-side");

    let sideLength = sideInput.value;

    let square = new Square(sideLength);

    //ghetto console log
    let t = document.createTextNode(`${"This is a square"}`)
    document.getElementById("side").appendChild(t)
});
//CIRCLE
document.getElementById("circ").addEventListener("click", function (){
    let radiusInput = document.getElementById("radius");
    let  radius = radiusInput.value;
    let c = new Circle(radius)

})
//Triangle
document.getElementById("tri").addEventListener('click', function() {
    let triHeightInput = document.getElementById('tri-height')
    let triHeight = triHeightInput.value;
    let t = new Triangle(triHeight)
})