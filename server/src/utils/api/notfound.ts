import { Request, Response, NextFunction } from "express";

// returns error message for routes not found
export const notFound = async (req: Request, res: Response, next: NextFunction) => {
    res.status(404).json({ message: 'page not found' });
}