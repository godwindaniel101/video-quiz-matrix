
export interface IActionPaginate {
    type: string
    pagination: {
      totalCount: number
      limit: number
      page: number
      initialPage: number
      pageCount: number
      pageRangeDisplayed: number
    }
  }
  export interface PaginationResponse {
    pagination: {
      totalCount: number
      limit: number
      page: number
      initialPage: number
      pageCount: number
      pageRangeDisplayed: number
    }
  }