import styled from "@emotion/styled";
import Link from "next/link";
import { socialIcons } from "./content";



const SocialIconsWrapper = styled.div`
  width: 100%;
  color: black;
  display: flex;
  margin: .5rem 0 1rem;
  img {
    height: 1rem;
    width: 1rem;
    color: black;
    margin-right: .5rem;
  }
  .instagram {
    background: black;

  }
`


const SocialIcons = () => {
  return (
    <SocialIconsWrapper>
      {socialIcons.map((icon, index) => (
        <Link href={icon.link} key={index}>
          <img src={icon.img} alt={icon.name} className={icon.name}/>
        </Link>
      ))}
    </SocialIconsWrapper>
      )
};

      export default SocialIcons;