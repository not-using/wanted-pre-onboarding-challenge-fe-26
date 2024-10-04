import { useEffect, useRef, useState } from 'react'
import useFetch from '../../hooks/useFetch'
import { Product } from '../../types/Product'
import { ProductDto } from '../../mock/type'
import { getMockData } from '../../mock/api'
import ProductList from './ProductList'
import styled from 'styled-components'

const ProductPage = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [hasMore, setHasMore] = useState(true)

  const page = useRef(1)
  const { fetch, isError, isLoading } = useFetch<ProductDto>()

  useEffect(() => {
    fetch({
      promise: hasMore && getMockData(page.current),
      resolve: (response) => {
        const newProducts = response.datas.map((data) => ({
          id: data.productId,
          name: data.productName,
          price: data.price,
          boughtDate: data.boughtDate,
        }))
        setProducts((prev) => [...prev, ...newProducts])
        setHasMore(!response.isEnd)
        page.current++
      },
      reject: (error) => {
        console.error(error)
      },
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const totalLength = products.length
  const totalPrice = products.reduce((acc, product) => acc + product.price, 0)

  return (
    <>
      <FixedHeader>
        <p>
          상품 {totalLength} 개, 가격 합계 {totalPrice}
        </p>
        {isLoading ? <p>Loading...</p> : null}
      </FixedHeader>
      {isError ? <div>Error</div> : <ProductList products={products} />}
    </>
  )
}

export default ProductPage

const FixedHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: calc(100% - 40px);
  padding: 10px 20px;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  background-color: white;
  border-bottom: 1px solid gray;

  p {
    margin: 0;
  }
`
