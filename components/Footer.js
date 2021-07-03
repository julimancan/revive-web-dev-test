import styled from "@emotion/styled";
import SocialIcons from "./SocialIcons";


const FooterWrapper = styled.footer``;

const footerNavArr = ["quicklnks", "our company", "support"];

const Footer = () => {
  return (
    <FooterWrapper>
      <img src="/footerLogo.png" alt="Revived Foods Logo" />
      <h5>JOIN OUR MAILING LIST FOR NEWS AND DISCOUNTS</h5>
      <input type="text" />
      <SocialIcons />
      {footerNavArr.map((item, index) => (
        <div className="foot-nav" key={index}>
          <h3>{item}</h3>
        </div>
      ))}
      <img src="/canadaFlag.png" alt="canada flag"/>
      <div class="credits">
        <p>© REVIVE ORGANICS INC. 2020</p>
      </div>
    </FooterWrapper>
  )
}

export default Footer
