import styled from "@emotion/styled";
import Link from "next/link";


const icons = [
  {
    name: "instagram",
    img: "/socialIcons/instagram.svg",
    link: "https://www.instagram.com"
  },
  {
    name: "facebook",
    img: "/socialIcons/facebook.svg",
    link: "https://www.facebook.com"
  },
  {
    name: "twitter",
    img: "/socialIcons/twitter.svg",
    link: "https://www.twitter.com"
  },
  {
    name: "email",
    img: "/socialIcons/email.svg",
    link: "wholesale@revivesuperfoods.com"
  },
];

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
      {icons.map((icon, index) => (
        <Link href={icon.link} key={index}>
          <img src={icon.img} alt={icon.name} className={icon.name}/>
        </Link>
      ))}
    </SocialIconsWrapper>
      )
};

      export default SocialIcons;