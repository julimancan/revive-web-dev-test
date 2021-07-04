import { useState } from "react";
import BlobNumber from "./BlobNumber"

const deliveryOptions = [
  "none",
  "Leave with concierge",
  "Leave on front porch",
  "Leave at back door",
  "other"
]
const ChooseDelivery = () => {
  const [date, setDate] = useState(Date.now());
  const [dateError, setDateError] = useState(false);
  const [selectedDeliveryOption, setSelectedDeliveryOption] = useState(deliveryOptions[0]);
  const [customDeliveryOption, setCustomDeliveryOption] = useState();

  const setDateFunction = (inputDate) => {
    const minimumDeliveryDate = Date.now();
    console.log(`inputDate`, Date.parse(inputDate))
    const parsedInputDate = Date.parse(inputDate);
    if (parsedInputDate < minimumDeliveryDate) {
      setDateError(true);
      setTimeout(() => {
        setDateError(false);
      }, 4000);
    }
    setDate(inputDate);
  }
  function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}
  return (
    <section>
      <div className="title">
        <BlobNumber number="4" />
        <h3>CHOOSE YOUR DELIVERY DAY</h3>
      </div>
      <input type="date" id="date" name="delivery-day"
        value={date}
        min={formatDate(new Date(Date.now()))} max="2022-12-31"
        onChange={(e) => setDateFunction(e.target.value)}

      />
      {dateError && (
        <div>Please choose a date in the future</div>
      )}
      <select onChange={(e) => setSelectedDeliveryOption(e.target.value)}>
        {deliveryOptions.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
      {selectedDeliveryOption === "other" && (
        <textarea name="customDeliveryOption" id="customDeliveryOption" onChange={(e) => setCustomDeliveryOption(e.target.value)} rows="10"></textarea>
      )}
    </section>
  )
};

export default ChooseDelivery;
