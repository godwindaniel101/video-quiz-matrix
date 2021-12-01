export interface ITransactionDataResponseInput {
    sequence: number
    witness: string
    script: string
    index: number
    prev_out: any
}

export interface ITransactionDataResponseOutput {
    type: number
    spent: boolean
    value: number
    n: number
    tx_index: number
    script: string
    addr: string
}
export interface ITransactionDataResponse {
    hash: string
    ver: number
    vin_sz: number
    vout_sz: number
    size: number
    weight: number
    fee: number
    relayed_by: number
    lock_time: number
    tx_index: number
    double_spend: false
    time: number
    block_index: number
    block_height: number
    inputs: ITransactionDataResponseInput[]
    out: ITransactionDataResponseOutput[]
}
export interface ITransactionObjectResponse {
    totalCount: number
    limit: number
    page: number
    pageCount: number
    data: ITransactionDataResponse[]
}

export interface IActionTransaction {
    type: string
    payload: ITransactionResponse
}

export interface ITransactionResponse {
    hash: string
    ver: number
    prev_block: string
    mrkl_root: string
    time: string
    bits: string
    next_block: string[]
    fee: string
    nonce: string
    n_tx: string
    size: string
    block_index: string
    main_chain: boolean
    height: string
    weight: string
    transactions: ITransactionObjectResponse
}