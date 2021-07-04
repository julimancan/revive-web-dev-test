import styled from "@emotion/styled";
import BlobNumber from "./BlobNumber"


const ShippingAddressWrapper = styled.section`
  .name-last, .city-postal, .province-phone {
    display: flex;
    flex-direction: column;
    .labels, .inputs {
      display: flex;
      width: 1fr;
      justify-content: space-between;
      gap: 1rem;
    }
    .labels {
      * {
        width: 50%;
      }
    }
  }
`;

const ShippingAddress = () => {
  return (
    <ShippingAddressWrapper>
      <div className="title">
        <BlobNumber number="3" />
        <h3>YOUR SHIPPING ADDRESS</h3>
      </div>
      <div className="name-last">
        <div className="labels">
          <label>First Name</label>
          <label>Last Name</label>
        </div>
        <div className="inputs">
          <input id="firstName" type="text" />
          <input id="lastName" type="text" />
        </div>
      </div>
      <label>Address (street Address, No. PO Boxes)</label>
      <input id="Address" type="text" />
      <label>Apartment, Suite, Unit, etc.</label>
      <input id="apartment" type="text" />
      <div className="city-postal">
        <div className="labels">
          <label>City</label>
          <label>Postal Code</label>
        </div>
        <div className="inputs">
          <input id="city" type="text" />
          <input id="postalCode" type="text" />
        </div>
      </div>
      <div className="province-phone">
        <div className="labels">
          <label>Province</label>
          <label>Phone</label>
        </div>
        <div className="inputs">
          <input id="province" type="text" />
          <input id="phone" type="text" />
        </div>
      </div>
    </ShippingAddressWrapper>
  )
};

export default ShippingAddress;
