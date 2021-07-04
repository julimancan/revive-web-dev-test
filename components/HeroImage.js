import styled from "@emotion/styled"

const HeroImageWrapper = styled.section`
  background: url("/heroImage.png");
  background-color: #F6F4F5;
  background-repeat: no-repeat;
  background-position: top right;
  min-height: 326px;
  width: 100%;
  padding: 2rem 1rem;

  p {
    max-width: 50%;
  }
  @media (min-width: 900px) {
    background: url("/heroImageDesktop.png");
    background-color: #F6F4F5;
    background-repeat: no-repeat;
    background-position: top right;
    padding: 10% 12rem;
  }
`;


const HeroImage = () => {
  return (
    <HeroImageWrapper>
      <h2>MAKING A BIG ORDER? <br/> WE GOT YOU.</h2>
      <p>Choose your quantity below to access our wholesale pricing. Wholesale orders are placed on demand and not recurring.</p>
    </HeroImageWrapper>
  )
}

export default HeroImage
