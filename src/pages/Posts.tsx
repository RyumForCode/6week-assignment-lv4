import styled from "styled-components";
import PostsDetail from "../components/PostsDetail";
import Footer from "../components/ui/Footer";
import Header from "../components/ui/Header";

const Posts = () => {
  return (
    <StWrapper>
      <Header/>
      <PostsDetail/>
      <Footer/>
    </StWrapper>
  )
};

export default Posts;

const StWrapper = styled.div`
  display : flex;
  width : 100%;
  height : 100vh;
  margin : auto;
  flex-direction : column;
  justify-content : space-between;
  z-index : 2;
`