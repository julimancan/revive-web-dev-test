import BlobNumber from "./BlobNumber"

const SelectPayment = () => {
  return (
    <section>
      <div className="title">
        <BlobNumber number="2" />
        <h3>
          SELECT A PAYMENT METHOD
        </h3>
      </div>
      <label>Credit Card Information</label>
      <input id="creditCard" type="text"/>
    </section>
  )
};

export default SelectPayment;
