import { Request } from "express";
import { Ipagintation } from "../interface/Ipagintation";

//formats and paginate response for rest graphicql block
export const paginateGaphgl = (payload: string[] | object[] | unknown | Array<any>, page: number, limit: number) => {
  if (Array.isArray(payload)) {
    const totalCount = payload.length || 0;
    const pageCount = Math.ceil(totalCount / limit);
    const start = limit * page;
    const end = limit * (page + 1);
    const data = payload.slice(start, end);
    const response = { totalCount, pageCount, limit, page, data };
    return response;
  }
  return payload;
};
//formats and paginate response for graphic ql r=transaction
export const paginateGaphglTransaction = (response: any, page: number, limit: number) => {
  if (response != undefined && typeof response == "object") {
    if (Array.isArray(response.tx)) {
      let payload = response.tx;
      let paginationData = payload;
      //@ts-ignore
      let base = paginationData as Ipagintation;
      const totalCount = payload.length || 100;
      const pageCount = Math.ceil(totalCount / limit);
      const start = limit * page;
      const end = limit * (page + 1);
      const data = payload.slice(start, end);
      const result = { totalCount, pageCount, limit, page, data };
      delete response.tx;
      response.transactions = result;
      return response;
    }
  }
  return response;
};
