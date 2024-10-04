import styled from 'styled-components'
import { type Product } from '../../types/Product'

type Props = Product

const ProductListItem = ({ name, price, boughtDate }: Props) => {
  const date = new Date(boughtDate).toISOString().slice(0, 10)
  return (
    <Container>
      <p>{name}</p>
      <p>가격 : {price}</p>
      <p>구입일 : {date}</p>
    </Container>
  )
}

export default ProductListItem

const Container = styled.div`
  border: 1px solid gray;
  border-radius: 10px;
  padding: 10px;
`
