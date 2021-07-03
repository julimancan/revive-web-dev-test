import styled from '@emotion/styled'
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head'
import Link from 'next/link';

const HeaderWrapper = styled.section`
  display: flex;
  justify-content: ${({ currentPage }) => currentPage === "/checkout" ? "center" : "space-between"};
  align-items: center;
  padding: 0 2rem;
  .logo {
    height: 42px;
    width: 88px;
    margin: 1rem 0;
    align-self: center;
  }
  @media(min-width: 600px) {
    justify-content: center;
  }
`;

const BurgerMenu = styled.nav`
  position: relative;
  width: 22px;
  height: 1.56px;
  background: black;
  display: ${({ currentPage }) => currentPage === "/checkout" ? "none" : "block"};
  &:after, &:before {
    content: "";
    width: 22px;
    height: 1.56px;
    background: black;
    position: absolute;
    top: -4px;
  }
  &:before {
    top: 4px;
  }
  @media(min-width: 600px) {
    display: none;
  }
`;
const ProfileIcon = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid black;
  position: relative;
  overflow: hidden;
  display: ${({ currentPage }) => currentPage === "/checkout" ? "none" : "block"};
  &:after, &:before {
    content: "";
    border-radius: 50%;
    border: 2px solid black;
    position: absolute;
    width: 3px;
    height: 3px;
    left: 50%;
    transform: translateX(-50%);
  }
  &:before {
    bottom: 50%;
  }
  &:after {
    width: 12.38px;
    height: 12.38px;
    top: 43%;
  }
  @media(min-width: 600px) {
    display: none;
  }
`;
const Header = () => {
  const route = useRouter();
  const currentPage = route.pathname;
  return (
    <HeaderWrapper>
      <Head>
        <title>Revive Foods</title>
        <meta name="description" content="Revive Foods Wholesale Landing Page" />
        <link rel="icon" href="/rslogo.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Oswald&family=Roboto&display=swap" rel="stylesheet"/>
      </Head>
      <BurgerMenu currentPage={currentPage} />
      <Link href="/"><img className="logo" src="/rslogo.webp" alt="Revive SuperFoods" /></Link>
      <ProfileIcon currentPage={currentPage}>

      </ProfileIcon>
    </HeaderWrapper>
  )
}

export default Header
