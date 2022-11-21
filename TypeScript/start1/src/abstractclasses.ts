abstract class Shape {
    constructor(public color: string) {}
    abstract render(): void;
}

class Circle extends Shape {
    constructor(public radius: number, color: string) {
        super(color);
    }

    override render(): void {
        console.log('Rendering a circle');
    }
}

let shape = new Circle(5, 'red');
shape.render();