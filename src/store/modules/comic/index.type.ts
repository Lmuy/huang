export interface ISearch {
  globalName: string,
  orderBy: string,
  ascending: boolean,
  pageSize: number,
  pageNo: number
}

export interface ICreate {
  name: string,
  rate: string,
  logo: string,
  reason: string,
  website: string
}

export interface IDetail {
  id: string,
}

export interface ISupport {
  id: string,
  support: boolean
}