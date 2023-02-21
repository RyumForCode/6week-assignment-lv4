import styled from "styled-components";
import AddPosts from "./AddPosts";
import PostsBox from "./PostsBox";

const ListPosts = () => {
    return (
        <StListPostsContainer>
            <PostsBox />
            <PostsBox />
            <PostsBox />
            <PostsBox />
            <AddPosts />
        </StListPostsContainer>
    );
};

export default ListPosts;

const StListPostsContainer = styled.div`
    display : flex;
    align-items: flex-start;
    height : 100%;
    padding : 1.5rem;
    overflow : scroll;
    flex-wrap : wrap;
    gap : 32px 2.5%;
    z-index : 1;
`