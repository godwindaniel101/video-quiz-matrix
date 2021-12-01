export interface PreLoaderResponse {
    loading?: boolean
  }
  
  export interface IActionPreLoader {
    type: string
    loading: boolean
    block_table_prelaoder: boolean
    transaction_table_prelaoder: boolean
  }