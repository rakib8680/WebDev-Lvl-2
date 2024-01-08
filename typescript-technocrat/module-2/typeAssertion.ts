{


    // Type Assertion 


    const kgToGm = (value: string | number): string | number | undefined => {
        if (typeof value === 'string') {
            const convertedValue = parseFloat(value) * 1000;
            return (`The converted value is ${convertedValue} gm`);
        }
        else if (typeof value === 'number') {
            return value * 1000;
        }
    };

    const result1 = kgToGm("100") as string
    const result = kgToGm(1000) as string
    console.log(result1);
    console.log(result);










}