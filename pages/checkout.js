import styled from "@emotion/styled";
import CheckoutInformation from "../components/CheckoutInformation";
import ChooseDelivery from "../components/ChooseDelivery";
import CreateAccount from "../components/CreateAccount";
import NavPosition from "../components/NavPosition";
import ReviewItems from "../components/ReviewItems";
import SelectPayment from "../components/SelectPayment";
import ShippingAddress from "../components/ShippingAddress";

const CheckoutWrapper = styled.main``;



const checkout = () => {
  return (
    <CheckoutWrapper>
      <NavPosition />
      <h2>CHECKOUT</h2>
      <CreateAccount />
      <SelectPayment />
      <ShippingAddress />
      <ChooseDelivery />
      <ReviewItems currentPlan="9 items" deliveryDate="Tuesday" subtotal="63"/>
      <CheckoutInformation />
    </CheckoutWrapper>
  )
};

export default checkout;