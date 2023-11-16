
import { Server } from 'http';
import app from './app';


const PORT = process.env.PORT || 3000;

let server: Server;

async function bootstrap() {
    server = app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    })
};


bootstrap();

