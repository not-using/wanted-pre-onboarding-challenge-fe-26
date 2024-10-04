export interface MockData {
  productId: string
  productName: string
  price: number
  boughtDate: string
}

export interface ProductDto {
  datas: MockData[]
  isEnd: boolean
}
