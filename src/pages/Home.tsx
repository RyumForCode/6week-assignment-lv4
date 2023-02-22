import styled from "styled-components";
import ListPosts from "../components/ListPosts";
import Footer from "../components/ui/Footer";
import Header from "../components/ui/Header";

const Home = () => {
  return (
    <StWrapper>
      <Header/>
      <ListPosts />
      <Footer/>
    </StWrapper>
  )
};

export default Home;

const StWrapper = styled.div`
  display : flex;
  width : 100%;
  height : 100vh;
  margin : auto;
  flex-direction : column;
  justify-content : space-between;
  z-index : 2;
`