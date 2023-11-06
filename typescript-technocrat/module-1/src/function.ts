
// Learning Functions


function add(a: number, b: number): number {
    return a + b;
};

add(3, 6);

// arrow function 
const addNum = (Num1: number = 5, Num2: number = 34): number => Num1 + Num2;


// using function inside an object 
const poorUser = {
    name: "Rakib",
    balance: 0,
    addBalance(newBalance: number): number {
        return this.balance += newBalance;
    }
};


// fucntion on array 
const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const newArr: number[] = arr.map((num: number): number => num * num); 