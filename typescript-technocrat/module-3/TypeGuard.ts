{


    // Type Guards

    type Alphanumeric = string | number;

    const add = (param1: Alphanumeric, param2: Alphanumeric): Alphanumeric => {
        if (typeof param1 === 'number' && typeof param2 === 'number') {
            return param1 + param2;
        } else {
            return param1.toString() + param2.toString();
        }
    }

    const result1 = add(10, 20);
    // console.log(result1);



    // In Guard 

    type NormalUser = {
        name: string;
    }
    type AdminUser = {
        name: string;
        role: 'Admin';
    }

    const normalUser: NormalUser = {
        name: 'John'
    }
    const adminUser: AdminUser = {
        name: 'Rakib',
        role: 'Admin'
    }

    const getUser = (user: NormalUser | AdminUser) => {
        if ('role' in user) {  // In Guard
            console.log(`${user.name} is an ${user.role}`);
        } else {
            console.log(`${user.name} is a normal user`);
        }
    };

    getUser(normalUser);
    getUser(adminUser);









}