import app from "../../src/app";
import supertest from "supertest";

const request = supertest(app);
const hash = "00000000000000000009b6116441a28711e9961cd0c15474e8153c6b1e71e773";
const hashtime = "1573858800000";
const page = 5;
const limit = 1;

describe("Testing GraphicQl Services", () => {
  it("Should get Blocks", async () => {
    const query = `
       {
        blocks(time :"${hashtime}" ,page:${page} , limit:${limit}) {
            page limit  totalCount  pageCount data {  block_index  hash  height time  }
          }
        }
      `;
    const response = await request.get("/api/v2").send({ query });
    const { data } = response.body;
    expect(data.blocks.limit).toBe(limit);
    expect(data.blocks.page).toBe(page);
  });

  it("Should Get Block Transactions", async () => {
    const query = `
        {
            transactions (transactionId: "${hash}" , page:${page} , limit:${limit}) {
                hash ver prev_block mrkl_root time  bits  next_block fee  nonce  n_tx
                size  block_index  main_chain height  weight
                transactions{ page  limit  totalCount  pageCount
                            data{ hash  ver  vin_sz  vout_sz  size  weight  fee
                                    relayed_by  lock_time  tx_index double_spend
                                    time  block_index block_height 
                                out{ type  spent value  n  tx_index  script  addr }
                                inputs{  sequence  witness  script  index  }
                                }
                          }
                   }
        }
      `;
    const response = await request.get("/api/v2").send({ query });
    const { data } = response.body;
    expect(data.transactions.hash).toBe(hash);
  });
});
