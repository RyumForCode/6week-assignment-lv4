import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const word = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat enim vitae odio ullamcorper auctor. Donec a leo nec orci cursus tristique. Quisque vel dapibus est. Nulla porttitor, turpis in condimentum tempus, mi felis lacinia tellus, non fermentum turpis orci quis sem. In at laoreet arcu. Pellentesque vel ornare tellus. Pellentesque vel varius nulla, vitae feugiat leo. Donec sit amet lorem quis massa maximus elementum. Pellentesque aliquet massa quis dolor congue vehicula.';

const PostsBox = () => {

    const navigate = useNavigate();

    return (
        <StPostsContainer onClick={() => {navigate(`/posts/1`)}}>
            <StMarginDiv>
                <StTitle>This is Title</StTitle>
                <StAuthor>David</StAuthor>
                <StDesc>{word.slice(0, 265) + '...'}</StDesc>
            </StMarginDiv>
        </StPostsContainer>
    );
};

export default PostsBox;

const StPostsContainer = styled.div`
    width : 18%;
    height : 340px;
    background-color : white;
    border-radius : 0.25rem;
    box-shadow : 0px 0px 1rem rgba(0, 0, 0, .15);
    overflow : hidden;
`

const StMarginDiv = styled.div`
    margin : 1.5rem;
`

const StTitle = styled.div`
    font-family : 'inter';
    font-size : 2rem;
    font-weight : 900;
    color : #0075C4;
`

const StAuthor = styled.div`
    margin-top : 0.5rem;
    font-family : 'inter';
    font-size : 1rem;
    font-weight : 700;
    color : rgb(128, 128, 128);
`
const StDesc = styled.p`
    width : 100%;
    margin-top : 1rem;
    word-break : break-word;
`