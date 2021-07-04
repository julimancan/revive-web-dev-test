import styled from "@emotion/styled";
import { useRouter } from "next/dist/client/router";

const steps = [
  "Choose your plan",
  "Build Your Box",
  "Checkout"
];


const NavPosWrapper = styled.section`
  display: flex;
  color: #C2C2C2;
  justify-content: space-between;
  border-bottom: 1px solid;
  padding-bottom: 1rem;
  margin: 0 0 1.5rem 0;
  h4 {
    font-size: 1rem;
    font-family: Roboto;
    max-width: 9.5ch;
    display: flex;
    text-align: center;
    align-items: center;
  }
  h4:last-child {
    /* margin: 0 1rem; */
    color: ${({currentPage}) => currentPage === "/checkout" && "black"};
    position: relative;
    /* font-weight: 800; */
    &:after {
      content: "";
      background: ${({currentPage}) => currentPage === "/checkout" && "black"};
      width: 100%;
      height: 2px;
      position: absolute;
      left: 0;
      bottom: -1.1rem;
    }
  }
`;


const NavPosition = () => {
  const router = useRouter();
  const currentPage = router.pathname;
  console.log(`currentPage`, currentPage)
  return (
    <NavPosWrapper className="nav-position" currentPage={currentPage}>
      {steps.map((step, index) => (
        <h4 key={index}>{step}</h4>
      ))}
    </NavPosWrapper>
  )
};

export default NavPosition;
