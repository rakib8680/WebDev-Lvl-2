

// spread operator
// reset operator
// destructuring 






// spread operator 
const number1: number[] = [1, 2, 3, 4, 5];
const number2: number[] = [6, 7, 8, 9, 10];

number1.push(...number2);




// rest operator 
const greetFriends = (...friends: string[]) => {
    friends.forEach((friend: string) => {
        console.log(`Hello ${friend}`);
    });
};

greetFriends("Rakib", "Rahim", "Karim");