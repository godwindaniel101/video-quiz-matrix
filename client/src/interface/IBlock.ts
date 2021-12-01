export interface IBlock {
    block_index: number
    hash: string
    height: number
    time: number
  }
  
  export interface IBlockAction {
    type: string
    payload: IBlock[]
  }
  
  export interface IBlockResponse extends IBlock {
    type: string
    payload: IBlock[]
  }
  
  export interface IBashTimeAction {
    type: string
    payload: number
  }
 