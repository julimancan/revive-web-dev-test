import styled from "@emotion/styled";
import Link from 'next/link';



const retailers = [
  {
    name: "pusateri's",
    link: "https://www.pusateris.com",
    image: "/pusateris.png"
  },
  {
    name: "pusateri's",
    link: "https://www.pusateris.com",
    image: "/pusateris.png"
  },
  {
    name: "pusateri's",
    link: "https://www.pusateris.com",
    image: "/pusateris.png"
  },
]


const perks = [
  {
    name: "MEALS READY IN MINUTES",
    icon: "/perks-icon/clock.png"
  },
  {
    name: "CHEF CRAFTED",
    icon: "/perks-icon/chef-hat.png"
  },
  {
    name: "PRESERVATIVE-FREE",
    icon: "/perks-icon/hand.png"
  },
  {
    name: "ALWAYS FREE SHIPPING",
    icon: "/perks-icon/truck.png"
  },
]

const WhyReviveWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 .5rem ;
  margin: 2rem 0;
  .top {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      aspect-ratio: 566/475;
      max-width: 80%;
    }
    .text {
      display: flex;
      flex-direction: column;
    }
  }
  .where-to-find {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20ch;
    h3 {
      text-align: center;
    }
    * {
      margin: 0;
    }
    
    .pusateri-img {
      margin: 1rem 0;
      width: 100%;
      aspect-ratio: 135/47;
      cursor: pointer;
    }
  }
  .perks {
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #F1F0F0;
    padding: 0 0 1rem;
    .perk {
      /* background: red; */
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: flex-start;
      white-space: nowrap;
      padding: 0 1rem;
      img {
        aspect-ratio: 1/1;
        height: 3rem;
      }
      h3 {
        font-size: 1rem;
        /* margin: 0; */
      }
    }
  }
  @media(min-width: 600px) {
    align-items: center;
    .where-to-find {
      width: 100%;
      margin: 2rem 0;
      .retailers {
        display: flex;
        img {
          margin: 1rem 1rem;
        }
      }

    }
    .perks {
      flex-direction: row;
      padding: 1rem 8rem;
      .perk {
        flex-direction: column;
        img {
          height: 5rem;
          margin: 0;
        }
        h3 {
          margin: 0;
        }
      }
    }
  }
  @media(min-width: 800px) {
    padding: 0 8rem;
    .top {
      flex-direction: row;
      img {
        height: 35vh;
        margin-right: 4rem;
      }
    }
  }
`;

const WhyRevive = () => {
  return (
    <WhyReviveWrapper>
      <section className="top">
        <img src="/Variety-Cups.png" alt="variety of smoothie cups" />
        <div className="text">
          <h3>Revive</h3>
          <p>Our team of chefs and nutritionists pre-portion delicious smoothies, meals, oats, soups, and falafel pops into convenient on-the-go cups delivered right to your door, ready in minutes. We know that good food should be simple, and that’s why everything from our smoothies to our meals are made with superfood ingredients that are frozen at peak nutrition and carefully crafted to perfection, leaving you with nothing more to do than to sit back and enjoy.</p>
        </div>
      </section>
      <section className="where-to-find">
        <h3>FIND US AT THESE SELECT RETAILERS</h3>
        <div className="retailers">

          {retailers.map((item, index) => (
            <Link href={item.link} key={index} target="_blank"><img className="pusateri-img" src={item.image} alt={item.name} /></Link>
          ))}
        </div>
      </section>
      <section className="perks">
        {perks.map((perk, index) => (
          <div className="perk" key={index}>
            <img src={perk.icon} alt={perk.name} />
            <h3>{perk.name}</h3>
          </div>
        ))}
      </section>
    </WhyReviveWrapper>
  )
};

export default WhyRevive;



