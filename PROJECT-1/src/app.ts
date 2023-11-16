

import express, { NextFunction, Request, Response } from 'express';
const app = express();



// parsers 
app.use(express.json());





// middleware 
const logger = (req: Request, res: Response, next: NextFunction) => {
    // console.log(req.url, req.method, req.hostname);
    next();
};


// routes
const userRouter = express.Router();
const courseRouter = express.Router();
app.use('/api/v1/users', userRouter);
app.use('/api/v1/courses', courseRouter);



userRouter.post('/create-user', (req: Request, res: Response) => {
    const user = req.body;
    console.log(user);
    res.json({
        success: true,
        message: 'User created successfully',
        data: user,
    })
});




courseRouter.post('/create-course', (req: Request, res: Response) => {
    const course = req.body;
    console.log(course);
    res.json({
        success: true,
        message: 'Course created successfully',
        data: course,
    })
});










app.get('/', logger, async (req: Request, res: Response, next: NextFunction) => {
    try {
        res.send('Hello World');
        // console.log(req.query.email);
    } catch (err) {
        next(err);
    }
});


app.post('/', logger, (req: Request, res: Response) => {
    console.log(req.body);
    res.json(req.body)

});




// route handling 
app.all('*', (req: Request, res: Response) => {
    res.status(400).json({
        success: false,
        message: 'Route not found',
    })
})


// global error  handler 
app.use((error: any, req: Request, res: Response, next: NextFunction) => {
    if (error) {
        res.status(400).json({
            success: false,
            message: 'Something went wrong',
        })
    }
});



export default app;