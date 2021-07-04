import Header from "./Header"
import Footer from "./Footer"
import styled from "@emotion/styled";

const LayoutWrapper = styled.div`
  h2, h3 {
    font-family: Oswald;
  }
  h2 {
    font-size: clamp(1.2rem, -0.875rem + 5.333vw, 2rem);
  }
  h3 {
    font-size: clamp(1rem, -0.875rem + 5.333vw, 1.7rem);
    text-transform: uppercase;
    font-weight: 800;
  }
  h4 {
    text-transform: uppercase;
    font-size: clamp(.8rem, -0.875rem + 5.333vw, 1.6rem);
  }
  h4, p {
    font-family: Roboto;
  }
  p {
    font-size: clamp(.7rem, -0.875rem + 5.333vw, 1rem);
    
  }
  
  main {
    overflow-x: hidden;
  }
`;
const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Header />
      {children}
      <Footer />
    </LayoutWrapper>
  )
};

export default Layout;