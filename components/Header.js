import styled from '@emotion/styled'
import Head from 'next/head'

const HeaderWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  .logo {
    height: 42px;
    width: 88px;
    margin: 1rem 0;
  }
`;

const BurgerMenu = styled.nav`
  position: relative;
  width: 22px;
  height: 1.56px;
  background: black;
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
`;
const ProfileIcon = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid black;
  position: relative;
  overflow: hidden;
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
`;
const Header = () => {
  return (
    <HeaderWrapper>
      <Head>
        <title>Revive Foods</title>
        <meta name="description" content="Revive Foods Wholesale Landing Page" />
        <link rel="icon" href="/rslogo.ico" />
      </Head>
      <BurgerMenu />
      <img className="logo" src="/rslogo.webp" alt="Revive SuperFoods"/>
      <ProfileIcon>

      </ProfileIcon>
    </HeaderWrapper>
  )
}

export default Header
