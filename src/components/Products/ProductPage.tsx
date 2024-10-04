import { useRef, useState } from 'react'
import useFetch from '../../hooks/useFetch'
import { Product } from '../../types/Product'
import { ProductDto } from '../../mock/type'
import { getMockData } from '../../mock/api'
import ProductList from './ProductList'
import styled from 'styled-components'
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver'
import ProductHeader from './ProductHeader'

const ProductPage = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [hasMore, setHasMore] = useState(true)

  const page = useRef(1)
  const { fetch, isError, isLoading } = useFetch<ProductDto>()
  const triggerRef = useRef<HTMLDivElement>(null)

  useIntersectionObserver({
    targetRef: triggerRef,
    onIntersect: () => {
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
    },
  })

  return (
    <>
      <ProductHeader
        totalLength={products.length}
        totalPrice={products.reduce((acc, product) => acc + product.price, 0)}
      >
        {isLoading ? <p>Loading...</p> : null}
      </ProductHeader>
      {isError ? <div>Error</div> : <ProductList products={products} />}
      <InfiniteScrollTrigger ref={triggerRef} />
    </>
  )
}

export default ProductPage

const InfiniteScrollTrigger = styled.div`
  height: 1px;
`
