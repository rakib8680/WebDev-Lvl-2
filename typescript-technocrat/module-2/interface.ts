{

    // Interface -> Generic 

    interface Developer<T> {
        name: string;
        computer: {
            name: string;
            price: number;
            releaseDate: number;
            model: string
        };
        smartWatch: T;
    };


    // Interface -> Generic -> for Watch
    interface Watch {
        name: string;
        price: number;
        display?: string;
        heartbeatTrack?: boolean;
        sleepTrack?: boolean;

    }


    const poorDeveloper: Developer<Watch> = {
        name: 'John',
        computer: {
            name: 'Lenovo',
            price: 1000,
            releaseDate: 2019,
            model: 'ThinkPad'
        },
        smartWatch: {
            name: 'samsung',
            price: 100,
            display: 'OLED',
        }
    };


    const richDeveloper: Developer<Watch> = {
        name: 'Rokib',
        computer: {
            name: 'MacBook Pro',
            price: 3555,
            releaseDate: 2021,
            model: 'Apple'
        },
        smartWatch: {
            name: 'Apple Watch',
            price: 1002,
            heartbeatTrack: true,
            sleepTrack: true
        }
    }













}