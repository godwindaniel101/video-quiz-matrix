
import app from '../../src/app'
import supertest from "supertest";

const request = supertest(app)
const hash = '00000000000000000009b6116441a28711e9961cd0c15474e8153c6b1e71e773'
const hashtime ="1573858800000";
const page = 5
const limit = 1

describe("Testing Rest Services", () => {
  it("Should Get Blocks", async () => {
    const response = await request.get(`/api/v1/blockchain/blocks/${hashtime}?page=${page}&limit=${limit}`);
    const {data} = response.body
    expect(data.limit).toBe(limit);
    expect(data.page).toBe(page);
  });

  it("Should Get Block Transactions", async () => {
    const response = await request.get(`/api/v1/blockchain/${hash}`);
    const {data} = response.body
    expect(data.hash).toBe(hash);
  });
});
