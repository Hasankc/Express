// logger middleware here

import {Request, Response, NextFunction } from 'express';

import * as fs from 'fs';

const logPath = ".logs/logs.text"

function logRequest(req: Request, res: Response, next:NextFunction) {

        const line = `${new DataTransfer().toLocaleString()}: ${req.method} ${req.path}\n`
        fs.appendFile(logPath, line, (err) => {
            if(err) throw new Error('database failed to connect');

        })
        next()

}

export default logRequest
