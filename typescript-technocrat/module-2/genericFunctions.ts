{

    // function with generics

    const createArray = (param: string): string[] => {
        return [param];
    };

    const res1 = createArray("Bangladesh");
    
    const createArrayWithGeneric = <T>(param: T): T[] => {
        return [param];
    };

    const resGeneric = createArrayWithGeneric<string>("Bangladesh");

    type User = { id: number; name: string };

    const resGenericObj = createArrayWithGeneric<User>({
        id: 222,
        name: "Mr. Pashan",
    });

    


    // tuple 

    const createArrayWithTuple = <T, S>(param1: T, param2: S): [T, S] => {
        return [param1, param2];
    };

    const resGeneric2 = createArrayWithTuple<string, string>("Bangladesh", "Dhaka");

    type country = { capital: string, population: number }
    const resGeneric3 = createArrayWithTuple<string, country>("Bangladesh", { capital: "Dhaka", population: 10000000 });

 










}