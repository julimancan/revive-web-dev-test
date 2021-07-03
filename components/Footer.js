import styled from "@emotion/styled";
import SocialIcons from "./SocialIcons";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import Link from "next/link"

const footerNav = [
  {
    name: "quicklnks",
    list: ["Smoothies", "Oats", "Smoothie Bowls", "Supermeals", "Falafel Pops"]
  },
  {
    name: "our company",
    list: ["Our Story", "Rewards", "Blog", "Press", "Terms & Privacy"]
  },
  {
    name: "support",
    list: ["Wholesale", "FAQ", "Contact"]
  },
]
const FooterWrapper = styled.footer`
  .subscribe {
      width: 100%;
      overflow: hidden;
      div {
        width: 100%;
        border: 1px solid #A0A8AE;
        display: flex;
        justify-content: space-between;
        input {
          background: none;
          border: none;
          padding:  .3rem  0 .3rem .5rem;
          width: 90%;
          color: #A0A8AE;
        }
        button {
          background: none;
          border: none;
          color: transparent;
          position: relative;
          /* align-self: flex-end; */
          width: 10%;
          &:before {
            content: ">";
            color: #A0A8AE;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
          }
        }
      }
    }
  .footer-mobile {
    padding: 0 .5rem;
    display: flex;
    flex-direction: column;
    .footer-logo {
      width: 15ch;
      transform: translateX(-.5rem);
    }
    
    .foot-nav {
      display: flex;
      justify-content: space-between;
      padding: 0 .5rem 0 0 ;
    }
    .canada-flag {
      margin: .5rem auto 1rem;
    }

  }
  .footer-desktop {
    display: none;
  }
  .credits {
      background: #F1F0F0;
      display: flex;
      justify-content: center;
      color: #A9A9A9;
    }
  @media(min-width: 600px) {
    padding: 2rem 8rem;
    position: relative;
    .footer-mobile {
      display: none;
    }
    .footer-desktop {
      display: flex;
      /* position: relative; */
      .links, .outer-links {
        width: 50%;
        padding: 2rem 2rem;
      }
      .links {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        .foot-nav {
          margin: 0 1rem;
          h3, h4 {
            margin: 0;
            cursor: pointer;
          }
          h3 {
            font-size: clamp(.75rem, -0.875rem + 2.333vw, 1rem);
          }
          h4 {
            text-transform: none;
            font-weight: 400;
            color: #545454;
            font-size: clamp(.55rem, -0.875rem + 2.333vw, .75rem);
          }
        }
      }
      .outer-links {
        .footer-logo {
          transform: translateX(-.5rem);
        }
        .region {
            display: flex;
            /* background: red; */
            align-items: center;
          .canada-flag-desktop {
            margin: 0 1rem;
            height: 27px;
            width: 42px;            
          }
        }
      }
    }
  }
  .credits {
    position: absolute;
    bottom: 0;
    width: 100%;
    left: 0;
  }
`;


const mailchimpUrl = process.env.NEXT_PUBLIC_MAILCHIMP_URL;



const Footer = () => {
  return (
    <FooterWrapper>
      <section className="footer-mobile">
        <img src="/footerLogo.png" alt="Revived Foods Logo" className="footer-logo" />
        <h5>JOIN OUR MAILING LIST FOR NEWS AND DISCOUNTS</h5>
        <div className="subscribe">
          <MailchimpSubscribe
            url={mailchimpUrl}
          />
        </div>
        <SocialIcons />
        {footerNav.map((item, index) => (
          <div className="foot-nav" key={index}>
            <h3>{item.name}</h3>
            <img src="/footer-arrow.svg" alt="arrow" />
          </div>
        ))}
        <img src="/canadaFlag.png" alt="canada flag" className="canada-flag" />
        <div className="credits">
          <p>© REVIVE ORGANICS INC. 2020</p>
        </div>
      </section>

      <section className="footer-desktop">
        <div className="links">

          {footerNav.map((title, index) => (
            <div className="foot-nav" key={index}>
              <h3>{title.name}</h3>
              {title.list.map((item, i) => (
                <Link key={i} href="">
                  <h4>{item}</h4>
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div className="outer-links">
          <img src="/footerLogo.png" alt="Revived Foods Logo" className="footer-logo" />
          <h5>JOIN OUR MAILING LIST FOR NEWS AND DISCOUNTS</h5>
          <div className="subscribe">
            <MailchimpSubscribe
              url={mailchimpUrl}
            />
          </div>
          <SocialIcons />
          <div className="region">
            <p>Your country/region:</p>
            <img src="/canadaFlag.png" alt="canada flag" className="canada-flag-desktop" />
          </div>
        </div>
        <div className="credits">
          <p>© REVIVE ORGANICS INC. 2020</p>
        </div>
      </section>
    </FooterWrapper>
  )
}

export default Footer
