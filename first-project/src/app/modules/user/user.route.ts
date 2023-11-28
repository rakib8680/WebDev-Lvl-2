import express, { NextFunction, Request, Response } from 'express';
import { userControllers } from './user.controller';

const router = express.Router();

// middleware for validating data 
const darao = (req:Request, res:Response, next:NextFunction) => {
    next();
}

router.post('/create-student',darao, userControllers.createStudent);

export const userRoutes = router;
