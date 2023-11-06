

// Reference Type ==> Object 


const user: {
    company: 'Programming Hero', // this is a fixed value its called literal type
    firstName: string,
    secondName?: string,  // ? means optional
    lastName: string,
    readonly age: number, // readonly means you can't change this value
    isMarried?: boolean,
} = {
    company: 'Programming Hero',
    firstName: 'Abdullah',
    secondName: 'Al',
    lastName: 'Rakib',
    age: 21,
}