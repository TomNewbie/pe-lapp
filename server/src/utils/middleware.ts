import { Request, Response, NextFunction } from 'express';

const errorHandler = (error: Error, request: Request,  response:Response, next: NextFunction) => {
    console.error(error.message);
    if (error.message === 'invalid_grant') {
        return response.status(403).send({error: 'invalid grant'});
    }

    next(error);
}

export { errorHandler };