import axios from "axios";
import { paginateGaphgl, paginateGaphglTransaction } from "../../utils/response/paginateGaphgl";
import { GraphQLString, GraphQLInt, GraphQLObjectType, GraphQLSchema, GraphQLList, GraphQLBoolean } from "graphql";
import * as cache from "../../utils/caching/redis";

const blockchain_url = (process.env.BLOCKHAIN_URL as string) || `https://blockchain.info`;

const TransactionInputItem = new GraphQLObjectType({
  name: "TransactionItemInputType",
  fields: () => ({
    sequence: { type: GraphQLString },
    witness: { type: GraphQLString },
    script: { type: GraphQLString },
    index: { type: GraphQLInt },
  }),
});

const TransactionOutputItem = new GraphQLObjectType({
  name: "TransactionItemOutputType",
  fields: () => ({
    type: { type: GraphQLInt },
    spent: { type: GraphQLBoolean },
    value: { type: GraphQLString },
    n: { type: GraphQLInt },
    tx_index: { type: GraphQLString },
    script: { type: GraphQLString },
    addr: { type: GraphQLString },
  }),
});

const TransactionItem = new GraphQLObjectType({
  name: "TransactionItemType",
  fields: () => ({
    hash: { type: GraphQLString },
    ver: { type: GraphQLInt },
    vin_sz: { type: GraphQLInt },
    vout_sz: { type: GraphQLInt },
    size: { type: GraphQLInt },
    weight: { type: GraphQLInt },
    fee: { type: GraphQLInt },
    relayed_by: { type: GraphQLString },
    lock_time: { type: GraphQLInt },
    tx_index: { type: GraphQLString },
    double_spend: { type: GraphQLBoolean },
    time: { type: GraphQLInt },
    block_index: { type: GraphQLInt },
    block_height: { type: GraphQLInt },
    inputs: { type: GraphQLList(TransactionInputItem) },
    out: { type: GraphQLList(TransactionOutputItem) },
  }),
});

const Transactions = new GraphQLObjectType({
  name: "TransactionsType",
  fields: () => ({
    page: { type: GraphQLInt },
    limit: { type: GraphQLInt },
    totalCount: { type: GraphQLInt },
    pageCount: { type: GraphQLInt },
    data: { type: GraphQLList(TransactionItem) },
  }),
});

const Transaction = new GraphQLObjectType({
  name: "TransactionType",
  fields: () => ({
    hash: { type: GraphQLString },
    ver: { type: GraphQLInt },
    prev_block: { type: GraphQLString },
    mrkl_root: { type: GraphQLString },
    time: { type: GraphQLInt },
    bits: { type: GraphQLInt },
    next_block: { type: GraphQLList(GraphQLString) },
    fee: { type: GraphQLInt },
    nonce: { type: GraphQLInt },
    n_tx: { type: GraphQLInt },
    size: { type: GraphQLInt },
    block_index: { type: GraphQLInt },
    main_chain: { type: GraphQLBoolean },
    height: { type: GraphQLInt },
    weight: { type: GraphQLInt },
    transactions: { type: Transactions },
  }),
});

const Block = new GraphQLObjectType({
  name: "BlockType",
  fields: () => ({
    block_index: { type: GraphQLString },
    hash: { type: GraphQLString },
    height: { type: GraphQLInt },
    time: { type: GraphQLInt },
  }),
});

const BlockResponse = new GraphQLObjectType({
  name: "BlockResponseType",
  fields: () => ({
    page: { type: GraphQLInt },
    limit: { type: GraphQLInt },
    totalCount: { type: GraphQLInt },
    pageCount: { type: GraphQLInt },
    data: { type: GraphQLList(Block) },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    blocks: {
      type: BlockResponse,
      args: {
        time: { type: GraphQLString },
        page: { type: GraphQLInt },
        limit: { type: GraphQLInt },
      },
      resolve(parentValue, args) {
        const transactionTime = args.time;
        return cache.get(transactionTime).then((data) => {
          if (data == null) {
            return axios.get(`${blockchain_url}/blocks/${transactionTime}?format=json`).then((res) => {
              cache.set(transactionTime, JSON.stringify(res.data));
              return paginateGaphgl(res.data, args.page, args.limit);
            });
          } else {
            return typeof data == "string" ? paginateGaphgl(JSON.parse(data), args.page, args.limit) : data;
          }
        });
      },
    },
    transactions: {
      type: Transaction,
      args: {
        transactionId: { type: GraphQLString },
        page: { type: GraphQLInt },
        limit: { type: GraphQLInt },
      },
      resolve(parentValue, args) {
        const transactionId = args.transactionId;
        return cache.get(transactionId).then((data) => {
          if (data == null) {
            return axios.get(`${blockchain_url}/rawblock/${args.transactionId}`).then((res) => {
              cache.set(transactionId, JSON.stringify(res.data));
              return paginateGaphglTransaction(res.data, args.page, args.limit);
            });
          } else {
            return typeof data == "string" ? paginateGaphglTransaction(JSON.parse(data), args.page, args.limit) : data;
          }
        });
      },
    },
  },
});

export default new GraphQLSchema({ query: RootQuery });
