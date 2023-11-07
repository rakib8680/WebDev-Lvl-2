{

    // generic constraint with key of operator 

    interface vehicle {
        bike: string;
        car: string;
        bus: string;
    }

    type Owner = "bike" | "car" | "bus";  //manually declare the type

    type Owner2 = keyof vehicle; //keyof operator declare the type
    const person1 : Owner2 = "car";

}