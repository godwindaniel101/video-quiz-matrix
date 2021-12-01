import { Request } from "express"
import { Ipagintation } from "../interface/Ipagintation"

//formats and paginate response for rest
export const paginate = (payload: string[] | object[], req: Request) => {

    let paginationData = req.query
    //@ts-ignore
    let base = paginationData as Ipagintation

    const totalCount = payload.length || 0;
    const limit = base.limit ? Number(base.limit) : 20;
    const pageCount = Math.ceil(totalCount / limit)
    const page = base.page ? Number(base.page) : 0;
    const start = limit * page;
    const end = limit * (page + 1);
    const data = payload.slice(start, end)
    return { totalCount, pageCount, limit, page, data }
}