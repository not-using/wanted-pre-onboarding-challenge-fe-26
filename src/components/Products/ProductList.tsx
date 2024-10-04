import { Product } from '../../types/Product'
import ProductListItem from './ProductListItem'

import styled from 'styled-components'

type Props = {
  products: Product[]
}

const ProductList = ({ products }: Props) => {
  return (
    <Container>
      {products.map((product) => (
        <ProductListItem key={product.id} {...product} />
      ))}
    </Container>
  )
}

export default ProductList

const Container = styled.div`
  padding: 60px 20px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`
