import styled from "@emotion/styled";
import { useEffect, useRef, useState } from "react";
import BlobNumber from "./BlobNumber";
import { FiChevronDown, FiChevronUp } from "react-icons/fi"
import { boxSizes } from "./content";
import { CartContext } from "../context";
import { useContext } from "react";

const PickQtyWrapper = styled.section`
  padding: 0 1rem;
  margin-top: 1rem;
  .title, .select-qty {
   display: flex; 
   align-items: center;
  }
  h4 {
    font-weight: 200;
  }
  .title {
    h3 {
      margin-left: 1rem;
    }
  }
  .select-qty {
    .selection {
      border: 2px solid #AAAAAA;
      /* padding: 0 .2rem .1rem 2rem; */
      margin-left: 1rem;
      position: relative;
      cursor: pointer;
      width: 5rem;
      display: flex;
      p {
        margin: 1rem auto;
      }
      svg {
        transform: translate(2px, 3px);
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
  @media(min-width: 1024px) {
    padding-left: 8rem; 
    
  }
`;

const PickQty = () => {
  // state to control the drop down options
  const [selectionOpen, setSelectionOpen] = useState(false);

  // loads the global context 
  let { cupQty, setCupQty, pricePerCup, linkClicked } = useContext(CartContext);


  // reference to scroll into view when clicked from the checkout page
  const pickingRef = useRef(null);


  // function to scroll into view
  const scrollToPicking = () => {
    pickingRef.current.scrollIntoView({ behavior: "smooth" })
  }

  // useEffect on load to check if the pick your quantity option was clicked in checkout
  useEffect(() => {
    if (linkClicked === "Choose your plan") {
      scrollToPicking();
    }
    return () => {
    }
  }, []);

  return (
    <PickQtyWrapper
      ref={pickingRef}
    >
      <div className="title">
        <BlobNumber number="1" />
        <h3>Pick your quantity</h3>
      </div>
      <div className="select-qty">
        <h4>Quantity:</h4>
        <div className="selection" onClick={() => setSelectionOpen(!selectionOpen)}>
          <p><strong>{cupQty}</strong> {selectionOpen ? <FiChevronUp /> : <FiChevronDown />}</p>
          {selectionOpen && (
            <div className="options">
              {boxSizes.map((size, index) => (
                <div className="size" key={index} onClick={() => setCupQty(size)}><p>{size}</p></div>
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