import styled from "@emotion/styled";
import { useState } from "react";
import BlobNumber from "./BlobNumber";
import { FiChevronDown, FiChevronUp } from "react-icons/fi"
const sizes = [48, 72, 96, 120, 144];
const PickQtyWrapper = styled.section`
  .title, .select-qty {
   display: flex; 
   align-items: center;
  }
  .select-qty {
    /* display: flex; */
    .selection {
      border: 1px solid;
      padding: 0 .2rem .1rem 1rem;
      margin-left: 1rem;
      position: relative;
      cursor: pointer;
      svg {
        transform: translateY(3px)
      }
      .options {
        height: 100px;
        width: 105%;
        border: 1px solid;
        position: absolute;
        left: -1px;
        top: 120%;
        overflow: hidden;
        overflow-y: scroll;
        &:-webkit-scrollbar {
          width: 1rem;
          background: red;
        }
        .size {
          &:hover {
            background: lightgray;
          }
        }
      }
    }
  }
`;
const PickQty = () => {
  const [selectedQty, setSelectedQty] = useState(sizes[0]);
  const [selectionOpen, setSelectionOpen] = useState(true);
  return (
    <PickQtyWrapper>
      <div className="title">
        <BlobNumber number="1" />
        <h3>Pick your quantity</h3>
      </div>
      <div className="select-qty">
        <h4>Quantity:</h4>
        <div className="selection" onClick={() => setSelectionOpen(!selectionOpen)}>
          {selectedQty} {selectionOpen ? <FiChevronUp /> : <FiChevronDown />}
          {selectionOpen && (
            <div className="options">
              {sizes.map((size, index) => (
                <div className="size" key={index} onClick={() => setSelectedQty(size)}>{size}</div>
              ))}
            </div>
          )}
        </div>
      </div>
    </PickQtyWrapper>
  )
};

export default PickQty;