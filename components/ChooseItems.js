import styled from "@emotion/styled";
import { useContext, useState } from "react";
import BlobNumber from "./BlobNumber";
import Link from "next/link";
import ItemsIncluded from "./IncludedItems";
import { boxes } from "./content";
import { CartContext } from "../context";




const ChooseItemsWrapper = styled.section`
padding: 0 .5rem;
margin-bottom: 4rem;
  .title {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
    }
  }
  .boxes {
    display: flex;
    align-items: center;
    justify-content: space-between;
    align-items: center;
    
    .box {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: fit-content;
      justify-content: flex-start;
      padding: .5rem 0;
      * {
        margin: 0;
      }
      img {
        aspect-ratio: 1 / 1;
        width: 80%;
        min-width: 90px;
      }
      h4 {
        margin: 1rem 0;
        white-space: nowrap;
        font-size: clamp(.65rem, -0.875rem + 5.333vw, 1.5rem);
        
      }
      p {
        font-size: clamp(.55rem, -0.875rem + 4.333vw, 1rem);
        text-align: center;
      }
    }
  }
  .continue-button {
    background: #FEE343;
    border: none;
    padding: .8rem 2rem;
    margin: 1rem 0 0 0;
    cursor: pointer;
    font-family: Roboto;
    font-weight: 600;
    font-size: 16px;
    text-transform: uppercase;
  }
  .fine-print {
    font-size: clamp(.5rem, -0.875rem + 3.333vw, .7rem);
    a {
      border-bottom: 1px solid;
    }
  }
  @media(min-width: 1024px) {
    padding-left: 8rem;
    .boxes {
      width: 70%;
    }
  }
`;



const ChooseItems = () => {

  // gets the global state
  let { boxInCart, setBoxInCart } = useContext(CartContext);

  // tracks the state to show what's included in the boxes
  const [boxShowing, setBoxShowing] = useState(false);

  // tracks the items included in the box
  const [items, setItems] = useState();


  // sets the state to show the box and sets the name of the selected box
  const selectItems = (name) => {
    setBoxShowing(true);
    setBoxInCart(name);

    // finds and sets the items included in the box from the boxes content array
    const boxToAssign = boxes.find(element => element.name === name);
    const itemsToAssign = boxToAssign.itemList;
    setItems(() => itemsToAssign);
  }

  return (
    <ChooseItemsWrapper>
      <div className="title">
        <BlobNumber number="2" />
        <h3>Choose Your Items</h3>
      </div>

      <div className="boxes">
        {boxes.map((box, index) => (
          <div className="box" key={index} onClick={() => selectItems(box.name)}>
            <img src={box.imagePath} alt={box.name} />
            <h4>{box.name}</h4>
            <p>{box.description}</p>
          </div>
        ))}
      </div>
      {boxShowing && (
        <div className="items-included">
          {items && (
            <ItemsIncluded items={items} box={boxInCart}/>
          )}
        </div>
      )}
      <Link href="/checkout"><button className="continue-button">Continue</button></Link>
      <p className="fine-print">For bulk orders over 288 cups, please email: <a href="mailto:wholesale@revivesuperfoods.com"> wholesale@revivesuperfoods.com</a></p>
    </ChooseItemsWrapper>
  )
};

export default ChooseItems;