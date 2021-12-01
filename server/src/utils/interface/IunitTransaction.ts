import { Ipagintation } from "./Ipagintation";
export interface IunitTransaction {
    hash: string,
    ver: number,
    prev_block: string,
    mrkl_root: string,
    time: number,
    bits: number,
    next_block: string[],
    fee: number,
    nonce: number,
    n_tx: number,
    size: number,
    block_index: number,
    main_chain: boolean,
    height: number,
    weight: number,
    tx?:object[],
    transactions?:Ipagintation
}
