import styled from "@emotion/styled";
import SocialIcons from "./SocialIcons";
import MailchimpSubscribe from "react-mailchimp-subscribe";


const FooterWrapper = styled.footer`
  * {
    /* border: 1px solid; */
    /* margin: 0; */
  }
  .footer {
    padding: 0 .5rem;
    display: flex;
    flex-direction: column;
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
    .foot-nav {
      display: flex;
      justify-content: space-between;
      padding: 0 .5rem 0 0 ;
    }
    .canada-flag {
      margin: .5rem auto 1rem;
    }
    .credits {
      background: #F1F0F0;
      display: flex;
      justify-content: center;
      color: #A9A9A9;
    }
  }
`;

const footerNavArr = ["quicklnks", "our company", "support"];

const mailchimpUrl = process.env.NEXT_PUBLIC_MAILCHIMP_URL;



const Footer = () => {
  return (
    <FooterWrapper>
      <img src="/footerLogo.png" alt="Revived Foods Logo" />
      <section className="footer">
        <h5>JOIN OUR MAILING LIST FOR NEWS AND DISCOUNTS</h5>
        {/* <input type="text" placeholder="Email Address" /> */}
        <div className="subscribe">
          <MailchimpSubscribe
            url={mailchimpUrl}
          // render={({ subscribe, status, message }) => (
          //   <MailchimpForm
          //     status={status}
          //     message={message}
          //     onValidated={formData => subscribe(formData)}
          //   />
          // )}
          />
        </div>
        <SocialIcons />
        {footerNavArr.map((item, index) => (
          <div className="foot-nav" key={index}>
            <h3>{item}</h3>
            <img src="/footer-arrow.svg" alt="arrow"/>
          </div>
        ))}
        <img src="/canadaFlag.png" alt="canada flag" className="canada-flag" />
        <div className="credits">
          <p>© REVIVE ORGANICS INC. 2020</p>
        </div>
      </section>
    </FooterWrapper>
  )
}

export default Footer
