import styled from "@emotion/styled";
import BlobNumber from "./BlobNumber"


const SelectPaymentWrapper = styled.section`
margin: 2rem 0;
.buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    padding: 1rem;
    border: none;
    .ggpay {
      transform: translateY(3px);
    }
  }
  .credit-btn {
    background: #FEE343;
    color: black;
  }
}
.credit-card-input {
  border: 2px solid #A0A0A0;
  display: flex;
  align-items: center;
  height: 45px;
  button {
    border: none;
    height: 30px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    margin: 0 .5ch;
  }
  input {
    border: none;
    /* color: #A0A0A0; */
    height: 80%;
    &:focus {
      outline: none;
    }
  }
  #creditCard {
    width: 1fr;
  }
  #expiry-date {
    width: 6ch;
    margin-right: 5px;
  }
  .masterC {
    padding: 14px 10px;
  }
}
`;
const SelectPayment = () => {
  return (
    <SelectPaymentWrapper>
      <div className="title">
        <BlobNumber number="2" />
        <h3>
          SELECT A PAYMENT METHOD
        </h3>
      </div>
      <div className="buttons">
        <button className="credit-btn">Credit Card</button>
        <button><img src="/paypal.png" alt="paypal logo"/></button>
        <button><img className="ggpay" src="/google-pay.png" alt="paypal logo"/></button>
      </div>
      <label>Credit Card Information</label>
      <div className="credit-card-input">
        <button><img src="/visa.png" alt="visa logo"/></button>
        <button><img className="masterC" src="/mastercard.png" alt="mastercard logo"/></button>
        <input id="creditCard" type="text" placeholder="Card Number" />
        <input id="expiry-date" type="text" placeholder="MM/YY"/>
      </div>
    </SelectPaymentWrapper>
  )
};

export default SelectPayment;
