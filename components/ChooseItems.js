import styled from "@emotion/styled";
import { useState } from "react";
import BlobNumber from "./BlobNumber";
import Link from "next/link";
const boxes = [
  {
    name: "Fruity Box",
    description: "Perfect for the entire family",
    imagePath: "/boxes/fruity-box.png",
    itemList: ["pink dragon", "hint of mint", "pink dragon", "hint of mint", "pink dragon", "hint of mint", "pink dragon", "hint of mint", "pink dragon"]
  },
  {
    name: "Best Sellers Box",
    description: "Our superfoodies' favorites",
    imagePath: "/boxes/best-seller-box.png",
    itemList: ["pink dragon", "pink dragon", "pink dragon", "pink dragon", "pink dragon", "pink dragon", "pink dragon", "pink dragon", "pink dragon"]
  },
  {
    name: "Fit Box",
    description: "Our superfoodies' favorites",
    imagePath: "/boxes/fit-box.png",
    itemList: ["pink dragon", "hint of mint", "pink dragon", "hint of mint", "pink dragon", "hint of mint", "pink dragon", "hint of mint", "pink dragon"]
  },
];

const itemsIncluded = {
  "pink dragon": {
    name: "pink dragon",
    img: "/boxes/pink.png"
  },
  "hint of mint": {
    name: "hint of mint",
    img: "/boxes/mint.png"
  },
}
const ChooseItemsWrapper = styled.section`
padding: 0 .5rem;
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
    padding: .5rem 2rem;
    margin: 1rem 0 0 0;
  }
  .fine-print {
    font-size: clamp(.5rem, -0.875rem + 3.333vw, .7rem);

  }
  @media(min-width: 600px) {
    padding-left: 8rem;
    .boxes {
      width: 60%;
    }
  }
`;

const IncludedItemsWrapper = styled.div`
    border: 2px solid #C4C4C4;
    border-radius: 10px;
    padding: 1rem 1rem .7rem;
    display: flex;
    flex-direction: column;
    h5 {
      align-self: center;
      margin: 0 0 1rem 0;
    }
    .grid{
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: .5rem;

      .item-included {
        display: flex;
        flex-direction: column;
        h5 {
          text-transform: uppercase;
          font-weight: 400;
          font-size: clamp(.55rem, -0.875rem + 4.333vw, 1rem);
          align-self: center;
        }
      }
    }
    @media(min-width: 800px) {
      max-width: 90%;
      .grid {
        grid-template-columns: repeat(9, 1fr);
        .item-included {
          img {
            aspect-ratio: 1/1;
            max-width: 70px;
            align-self: center;
          }
          h5 {
            margin: 0;
          }
        }
      }
    }
`
const ItemsIncluded = ({ items, box }) => {
  return (
    <IncludedItemsWrapper>
      <h5>Items Included in the {box}</h5>
      <div className="grid">
        {items && items.map((item, index) => (
          <div key={index} className="item-included">
            <img src={itemsIncluded[item].img} alt="" />
            <h5>
              {item}
            </h5>
          </div>
        ))}
      </div>
    </IncludedItemsWrapper>
  )
};

const ChooseItems = () => {
  const [selectedBox, setSelectedBox] = useState();
  const [items, setItems] = useState();
  const selectItems = (name) => {
    setSelectedBox(name);
    if (!selectedBox) return "";
    const boxToAssign = boxes.find(element => element.name === selectedBox);
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
      {selectedBox && (
        <div className="items-included">
          {items && (
            <ItemsIncluded items={items} box={selectedBox} />
          )}
        </div>
      )}
      <button className="continue-button"><Link href="/checkout">Continue</Link></button>
      <p className="fine-print">For bulk orders over 288 cups, please email: wholesale@revivesuperfoods.com</p>
    </ChooseItemsWrapper>
  )
};

export default ChooseItems;