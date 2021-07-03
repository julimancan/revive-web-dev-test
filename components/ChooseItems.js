import styled from "@emotion/styled";
import BlobNumber from "./BlobNumber";
const boxes = [
  {
    name: "Fruity Box",
    description: "Perfect for the entire family",
    imagePath: "/boxes/fruity-box.png"
  },
  {
    name: "Best Sellers Box",
    description: "Our superfoodies' favorites",
    imagePath: "/boxes/best-seller-box.png"
  },
  {
    name: "Fit Box",
    description: "Our superfoodies' favorites",
    imagePath: "/boxes/fit-box.png"
  },
]
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
`;


const ChooseItems = () => {
  return (
    <ChooseItemsWrapper>
      <div className="title">
        <BlobNumber number="2" />
        <h3>Choose Your Items</h3>
      </div>

      <div className="boxes">
        {boxes.map((box, index) => (
          <div className="box" key={index}>
            <img src={box.imagePath} alt={box.name} />
            <h4>{box.name}</h4>
            <p>{box.description}</p>
          </div>
        ))}
      </div>
      <button className="continue-button">Continue</button>
      <p className="fine-print">For bulk orders over 288 cups, please email: wholesale@revivesuperfoods.com</p>
    </ChooseItemsWrapper>
  )
};

export default ChooseItems;