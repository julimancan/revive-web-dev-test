import BlobNumber from "./BlobNumber"

const ShippingAddress = () => {
  return (
    <section>
      <div className="title">
        <BlobNumber number="3" />
        <h3>YOUR SHIPPING ADDRESS</h3>
      </div>
      <div className="name-last">
        <label>First Name</label>
        <input id="firstName" type="text" />
        <label>Last Name</label>
        <input id="lastName" type="text" />
      </div>
      <label>Address (street Address, No. PO Boxes)</label>
      <input id="Address" type="text" />
      <label>Apartment, Suite, Unit, etc.</label>
      <input id="apartment" type="text" />
      <div className="city-postal">
        <label>City</label>
        <input id="city" type="text" />
        <label>Postal Code</label>
        <input id="postalCode" type="text" />
      </div>
      <div className="province-phone">
        <label>Province</label>
        <input id="province" type="text" />
        <label>Phone</label>
        <input id="phone" type="text" />
      </div>
    </section>
  )
};

export default ShippingAddress;
