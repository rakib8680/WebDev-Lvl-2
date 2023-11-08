

{
    // Inheritance using TypeScript

    // parent class 
    class ParentClass {
        constructor(public name: string, public age: number, public address: string) {
        }

        getSleep(hours: number) {
            console.log(`${this.name} is sleeping for ${hours} hours`);
        };
    }


    
    // child class1 
    class Student extends ParentClass {
        constructor(name: string, age: number, address: string) {
            super(name, age, address);
        }
    }

    const student = new Student('John', 20, 'New York');
    student.getSleep(8);




    // child class2
    class Teacher extends ParentClass {
        constructor(name: string, age: number, address: string, public designation: string) {
            super(name, age, address);
            this.designation = designation;
        }

        takeClass(NoOfClass: number) {
            console.log(`${this.name} is taking ${NoOfClass} classes`);
        }
    }

    const teacher = new Teacher('Rakib', 40, 'Dhaka', 'Professor');
    teacher.takeClass(5);


    console.log(student);
    console.log(teacher);











}