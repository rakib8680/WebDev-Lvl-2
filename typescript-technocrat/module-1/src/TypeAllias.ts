

// Type Alias ==> Object

type Student = {
    name: string;
    age: number;
    contactNo?: number;
    gender: string;
    address: string
};

const student1: Student = {
    name: "Rakib",
    age: 21,
    gender: "Male",
    address: "Feni"
};
const student2: Student = {
    name: "Rahat",
    age: 20,
    contactNo: 12347890,
    gender: "Female",
    address: "Dhaka"
};
const student3: Student = {
    name: "Joni",
    age: 20,
    gender: "Male",
    address: "CTG"
};


// Type Alias ==> Function
type Add = (num1: number, num2: number) => number

const addNumber: Add = (num1, num2) => num1 + num2

// console.log(addNumber(10, 20));
