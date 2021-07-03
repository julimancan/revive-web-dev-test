import styled from "@emotion/styled";
import { useState } from "react";
import BlobNumber from "./BlobNumber";
import { FiChevronDown, FiChevronUp } from "react-icons/fi"
const sizes = [48, 72, 96, 120, 144];
const PickQtyWrapper = styled.section`
  padding: 0 .5rem;
  margin-top: 1rem;
  .title, .select-qty {
   display: flex; 
   align-items: center;
  }
  h4 {
    font-weight: 200;
  }
  .title {
    /* margin: 2rem 0; */
    h3 {
      margin-left: 1rem;
    }
  }
  .select-qty {
    /* display: flex; */
    .selection {
      border: 2px solid #AAAAAA;
      padding: 0 .2rem .1rem 1rem;
      margin-left: 1rem;
      position: relative;
      cursor: pointer;
      width: 5rem;
      display: flex;
      svg {
        transform: translateY(3px)
      }
      .options {
        height: 100px;
        width: 100%;
        border: 1px solid;
        position: absolute;
        left: -1px;
        top: 120%;
        overflow: hidden;
        overflow-y: scroll;
        z-index: 10;
        background: white;
        &::-webkit-scrollbar {
          width: 4px;
        }
        &::-webkit-scrollbar-thumb {
          border-radius: 2px;
          -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
          background-color: #CFCFCF;
        } 
        .size {
          display: flex;
          justify-content: center;
          p {
            line-height: .1ch;
          }
          &:hover {
            background: lightgray;
          }
        }
      }
    }
  }
  @media(min-width: 600px) {
    padding-left: 8rem; 
    
  }

`;

const pricePerCup = 5.49;
const PickQty = () => {
  const [selectedQty, setSelectedQty] = useState(sizes[0]);
  const [selectionOpen, setSelectionOpen] = useState(false);
  return (
    <PickQtyWrapper>
      <div className="title">
        <BlobNumber number="1" />
        <h3>Pick your quantity</h3>
      </div>
      <div className="select-qty">
        <h4>Quantity:</h4>
        <div className="selection" onClick={() => setSelectionOpen(!selectionOpen)}>
          <p><strong>{selectedQty}</strong> {selectionOpen ? <FiChevronUp /> : <FiChevronDown />}</p>
          {selectionOpen && (
            <div className="options">
              {sizes.map((size, index) => (
                <div className="size" key={index} onClick={() => setSelectedQty(size)}><p>{size}</p></div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="price">
        <h4>Price per cup: <strong>${pricePerCup}</strong></h4>
      </div>
    </PickQtyWrapper>
  )
};

export default PickQty;