// error handler middleware here

import { Request, Response, NextFunction } from 'express'

type ErrorType = {
        message: string;
        code: number;

}


const apiErrorHandler = (error: ErrorType, req: Request, res: Response, next: NextFunction) => {
    

    if (error.code >= 400 && error.code < 500) {

        res.status(error.code).json({error: error.message})

    } else if (error.code >= 500) {
        console.error(error)

    } else {

        next()
    }

 }

    export default apiErrorHandler