import { useState } from "react"
import BlobNumber from "./BlobNumber"

const ReviewItems = ({ currentPlan, deliveryDate, subtotal }) => {
  const [confirmed, setConfirmed] = useState(false);
  const [confirmationError, setConfirmationError] = useState(false)
  const handleCheckboxClick = () => {
    setConfirmed(!confirmed);
  }
  const handleComplete = () => {
    if (confirmed) setConfirmationError(false);
    if (!confirmed) {
      setConfirmationError(true);
      setTimeout(() => {
        setConfirmationError(false);
      }, 4000);
      return ;
    }
    console.log(`confirmed`, confirmed)
  }
  return (
    <section>
      <div className="title">
        <BlobNumber number="5" />
        <h3>REVIEW</h3>
      </div>

      <div className="top-area">
        <div className="line">
          <span>Current Plan</span>
          <p className="right-side">{currentPlan} - Weekly</p>
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
            <p className="right-side">${subtotal}</p>
          </div>
        </div>
        <div className="confirmation">
          <input type="checkbox" onClick={handleCheckboxClick}/>
          <p className="conf-text">I’ve read and accept the terms and conditions & privacy policy.</p>
        </div>
      </div>
      <button onClick={handleComplete}>COMPLETE</button>
      {confirmationError && (
        <div className="confirmation-error">Please Read and Accept the terms and conditions</div>
      )}
    </section>
  )
}

export default ReviewItems
