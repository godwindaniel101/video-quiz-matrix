
import catchAsync from "../../utils/error/catchAsync"
import { Request, Response, NextFunction } from "express";
import { paginate } from "../../utils/response/paginate";
import { blockchainInstance } from "../../utils/api/blockchainInstance";
import { IunitTransaction } from "../../utils/interface/IunitTransaction"
import { Iredis } from "../../utils/interface/Iredis";
import * as cache from "../../utils/caching/redis";

//get the hash of miners for a particular time
export const getBlockHash = catchAsync(async (req: Request, res: Response, next: NextFunction) => {

    const transactionTime: string = req.params.id;
    let redis_data: Iredis = await cache.get(transactionTime)
    let data = []

    if (typeof (redis_data) == 'string' && redis_data !== null) {//check if data is on redis
        data = JSON.parse(redis_data)
    } else {
        let response = await blockchainInstance.get<[]>(`/blocks/${transactionTime}?format=json`)
        data = response.data
        cache.set(transactionTime, JSON.stringify(data))
    }

    let response = paginate(data, req);
    res.status(201).json({ data: response });
})

//gets transaction history for a specific block
export const getBlockHashTransaction = catchAsync(async (req: Request, res: Response, next: NextFunction) => {

    const transactionId: string = req.params.id;

    let redis_data: Iredis = await cache.get(transactionId)

    let data = {} as IunitTransaction;

    if (redis_data !== null && typeof (redis_data) == 'string') {//check if data is on redis
        data = JSON.parse(redis_data)
    } else {
        let response = await blockchainInstance.get<IunitTransaction>(`/rawblock/${transactionId}`)
        data = response.data
        cache.set(transactionId, JSON.stringify(data))
    }
    let transactions = paginate(data.tx!, req)

    delete data.tx

    data.transactions = transactions

    res.status(201).json({ data });
})
