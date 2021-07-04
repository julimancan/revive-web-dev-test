import styled from "@emotion/styled";
import { checkoutGridElements } from "./content";



const CheckoutInformationWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 45%);
  margin-bottom: 2rem;
  img {
    aspect-ratio: 1/1;
    width: 1fr;
  }
  @media(min-width: 768px) {
    margin: 4rem 0 0 0;
    grid-template-columns: repeat(4, 1fr);
  }
  
`;

const CheckoutInformation = () => {
  return (
    <CheckoutInformationWrapper>
        {checkoutGridElements.map((element, index) => (
          <img src={element.img} alt={element.name} key={index}/>
        ))}
    </CheckoutInformationWrapper>
  )
};

export default CheckoutInformation;