import styled from "@emotion/styled";
import { useContext, useState } from "react"
import { CartContext } from "../context";
import BlobNumber from "./BlobNumber"


const ReviewItemsWrapper = styled.section`
  .bottom-area {
    border-top: 1px solid #D6D6D6;
    border-radius: 0;
    padding-top: .7rem;
    margin-top: 1rem;
  }
  .line {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1ch 0;
    span {
      font-family: Roboto;
      font-weight: 300;
      font-size: 1rem;
    }
    .right-side {
      font-size: 1rem;
      font-weight: 600;
    }
  }
  .confirmation {
    display: flex;
    align-items: center;
    input {
      width: 14px;
      aspect-ratio: 1/1;
      border-radius: 5px;
      margin-right: 5px;
    }
    p {
      font-size: 9px;
      a {
        border-bottom: 1px solid;
        border-radius: 0;

      }
    }
  }
  .complete-btn {
    background: #FEE343;
    display: block;
    width: 100%;
    border: none;
    height: 3rem;
    font-family: Roboto;
    font-weight: 700;
    font-size: 16px;
    margin: 1ch 0;
  }
  .you-can-stop {
    font-weight: 600;  
    margin: 1rem 0 1ch 0;
  }
`;

const ReviewItems = ({ deliveryDate }) => {

  // gets the global state
  let { cupQty, pricePerCup } = useContext(CartContext);

  // tracks if user has confirmed to read the terms and conditions and error in case they click continue without reading them
  const [confirmed, setConfirmed] = useState(false);
  const [confirmationError, setConfirmationError] = useState(false);

  // sets the state of reading confirmation to true when clicked
  const handleCheckboxClick = () => {
    setConfirmed(!confirmed);
  };

  // checks if user has confirmed to read terms & conditions if not sets an error with a timeout
  const handleComplete = () => {
    if (confirmed) setConfirmationError(false);
    if (!confirmed) {
      setConfirmationError(true);
      setTimeout(() => {
        setConfirmationError(false);
      }, 4000);
      return ;
    }
  };

  // gets the total amount of the cart
  const subtotal = cupQty * pricePerCup;
  return (
    <ReviewItemsWrapper>
      <div className="title">
        <BlobNumber number="5" />
        <h3>REVIEW</h3>
      </div>

      <div className="top-area">
        <div className="line">
          <span>Current Plan</span>
          <p className="right-side">{cupQty} - Weekly</p>
        </div>
        <div className="line">
          <span>Delivery Day</span>
          <p className="right-side">{deliveryDate}</p>
        </div>
        <div className="bottom-area">
          <div className="line">
            <span>Shipping</span>
            <p className="right-side">FREE</p>
          </div>
          <div className="line">
            <span>Subtotal</span>
            <p className="right-side">${subtotal.toFixed(2)}</p>
          </div>
        </div>
        <div className="confirmation">
          <input type="checkbox" onClick={handleCheckboxClick}/>
          <p className="conf-text">I’ve read and accept the <a href="">terms and conditions</a> & <a href="">privacy policy.</a></p>
        </div>
      </div>
      <button className="complete-btn" onClick={handleComplete}>COMPLETE</button>
      {confirmationError && (
        <div className="confirmation-error">Please Read and Accept the terms and conditions</div>
      )}
      <p className="you-can-stop">You can skip or pause a delivery any time!</p>
      <p>*Just be sure to make any changes before 9 AM on Thursdays. For holidays, expect your order to be delivered a day later or earlier. We will email you with tracking information to track your order - no hassles!</p>

    </ReviewItemsWrapper>
  )
}

export default ReviewItems
