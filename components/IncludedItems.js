import styled from "@emotion/styled";
import { itemsIncluded } from "./content";

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
        align-items: center;
        img {
          aspect-ratio: 1/1;
          max-width: 8rem;
        }
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

export default ItemsIncluded;