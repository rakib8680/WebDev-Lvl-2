

// make a class 
class Car {
    // name: string;
    // color: string;
    // model: number;

    // make a constructor using parameter properties
    constructor(public name: string, public color: string,public model: number) {
        // this.name = name;
        // this.color = color;
        // this.model = model;
    };

    // anonymousFunction
    carColor() {
        console.log(`The color of ${this.name} is ${this.color}`);
    }
};

// make a object
const car1 = new Car('BMW', 'Black', 2020);
const car2 = new Car('Audi', 'White', 2019);
car2.carColor()

// console.log(car1, car2);