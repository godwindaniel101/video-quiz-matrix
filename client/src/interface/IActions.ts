
export interface IResponse {
    data?: {
      data: {
        data: object[] | []
        totalCount?: number
        limit?: number
        page?: number
        pageCount?: number
      }
    }
    message?: string
  }