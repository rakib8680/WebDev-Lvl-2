{

    // Mapped Types 

    const arrOfNum: number[] = [3, 5, 6, 1, 7];

    // make to array of string 
    const arrOfStr: string[] = arrOfNum.map(num => num.toString());


    // console.log(arrOfStr);


    // Dynamic Mapped Type 
    type AreaNumber = {
        height: number;
        width: number;
    }

    type Height = AreaNumber['height']; // look up type

    // T => {height:string;width:number}
    // key => T["width"]
    type AreaString<T> = {
        [key in keyof T]: T[key];
    };

    const area1: AreaString<{ height: string; width: number }> = {
        height: "100",
        width: 50,
    };









}