{

    // generic constraint with key of operator 

    interface vehicle {
        bike: string;
        car: string;
        bus: string;
    }

    type Owner = "bike" | "car" | "bus";  //manually declare the type

    type Owner2 = keyof vehicle; //keyof operator declare the type
    const person1: Owner2 = "car";




    // generic constraint with extends keyword 
    const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
        return obj[key];
    }

    const person = {
        name: "rakib",
        age: 30,
        role: "admin"
    }
    const vehicle2 = {
        bike: "yamaha",
        car: "toyota",
        bus: "volvo"
    }

    const result = getPropertyValue(person, "age");
    const result2 = getPropertyValue(vehicle2, "car");





}