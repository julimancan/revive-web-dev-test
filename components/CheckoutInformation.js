import styled from "@emotion/styled";

const gridElements = [
  {
    name: "24/7 Customer Support",
    img: "/customerSupport.png"
  },
  {
    name: "Change Your Cups",
    img: "/changeYourCups.png"
  },
  {
    name: "Skip Your Upcoming Delivery",
    img: "/skipDelivery.png"
  },
  {
    name: "Change Your Plan",
    img: "/changeYourPlan.png"
  },
];


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
        {gridElements.map((element, index) => (
          <img src={element.img} alt={element.name} key={index}/>
        ))}
    </CheckoutInformationWrapper>
  )
};

export default CheckoutInformation;