import { paginateGaphgl } from "../../src/utils/response/paginateGaphgl";
import { paginate } from "../../src/utils/response/paginate";
import { Request } from 'express'

const mockRequest = { query: {} } as Request;

const querryArray = [{ name: 'a' }, { name: 'c' }]

describe("Testing pagination", () => {
    
    it("REST:pagination it should return total data count", () => {
        expect(paginate(querryArray, mockRequest)).toHaveProperty('totalCount', querryArray.length)
    });


    it("GrapicQl:pagination it should return total data count", () => {
        expect(paginateGaphgl(querryArray, 1, 2)).toHaveProperty('totalCount', querryArray.length)
    });
});
