import { Request, Response, NextFunction } from "express"
import AppError from "./AppError"
const cleanValidation = (errors: Array<{ path: string; message: string }>) => {
    const errorbox = []
    for (let a = 0; errors.length > a; a++) {
        errorbox.push({ key: errors[a].path.replace('body.', ""), message: errors[a].message })
    }
    return errorbox;
}

class ErrorContainer {
    err: AppError;
    res: Response
    constructor(err: AppError, res: Response) {
        this.err = err;
        this.res = res

    }
    handleValidation = () => {
           // @ts-ignore
        const errorArray = this.err.inner
        this.res.status(422).json({
            message: this.err.message
        });
    }
    handleExpiredToken = () => {
        this.res.status(419).json({
            error: this.err.message
        });
    }
    handleUncaught = () => {
        const errorCodde = this.err.statusCode || 500 ;
        this.res.status(errorCodde).json({
            error: this.err.message
        });
    }
}
const globalError = (err: AppError, req: Request, res: Response, next: NextFunction) => {
    const er = new ErrorContainer(err, res)
    //check error type by name
    if (err.name == 'ValidationError') return er.handleValidation()

    if(err.name == 'TokenExpiredError') return er.handleExpiredToken()

     //check error type by code
    if (err.statusCode == 422) return er.handleValidation()

    return er.handleUncaught()
}
export default globalError