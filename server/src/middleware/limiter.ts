import  rateLimit from 'express-rate-limit';

const apiLimiter = +process.env.SEVER_RATE_lIMIT! as number;

 //limits to 100 request in 15min seconds
export const appLimit = rateLimit({
    max: apiLimiter || 500,
    windowMs: 15 * 60 * 1000,
    //15 minutes
    message: 'Too many Request from this Ip, Just to be safe, Try Again After 10min'
});
