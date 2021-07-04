import styled from "@emotion/styled";
import ChooseItems from "../components/ChooseItems";
import HeroImage from "../components/HeroImage";
import PickQty from "../components/PickQty";
import WhyRevive from "../components/WhyRevive";


const HomePageWrapper = styled.main``;

export default function Home() {

  return (
      <HomePageWrapper>
        <HeroImage/>
        <PickQty />
        <ChooseItems />
        <WhyRevive />
      </HomePageWrapper>
  )
};