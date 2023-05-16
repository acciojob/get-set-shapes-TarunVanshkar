//complete this code
class Rectangle {
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    getWidth(){
        return this.width;
    }

    getHeight(){
        return this.height;
    }

    getArea(){
        return this.width*this.height;
    }
}

class Square extends Rectangle {
    constructor(side){
        super(side, side);
    }

    getPerimeter(){
        // To return perimeter of the square
        return 4*this.width;
    }
}
console.log(new Square(5))

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
