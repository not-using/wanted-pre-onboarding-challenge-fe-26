import { PropsWithChildren } from 'react'
import styled from 'styled-components'

type Props = PropsWithChildren<{
  totalLength: number
  totalPrice: number
}>

const ProductHeader = ({ totalLength, totalPrice, children }: Props) => {
  return (
    <FixedHeader>
      <p>
        상품 {totalLength} 개, 가격 합계 {totalPrice}
      </p>
      {children}
    </FixedHeader>
  )
}

export default ProductHeader

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
