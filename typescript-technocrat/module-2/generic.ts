

{


    // Generic Type .............................................


    // Array generic types 
    // const rollNum : number[] = [4,6,2,7]; 
    const rollNum: Array<number> = [4, 6, 2, 7]; // Generic Type

    // const admins: string[] = ["John", "Doe", "Jane"];
    const admins: Array<string> = ["John", "Doe", "Jane"]; // Generic Type

    // const boolean: boolean[] = [true, false, true];
    const boolean: Array<boolean> = [true, false, true]; // Generic Type





    // DYNAMIC Generic Type ............................................
    type GenericType<T> = Array<T>

    const rollNum2: GenericType<number> = [4, 6, 2, 7];
    const admins2: GenericType<string> = ["John", "Doe", "Jane"];
    const boolean2: GenericType<boolean> = [true, false, true];



    // object using generic type ............................................

    type Teacher = {
        name: string; age: number; role?: string
    }

    const teacher: GenericType<Teacher> = [
        {
            name: "John",
            age: 30,
        },
        {
            name: "Doe",
            age: 40,
        },
        {
            name: "Jane",
            age: 50,
            role: "Admin"
        }
    ];


    // generic tuple type ................................. ...........

    type GenericTuple<X, Y> = [X, Y];

    const human: GenericTuple<string, string> = ['rakib', 'robin'];

    const userWithId: GenericTuple<number, { name: string, age: number }> = [343, { name: 'jihan', age: 30 }];







}