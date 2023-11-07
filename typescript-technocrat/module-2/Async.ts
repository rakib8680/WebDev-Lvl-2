{

    // promise

    const CreatePromise = (): Promise<string> => {
        return new Promise<string>((resolve, reject) => {
            const data: string = 'Here are your data'
            if (data) {
                resolve(data);
            } else {
                reject('No data found');
            }
        })
    };


    const showData = async (): Promise<string> => {
        const data: string = await CreatePromise();
        return data;
        // console.log(data);
    };

    // showData();




    interface Todo {
        userId: number;
        id: number;
        title: string;
        completed: boolean;
    }

    const getTodo = async (): Promise<Todo> => {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await res.json();
        return data;
        // console.log(data);
    }

    getTodo();




}