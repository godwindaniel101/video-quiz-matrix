import  express  from "express";
declare global {
    namespace Express {
      interface Request {
        query: {
            page:number
            limit:number
        };
      }
    }
  }