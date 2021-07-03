import styled from "@emotion/styled";
import Link from "next/link";


const icons = [
  {
    name: "email",
    img: "/socialIcons/email.png",
    link: "wholesale@revivesuperfoods.com"
  },
  {
    name: "facebook",
    img: "/socialIcons/face.png",
    link: "https://www.facebook.com"
  },
  {
    name: "instagram",
    img: "/socialIcons/insta.png",
    link: "https://www.instagram.com"
  },
  {
    name: "twitter",
    img: "/socialIcons/twitter.png",
    link: "https://www.twitter.com"
  },
];

const SocialIconsWrapper = styled.div``


const SocialIcons = () => {
  return (
    <SocialIconsWrapper>
      {icons.map((icon, index) => (
        <Link href={icon.link} key={index}>
          <img src={icon.img} alt={icon.name}/>
        </Link>
      ))}
    </SocialIconsWrapper>
      )
};

      export default SocialIcons;