import Button from "../Button";
import CartContext from "../CartContext/CartContext";
import Image from "next/image";
import styled from "styled-components";
import { useContext } from "react";

const Wrapper = styled.div`
  width: 100%;
  box-shadow: var(--box-shadow-store-item);
  background-color: var(--color-light);
  border-radius: var(--border-radius-5);
`;

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
`;

const StoreImg = styled(Image)`
  width: ${({ imgsize }) => (imgsize ? imgsize + "px" : "180px")};
  height: ${({ imgsize }) => (imgsize ? imgsize + "px" : "180px")};
  object-fit: cover;
`;

const ContentWrapper = styled.div`
  text-align: center;
`;

const Title = styled.h3`
  margin: var(--space-16) 0;
  text-transform: capitalize;
`;

const ButtonWrapper = styled.div`
  margin: var(--space-16);
`;

function StoreItem({ id, item, price, src, width, height, imgsize }) {
  const { addToCart } = useContext(CartContext);

  function handleClick() {
    addToCart({ id, item, price, src, width, height });
  }

  return (
    <Wrapper>
      <ImgWrapper>
        <StoreImg
          src={src}
          alt={`Image of ${item}`}
          width={width}
          height={height}
          imgsize={imgsize}
          sizes="180px"
        />
      </ImgWrapper>

      <ContentWrapper>
        <Title>{item}</Title>
        <p>${price}</p>
        <ButtonWrapper>
          <Button size="medium" type="button" onClick={handleClick}>
            add to bag
          </Button>
        </ButtonWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}

export default StoreItem;
