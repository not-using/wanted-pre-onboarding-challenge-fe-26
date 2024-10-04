import { MOCK_DATA, PER_PAGE } from './constants'
import { ProductDto } from './type'

// 페이지는 1부터 시작함
export const getMockData = (pageNum: number): Promise<ProductDto> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const datas = MOCK_DATA.slice(
        PER_PAGE * pageNum,
        PER_PAGE * (pageNum + 1),
      )
      const isEnd = PER_PAGE * (pageNum + 1) >= MOCK_DATA.length

      resolve({ datas, isEnd })
    }, 1500)
  })
}
