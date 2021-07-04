import styled from "@emotion/styled";
import CheckoutInformation from "../components/CheckoutInformation";
import ChooseDelivery from "../components/ChooseDelivery";
import CreateAccount from "../components/CreateAccount";
import NavPosition from "../components/NavPosition";
import ReviewItems from "../components/ReviewItems";
import SelectPayment from "../components/SelectPayment";
import ShippingAddress from "../components/ShippingAddress";

const CheckoutWrapper = styled.main`
  padding: 0.5rem;
  max-width: 1000px;

  input, select {
    width: 100%;
    height: 45px;
    border-color: #A0A0A0;
    border-style: solid;

  }
  label {
    color: #A0A0A0;
  }
  section {
    * {
      padding: 0;
      margin: 0;
      border-radius: 15px;
    }
    .title {
      display: flex;
      align-items: center;
      margin: 1rem 0;
      h3 {
        margin-left: 1ch;
      }
    }
  }
  @media(min-width: 768px) {
    padding: 3rem;

    .input-information {
      display: flex;
      gap: 1rem;
    }
    .left-panel, .right-panel {
      width: 50%;
    }
    .right-panel {
      border: 3px solid rgba(37, 37, 37, 1);
      border-radius: 15px;
      padding: 1rem;
      height: fit-content;
    }
  }
  @media(min-width: 1024px) {
   padding: 3rem 10vw; 
   display: flex;
   flex-direction: column;
   justify-content: center;
   margin: 0 auto;
  }
`;



const checkout = () => {
  return (
    <CheckoutWrapper>
      <NavPosition />
      <h2>CHECKOUT</h2>
      <div className="input-information">
        <div className="left-panel">
          <CreateAccount />
          <SelectPayment />
          <ShippingAddress />
          <ChooseDelivery />
        </div>
        <div className="right-panel">
          <ReviewItems deliveryDate="Tuesday"/>
        </div>
      </div>
      <CheckoutInformation />
    </CheckoutWrapper>
  )
};

export default checkout;